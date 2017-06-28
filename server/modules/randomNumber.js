function getRandom(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log('working');

module.exports = getRandom;
