import React, { useState } from "react";

import styles from './Comments.module.scss'

function Comments() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputValueName, setInputValueName] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValueBody, setInputValueBody] = useState('');

    const handleInputName = (e) => {
        setInputValueName(e.target.value);
    }

    const handleInputEmail = (e) => {
        setInputValueEmail(e.target.value);
    }

    const handleInputBody = (e) => {
        setInputValueBody(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValueName.trim() && inputValueEmail.trim() && inputValueBody.trim()){
            setComments([{
                id: Date.now(),
                name: inputValueName,
                email: inputValueEmail,
                body: inputValueBody,
                time: new Date(),
            }, ...comments]);
            setInputValueName('');
            setInputValueEmail('');
            setInputValueBody('');
        }
    }

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(res => res.json())
            .then((comments) => {
                const withTime = comments.map(c => ({
                    ...c,
                    time: randomFakeTime(),
                }))
                setComments(withTime);
            })
            .finally(() => {
                setLoading(false);
            })
    },[])

    function randomFakeTime(baseDate = new Date()) {
        const offsetMinutes = 7 * 10000;
        return new Date(baseDate.getTime() - offsetMinutes * 60 * 1000);
    }


    return (
        <div className={styles.wrapper}>
            {loading && <h2>Loading...</h2>}
            <h1>Danh sách comments</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={inputValueName}
                    onChange={handleInputName}
                    placeholder="Name"
                />

                <input
                    value={inputValueEmail}
                    onChange={handleInputEmail}
                    placeholder="Email"
                />

                <input
                    value={inputValueBody}
                    onChange={handleInputBody}
                    placeholder="Body"
                />

                <button type="submit">Bình luận</button>
            </form>

            <div className={styles.layout_comment}>
                {comments.map(comment => (
                    <div key={comment.id} className={styles.comment_individual}>
                        <img src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`} alt="" className="comment-avatar" />
                        <div className={styles.comment_info}>
                            <div className={styles.comment_name}>{comment.name}</div>
                            <div className={styles.comment_email}>@{comment.email}</div>
                            <div className={styles.comment_time}>
                                {comment.time ? new Date(comment.time).toLocaleString() : ""}
                            </div>
                        </div>
                        <div className={styles.comment_body}>{comment.body}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments;