import { PrimeiroComponente } from "./components/PrimeiroComponente";

export default function Home() {
  return (
    <div>
      <main >
      <h1> Bem Vindo ao Next.js!!!</h1>
      <PrimeiroComponente
      mensagem="Esta é a mensagem passada para o PrimeiroComponente"
      mensagemBotao="Você clicou no botão!"/>
      </main>
    </div>
  );
} 
