import React from "react";
import Link from "next/link";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const Home = () => {
    return (
        <div className="bg-[url('/img/kv_3.jpg')] items-center justify-center min-h-screen relative z-10 bg-center bg-cover">
            <Header></Header>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Home;
