// @flow

const posts = {};

for (let i = 0; i < 50; i += 1) {
  const id = `${i}`;

  const date = new Date(2018, 6, 1);
  date.setDate(date.getDate() + i);

  posts[id] = {
    id,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....',
    date,
    dateCreated: date,
    dateLastModified: date,
  };
}

export default posts;
