export interface ShowDetails {
  averageRuntime: number;
  dvdCountry: any; //data missing in json, so type is unclear
  ended: string;
  externals: { 
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  genres: string[];
  id: number;
  image: {
    medium: string;
    original: string;
  };
  language: string;
  name: string;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone:string;
    };
    officialSite: string;
  };
  officialSite: string;
  premiered: string;
  rating: { average: number };
  runtime: number;
  schedule: {
    time: string; 
    days: string[];
  };
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: any;
  weight: number;
  _links: {
    previousepisode: {
      href: string;
    };
    self: {
      href: string;
    };
  };
}