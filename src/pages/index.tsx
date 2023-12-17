import React from "react";
import Link from "next/link";

export const Home = () => {
  return (
    <div className="bg-[url('/img/kv_3.jpg')] flex items-center justify-center min-h-screen relative z-10 bg-center bg-cover">
      <div className="card w-96 bg-[#ffffff]/60 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="./img/kit_english.png" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">KIT Message Boardにようこそ！</h2>
          <p className="leading-10">今すぐ参加しましょう</p>
          <div className="card-actions">
            <Link href="/signup">
              <button className="btn btn-neutral">Join Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;