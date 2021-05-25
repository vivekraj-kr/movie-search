import React from 'react';
import styled from "styled-components";

const StyledModal = styled.div`
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);
`

const StyledModalContainer = styled.div`
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`

const StyledContent = styled.div`
   font-size: 14px;
`

const StyledCloseButton = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover, &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.movie = props.movie;
        this.modalRef = React.createRef();
        this.bodyClick = this.bodyClick.bind(this);
    }

    bodyClick (event) {
        if (this.modalRef.current && this.modalRef.current === event.target) {
            this.props.onCloseModal();
        }
    }

    componentDidMount() {
        document.body.addEventListener('click', this.bodyClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.bodyClick);
    }
    
    render() {
        return (
            <StyledModal ref={this.modalRef}>
                <StyledModalContainer>
                    <StyledCloseButton onClick={this.props.onCloseModal}>&times;</StyledCloseButton>
                    <StyledContent>
                        <img src={`https://image.tmdb.org/t/p/w500/${this.movie.poster_path}`} alt={this.movie.original_title} />
                    </StyledContent>
                </StyledModalContainer>
            </StyledModal>
        )
    }
}

export default Modal;