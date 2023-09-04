import TituloFotoIA from "./components/titulo-fotos-ia";
import { SubtituloFotoIA } from "./components/sub-titulo-ia";
import { ParagrafoFotoIA } from "./components/paragrafo-ia";
import { LinkFotoIA } from "./components/link-upload-foto-ia";
import { ImagemPrincipalFotoIA } from "./components/foto-primaria-ia";
import { TextoFotoIA } from "./components/texto-foto-ai";
import { BlocoFotoIA1 } from "./components/components-group/bloco-foto-ia-1";
import { BlocoFotoIA2 } from "./components/components-group/bloco-foto-ia-2";
import { BlocoFotoIA3 } from "./components/components-group/bloco-foto-ia-3";
import { BlocoFotoIA4 } from "./components/components-group/bloco-foto-ia-4";
import Image from "next/image";
import MeuBotao from "./components/meu-botao";

export default function Home() {
  return (
    <main>
      <TituloFotoIA text="Agora vamos lá, hora das fotos!" />

      <ParagrafoFotoIA text="Para finalizar a primeira etapa do seu <br />
      Processo de Vistoria, precisamos de 4 <br />
      fotos específicas da sua Bike." />

      <BlocoFotoIA1
        subtitulo="FOTO 1"
        texto="Uma foto do SELIM da sua Bike (banco)"
        linkHref="#"
        linkTexto="Anexar Arquivo"
        imagemSrc="/images/ai-banco.png"
        imagemAlt="Imagem Selim"
    />

      <BlocoFotoIA2
        subtitulo="FOTO 2"
        texto="Uma foto do GUIDÃO e PNEU DIANTEIRO da sua Bike"
        linkHref="#"
        linkTexto="Anexar Arquivo"
        imagemSrc="/images/ai-dianteiro.png"
        imagemAlt="Imagem Dianteiro"
    />

      <BlocoFotoIA3
        subtitulo="FOTO 3"
        texto="Uma foto do QUADRO da sua Bike"
        linkHref="#"
        linkTexto="Anexar Arquivo"
        imagemSrc="/images/ai-quadro.png"
        imagemAlt="Imagem Quadro da bicicleta"
    />

      <BlocoFotoIA4
        subtitulo="FOTO 3"
        texto="Uma foto do SISTEMA DE TRANSMISSÃO e do PNEU TRASEIRO da sua Bike"
        linkHref="#"
        linkTexto="Anexar Arquivo"
        imagemSrc="/images/ai-traseiro.png"
        imagemAlt="Imagem Quadro da bicicleta"
    />

      <MeuBotao text="Concluir Etapa 1"/>



    </main>
  );
}
