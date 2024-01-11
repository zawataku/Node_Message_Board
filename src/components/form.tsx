import { useState } from 'react';
import { getSession } from 'next-auth/react';

export default function Form({ }) {
    const [postContent, setPostContent] = useState('');

    const handlePostSubmit = async () => {
        try {
            const response = await fetch('/api/form-api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postContent }),
            });

            if (response.ok) {
                // ポストが正常に作成された場合の処理
                console.log('Post created successfully');
                window.location.reload();
                
            } else {
                // エラーが発生した場合の処理
                console.error('投稿エラー:', response.statusText);
            }
        } catch (error) {
            console.error('投稿エラー:', error);
        }
    };


    return (
        <div className="card w-10/12 h-28 bg-base-100 shadow-xl m-10">
            <div className="card-body flex">
                <form className="form-wrap flex justify-center" onSubmit={handlePostSubmit}>
                        <input type="text" required placeholder="今なにしてる？" className="input input-bordered w-full max-w-3xl flex" value={postContent} onChange={(e) => setPostContent(e.target.value)} />
                        <div className="card-actions ml-3">
                            <button className="btn btn-neutral" type="submit">投稿</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session?.user) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    const username = session.user.name;

    return {
        props: {
            username,
        },
    };
}