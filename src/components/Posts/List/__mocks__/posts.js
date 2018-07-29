// @flow

const posts = [];

for (let i = 0; i < 50; i += 1) {
  posts.push({
    id: `${i}`,
    text: 'Example content of some sort that we will talk about',
    date: new Date(),
  });
}

export default posts;
