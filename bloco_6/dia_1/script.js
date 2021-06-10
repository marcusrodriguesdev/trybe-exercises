const estados = [
  { nome: 'Acre', abreviacao: 'AC' },
  { nome: 'Alagoas', abreviacao: 'AL' },
  { nome: 'Amapá', abreviacao: 'AP' },
  { nome: 'Amazonas', abreviacao: 'AM' },
  { nome: 'Bahia', abreviacao: 'BA' },
  { nome: 'Ceará', abreviacao: 'CE' },
  { nome: 'Distrito Federal', abreviacao: 'DF' },
  { nome: 'Espírito Santo', abreviacao: 'ES' },
  { nome: 'Goiás', abreviacao: 'GO' },
  { nome: 'Maranhão', abreviacao: 'MA' },
  { nome: 'Mato Grosso', abreviacao: 'MT' },
  { nome: 'Mato Grosso do Sul', abreviacao: 'MS' },
  { nome: 'Minas Gerais', abreviacao: 'MG' },
  { nome: 'Pará', abreviacao: 'PA' },
  { nome: 'Paraíba', abreviacao: 'PB' },
  { nome: 'Paraná', abreviacao: 'PR' },
  { nome: 'Pernambuco', abreviacao: 'PE' },
  { nome: 'Piauí', abreviacao: 'PI' },
  { nome: 'Rio de Janeiro', abreviacao: 'RJ' },
  { nome: 'Rio Grande do Norte', abreviacao: 'RN' },
  { nome: 'Rio Grande do Sul', abreviacao: 'RS' },
  { nome: 'Rondônio', abreviacao: 'RO' },
  { nome: 'Roraima', abreviacao: 'RR' },
  { nome: 'Santa Catarina', abreviacao: 'SC' },
  { nome: 'São Paulo', abreviacao: 'SP' },
  { nome: 'Sergipe', abreviacao: 'SE' },
  { nome: 'Tocantins', abreviacao: 'TO' },
]

const states = document.getElementById('estado');

for (let index = 0; index < estados.length; index += 1) {
  let createOption = document.createElement('option');
  createOption.text = estados[index].nome;
  createOption.value = estados[index].abreviacao;
  states.appendChild(createOption);
}
