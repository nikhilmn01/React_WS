function Body(props) {
    const conceptItems = props.concepts.map((concept, index) => (
      <li key={index} className="concept">
        <img src={concept.image} alt={concept.title} />
        <h2>{concept.title}</h2>
        <p>{concept.description}</p>
      </li>
    ));
  
    return (
      <div>
        <ul id="concepts">
          {conceptItems}
        </ul>
      </div>
    );
  }
  
  export default Body;
  