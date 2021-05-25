import React from "react";
import styled from "styled-components";

const StyledMovieCard = styled.div`
    min-width: 175px;
    background: #fff;
    box-shadow: 0 1px 1px rgb(0 0 0 / 15%);
`

const StyledCardBody = styled.div`
    img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`

const StyledCardFooter = styled.div`
    padding: 10px 15px;
    font-size: 14px;

    h3 {
        margin-bottom: 10px;
    }

    .rating-block {
        display: block;
        font-size: 12px;
    }
`

const MovieCard = ({item, onClickCard}) => {
    return (
        <StyledMovieCard onClick={() => {onClickCard(item)}}> 
            <StyledCardBody>
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.original_title} />
            </StyledCardBody>
            <StyledCardFooter>
                <h3>{item.title}</h3>
                <span className="rating-block"> Rating {item.vote_average} </span>
            </StyledCardFooter>
        </StyledMovieCard>
    )
}

export default MovieCard;