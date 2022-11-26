import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CardPersonaje } from "./componentes/Card/CardPersonaje";

import axios from "axios";
import { useEffect, useState } from "react";
import { Filtrar } from "./componentes/Filtrar/Filtrar";
import { Header } from "./componentes/Header/Header";
import { Navbar } from "./componentes/Navbar/Navbar";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  return (
    <>
      <Navbar />

        <Header />
      <div className="container">
        <div className="row justify-content-center">
          {characters.map((personaje) => (
            <div className="col-lg-4 col-md-6 my-3 d-flex content">
              <div
                className="card"
                style={{ width: "18rem", backgroundColor: "#C6C8CC" }}
              >
                <div className="card-body">
                  <CardPersonaje
                    image={personaje.image}
                    name={personaje.name}
                    species={personaje.species}
                    status={personaje.status}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container pb-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
