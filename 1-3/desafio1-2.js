const Programador = {
  nome: "Rodolfo",
  idade: 22,
  Tecnologias: [
    { nome: "Python", especialidade: "Data Science" },
    { nome: "JavaScript", especialidade: "Web/Mobile" },
  ],
};

console.log(
  `O usuário ${Programador.nome} tem ${Programador.idade} e usa ${Programador.Tecnologias[1].nome} com a especialidade em ${Programador.Tecnologias[1].especialidade}`
);
