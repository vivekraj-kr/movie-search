import React from 'react';
import MovieCard from './MovieCard';
import styled from "styled-components";

const StyledMovieGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6,1fr);
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(4,1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const MovieGrid = ({data, onClickCard}) => {
    return(
        <StyledMovieGrid>
            {data.map((item) => {
                return <MovieCard onClickCard={onClickCard} key={item.id} item={item}/>
            })}
        </StyledMovieGrid>
    )
}

export default MovieGrid;