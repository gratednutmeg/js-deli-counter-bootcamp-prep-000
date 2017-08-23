var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeli.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeli.length}`);
  // return `Welcome, ${name}. You are number ${position} in line.`;
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing() {
  if (katzDeli.length !== 0) {
    console.log(katzDeli[0]);
    return katzDeli.shift();
  } else {
    console.log("The line is currently empty");
    return "There is nobody waiting to be served!";
  }
}
