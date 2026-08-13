let convertTemperature = (temp,unit)=>{
if (unit === 'C') {
    return  (temp * 9/5) + 32
} else if (unit === 'F') {
    return  (temp - 32) * 5/9
} else {
    return "Invalid unit"
}
}
// let result = convertTemperature(0, 'C');
console.log(convertTemperature(0, 'C'));  
console.log(convertTemperature(100, 'F')); 
console.log(convertTemperature(25, 'X'));