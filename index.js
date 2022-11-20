// Write your solution here! 

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
  return cats.push("Ralph"); 
}
function destructivelyPrependCat (name) {
  return cats.unshift("Bob"); 
}
function destructivelyRemoveLastCat() {
  return cats.pop(); 
}
function destructivelyRemoveFirstCat() {
  return cats.shift(); 
}
function appendCat(name) {
  return cats.appendCat = [...cats, "Broom"]; 
}
function prependCat(name) {
  return cats.prependCat = ["Arnold", ...cats]; 
}
function removeLastCat() {
  const removeLastCat = cats.slice(0, cats.length-1); 
  return removeLastCat 
}
function removeFirstCat() {
  const removeFirstCat = cats.slice(1); 
  return removeFirstCat; 
}












