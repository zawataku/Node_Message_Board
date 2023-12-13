import React, { useState } from 'react';
import Login from '@/components/login';
import SignUp from '@/components/signup';

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-gray-100">
        <img src="./img/PXL_20230728_051830441.jpg" alt="LC" className='w-full h-full object-cover' />
      </div>
      {isLogin ? <Login onToggle={handleToggle} /> : <SignUp onToggle={handleToggle} />}
    </div>
  );
};

export default Home;