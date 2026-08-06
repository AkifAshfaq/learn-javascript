let productStock = 2;

if (productStock === 0) {
  console.log("Product is out of stock");
} else {
  console.log("Product is in stock.");
}

// let weather = "cloudy"

// if (weather === "rainy") {
//     console.log("Take an umberalla")
// } else {
//     console.log("enjoy the weather")
// }

// let age = 11;
// let hasIdCard = true;

// if(age >= 18){
//     if(hasIdCard){
//         console.log("welocme to club")
//     } else{
//         console.log("You need an id card")
//     }
// } else{
//     console.log("you are too young to enter")
// }

let color = "yellow";
switch (color) {
  case "red":
    console.log("stop driving");
    break;
  case "yellow":
    console.log("caution");
    break;
  case "green":
    console.log("you can drive");
    break;
  default:
    console.log(`This color ${color} is not represent any rule`);
    break;
}
