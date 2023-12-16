const key = "a7df073f6063ff9be23c1e28eb08a3d0";

function colocarDadosNaTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temperatura").innerHTML =
    Math.floor(dados.main.temp) +
    "°C" +
    " Máx. " +
    Math.floor(dados.main.temp_max) +
    "°C" +
    " Mín. " +
    Math.floor(dados.main.temp_min) +
    "°C";
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
  document.querySelector(
    ".img-previsao"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}
