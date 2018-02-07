const app = "I don't do much."

function kittens() {
   return kittens;
 }

 function destructivelyAppendKitten(name) {
    return kittens.push(name);
  }

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  kittens.slice[kittens.length - 1];
  return kittens;
}
