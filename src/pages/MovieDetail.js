import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import movieState from "../movieState";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(movieState);
  const [movie, setMovie] = useState(null);

  //   useEffect
  useEffect(() => {
    const curentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(curentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledMovieDetails>
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
        </StyledMovieDetails>
      )}
    </>
  );
};

const StyledMovieDetails = styled.div`
  color: white;
`;
const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: 23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

//Award component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default MovieDetail;
