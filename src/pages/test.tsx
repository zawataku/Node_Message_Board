import 
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const users = await prisma.user.findMany();
  return {
    props: {
      users,
    },
  };
}