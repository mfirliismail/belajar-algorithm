const number = [100, 3, 4, 50, 20, 10, 1]
console.log(`number = ${number}`)
function bubbleSort(number){
    let length = number.length // bikin variable buat itu ada berapa number || number.length

    for(let i = 0; i< length - 1; i++){ // loop external || loop setiap number yang ada

        for(let j = 0; j < length  - 1 ; j++){// loop isi dari number

            if(number[j] > number[j + 1]){ // cek apakah si number[0] > number[1] kalo iya tuker

                let tuker = number[j]   // tuker
                number[j] = number[j+1]
                number[j + 1] = tuker
            }
            
        }
        

    }
    
    number.forEach((e, i) => {
        console.log(`angka ke-${i + 1} = ${e}`)
    });
}


bubbleSort(number)
console.log('=============================')
function bubbleSortKebalik(number) {
    let length = number.length
    for(let i = 0; i < length - 1; i++ ){
        for(let j = 0; j < length - 1; j++){
 
            if(number[j] < number[j + 1] ){
                let tuker = number[j]
                number[j] = number[j + 1]
                number[j+ 1] = tuker
            }

        }
    }
    number.forEach((e, i) => {
        console.log(`angka ke-${i + 1} = ${e}`)
    });
}

console.log(`kalo dibalik jadi :`)
bubbleSortKebalik(number)
