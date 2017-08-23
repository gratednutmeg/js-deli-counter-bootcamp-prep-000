function takeANumber(katzDeliLine,name) {
  var position = katzDeliLine.indexOf(name) + 1;
  return position;
}

const deliLine = ['Janet','Cato','Velvet','Jenn'];

takeANumber(deliLine,'Velvet');
