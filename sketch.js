let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("gray");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(30);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Klaus";
    } else {
      if (idade >= 1) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Matilda";          
        } else{
         return "Bob Esponja";
        }
      } else {
        if (gostaDeFantasia) {
          return "Extraordinário";
        } else {
          return "A Caminho da Lua";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Divertida Mente";
    } else {
      return "Meu Malvado Favorito ";
    }
  }
}