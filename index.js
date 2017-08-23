function takeANumber(katzDeliLine,name) {
  katzDeli.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeli.length}`);
  // return `Welcome, ${name}. You are number ${position} in line.`;
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}
