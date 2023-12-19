import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, mail, pass } = req.body;

    try {
      const user = await prisma.userdata.create({
        data: {
          username,
          mail,
          pass,
        },
      });

      res.status(201).json({ success: true, user });
    } catch (error) {
      res.status(500).json({ success: false, error: 'ユーザーの作成に失敗しました' });
    }
  } else {
    res.status(405).json({ success: false, error: 'メソッドが許可されていません' });
  }
}