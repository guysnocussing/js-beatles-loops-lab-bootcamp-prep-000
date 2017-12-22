function theBeatlesPlay(musicians, instruments) {
  let returnArray = [];
  for (var i = 0; i < musicians.length; i++) {
    returnArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return returnArray;
}

function johnLennonFacts(fact) {
  let i = 0;
  let listedFacts = [];
  while (i < fact.length) {
    listedFacts.push(`${fact[i]}!!!`);
  }
  return listedFacts;
}
