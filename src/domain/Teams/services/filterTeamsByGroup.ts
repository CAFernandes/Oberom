import { SoccerPlayers } from '@base/SoccerPlayers';
import { RootObject } from '@base/teams';
import { logger } from '@utils/logger';
type GroupInfos = {
  ClubName: string;
  Abbreviation: string;
  PictureUrl: string;
  GamesDates: string[];
  Team: {
    Goalkeepers: string[];
    Defenders: string[];
    Midfielders: string[];
    Forwards: string[];
  }
}
type TeamsByGroup = {
  [key: string]: GroupInfos[]
}

const FORMAT = 'SQ';
const SIZE = '4';

/**
 * It takes an array of teams and returns an object with the teams grouped by group
 * @param {RootObject[]} teams - RootObject[]
 * @returns An object with the teams grouped by group.
 */
export const filterTeamsByGroup = (teams: RootObject[]) => {
  let teamsByGroup: TeamsByGroup = {}
  teams.map(({ Group, Team }) => {
    const { Description } = Group[0]
    if (!Description || typeof Description != 'string') {
      /* It's a constant that is used to replace the {size} placeholder in the PictureUrl. */
      logger.error(Group, Team.ShortClubName)
      return;
    }
    const { Name, Abbreviation, PictureUrl } = Team
    const ClubName = Name[0].Description
    const Soccer = SoccerPlayers[ClubName] || { Fixtures: [], Goalkeepers: [], Midfielders: [], Forwards: [] }
    if (!teamsByGroup[Description]) {
      teamsByGroup[Description] = [{
        ClubName,
        Abbreviation,
        PictureUrl: PictureUrl.replace('{format}', FORMAT).replace('{size}', SIZE),
        GamesDates: Soccer.Fixtures,
        Team: {
          Goalkeepers: Soccer.Goalkeepers,
          Defenders: Soccer.Defenders,
          Midfielders: Soccer.Midfielders,
          Forwards: Soccer.Forwards
        }
      }]
      return;
    }
    teamsByGroup[Description].push({
      ClubName,
      Abbreviation,
      PictureUrl: PictureUrl.replace('{format}', FORMAT).replace('{size}', SIZE),
      GamesDates: Soccer.Fixtures,
      Team: {
        Goalkeepers: Soccer.Goalkeepers,
        Defenders: Soccer.Defenders,
        Midfielders: Soccer.Midfielders,
        Forwards: Soccer.Forwards
      }
    })
  })

  return Object.keys(teamsByGroup).sort().reduce(
    (obj: TeamsByGroup, key: string) => {
      obj[key] = teamsByGroup[key]
      return obj;
    },
    {}
  )
}
