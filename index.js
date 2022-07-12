// Code your solutions in this file
const cardNames = (['Guadalupe', 'Ollie', 'Aki'], "surprise");
const copyOfCardNames = []

function writeCards(cardNames) { 
  for (let i = 0; i < cardNames.length; i++) {
  copyOfCardNames.push(`Thank you, ${cardNames[i]}, for the wonderful surprise gift!`);
  }
  
  return (copyOfCardNames);
}
writeCards(copyOfCardNames);

/// ----------------------------CountDown()



function countDown(count) {
  while (count>= 0) {
    console.log(count);
    count--;
  }
}