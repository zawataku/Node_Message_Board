import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login-api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mail, pass }),
            });

            if (response.ok) {
                const userData = await response.json();
                const { username } = userData;

                // ユーザー名をCookieに保存
                document.cookie = `username=${username}; path=/`;

                console.log('ログインに成功しました');
                console.log(username);
                router.push('/home');
            } else {
                console.log('ログインに失敗しました');
                setError('メールアドレスまたはパスワードが違います．');
            }
        } catch (error) {
            console.error('エラーが発生しました:', error);
        }
    };

    return (
        <div className="bg-[url('/img/kv_3.jpg')] flex items-center justify-center min-h-screen relative z-10 bg-center bg-cover">
            <div className="card w-96 bg-[#ffffff]/60 shadow-xl">
                <div className="card-body items-center text-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">ログイン</h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Welcome to KIT Message Borad</h1>
                        <form action="#" method="POST" className="space-y-4">
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <div>
                                <input type="text" required id="email" placeholder="メールアドレス" className="input input-bordered w-full max-w-xs" value={mail} onChange={(e) => setMail(e.target.value)} />
                            </div>
                            <div>
                                <input type="password" required id="password" placeholder="パスワード" className="input input-bordered w-full max-w-xs" value={pass} onChange={(e) => setPass(e.target.value)} />
                            </div>
                            <div>
                                <button type="button" onClick={handleLogin} className="w-full btn btn-neutral">ログイン</button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>アカウントをお持ちでない場合は<Link href="/signup" className="text-blue-600 hover:underline leading-10">登録</Link></p>
                            <p><Link href="/test" className="text-blue-600 hover:underline leading-10">テストページに移行</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;