import MeuBotao from './components/meu-botao';
import MeuTitulo from './components/meu-titulo';
import MeuParagrafo from './components/meu-paragrafo';

export default function Home() {
  return (
    <main>
      <MeuTitulo text="SAV - Sistema Automatizado de Vistorias"/>
      <MeuParagrafo text="Com o Sistema Automatizado de Vistorias da Porto, você assegura sua bicileta de maneira rápida e eficaz, tudo online e sem sair de casa."/>
      <MeuBotao text="Começar a Vistoria Online"/>
    </main>
  )
}
