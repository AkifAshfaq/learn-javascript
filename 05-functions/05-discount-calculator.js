let calculatedDiscountedPrice = (price,discount) =>{
let discountedPrice = price - price*(discount/100)
return discountedPrice
}
let result = calculatedDiscountedPrice(2000,25)
console.log(result)