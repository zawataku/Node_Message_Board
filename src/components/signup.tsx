import React from "react";

interface SignUpProps {
    onToggle: () => void;
  }
  
  const SignUp: React.FC<SignUpProps> = ({ onToggle }) => {
    return (
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
            <div className="max-w-md w-full p-6">
                <h1 className="text-3xl font-semibold mb-6 text-black text-center">新規登録</h1>
                <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Welcome to KIT Message Borad</h1>
                <form action="#" method="POST" className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"></input>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"></input>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
                    </div>
                </form>
                <div className="mt-4 text-sm text-gray-600 text-center">
                    <p>アカウントをお持ちですか？ <a href="#" className="text-blue-600 hover:underline" onClick={onToggle}>ログイン</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;