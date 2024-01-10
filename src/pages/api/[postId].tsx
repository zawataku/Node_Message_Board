import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { postId } = req.query;

    if (req.method === 'POST') {
        try {
            // データベースでいいねのカウントを更新
            await prisma.posts.update({
                where: { id: parseInt(postId, 10) },
                data: {
                    like: {
                        increment: 1,
                    },
                },
            });

            return res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
}