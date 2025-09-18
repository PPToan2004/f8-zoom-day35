import React, { useState } from "react";

import styles from './Product.module.scss';
function Products() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then(res => res.json())
            .then((posts) => {
                setPosts(posts);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    const truncate = (text, length = 100) => text.length > length ? text.substring(0, length) + "..." : text;

    return (
        <div className={styles.wrapper}>
            {loading && <h2>Loading...</h2>}
            <h1>Danh sách bài viết</h1>
            <div className={styles.grid_list}>
                {posts.map(post => (
                    <div key={post.id} className={styles.card}>
                        <h3>{post.id}. {post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h3>
                        <p>{truncate(post.body, 100)}</p>
                        <button className="btn" onClick={() => setSelectedPost(post)}>
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {
                selectedPost && (
                    <div className={styles.modal_overlay}onClick={() => setSelectedPost(null)}>
                        <div className="modal" onClick={e => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setSelectedPost(null)}>X</button>
                            <h2>{selectedPost.title.charAt(0).toUpperCase() + selectedPost.title.slice(1)}</h2>
                            <p>{selectedPost.body}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Products;