function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length}`);
  // return `Welcome, ${name}. You are number ${position} in line.`;
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length !== 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  var currentLine = [];

  for (let i = 0; i < line.length; i++) {
    if (line.length !== 0) {
      currentLine.push(` ${i + 1}. ${line[i]}`);
    }
  }
  console.log(`The line is currently: ${currentLine.toString()}`);
  return `The line is currently:${currentLine.toString()}`;
}
