import React from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Users = ({ users }) => {
  return (
    <div className="bg-[url('/img/kv_3.jpg')] flex items-center justify-center min-h-screen relative z-10 bg-center bg-cover">
      <div className="card w-96 bg-[#ffffff]/60 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="max-w-md p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">ユーザーリスト</h1>
            <p><Link href="/home" className="text-blue-600 hover:underline leading-10">ホーム</Link></p>
            <table className="table table-sm items-center justify-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ユーザー名</th>
                  <th>メールアドレス</th>
                  <th>パスワード</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.mail}</td>
                    <td>{user.pass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link href="/">
            <button className="btn btn-neutral">TOPに戻る</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // データベースからデータを取得
  const users = await prisma.userdata.findMany();

  return {
    props: {
      users,
    },
  };
}

export default Users;