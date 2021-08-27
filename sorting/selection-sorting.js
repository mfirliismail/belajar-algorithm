const number = [7 ,4, 10, 8, 3, 1]

console.log(`number = ${number}`)

function selectionSorting(number) {
    let length = number.length
    for(let i = 0; i < length -1; i++){

        let min = i
        for(let j = i + 1; j < length; j++){
            if(number[j] < number[min]){
                min = j
            }
        }
        if(min != i){
            let tuker = number[i]
            number[i] = number[min]
            number[min] = tuker
        }
    }
    console.log(`number dari kecil ke besar adalah : `)

    number.forEach((e, i) => {
        console.log(`angka ke-${i+1} = ${e}`)
    });
    
}

function selectionSortingKebalik(number){
    let length = number.length

    for(let i = 0; i < length - 1; i++){

        let max = i
        for(j = i + 1; j < length; j++){
            if(number[j] > number[max]){
                let change = number[j]
                number[j] = number[max]
                number[max] = change
            }
        }
        if(max != i){
            max = j
        }
    }
    console.log(`jika dibalik, dari besar ke kecil akan seperti :`)

    number.forEach((e, i) => {
        console.log(`angka ke-${i + 1} = ${e}`)
    });
}


selectionSorting(number)
console.log("======================")

selectionSortingKebalik(number)