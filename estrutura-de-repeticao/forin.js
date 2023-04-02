const pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
  };
  
  for (const propriedade in pessoa) {
    console.log(propriedade);
  }
  