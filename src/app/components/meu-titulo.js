"use client"
import styled from 'styled-components';

const Titulo = styled.h1`
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 0.5em;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`;

export default function MeuTitulo({ text }) {
    return (<Titulo>{text}</Titulo>);
}