import React, { useState } from 'react';

import styles from './Profile.module.scss'
function Profile() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState({});

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((user) => {
                setUsers(user)
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <div className={styles.wrapper}>
            {loading && <h2>loading...</h2>}
            <h1>Users List</h1>

            <h2>{users.name}</h2>
            <div className="info"><span className="label">Username: </span>{users.username}</div>
            <div className="info"><span className="label">Email: </span>{users.email}</div>
            <div className="info"><span className="label">Phone: </span>{users.phone}</div>
            <div className="info"><span className="label">Website: </span>{users.website}</div>

            <div className="info"><span className="label">Address: </span>{users.address?.street},{users.address?.city}</div>

        </div>
    )

}

export default Profile;