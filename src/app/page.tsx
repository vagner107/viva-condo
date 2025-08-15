"use client";

  type Morador = {
    primeiroNome: string;
    sobrenome: string;
  };

export default function Home() {

  function formatarNomeMorador(morador:Morador) {
    return morador.primeiroNome + ' ' + morador.sobrenome;
  }

  function obterSaudacao(morador:null | Morador) {
    if (morador) {
      return <span>Olá, {formatarNomeMorador(morador)}!</span>;
    }
    return <span>Olá, Estranho!!!</span>;
  }

  //object
  const morador = {
    primeiroNome: 'João',
    sobrenome: 'pereira'
  };  
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold">{obterSaudacao(morador)}</h1>
    </div>
  );
};

