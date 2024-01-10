import React from "react";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Form from "@/components/form";
import Post from "@/components/post";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Home = ({ posts }) => {
    
    return (
        <div className="bg-[url('/img/kv_3.jpg')] items-center justify-center min-h-screen relative z-10 bg-center bg-cover">
            <Header></Header>
            <div className="flex">
                <Sidebar></Sidebar>
                <div className="flex-col w-10/12">
                    <Form></Form>
                    <Post posts={posts}></Post>
                </div>
            </div>
        </div>
    );
};

// ビルド時にデータを取得
export async function getStaticProps() {
    try {
        const posts = await prisma.posts.findMany({
            orderBy: [
                {
                    id: 'desc'
                },
            ],
        });

        // createdAtを文字列に変換
        const formattedPosts = posts.map(post => ({
            ...post,
            createdAt: post.createdAt.toISOString(),
        }));

        return {
            props: {
                posts: formattedPosts,
            },
        };
    } catch (error) {
        console.error("データの取得中にエラーが発生しました:", error);
        return {
            props: {
                posts: [],
            },
        };
    }
}

export default Home;