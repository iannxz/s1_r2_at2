type Character = {
  _id: number;
  name: string;
  imageUrl?: string;
  films: string[];
  tvShows: string[];
};

type CharacterListProps = {
  characters: Character[];
};

function CharacterList({ characters }: CharacterListProps) {
  if (characters.length === 0) {
    return <p className="no-results">Nenhum personagem encontrado.</p>;
  }

  return (
    <ul className="character-list">
      {characters.map((character) => (
        <li key={character._id} className="character-card">
          {character.imageUrl && (
            <img
              src={character.imageUrl}
              alt={character.name}
              className="character-img"
            />
          )}
          <div className="character-info">
            <h3>{character.name}</h3>
            {character.films.length > 0 && (
              <p><strong>Filmes:</strong> {character.films.join(", ")}</p>
            )}
            {character.tvShows.length > 0 && (
              <p><strong>Séries:</strong> {character.tvShows.join(", ")}</p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export type { Character };
export default CharacterList;
