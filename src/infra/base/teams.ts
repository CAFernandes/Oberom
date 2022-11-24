
type Group = {
  Locale: string;
  Description: string;
}
type Name = {
  Locale: string;
  Description: string;
}
type DisplayName = {
  Locale: string;
  Description: string;
}
type Properties = {
  IdIFES: string;
  StatsPerformIfesId: string;
  IdStatsPerform: string;
  IdInfostrada?: string;
}
type Team = {
  IdTeam: string;
  IdConfederation: string;
  Type: number;
  AgeType: number;
  FootballType: number;
  Gender: number;
  Name: Name[];
  IdAssociation: string;
  IdCity?: any;
  Headquarters?: any;
  TrainingCentre?: any;
  OfficialSite?: any;
  City: string;
  IdCountry: string;
  PostalCode: string;
  RegionName?: any;
  ShortClubName: string;
  Abbreviation: string;
  Street: string;
  FoundationYear?: any;
  Stadium?: any;
  PictureUrl: string;
  ThumbnailUrl?: any;
  DisplayName: DisplayName[];
  Content: any[];
  Properties: Properties;
  IsUpdateable?: any;
}
type Properties2 = {
}
type RootObject = {
  MatchDay: number;
  IdCompetition: string;
  IdSeason: string;
  IdStage: string;
  IdGroup: string;
  IdTeam: string;
  Date: Date;
  Group: Group[];
  Won: number;
  Lost: number;
  Drawn: number;
  Played: number;
  HomeWon: number;
  HomeLost: number;
  HomeDrawn: number;
  HomePlayed: number;
  AwayWon: number;
  AwayLost: number;
  AwayDrawn: number;
  AwayPlayed: number;
  Against: number;
  For: number;
  HomeAgainst: number;
  HomeFor: number;
  AwayAgainst: number;
  AwayFor: number;
  Position: number;
  HomePosition: number;
  AwayPosition: number;
  Points: number;
  HomePoints: number;
  AwayPoints: number;
  PreviousPosition?: any;
  GoalsDiference: number;
  Team: Team;
  StartDate: Date;
  EndDate: Date;
  FairPlayCoefficient: number;
  WinByExtraTime: number;
  WinByPenalty: number;
  MatchResults: any[];
  Properties: Properties2;
  IsUpdateable?: any;
}

