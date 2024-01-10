import { useEffect, useState } from 'react';

const Sidebar = () => {

    // ログアウトボタンの処理 
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

    // 時計の処理
    // const [currentTime, setCurrentTime] = useState(new Date());
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentTime(new Date());
    //     }, 1);
    //     return () => clearInterval(intervalId);
    // }, []);

    // const options = {
    //     year: 'numeric',
    //     month: '2-digit',
    //     day: '2-digit',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     second: '2-digit',
    //     fractionalSecondDigits: 3,
    // } as const;

    // const formattedTime = new Intl.DateTimeFormat('ja-JP', options).format(currentTime);

    return (
        <div className='sidebar-wrap'>
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

            <div className="card w-96 bg-base-100 shadow-xl m-10 flex">
                <div className="card-body items-center text-center">
                    <div className="text-base">
                        <p>現在時刻</p>
                    </div>
                    <div className="clock text-base">
                        {/* <p>{formattedTime}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;