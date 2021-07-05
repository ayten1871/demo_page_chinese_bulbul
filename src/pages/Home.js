import Content from "./Content";
import contentData from "../contentData";

function Home() {
  const data = contentData.map((item) => <Content key={item.id} item={item} />);

  return (
    <div className="article">
      <article className="article-img">
        <span>
          <h2>白頭翁(Chinese bulbul)</h2>
          <p>
            又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
            年。
          </p>
        </span>
      </article>
      <div className="article-div">{data}</div>
    </div>
  );
}

export default Home;
