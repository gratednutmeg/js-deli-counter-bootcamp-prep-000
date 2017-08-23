function takeANumber(katzDeliLine,name) {
  var position = katzDeliLine.indexOf(name) + 1;
  console.log(position);
  return position;
}

const deliLine = ['Janet','Cato','Velvet','Jenn'];

takeANumber(deliLine,'Velvet');
