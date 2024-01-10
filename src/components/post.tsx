import React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Post = ({ posts }) => {
    const handleLike = async (postId) => {
        // サーバーにいいねカウントを更新するためのリクエストを送信
        await fetch(`/api/${postId}`, {
            method: 'POST',
        });

        // いいねカウントを更新した後にページをリロード
        window.location.reload();
    };

    if (!posts) {
        return <p>データがありません。</p>;
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
                                <td>{new Date(post.createdAt).toLocaleString()}</td>
                                <td>
                                    <button
                                        className="btn btn-neutral"
                                        type="button"
                                        onClick={() => handleLike(post.id)}>
                                        いいね！ {post.like}
                                    </button>
                                </td>
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
}

export default Post;
