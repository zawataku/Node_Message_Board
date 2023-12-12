function Drever() {
    return (
      <img
        src="./index/drever_emblem.gif"
        alt="ドリバーくん"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>ドリバーレンダリング</h1>
        <Drever />
        <Drever />
        <Drever />
      </section>
    );
  }