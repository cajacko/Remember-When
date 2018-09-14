// @flow

export type ReactRouter = {
  location: {
    pathname: string,
  },
  history: {
    push: string => void,
  },
};
