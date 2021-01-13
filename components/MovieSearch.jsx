import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import MovieCard from "./MovieCard";

export default function MovieSearch() {
  // Setting up Hooks
  const [list, setList] = useState(null);
  const [search, setSearch] = useState("");
  const [nominees, setNominees] = useState([]);
  const [banner, setBanner] = useState(false);

  // Search Funtion
  const handleSearch = async (e) => {
    setSearch(e.target.value);

    const movieList = await axios.get(
      `https://www.omdbapi.com/?s=${e.target.value}&apikey=2438c384&type=movie`
    );

    setList(movieList.data.Search);
  };
  // Remove Nominee Function
  function handleRemoveNominee(movieObject) {
    const listCopy = [...nominees];
    const removedNomineeList = listCopy.filter((item) => item !== movieObject);
    setNominees(removedNomineeList);
    setBanner(false);
  }
  // Nominate Movie Function
  function handleNomination(movieObject) {
    if (nominees.length < 5) {
      const newNomineesList = [...nominees];
      newNomineesList.push(movieObject);
      setNominees(newNomineesList);

      if (newNomineesList.length === 5) {
        setBanner(true);
      }
    }
  }

  const scroll = (scrollOffset) => {
    const searchBox = document.getElementById("search-box");
    searchBox.scrollLeft += scrollOffset;
  };

  return (
    <div className="movie-dashboard">
      {/* Condition Render of Banner and Scroll buttons*/}
      {banner && <div className="banner">Maximum of Five Movies Nominated</div>}
      <div className={`scroll ${list ? "showScroll" : ""}`}>
        <button
          className={`scrollLeft ${list ? "show" : "hide"}`}
          onClick={() => scroll(-232)}
        >
          <FontAwesomeIcon className="arrow-button" icon={faChevronLeft} />
        </button>

        <div className="search-results" id="search-box">
          {list ? (
            list.map((res) => (
              <MovieCard
                movieInfo={res}
                handleNomination={handleNomination}
                handleRemoveNominee={handleRemoveNominee}
                nominees={nominees}
              />
            ))
          ) : (
            <div className="welcome">Search for Movies to Nominate</div>
          )}
          <div className="dot">.</div>
        </div>
        <button
          className={`scrollRight ${list ? "show" : "hide"}`}
          onClick={() => scroll(232)}
        >
          <FontAwesomeIcon className="arrow-button" icon={faChevronRight} />
        </button>
      </div>

      <div className="search-bar">
        <form className="form">
          <input
            type="text"
            placeholder="Search.."
            value={search}
            onChange={handleSearch}
            name="search"
          />
          <i className="fa fa-search" />
        </form>
      </div>

      <div className="nominee-list">
        {nominees.map((res) => (
          <div className="nominee-card" key={res.imdbID}>
            <div className="nominee-title">
              {res.Title} ({res.Year})
            </div>
            <div className="nominee-button">
              <div
                className="delete-button"
                onClick={() => handleRemoveNominee(res)}
              >
                <div className="remove">Remove</div>
                <FontAwesomeIcon className="thrash" icon={faTrash} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer>by Tepeu Potter</footer>
    </div>
  );
}
