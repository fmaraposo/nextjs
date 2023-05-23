import styles from "./Posts.module.css";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    next: {
      revalidate: 60
    }
  }).then((response) => response.json());
};

export default async function PostsPage() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id} className={styles.section}>
      <h2 style={{ color: "#09f" }}>{post.title}</h2>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ));
}
