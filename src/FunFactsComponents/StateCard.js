export default function StateCard({ state, updateLikes }) {
    const { id, name, capital, image, fact, likes, est } = state
    
    function upVote(e) {
      e.preventDefault();
      const configObj = {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ likes: likes + 1 }),
      };
      fetch(`http://localhost:3004/states/${id}`, configObj)
        .then((res) => res.json())
        .then((data) => {
          updateLikes(data);
        });
    }
    

    return (
      <div className="ui card">
        <div className="ui slide masked reveal image">
          <img src={image} className="visible content" alt={`Picture of ${name}`}/>
          <div className="hidden content">
            <h1>{capital}, {name}</h1>
            <p>{fact}</p>
            <p>Fun fact brought to you by:</p>
                <a href="https://www.lonelyplanet.com/articles/fun-facts-about-us-states">
                    www.lonelyplanet.com
                </a>
          </div>
        </div>
        <div className="content">
          <a className="header">{name}</a>
          <div className="meta">
            <span className="date">{capital}</span>
            <br />
            <span className="date">Est.{est}</span>
          </div>
        </div>
        <div className="extra content">
          <a onClick={upVote}>
            <i className={id % 2 == 0 ? "red heart icon" : "blue heart icon"} />
            {likes}
          </a>
        </div>
      </div>
    );
}