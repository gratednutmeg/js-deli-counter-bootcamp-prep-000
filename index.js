function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length}`);
  // return `Welcome, ${name}. You are number ${position} in line.`;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing() {
  if (katzDeliLine.length !== 0) {
    return katzDeli.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}
