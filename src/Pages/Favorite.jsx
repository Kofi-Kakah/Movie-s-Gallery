import "../css/Favorite.css"
import { useMovieContext } from "../Context/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favorite (){

    const { favorites } = useMovieContext();
    if (favorites) {
        return(
        <div className="favorites">
                <h2>Favorites Movies</h2>
            <div className="movie-grid">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
        )
    }
    return(
        <div className="favorites-empty">
            <h2>No Favorites Movies Yet</h2>
            <p>Start adding movies to your favorites and they willappear here</p>
        </div>
    )
}

export default Favorite