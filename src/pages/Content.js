function Content(props) {
    return (
      <article className="article-div-content">
        <span className="article-div-content-title">
          <h3>{props.item.title}</h3>
          <span className="article-div-content-title-doughnut"></span>
        </span>
  
        <p className="article-div-content-description">
          {props.item.description}
        </p>
      </article>
    );
  }
  
  export default Content;
  