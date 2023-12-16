import React from "react";

const SignUp = () => {
    return (
        <div className="bg-[url('/img/kv_3.jpg')] flex items-center justify-center min-h-screen relative z-10 bg-center bg-cover">
            <div className="card w-96 bg-[#ffffff]/60 shadow-xl">
                <div className="card-body items-center text-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">新規登録</h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Welcome to KIT Message Borad</h1>
                        <form action="#" method="POST" className="space-y-4">
                            <div>
                                <input type="text" id="username" placeholder="ユーザーネーム" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="text" id="email" placeholder="メールアドレス" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="password" id="password" placeholder="パスワード" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <button type="submit" className="w-full btn btn-neutral">Sign Up</button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>アカウントをお持ちですか？ <a href="#" className="text-blue-600 hover:underline">ログイン</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignUp;