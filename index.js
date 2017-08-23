var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  var position = katzDeliLine.indexOf(name) + 1;
  return position;
}

katzDeli = ['Janet','Cato','Velvet','Jenn'];
takeANumber(deliLine,'Velvet');

function nowServing()
