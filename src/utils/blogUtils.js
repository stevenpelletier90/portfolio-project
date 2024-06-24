import matter from 'gray-matter';

const blogPostsContext = require.context('../posts', true, /\.md$/);

export function getAllPosts() {
  return blogPostsContext
    .keys()
    .map((fileName) => {
      const id = fileName.replace(/^\.\//, '').replace(/\.md$/, '');
      const fileContent = blogPostsContext(fileName);
      const { data, content } = matter(fileContent.default);
      return {
        id,
        ...data,
        content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostById(id) {
  const posts = getAllPosts();
  return posts.find((post) => post.id === id);
}
