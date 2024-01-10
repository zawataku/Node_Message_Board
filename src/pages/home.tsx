import React from "react";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Form from "@/components/form";

const Home = () => {
    return (
        <div className="bg-[url('/img/kv_3.jpg')] items-center justify-center min-h-screen relative z-10 bg-center bg-cover">

            <Header></Header>

            <div className="flex">
                <Sidebar></Sidebar>
                <Form></Form>
            </div>
        </div>
    );
};

export default Home;
