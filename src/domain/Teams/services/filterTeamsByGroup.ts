import { RootObject } from '@base/teams';
import { logger } from '@utils/logger';

type GroupInfos = {
  ClubName: string;
	Abbreviation: string;
	PictureUrl: string;
}

type TeamsByGroup = {
  [key: string]: GroupInfos[]
}

export const filterTeamsByGroup = (teams: RootObject[]) => {
  let teamsByGroup:TeamsByGroup = {}
  teams.map(({ Group, Team }) => {
    const { Description } = Group[0]
    if (!Description || typeof Description != 'string') {
      logger.error(Group, Team.ShortClubName)
      return;
    }
    const { Name, Abbreviation, PictureUrl } = Team
    const ClubName = Name[0].Description
    if(teamsByGroup[Description]) {
      teamsByGroup[Description].push({ClubName, Abbreviation, PictureUrl: PictureUrl.replace('{format}', 'SQ').replace('{size}', '4')})
    } else {
      teamsByGroup[Description] = [{ClubName, Abbreviation, PictureUrl: PictureUrl.replace('{format}', 'SQ').replace('{size}', '4')}]
    }
  })

  return Object.keys(teamsByGroup).sort().reduce(
    (obj, key) => {
      obj[key] = teamsByGroup[key]
      return obj;
    },
    {}
  )
}
