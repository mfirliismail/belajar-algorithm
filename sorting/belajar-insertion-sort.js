const number = [5, 4, 10, 1, 6, 2] // number[i].length = 6
console.log(`number = ${number}`)

function insetionSorting(number) {
    let length = number.length

    for(i = 1; i < length; i++){
        let kotak = number[i]
        let j = i - 1
        while(j >= 0 && number[j] > kotak){
            number[j + 1] = number[j]
            j--
        }
        number[j + 1] = kotak
    } 

    console.log(`angka dari kecil ke besar adalah :`)
    number.forEach((e, i) => {
        console.log(`angka ke-${i + 1} = ${e}`)
    });
    
}

function insetionSortingKebalik(number){
    let length = number.length

    for(let i = 1 ; i < length ; i++){
        let kotak = number[i]
        let j = i - 1
        while(j >= 0 && number[j] < kotak){
            number[j + 1] = number[j] 
            j-- 
        }
        number[j + 1] = kotak
       
    } 
    console.log(`kalo dibalik, dari yang terbesar ke kecil adalah :`)

    number.forEach((e, i) => {
        console.log(`angka ke-${i + 1} = ${e}`)
    });
}
    





insetionSorting(number)
console.log(`=====================`)
insetionSortingKebalik(number)