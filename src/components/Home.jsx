import { BrowserRouter as Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <header className="homepage-header"></header>
      <div className="homepage-body">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for an item"
            //   value={search}
            //   onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
