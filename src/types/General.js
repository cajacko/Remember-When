// @flow

export type ReactRouter = {
  location: {
    pathname: string,
  },
  history: {
    push: string => void,
    goBack: () => void,
  },
  match: {
    params: {
      [string]: string,
    },
  },
};

export type DB = {
  get: (Array<string>) => Promise<any>,
  delete: (Array<string>) => Promise<any>,
  set: (Array<string>, any) => Promise<any>,
};
