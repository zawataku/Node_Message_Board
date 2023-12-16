import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home({ data }) {
  return (
    <div>
      <h1>Dummy Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.field1}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const data = await prisma.modelName.findMany();
  return {
    props: {
      data,
    },
  };
}
