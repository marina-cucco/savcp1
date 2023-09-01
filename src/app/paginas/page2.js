import MeuBotao from "./components/meu-botao";
import MeuTitulo from "./components/meu-titulo";
import MeuParagrafo from "./components/meu-paragrafo";
import MinhaCaixaDePergunta from "./components/caixa-de-pergunta";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <MinhaCaixaDePergunta />

            <MeuTitulo text="SAV - Sistema Automatizado de Vistorias" />
            <MeuParagrafo text="Com o Sistema Automatizado de Vistorias da Porto, você assegura sua bicileta de maneira rápida e eficaz, tudo online e sem sair de casa." />
            <MeuBotao text="Começar a Vistoria Online" />

            <Image
            src="/images/ai-banco.png"
            width={500}
            height={500}
            alt="Picture of the author"
            />
        </main>  

    );
}