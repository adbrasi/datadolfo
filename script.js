const bolsonaro = document.querySelector(".bolso");
const lula = document.querySelector(".lulu");
async function eleicao() {
  let base = await fetch(
    "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json"
  );
  let resultados = await base.json();
  let bolsona = resultados.cand[0].pvap;
  let lulapt = resultados.cand[1].pvap;

  bolsonaro.innerText = bolsona;
  lula.innerText = lulapt;
}

console.log(eleicao());
