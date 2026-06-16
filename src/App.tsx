import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CharacterList from "./components/CharacterList";
import type { Character } from "./components/CharacterList";
import "./App.css";

const API_URL = "https://api.disneyapi.dev/character";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setCharacters(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar personagens. Tente novamente mais tarde.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Personagens Disney</h1>

      <SearchBar value={search} onChange={setSearch} />

      {loading && <p className="status">Carregando...</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && !error && <CharacterList characters={filteredCharacters} />}
    </div>
  );
}

export default App;
  