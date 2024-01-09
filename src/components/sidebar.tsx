import { useEffect, useState } from 'react';

const Sidebar = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Cookieからusernameを取得
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'username') {
                setUsername(value);
                break;
            }
        }
    }, []);

    return (
        <div className="card w-96 bg-base-100 shadow-xl m-10 flex">
            <div className="card-body items-center text-center">
                <div className="w-16 mask mask-squircle">
                    <img src="./img/icon.png" />
                </div>

                <div className="username text-base">
                    <p>{username}</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;