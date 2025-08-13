import { useState } from 'react';

const DemoButton = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#fff'); // 新しい状態を追加

    const handleClick = () => {
        setCount(count + 1);
        setColor(prevColor => prevColor === '#fff' ? '#f0f0f0' : '#fff'); // 色をトグル
    };

    return (
        <button
            onClick={handleClick}
            style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                border: '2px solid #333',
                borderRadius: '5px',
                backgroundColor: color, // 状態に基づいて色を設定
                color: '#333'
            }}
        >
            ボタンが押された回数: {count}
        </button>
    );
};

export default DemoButton;