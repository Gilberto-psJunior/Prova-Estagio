const dadosFaturamento = [
    { dia: 1, valor: 200.00 },
    { dia: 2, valor: 300.00 },
    { dia: 3, valor: 150.00 },
    { dia: 4, valor: 400.00 },
    { dia: 5, valor: 0.00 },
    { dia: 6, valor: 0.00 },
    { dia: 7, valor: 500.00 }
];

const valores = dadosFaturamento
    .map(dia => dia.valor)
    .filter(valor => valor > 0);

const menorValor = Math.min(...valores);
const maiorValor = Math.max(...valores);
const mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

const diasAcimaMedia = valores.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias acima da média mensal: ${diasAcimaMedia}`);
