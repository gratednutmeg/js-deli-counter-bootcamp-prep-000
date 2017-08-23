function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeli.length}`);
  // return `Welcome, ${name}. You are number ${position} in line.`;
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}
