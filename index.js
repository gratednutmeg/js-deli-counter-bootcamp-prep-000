var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  var position = katzDeliLine.indexOf(name) + 1;
  return position;
}

katzDeli = ['Janet','Cato','Velvet','Jenn'];
takeANumber(deliLine,'Velvet');

function nowServing() {
  if (katzDeli.length !== 0) {
    console.log(katzDeli[0]);
    return array.shift();
  } else {
    console.log("The line is currently empty");
    return "There is nobody waiting to be served!";
  }
}

nowServing