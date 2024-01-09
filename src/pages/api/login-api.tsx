// login-api.tsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { mail, pass } = req.body;

        try {
            const user = await prisma.userdata.findFirst({
                where: {
                    mail,
                    pass,
                },
            });

            if (user) {
                res.status(200).json({ username: user.username }); // ユーザー名を含むオブジェクトを返す
            } else {
                res.status(401).json({ message: 'ログインに失敗しました' });
            }
        } catch (error) {
            console.error('エラーが発生しました:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'メソッドが許可されていません' });
    }
}