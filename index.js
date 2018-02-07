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
  kittens = [kittens,... name];
}
