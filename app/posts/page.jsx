import Link from 'next/link';

export default async function PostsPage() {
    const res = await fetch(`https://blog-example-gamma.vercel.app/api/posts`);
    const { posts } = await res.json();

    return (
        <div>
            <h1>All Blog Posts</h1>
            <hr style={{ width: '220px' }} />
            <div style={{ paddingTop: '40px' }}>
                {posts && posts.map(post => (
                    <article key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p style={{ paddingBottom: '30px' }}>{post.body}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}