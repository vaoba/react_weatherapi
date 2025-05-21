import "../App.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {API_BASEURL, API_KEY} from "../api.js"
import {useDebounce} from "react-use";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    //waits for the user to stop typing for 500ms on searchTerm update
    useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_BASEURL}/search.json?key=${API_KEY}&q=${searchTerm}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                setSearchResults(data);
                console.log(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        if (debouncedSearchTerm !== "" && debouncedSearchTerm.trim().length > 1) {
            void fetchSearchResults();
        }
    }, [debouncedSearchTerm]);

    return (
        <div className="search-page">
            <div className="search-input">
                <input type="text" placeholder="Search by city" onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            {loading ? (
                <p>Loading..</p>
            ) : searchResults.length > 0 ? (
                <ul>
                    {searchResults.map((item, index) => (
                        <li key={index}>
                            <Link to={`/weather/${item.name}`}>
                                <button>{item.name}</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p></p>
            )}
        </div>
    )
}

export default Search;