export const teams: RootObject[] = [
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285068",
    "IdTeam": "43976",
    "Date": new Date("2022-11-22T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group D"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 1,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 1,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43976",
      "IdConfederation": "AFC",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Australia"
        }
      ],
      "IdAssociation": "AUS",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "SYDNEY",
      "IdCountry": "AUS",
      "PostalCode": "1235",
      "RegionName": null,
      "ShortClubName": "Australia",
      "Abbreviation": "AUS",
      "Street": "Football Federation Australia Limited, Level 7, 26 College Street",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/AUS",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "AUS"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43976",
        "StatsPerformIfesId": "43976",
        "IdStatsPerform": "bl4fd8cxe6kjvjx8br82gkhnq"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-22T00:00:00Z"),
    "EndDate": new Date("2022-11-30T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285070",
    "IdTeam": "43935",
    "Date": new Date("2022-11-23T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group F"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43935",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Belgium"
        }
      ],
      "IdAssociation": "BEL",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "BEL",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Belgium",
      "Abbreviation": "BEL",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/BEL",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "BEL"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43935",
        "StatsPerformIfesId": "43935",
        "IdStatsPerform": "pfvmhackqyhhk02majd2tb8l"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-23T00:00:00Z"),
    "EndDate": new Date("2022-12-01T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285071",
    "IdTeam": "43924",
    "Date": new Date("2022-11-24T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group G"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43924",
      "IdConfederation": "CONMEBOL",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Brazil"
        }
      ],
      "IdAssociation": "BRA",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "RIO DE JANEIRO",
      "IdCountry": "BRA",
      "PostalCode": "22775-040",
      "RegionName": null,
      "ShortClubName": "Brazil",
      "Abbreviation": "BRA",
      "Street": "Confederaçao Brasileira de Futebol, Rua Victor Civita 66, Bloco 1 - Edifício 5",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/BRA",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "BRA"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43924",
        "StatsPerformIfesId": "43924",
        "IdStatsPerform": "ajab3nmpoltsoeqcuoyi4pwzx"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-24T00:00:00Z"),
    "EndDate": new Date("2022-12-02T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285071",
    "IdTeam": "43849",
    "Date": new Date("2022-11-24T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group G"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43849",
      "IdConfederation": "CAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Cameroon"
        }
      ],
      "IdAssociation": "CMR",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "CMR",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Cameroon",
      "Abbreviation": "CMR",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/CMR",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "CMR"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43849",
        "StatsPerformIfesId": "43849",
        "IdStatsPerform": "b6ojzaz5yyr6dkrj284hrhhs1"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-24T00:00:00Z"),
    "EndDate": new Date("2022-12-02T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285070",
    "IdTeam": "43899",
    "Date": new Date("2022-11-23T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group F"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43899",
      "IdConfederation": "CONCACAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Canada"
        }
      ],
      "IdAssociation": "CAN",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "UNKNOWN",
      "IdCountry": "CAN",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Canada",
      "Abbreviation": "CAN",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/CAN",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "CAN"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43899",
        "StatsPerformIfesId": "43899",
        "IdStatsPerform": "eg7vduna0h3vis1wd47s41za7"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-23T00:00:00Z"),
    "EndDate": new Date("2022-12-01T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285069",
    "IdTeam": "43901",
    "Date": new Date("2022-11-23T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group E"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43901",
      "IdConfederation": "CONCACAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Costa Rica"
        }
      ],
      "IdAssociation": "CRC",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "SAN JOSE ",
      "IdCountry": "CRC",
      "PostalCode": "670-1000",
      "RegionName": null,
      "ShortClubName": "Costa Rica",
      "Abbreviation": "CRC",
      "Street": "Federación Costarricense de Fútbol, Costado Norte Estatua León Cortés",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/CRC",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "CRC"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43901",
        "StatsPerformIfesId": "43901",
        "IdStatsPerform": "bfgqfm4qa3mal7fll74wd04mu"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-23T00:00:00Z"),
    "EndDate": new Date("2022-12-01T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285070",
    "IdTeam": "43938",
    "Date": new Date("2022-11-23T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group F"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43938",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Croatia"
        }
      ],
      "IdAssociation": "CRO",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "ZAGREB",
      "IdCountry": "CRO",
      "PostalCode": "10 000",
      "RegionName": null,
      "ShortClubName": "Croatia",
      "Abbreviation": "CRO",
      "Street": "Rusanova 13",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/CRO",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "CRO"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43938",
        "StatsPerformIfesId": "43938",
        "IdStatsPerform": "4njsfszcgd9m765d6suktsz2a"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-23T00:00:00Z"),
    "EndDate": new Date("2022-12-01T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285066",
    "IdTeam": "43942",
    "Date": new Date("2022-11-21T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group B"
      }
    ],
    "Won": 1,
    "Lost": 0,
    "Drawn": 0,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 2,
    "For": 6,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 3,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 4,
    "Team": {
      "IdTeam": "43942",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "England"
        }
      ],
      "IdAssociation": "ENG",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "LONDON",
      "IdCountry": "ENG",
      "PostalCode": "W1D 4FA",
      "RegionName": null,
      "ShortClubName": "England",
      "Abbreviation": "ENG",
      "Street": "The Football Association, 25 Soho Square",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ENG",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "ENG"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43942",
        "StatsPerformIfesId": "43942",
        "IdStatsPerform": "ck8m1cn23sukwsurgx5qakttk"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-21T00:00:00Z"),
    "EndDate": new Date("2022-11-29T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285068",
    "IdTeam": "43946",
    "Date": new Date("2022-11-22T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group D"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 1,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 1,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43946",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "France"
        }
      ],
      "IdAssociation": "FRA",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "PARIS",
      "IdCountry": "FRA",
      "PostalCode": "F - 75783",
      "RegionName": null,
      "ShortClubName": "France",
      "Abbreviation": "FRA",
      "Street": "FFF, 60bis, Avenue d'Iéna",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/FRA",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "FRA"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43946",
        "StatsPerformIfesId": "43946",
        "IdStatsPerform": "4pz87gsel7183b7kcadw1dwzv"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-22T00:00:00Z"),
    "EndDate": new Date("2022-11-30T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285069",
    "IdTeam": "43948",
    "Date": new Date("2022-11-23T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group E"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43948",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Germany"
        }
      ],
      "IdAssociation": "GER",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "FRANKFURT AM MAIN",
      "IdCountry": "GER",
      "PostalCode": "60492",
      "RegionName": null,
      "ShortClubName": "Germany",
      "Abbreviation": "GER",
      "Street": "Deutscher Fussball-Bund, Otto-Fleck-Schneise 6",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/GER",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "GER"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43948",
        "StatsPerformIfesId": "43948",
        "IdStatsPerform": "3l2t2db0c5ow2f7s7bhr6mij4"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-23T00:00:00Z"),
    "EndDate": new Date("2022-12-01T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285072",
    "IdTeam": "43860",
    "Date": new Date("2022-11-24T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group H"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43860",
      "IdConfederation": "CAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Ghana"
        }
      ],
      "IdAssociation": "GHA",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "ACCRA",
      "IdCountry": "GHA",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Ghana",
      "Abbreviation": "GHA",
      "Street": "Ghana Football Association, National Sports Council",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/GHA",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "GHA"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43860",
        "StatsPerformIfesId": "43860",
        "IdStatsPerform": "9bix8nlt6cgbson25qntg2zzh"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-24T00:00:00Z"),
    "EndDate": new Date("2022-12-02T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285069",
    "IdTeam": "43819",
    "Date": new Date("2022-11-23T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group E"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43819",
      "IdConfederation": "AFC",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Japan"
        }
      ],
      "IdAssociation": "JPN",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "TOKYO",
      "IdCountry": "JPN",
      "PostalCode": "113-8311",
      "RegionName": null,
      "ShortClubName": "Japan",
      "Abbreviation": "JPN",
      "Street": "Japan Football Association, JFA House, Football Ave., Bunkyo-ku",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/JPN",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "JPN"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43819",
        "StatsPerformIfesId": "43819",
        "IdStatsPerform": "6duaxcbrofil112qfq4v895go"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-23T00:00:00Z"),
    "EndDate": new Date("2022-12-01T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285072",
    "IdTeam": "43822",
    "Date": new Date("2022-11-24T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group H"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43822",
      "IdConfederation": "AFC",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Korea Republic"
        }
      ],
      "IdAssociation": "KOR",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "SEOUL",
      "IdCountry": "KOR",
      "PostalCode": "110-062",
      "RegionName": null,
      "ShortClubName": "Korea Republic",
      "Abbreviation": "KOR",
      "Street": "Korea Football Association, 1-131 Sinmunno, 2-ga, Jongno-Gu",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/KOR",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "KOR"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43822",
        "StatsPerformIfesId": "43822",
        "IdStatsPerform": "1yghbv1c71b37eenutbwnvvq"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-24T00:00:00Z"),
    "EndDate": new Date("2022-12-02T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285070",
    "IdTeam": "43872",
    "Date": new Date("2022-11-23T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group F"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43872",
      "IdConfederation": "CAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Morocco"
        }
      ],
      "IdAssociation": "MAR",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "MAR",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Morocco",
      "Abbreviation": "MAR",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/MAR",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "MAR"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43872",
        "StatsPerformIfesId": "43872",
        "IdStatsPerform": "avggs3u2b5cu8i1dnzknhth52"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-23T00:00:00Z"),
    "EndDate": new Date("2022-12-01T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285065",
    "IdTeam": "43960",
    "Date": new Date("2022-11-20T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group A"
      }
    ],
    "Won": 1,
    "Lost": 0,
    "Drawn": 0,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 2,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 3,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 2,
    "Team": {
      "IdTeam": "43960",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Netherlands"
        }
      ],
      "IdAssociation": "NED",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "AM ZEIST",
      "IdCountry": "NED",
      "PostalCode": "3700",
      "RegionName": null,
      "ShortClubName": "Netherlands",
      "Abbreviation": "NED",
      "Street": "Koninklijke Nederlandse Voetbalbond, Woudenbergseweg 56-58",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/NED",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "NED"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43960",
        "StatsPerformIfesId": "43960",
        "IdStatsPerform": "657oha8nkne1ybba2bouzkbo7"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-20T00:00:00Z"),
    "EndDate": new Date("2022-11-29T00:00:00Z"),
    "FairPlayCoefficient": 1.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285072",
    "IdTeam": "43963",
    "Date": new Date("2022-11-24T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group H"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43963",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Portugal"
        }
      ],
      "IdAssociation": "POR",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "LISBON",
      "IdCountry": "POR",
      "PostalCode": "1250-012",
      "RegionName": null,
      "ShortClubName": "Portugal",
      "Abbreviation": "POR",
      "Street": "Federaçao Portuguesa de Futebol, Rua Alexandre Herculano, no.58",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/POR",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "POR"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43963",
        "StatsPerformIfesId": "43963",
        "IdStatsPerform": "8gxg8f7p9299jbrz30u8bsc7g"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-24T00:00:00Z"),
    "EndDate": new Date("2022-12-02T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285067",
    "IdTeam": "43835",
    "Date": new Date("2022-11-22T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group C"
      }
    ],
    "Won": 1,
    "Lost": 0,
    "Drawn": 0,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 1,
    "For": 2,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 3,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 1,
    "Team": {
      "IdTeam": "43835",
      "IdConfederation": "AFC",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Saudi Arabia"
        }
      ],
      "IdAssociation": "KSA",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "RIYADH",
      "IdCountry": "KSA",
      "PostalCode": "11432",
      "RegionName": null,
      "ShortClubName": "Saudi Arabia",
      "Abbreviation": "KSA",
      "Street": "Saudi Arabian Football Federation, Al Mather Quarter, Prince Faisal Bin Fahad Street",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/KSA",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "KSA"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43835",
        "StatsPerformIfesId": "43835",
        "IdStatsPerform": "9l4imoomrnyceg5u3kdxf5l5r"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-22T00:00:00Z"),
    "EndDate": new Date("2022-11-30T00:00:00Z"),
    "FairPlayCoefficient": 6.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285071",
    "IdTeam": "1902465",
    "Date": new Date("2022-11-24T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group G"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "1902465",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Serbia"
        }
      ],
      "IdAssociation": "SRB",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "SRB",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Serbia",
      "Abbreviation": "SRB",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/SRB",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "SRB"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "1902465",
        "StatsPerformIfesId": "1902465",
        "IdStatsPerform": "2ome9qbio8c3r9lmhx2hg6kif"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-24T00:00:00Z"),
    "EndDate": new Date("2022-12-02T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285069",
    "IdTeam": "43969",
    "Date": new Date("2022-11-23T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group E"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43969",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Spain"
        }
      ],
      "IdAssociation": "ESP",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "LAS ROZAS (MADRID)",
      "IdCountry": "ESP",
      "PostalCode": "28230",
      "RegionName": null,
      "ShortClubName": "Spain",
      "Abbreviation": "ESP",
      "Street": "Real Federación Española de Fútbol, Ramon y Cajal, s/n",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ESP",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "ESP"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43969",
        "StatsPerformIfesId": "43969",
        "IdStatsPerform": "eh7yt2x2wck51oixw8012ux5j"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-23T00:00:00Z"),
    "EndDate": new Date("2022-12-01T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285071",
    "IdTeam": "43971",
    "Date": new Date("2022-11-24T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group G"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43971",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Switzerland"
        }
      ],
      "IdAssociation": "SUI",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "BERN",
      "IdCountry": "SUI",
      "PostalCode": "3000",
      "RegionName": null,
      "ShortClubName": "Switzerland",
      "Abbreviation": "SUI",
      "Street": "Schweizerischer Fussballverband, Worbstrasse 48",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/SUI",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "SUI"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43971",
        "StatsPerformIfesId": "43971",
        "IdStatsPerform": "339wxbt07ltnva7hop6m5o477"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-24T00:00:00Z"),
    "EndDate": new Date("2022-12-02T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285072",
    "IdTeam": "43930",
    "Date": new Date("2022-11-24T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group H"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 0,
    "Played": 0,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 1,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43930",
      "IdConfederation": "CONMEBOL",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Uruguay"
        }
      ],
      "IdAssociation": "URU",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "URU",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Uruguay",
      "Abbreviation": "URU",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/URU",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "URU"
        }
      ],
      "Content": [],
      "Properties": {
        "IdInfostrada": "3024",
        "IdIFES": "43930",
        "StatsPerformIfesId": "43930",
        "IdStatsPerform": "9l06impjllgop0gte8fldb4zo"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-24T00:00:00Z"),
    "EndDate": new Date("2022-12-02T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285065",
    "IdTeam": "43927",
    "Date": new Date("2022-11-20T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group A"
      }
    ],
    "Won": 1,
    "Lost": 0,
    "Drawn": 0,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 2,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 2,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 3,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 2,
    "Team": {
      "IdTeam": "43927",
      "IdConfederation": "CONMEBOL",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Ecuador"
        }
      ],
      "IdAssociation": "ECU",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "ECU",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Ecuador",
      "Abbreviation": "ECU",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ECU",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "ECU"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43927",
        "StatsPerformIfesId": "43927",
        "IdStatsPerform": "2j2402oabiovxw24cnjk9m369"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-20T00:00:00Z"),
    "EndDate": new Date("2022-11-29T00:00:00Z"),
    "FairPlayCoefficient": 2.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285067",
    "IdTeam": "43962",
    "Date": new Date("2022-11-22T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group C"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 1,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 2,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 1,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43962",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Poland"
        }
      ],
      "IdAssociation": "POL",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "WARSAW",
      "IdCountry": "POL",
      "PostalCode": "00-080",
      "RegionName": null,
      "ShortClubName": "Poland",
      "Abbreviation": "POL",
      "Street": "Polish Football Association, Miodowa 1",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/POL",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "POL"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43962",
        "StatsPerformIfesId": "43962",
        "IdStatsPerform": "ba25ib8pofxr85hkbs8lt7kw7"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-22T00:00:00Z"),
    "EndDate": new Date("2022-11-30T00:00:00Z"),
    "FairPlayCoefficient": 1.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285066",
    "IdTeam": "43974",
    "Date": new Date("2022-11-21T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group B"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 1,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 1,
    "For": 1,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 2,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 1,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43974",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Wales"
        }
      ],
      "IdAssociation": "WAL",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "WAL",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Wales",
      "Abbreviation": "WAL",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/WAL",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "WAL"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43974",
        "StatsPerformIfesId": "43974",
        "IdStatsPerform": "eyhp0bgsz2deg91xaw4zotn5c"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-21T00:00:00Z"),
    "EndDate": new Date("2022-11-29T00:00:00Z"),
    "FairPlayCoefficient": 2.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285067",
    "IdTeam": "43911",
    "Date": new Date("2022-11-22T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group C"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 1,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 3,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 1,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43911",
      "IdConfederation": "CONCACAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Mexico"
        }
      ],
      "IdAssociation": "MEX",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "DISTRITO FEDERAL",
      "IdCountry": "MEX",
      "PostalCode": "06700",
      "RegionName": null,
      "ShortClubName": "Mexico",
      "Abbreviation": "MEX",
      "Street": "COLIMA 373 PISO 1, COL. ROMA",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/MEX",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "MEX"
        }
      ],
      "Content": [],
      "Properties": {
        "IdInfostrada": "3010",
        "IdIFES": "43911",
        "StatsPerformIfesId": "43911",
        "IdStatsPerform": "4vofb84dzb5fyc81n2ssws6ah"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-22T00:00:00Z"),
    "EndDate": new Date("2022-11-30T00:00:00Z"),
    "FairPlayCoefficient": 2.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285065",
    "IdTeam": "43879",
    "Date": new Date("2022-11-20T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group A"
      }
    ],
    "Won": 0,
    "Lost": 1,
    "Drawn": 0,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 2,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 3,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": -2,
    "Team": {
      "IdTeam": "43879",
      "IdConfederation": "CAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Senegal"
        }
      ],
      "IdAssociation": "SEN",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "SEN",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Senegal",
      "Abbreviation": "SEN",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/SEN",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "SEN"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43879",
        "StatsPerformIfesId": "43879",
        "IdStatsPerform": "2wk1549tkz80oet8226euj7jp"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-20T00:00:00Z"),
    "EndDate": new Date("2022-11-29T00:00:00Z"),
    "FairPlayCoefficient": 2.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285068",
    "IdTeam": "43888",
    "Date": new Date("2022-11-22T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group D"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 1,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 3,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 1,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43888",
      "IdConfederation": "CAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Tunisia"
        }
      ],
      "IdAssociation": "TUN",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "TUNIS",
      "IdCountry": "TUN",
      "PostalCode": "1003",
      "RegionName": null,
      "ShortClubName": "Tunisia",
      "Abbreviation": "TUN",
      "Street": "Fédération Tunisienne de Football, Maison des Fédérations Sportives, Cité Olympique",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/TUN",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "TUN"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43888",
        "StatsPerformIfesId": "43888",
        "IdStatsPerform": "ctp7ovvf34m7fzshua9ogbr6i"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-22T00:00:00Z"),
    "EndDate": new Date("2022-11-30T00:00:00Z"),
    "FairPlayCoefficient": 1.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285066",
    "IdTeam": "43921",
    "Date": new Date("2022-11-21T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group B"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 1,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 1,
    "For": 1,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 3,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 1,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43921",
      "IdConfederation": "CONCACAF",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "United States"
        }
      ],
      "IdAssociation": "USA",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "CHICAGO",
      "IdCountry": "USA",
      "PostalCode": "IL 60616",
      "RegionName": null,
      "ShortClubName": "USA",
      "Abbreviation": "USA",
      "Street": "US Soccer Federation, US Soccer House, 1801 S. Prairie Avenue",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/USA",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "USA"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43921",
        "StatsPerformIfesId": "43921",
        "IdStatsPerform": "9vh2u1p4ppm597tjfahst2m3n"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-21T00:00:00Z"),
    "EndDate": new Date("2022-11-29T00:00:00Z"),
    "FairPlayCoefficient": 4.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285067",
    "IdTeam": "43922",
    "Date": new Date("2022-11-22T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group C"
      }
    ],
    "Won": 0,
    "Lost": 1,
    "Drawn": 0,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 2,
    "For": 1,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 4,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": -1,
    "Team": {
      "IdTeam": "43922",
      "IdConfederation": "CONMEBOL",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Argentina"
        }
      ],
      "IdAssociation": "ARG",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "BUENOS AIRES",
      "IdCountry": "ARG",
      "PostalCode": "1053",
      "RegionName": null,
      "ShortClubName": "Argentina",
      "Abbreviation": "ARG",
      "Street": "Asociación del Fútbol Argentino, Viamonte 1366/76",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/ARG",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "ARG"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43922",
        "StatsPerformIfesId": "43922",
        "IdStatsPerform": "ak48fkypnql8y4n69cvcq5ghc"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-22T00:00:00Z"),
    "EndDate": new Date("2022-11-30T00:00:00Z"),
    "FairPlayCoefficient": 0.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285068",
    "IdTeam": "43941",
    "Date": new Date("2022-11-22T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group D"
      }
    ],
    "Won": 0,
    "Lost": 0,
    "Drawn": 1,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 0,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 4,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 1,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": 0,
    "Team": {
      "IdTeam": "43941",
      "IdConfederation": "UEFA",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Denmark"
        }
      ],
      "IdAssociation": "DEN",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "DEN",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Denmark",
      "Abbreviation": "DEN",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/DEN",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "DEN"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43941",
        "StatsPerformIfesId": "43941",
        "IdStatsPerform": "akblgvrthxxgta4ou9lnslxgb"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-22T00:00:00Z"),
    "EndDate": new Date("2022-11-30T00:00:00Z"),
    "FairPlayCoefficient": 2.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285066",
    "IdTeam": "43817",
    "Date": new Date("2022-11-21T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group B"
      }
    ],
    "Won": 0,
    "Lost": 1,
    "Drawn": 0,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 6,
    "For": 2,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 4,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": -4,
    "Team": {
      "IdTeam": "43817",
      "IdConfederation": "AFC",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Iran"
        }
      ],
      "IdAssociation": "IRN",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "TEHRAN",
      "IdCountry": "IRN",
      "PostalCode": "19958-73591",
      "RegionName": null,
      "ShortClubName": "IR Iran",
      "Abbreviation": "IRN",
      "Street": "IR Iran Football Federation, No. 2/2 Third St. Seoul Ave.",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/IRN",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "IRN"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43817",
        "StatsPerformIfesId": "43817",
        "IdStatsPerform": "cubclbw5k5gdqdau95bnav0nn"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-21T00:00:00Z"),
    "EndDate": new Date("2022-11-29T00:00:00Z"),
    "FairPlayCoefficient": 2.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  },
  {
    "MatchDay": 1,
    "IdCompetition": "17",
    "IdSeason": "255711",
    "IdStage": "285063",
    "IdGroup": "285065",
    "IdTeam": "43834",
    "Date": new Date("2022-11-20T00:00:00Z"),
    "Group": [
      {
        "Locale": "en-GB",
        "Description": "Group A"
      }
    ],
    "Won": 0,
    "Lost": 1,
    "Drawn": 0,
    "Played": 1,
    "HomeWon": 0,
    "HomeLost": 0,
    "HomeDrawn": 0,
    "HomePlayed": 0,
    "AwayWon": 0,
    "AwayLost": 0,
    "AwayDrawn": 0,
    "AwayPlayed": 0,
    "Against": 2,
    "For": 0,
    "HomeAgainst": 0,
    "HomeFor": 0,
    "AwayAgainst": 0,
    "AwayFor": 0,
    "Position": 4,
    "HomePosition": 0,
    "AwayPosition": 0,
    "Points": 0,
    "HomePoints": 0,
    "AwayPoints": 0,
    "PreviousPosition": null,
    "GoalsDiference": -2,
    "Team": {
      "IdTeam": "43834",
      "IdConfederation": "AFC",
      "Type": 1,
      "AgeType": 7,
      "FootballType": 0,
      "Gender": 1,
      "Name": [
        {
          "Locale": "en-GB",
          "Description": "Qatar"
        }
      ],
      "IdAssociation": "QAT",
      "IdCity": null,
      "Headquarters": null,
      "TrainingCentre": null,
      "OfficialSite": null,
      "City": "",
      "IdCountry": "QAT",
      "PostalCode": "",
      "RegionName": null,
      "ShortClubName": "Qatar",
      "Abbreviation": "QAT",
      "Street": "",
      "FoundationYear": null,
      "Stadium": null,
      "PictureUrl": "https://api.fifa.com/api/v3/picture/flags-{format}-{size}/QAT",
      "ThumbnailUrl": null,
      "DisplayName": [
        {
          "Locale": "en-GB",
          "Description": "QAT"
        }
      ],
      "Content": [],
      "Properties": {
        "IdIFES": "43834",
        "StatsPerformIfesId": "43834",
        "IdStatsPerform": "ea68amhsn28ijs7bzjuzeqrz6"
      },
      "IsUpdateable": null
    },
    "StartDate": new Date("2022-11-20T00:00:00Z"),
    "EndDate": new Date("2022-11-29T00:00:00Z"),
    "FairPlayCoefficient": 4.0,
    "WinByExtraTime": 0,
    "WinByPenalty": 0,
    "MatchResults": [],
    "Properties": {},
    "IsUpdateable": null
  }
]

