"use client"
import styled from 'styled-components';

const Paragrafo = styled.p`
    font-size: 14px;
    color: #373737;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0 0 0 1.5em;
`;

export function ParagrafoFotoIA({ text }) {
    const lines = text.split('<br />');
    return (
    <>
        {lines.map((line, index) => (
        <Paragrafo key={index}>
            {line}
            <br />
        </Paragrafo>
        ))}
    </>
    );
}
