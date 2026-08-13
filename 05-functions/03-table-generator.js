let printTable = (num,range)=>{
    for (let i = 1; i <= range; i++) {
      console.log(`${num} * ${i} = ${num * i}`)
    }
}
printTable(5,10)