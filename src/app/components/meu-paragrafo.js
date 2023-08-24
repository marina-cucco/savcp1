"use client"
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 14px;
    font-weight: 200;
    color: #000000;
    font-family: 'Poppins', sans-serif;
    margin: 1em 1em 1em 2em;
`;

export default function MeuParagrafo({ text }) {
    return (<Paragrafo>{text}</Paragrafo>);
}