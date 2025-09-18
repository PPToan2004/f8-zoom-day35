import { useState } from "react";


import styles from './Counter.module.scss';

function Counter() {
    const [count, setCount] = useState(0);

    const tangso = () => {
        setCount(count + 1);

        console.log(`Đã bấm nút! Giá trị count hiện tại: ${count}`);
    }

    const giamso = () => {
        setCount(prevCount => {
            const newso = prevCount - 1;
            console.log(`Giảm từ ${prevCount} xuống ${newso}`);
            return newso;
        })
    }

    const restso = () => {
        setCount(0);
    }

    const dislay_status = count > 0 ? 'Dương' : count < 0 ? 'Âm' : "Bằng không  "

    return (
        <div className={styles.wrapper}>
            <h1 style={{ color: count > 0 ? "green" : count < 0 ? "red" : "gray" }}>Số đếm hiện tại : {count}</h1>
            <p>Trạng Thái : {dislay_status}</p>
            <div>
                <button onClick={giamso}>
                    Giảm số
                </button>

                <button onClick={restso}>
                    Reset số
                </button>

                <button onClick={tangso}>
                    Tăng số
                </button>
            </div>

        </div>
    )
}

export default Counter;