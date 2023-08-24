"use client"
import styled from 'styled-components';

const Button = styled.button`
background: #0046c0;
color: #ffffff;
text-align: center;
padding: 1.2em 2em;
margin: 1em 3em;
font-size: 16px;
border-radius: 8px;
border-color: #0046c0;
cursor: pointer;
font-family: 'Poppins', sans-serif;
`;

export default function MeuBotao({ text }) {
    return (
    <Button>
        {text}
    </Button>
    );
}