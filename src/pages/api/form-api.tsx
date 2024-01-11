import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { postContent } = req.body;

  // ブラウザのcookieからユーザー名を取得
  const username = req.cookies.username;

  if (!username) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const like = 0;

  try {
    // データベースに新しいポストを作成
    const createdPost = await prisma.posts.create({
      data: {
        username,
        post: postContent,
        like,
      },
    });

    res.status(201).json({ message: '投稿が完了しました', post: createdPost });
    window.location.reload();
  } catch (error) {
    console.error('投稿エラー:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // PrismaClientをクローズ
    await prisma.$disconnect();
  }
}