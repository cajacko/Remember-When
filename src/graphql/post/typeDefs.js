// @flow

export const types = `
  scalar PostID
  scalar Date

  type Post {
    id: PostID
    content: String
    date: Date
    dateCreated: Date
    dateLastModified: Date
  }
`;

export const query = `
  getPost(id: PostID): Post
  posts: [Post]
`;

export const mutation = `
  setPost(id: PostID, content: String, date: Date, dateCreated: Date, dateLastModified: Date): Post
  deletePost(id: PostID): PostID
`;
