"use client"
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 14px;
    font-weight: 200;
    line-height: 1.5;
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
`;

export default function MeuParagrafo({ text }) {
    return (<Paragrafo>{text}</Paragrafo>);
}