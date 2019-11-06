export const total = (cantidad , plazo) => {
  let totalC , totalP;
  if(Number(cantidad) <= 1000){
    totalC = cantidad * .25;
    totalP = cantidad * 0.1;
  }
  else if(Number(cantidad) > 5000){
    totalC = cantidad * .20;
    totalP = cantidad * 0.2;
  }
  else if(Number(cantidad) > 10000){
    totalC = cantidad * .15;
    totalP = cantidad * 0.3;
  }
  return cantidad + totalC + totalP;
}