import Link from "next/link";

export default function BlogPosts({
  title,
  author,
  coverPhoto,
  datePublished,
  slug,
}) {
  return (
    <div className={styles.card}>
      <Link>
        <div className={styles.imageContainer}>
          <img src={coverPhoto.url} alt='' />
        </div>
      </Link>
    </div>
  );
}
