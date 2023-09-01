import TituloFotoIA from "./components/titulo-fotos-ia";
import { SubtituloFotoIA } from "./components/sub-titulo-ia";
import { ParagrafoFotoIA } from "./components/paragrafo-ia";
import { LinkFotoIA } from "./components/link-upload-foto-ia";
import { ImagemPrincipalFotoIA } from "./components/foto-primaria-ia";
import { TextoFotoIA } from "./components/texto-foto-ai";
import { BlocoFotoIA1 } from "./components/components-group/bloco-foto-ia-1";
import { BlocoFotoIA2 } from "./components/components-group/bloco-foto-ia-2";
import Image from "next/image";

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



    </main>
  );
}
