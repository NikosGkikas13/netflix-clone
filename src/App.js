import { useEffect } from "react";
import Row from "./Row";
import requests from "./requests";
import "./css/App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import { Routes, Route, Link } from "react-router-dom";
import MyList from "./MyList";
import Home from "./Home";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/my-list" element={<MyList />} />
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <Banner />
      <h1></h1>
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
