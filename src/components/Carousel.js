import React from 'react';
import MovieCard from './MovieCard';
import styled from "styled-components";

const StyledCarousel = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    overflow: scroll;
    padding: 20px 0;
`

const StyledSectionTitle = styled.h2`
    font-size: 26px;
    margin-top: 15px;
`

const Carousel = ({data, title, onClickCard}) => {
    return(
        <>
            <StyledSectionTitle>{title}</StyledSectionTitle>
            <StyledCarousel>
                {data.map((item) => {
                    return <MovieCard onClickCard={onClickCard} key={item.id} item={item}/>
                })}
            </StyledCarousel>
        </>
    );
}

export default Carousel;