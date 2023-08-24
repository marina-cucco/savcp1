"use client"
import styled from 'styled-components';

const CaixaDePergunta = styled.div`
background-color: #01a1fd;
color: #ffffff;
font-family: 'Poppins', sans-serif;
padding: 1em;
text-align: center;
`;

const Titulo = styled.h2`
font-size: 30px;
font-weight: bold;
`;

const Texto = styled.p`
font-size: 16px;
font-weight: 300;
`;

const Input = styled.input`
font-size: 16px;
background-color: #01a1fd;
color: #ffffff;
font-family: 'Poppins', sans-serif;
padding: 0.5em;
`;

export default function MinhaCaixaDePergunta({ text }) {
    return (
        <CaixaDePergunta>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Texto>Encontre em nossa plataforma o seguro de bicicleta ideal para você!</Texto>
            <Input type="search" placeholder="Qual a sua dúvida?" />
        </CaixaDePergunta>
    );
}