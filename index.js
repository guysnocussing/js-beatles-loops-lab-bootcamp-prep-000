function theBeatlesPlay(musicians, instruments) {
  let returnArray = [];
  for (var i = 0; i < musicians.length; i++) {
    returnArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return returnArray;
}
