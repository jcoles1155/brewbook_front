import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
// import beerBackground from '../../images/jumbotron/beerBackground'

// DONT FORGET TO ADD A BACKGROUND TO JUMBO!!!
// background: url(${beerBackground}) no-repeat fixed bottom;

const Styles = styled.div`
    .jumbo {
        background-size: cover;
        color: #efefef;
        height: 200px;
        postition: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid classname="jumbo">
            <div classname="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>Welcome to Brewbook!</p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron