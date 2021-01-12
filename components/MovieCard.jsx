import React from "react";

export default function MovieCard(props) {
  return (
    <div
      key={props.movieInfo.imdbID}
      className={`movie-card ${
        !props.nominees.includes(props.movieInfo) ? "nominate" : "nominated"
      }`}
    >
      <div
        className="movie-poster"
        style={{
          color: "white",
          backgroundImage: `url(${
            props.movieInfo.Poster == "N/A"
              ? "/BlankPoster.jpg"
              : props.movieInfo.Poster
          })`,
        }}
      ></div>
      <div className="movie-info">
        <div className="movie-title">
          <div className="movie-year">
            {props.movieInfo.Title} ({props.movieInfo.Year})
          </div>
        </div>
      </div>
      <div className="movie-buttons">
        {!props.nominees.includes(props.movieInfo) ? (
          <button
            className="enabled"
            onClick={() => {
              props.handleNomination(props.movieInfo);
            }}
          >
            NOMINATE
          </button>
        ) : (
          <button
            className="disabled"
            onClick={() => props.handleRemoveNominee(props.movieInfo)}
          >
            NOMINATED
          </button>
        )}
      </div>
    </div>
  );
}
