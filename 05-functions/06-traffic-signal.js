let generateInstructions = (color) => {
if (color === 'green') {
     return 'go'
} else if (color === 'red') {
     return 'stop'
} else if (color === 'yellow') {
     return 'caution'
} else{
return "Invalid colors"
}
}

let inst = generateInstructions("red")
console.log(inst)