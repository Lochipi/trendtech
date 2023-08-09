import { styled } from "styled-components";


export const TestimonialCardStyled = styled.div`
    max-width: 300px;
    max-height: 400px;
    color: #dfd9c9;
    padding: 1em;
    display: flex;
    flex-direction: column;

    .testi-profile {
        margin: 0;
    }

    .testi-profile h4, .testi-profile h5 {
        margin: 0;
        padding: 0;
    }

    .testi-profile h5 {
        font-weight: lighter;
    }
`