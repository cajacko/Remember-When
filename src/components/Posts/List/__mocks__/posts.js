// @flow

const posts = [];

for (let i = 0; i < 50; i += 1) {
  posts.push({
    id: `${i}`,
    key: `${i}`,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....',
    date: new Date(2018, 6, i),
  });
}

export default posts;
