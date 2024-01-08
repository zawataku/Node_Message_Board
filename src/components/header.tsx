import React from "react";

const Header = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">KIT Message Board</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>設定</a></li>
                        <li><a>ログアウト</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;