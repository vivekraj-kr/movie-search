import React from "react";
import SearchBar from "./SearchBar";
import MovieGrid from "./MovieGrid";
import Carousel from "./Carousel";
import Modal from "./Modal";
import styled from "styled-components";
import apiClient from "./apiClient";
import "./Reset.css";

const StyledLogo = styled.h1`
   text-align: center;
   margin-top: 30px;
   margin-bottom: 10px;
   font-size: 40px;
   color: #6f6f6f;
`

const StyledContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px 15px;
`

class App extends React.Component {
    state = {
        data: [],
        trendingMovies: [],
        cardData: {},
        isModalShow: false
    }

    onSearch = (query) => {
       apiClient("search/movie", { query }).then((data) => {
            this.setState({
                data: data.results
            })
       })
    }

    componentDidMount() {
        apiClient("trending/all/day").then((data) => {
            this.setState({
                trendingMovies: data.results
            })
       })
    }

    onClickCard = (movie) => {
        this.setState({
            cardData: movie,
            isModalShow: true
        })
    }

    onCloseModal = () => {
        this.setState({
            isModalShow: false
        })
    }

    render() {
        return (
            <>
                <StyledLogo> iMDB </StyledLogo>
                <StyledContainer>
                    <SearchBar onSearch={this.onSearch}/>
                    <Carousel data={this.state.trendingMovies} onClickCard={this.onClickCard} title={"Trending now"}/>
                    <MovieGrid data={this.state.data} onClickCard={this.onClickCard}/> 
                </StyledContainer>
                {this.state.isModalShow 
                    ? <Modal movie={this.state.cardData} onCloseModal={this.onCloseModal}/>
                    : null
                }
            </>
        )
    }
}

export default App;