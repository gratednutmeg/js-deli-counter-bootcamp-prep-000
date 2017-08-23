var deli = [];

function takeANumber(katzDeliLine,name) {
  deli.push(name);
  var position = deli.length;
  console.log(position);
  console.log(deli);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

function nowServing() {
  if (deli.length !== 0) {
    console.log(deli[0]);
    return deli.shift();
  } else {
    console.log("The line is currently empty");
    return "There is nobody waiting to be served!";
  }
}
