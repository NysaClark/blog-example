import Link from 'next/link';

export default async function PostsPage() {
    console.log(process.env.VERCEL_URL)
    const res = await fetch(`https://${NEXT_PUBLIC_VERCEL_URL}/api/posts`);
    const { posts } = await res.json();

    return (
        <div>
            <h1>All Blog Posts</h1>
            <hr style={{ width: '220px' }} />
            <div style={{ paddingTop: '40px' }}>
                {posts.map(post => (
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