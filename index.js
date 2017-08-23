var katzDeli = ['jane'];

function takeANumber(katzDeliLine,name) {
  katzDeli.push(name);
  // var position = katzDeli.length;
  // console.log(position);
  // console.log(katzDeli);
  // return `Welcome, ${name}. You are number ${position} in line.`;
  console.log(katzDeli);
  return katzDeli;
}

takeANumber(katzDeli,'alice');
console.log(`new katz deli: ${katzDeli}`)

function nowServing() {
  if (katzDeli.length !== 0) {
    console.log(katzDeli[0]);
    return katzDeli.shift();
  } else {
    console.log("The line is currently empty");
    return "There is nobody waiting to be served!";
  }
}
