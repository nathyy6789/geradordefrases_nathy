const frases = [
    "Acredite em você!",
    "O código é sua arte.",
    "Persista e conquiste.",
    "Menos é mais.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Não conte os dias, faça os dias contarem.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."
];

const botao = document.querySelector("#btn-nova");
const texto = document.querySelector("#texto-frase");

botao.addEventListener("click", () => {
    const sorteio = Math.floor(Math.random() * frases.length);
    texto.innerText = `"${frases[sorteio]}"`;
});
