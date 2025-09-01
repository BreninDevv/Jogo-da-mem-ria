/*CARTAS DO JOGO*/
const cardsSports = ["🏓", "⚽", "🏀", "🎮", "🤿", "⛳", "🎳", "🥋", "🏐", "🛶"];
const cardsEmojis = ["😀", "😎", "😍", "😴", "😪", "🤐", "🤯", "🤑", "😱", "😡"];
const cardsFoods = ["🍨", "🍩", "🍪", "🍭", "🍟", "🥨", "🍳", "🍉", "🥕", "🍏"];

/*/////////////////////////////////////////////////////////////////*/

/*COPIAS DAS CARTAS DO JOGO*/
const copySportsCards = [...cardsSports];
const copyEmojisCards = [...cardsEmojis];
const copyFoodsCards = [...cardsFoods];

/*/////////////////////////////////////////////////////////////////*/

/*LÓGICA EMBARALHAMENTO ESPORTES*/
for (let i = copySportsCards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [copySportsCards[i], copySportsCards[j]] = [copySportsCards[j], copySportsCards[i]]; // troca
}
const resultSports = copySportsCards
//console.log(resultSports)

/*/////////////////////////////////////////////////////////////////*/

/*LÓGICA EMBARALHAMENTO EMOJIS*/
for (let i = copyEmojisCards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [copyEmojisCards[i], copyEmojisCards[j]] = [copyEmojisCards[j], copyEmojisCards[i]]; // troca
}
const resultEmojis = copyEmojisCards
//console.log(resultEmojis)

/*/////////////////////////////////////////////////////////////////*/

/*LÓGICA EMBARALHAMENTO FOODS*/
for (let i = copyFoodsCards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [copyFoodsCards[i], copyFoodsCards[j]] = [copyFoodsCards[j], copyFoodsCards[i]]; // troca
}
const resultFoods = copyFoodsCards
//console.log(resultFoods)


