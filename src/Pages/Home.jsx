import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css"
import { useEffect } from "react";
import { getPopularMovies, searchMovies } from "../Services/api";

function Home (){

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        } catch (err) {
            console.log("Error fetching popular movies:", err);
            setError("Failed to fetch popular movies. Please try again later.");
            setLoading(false);
        }
        finally{
            setLoading(false);
        }
        };
        fetchPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search.trim()) return
        if (loading) return

        setLoading(true);
        try {
        const searchResults = await searchMovies(search);
        setMovies(searchResults);
        setError(null);
    } catch (err) {
        console.log("Error fetching search results:", err);
        setError("Failed to fetch search results. Please try again later.");
    } finally {
        setLoading(false);
    }
    };





    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." 
                className="search-input" 
                value={search} onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

                {error && <div className="error-message">{error}</div>}

                {loading && <div className="loading"> <p>Loading...</p></div>
                }  : <div className="movies-grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(search) &&
                    ( <MovieCard movie={movie} key={movie.id} /> )
                     )}
            </div>
        </div>
    )
}

export default Home