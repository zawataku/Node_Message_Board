import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Post = ({ posts }) => {
    if (!posts) {
        return <p>データがありません。</p>;
    }

    return (
        <div className="card w-10/12 h-full bg-base-100 shadow-xl m-10">
            <div className="card-body flex">
                <table>
                    <thead>
                        <tr>
                            <th>ユーザー名</th>
                            <th>投稿内容</th>
                            <th>作成日時</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.username}</td>
                                <td>{post.post}</td>
                                <td>{new Date(post.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export async function getStaticProps() {
    // データベースからデータを取得
    const posts = await prisma.posts.findMany();

    console.log('Posts:', posts); // この行を追加

    return {
        props: {
            posts,
        },
    };
}

export default Post;