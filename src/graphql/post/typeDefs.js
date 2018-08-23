// @flow

export const types = `
  string PostID

  type Post {
    id: PostID
  }
`;

export const query = `
  getPost: Post
`;

export const mutation = `
  setPost: PostID
`;
