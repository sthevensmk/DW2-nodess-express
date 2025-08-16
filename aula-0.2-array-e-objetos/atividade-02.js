const Estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];
console.log(`Essa é a lista de todos os estados brasileiros: `);
Estados.forEach((estado) => {
  console.log(estado);
});
console.log();
const estados = [
  {
    nome: "Acre",
    sigla: "AC",
  },
  {
    nome: "Alagoas",
    sigla: "AL",
  },
  {
    nome: "Amapá",
    sigla: "AP",
  },
  {
    nome: "Amazonas",
    sigla: "AM",
  },
  {
    nome: "Bahia",
    sigla: "BA",
  },
  {
    nome: "Ceará",
    sigla: "CE",
  },
  {
    nome: "Espírito Santo",
    sigla: "ES",
  },
  {
    nome: "Goiás",
    sigla: "GO",
  },
  {
    nome: "Maranhão",
    sigla: "MA",
  },
  {
    nome: "Mato Grosso",
    sigla: "MT",
  },
  {
    nome: "Mato Grosso do Sul",
    sigla: "MS",
  },
  {
    nome: "Minas Gerais",
    sigla: "MG",
  },
  {
    nome: "Pará",
    sigla: "PA",
  },
  {
    nome: "Paraíba",
    sigla: "PB",
  },
  {
    nome: "Paraná",
    sigla: "PR",
  },
  {
    nome: "Pernambuco",
    sigla: "PE",
  },
  {
    nome: "Piauí",
    sigla: "PI",
  },
  {
    nome: "Rio de Janeiro",
    sigla: "RJ",
  },
  {
    nome: "Rio Grande do Norte",
    sigla: "RN",
  },
  {
    nome: "Rio Grande do Sul",
    sigla: "RS",
  },
  {
    nome: "Rondônia",
    sigla: "RO",
  },
  {
    nome: "Roraima",
    sigla: "RR",
  },
  {
    nome: "Santa Catarina",
    sigla: "SC",
  },
  {
    nome: "São Paulo",
    sigla: "SP",
  },
  {
    nome: "Sergipe",
    sigla: "SE",
  },
  {
    nome: "Tocantins",
    sigla: "TO",
  },
  {
    nome: "Distrito Federal",
    sigla: "DF",
  },
];

estados.forEach((estado) => {
  console.log(`O estado ${estado.nome} tem a sigla ${estado.sigla}`);
  console.log();
});

const pessoa = {
  nome: "Sthevens Konesuk Miranda dos Santos",
  idade: 21,
  cidade: "Registro-SP",
  hobby: "Jogar",
  musicaPreferida: "Going Under - Evanescence",
};
console.log();
console.log(
  `O ${pessoa.nome} tem ${pessoa.idade} anos de idade, mora em ${pessoa.cidade}, seu hobby é ${pessoa.hobby} e sua musica preferida é: ${pessoa.musicaPreferida}.`
);
console.log();
const filmes = [
  {
    titulo: "Clube da Luta",
    genero: "Drama, Suspense",
    ano: 1999,
    classificacaoIdade: 18,
  },
  {
    titulo: "A Origem",
    genero: "Ação, Ficção científica",
    ano: 2010,
    classificacaoIdade: 14,
  },
  {
    titulo: "Coringa",
    genero: "Drama, Crime",
    ano: 2019,
    classificacaoIdade: 16,
  },
  {
    titulo: "Avatar",
    genero: "Aventura, Ficção científica",
    ano: 2009,
    classificacaoIdade: 12,
  },
  {
    titulo: "O Rei Leão",
    genero: "Animação, Aventura",
    ano: 1994,
    classificacaoIdade: 0,
  },
];

filmes.forEach((filme) => {
  console.log(
    `O filme ${filme.titulo} de gênero ${filme.genero} foi lançado em ${filme.ano} e tem classificação indicativa para maior de ${filme.classificacaoIdade} anos.`
  );
  console.log();
});
