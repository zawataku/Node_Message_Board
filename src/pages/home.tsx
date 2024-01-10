import React from "react";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Form from "@/components/form";
import Post from "@/components/post";

const Home = () => {
    return (
        <div className="bg-[url('/img/kv_3.jpg')] items-center justify-center min-h-screen relative z-10 bg-center bg-cover">

            <Header></Header>

            <div className="flex">
                <Sidebar></Sidebar>
                <div className="flex-col w-10/12">
                    <Form></Form>
                    <Post></Post>
                </div>
            </div>
        </div>
    );
};

export default Home;
