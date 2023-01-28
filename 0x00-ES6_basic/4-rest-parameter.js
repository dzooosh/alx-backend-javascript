export default function returnHowManyArguments(...args) {
  let x = 0;
  for (const arg of args) 
  {
    arg++;
    x++;
  }
  return x;
}
