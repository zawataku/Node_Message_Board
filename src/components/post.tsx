import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Post = ({ posts }) => {
    if (!posts) {
        return <p>何か投稿してみましょう</p>;
    }

    console.log(posts);

    return (
        <div className="card w-10/12 bg-base-100 shadow-xl m-10">
            <div className="card-body flex">
                <table className='table'>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td className='w-10'>
                                    <div className=" w-9 mask mask-squircle">
                                        <img src="./img/icon.png" />
                                    </div>
                                </td>
                                <td>{post.username}</td>
                                <td>{post.post}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    // データベースからデータを取得し、IDで降順にソート
    const posts = await prisma.posts.findMany({
        orderBy: [
            {
                id: 'desc'
            },
        ],
    });

    return {
        props: {
            posts,
        },
    };
}

export default Post;