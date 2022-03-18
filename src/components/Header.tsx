
interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

interface headerProps {
  selectedGenre: GenreResponseProps;
}

export function Header ({selectedGenre}:headerProps) {
    return(
        <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>
    )
}