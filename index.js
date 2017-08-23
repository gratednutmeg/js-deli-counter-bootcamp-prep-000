var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeli.push(name);
  var position = katzDeli.length;
  console.log(position);
  return `Welcome, ${name}. You are number ${position} in line.`;
}

katzDeli = ['Janet','Cato','Velvet','Jenn'];
takeANumber(katzDeli,'Velvet');

function nowServing() {
  if (katzDeli.length !== 0) {
    console.log(katzDeli[0]);
    return katzDeli.shift();
  } else {
    console.log("The line is currently empty");
    return "There is nobody waiting to be served!";
  }
}

nowServing();
