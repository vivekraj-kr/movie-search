import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    align-items: center;
`

const StyledInput = styled.input.attrs({ type: 'text' })`
    width: 100%;
    border: solid 1px #ccc;
    border-radius: 3px;
    padding: 10px 15px;
    margin-right: 15px;
`

const StyledButton = styled.button.attrs({ type: 'submit' })`
    padding: 11px 15px;
    background-color: #01d277;
    color: #fff;
    border: none;
    border-radius: 3px;
`

class SearchBar extends React.Component {
    
    state = {
        query: ""
    }

    onSetQuery = (e) => {
        let query = e.target.value;
        this.setState({query: query});
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({query: ""});
        this.props.onSearch(this.state.query)
    }

    render() {
        return(
            <StyledForm onSubmit={this.onFormSubmit}>
                <StyledInput value={this.state.query} onChange={this.onSetQuery}/>
                <StyledButton> Search </StyledButton>
            </StyledForm>
        )
    }
}

export default SearchBar;