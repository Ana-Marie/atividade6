
const funcionarios = [
    {
        id: 11,
        nome: 'joao da silva',
        cpf: '111.222.333-44',
        categoria: 'tecnico'
    },
    {
        id: 22,
        nome: 'joana da silva',
        cpf: '111.222.333-55',
        categoria: 'tecnico'
    },
    {
        id: 23,
        nome: 'joana da Mata',
        cpf: '111.222.333-66',
        categoria: 'analista'
    },
    {
        id: 24,
        nome: 'joana da Mata',
        cpf: '23456789-00',
        categoria: 'gerente'
    },
    {
        id: 45,
        nome: 'joana da Mata',
        cpf: '111222333-44',
        categoria: 'gerente'
    },
    {
        id: 36,
        nome: 'joana da Mata',
        cpf: '654321987-23',
        categoria: 'gerente'
    },
    {
        id: 27,
        nome: 'joana da Mata',
        cpf: '098876654-99',
        categoria: 'gerente'
    }
];
// usando filter para retornar uma array de gerentes
const managers = funcionarios.filter(funcionario => funcionario.categoria === 'gerente');

console.log('------------------Array de gerentes----------------------')
console.log(managers);

// usando reduce para enconatrar o menor Id
const funcionario={
    id: 99999
};
const lowestId = funcionarios.reduce((anterior, atual) => {
    if (atual.id < anterior.id)
       return atual;
    else
        return anterior;

},funcionario);

console.log('-----------------Menor Id -----------------------------')
console.log(lowestId);

// usando map para para colocar todos os nomes no formato UpperCase
 const nameUpperCase = funcionarios.map( funcionario =>{
    funcionario.nome= funcionario.nome.toUpperCase();
    return funcionario;

});
console.log('------------nome formato UpperCase ----------------------------')
console.log(nameUpperCase);


