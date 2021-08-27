
function kiriAtas(number){
    for(let i =0; i < number; i++){
        let isi = ""
        for(let bintang = number; bintang > i; bintang--){
            isi += "*"
        }
       
        console.log(isi)
    }
}

function kiriBawah(number){
  for(let i =0 ; i < number; i++){
      let tampil = ""
      for(let j = 0; j <= i; j++){
          tampil += "*"
      }
      console.log(tampil)
  }
}

function kananAtas(number){
    for(let i =0; i < number; i++){

        let tampil= ""

        for(let k = 0; k < i; k++){
            tampil += " "
        }
        for(let j = number; j > i; j--){
            tampil += "*"
        }
        
        console.log(tampil)
    }
}

function kananBawah(number){
    for(let i = 0; i< number; i++){
        let tampil = ""

        for(let j = number - 1 ; j > i ; j--){
            tampil += " "
        }
        for(let k = 0; k <= i; k++){
            tampil += "*"
        }
        console.log(tampil)
    }
}

function kotak(number){
    
    for ( let i= 0; i < number; i++){
        let tampil = ""
        for(let j = number ; j > i; j--){
            tampil += "#"
        }
        for(let k = 0; k <= i; k++){
            tampil += "#"
        }
        console.log(tampil)
    }
}

function segitiga(number){
    for(let i = 1; i <= number; i++){

        let tampil = ""

        for (let j = 1; j <= number - i; j++){
            tampil +=  " "
        }
        for(let k = 0; k < 2 * i - 1; k++){
            tampil += "*"
        }
        console.log(tampil)
    }
}

function segitiga2(number){
    for(let i = 0 ; i < number; i++){
        let tampil = ""
        for(let spasi = 0; spasi < number - i; spasi++){
            tampil += " "
        }
        for(let j = 0; j <= i;j++){
            tampil += "* "
        }
        console.log(tampil)

    }

}




function segitigaTerbalik(number) {
    for ( let i = 1; i <= number; i++){
        let tampil = ""

        for (let spasi = 0; spasi < i - 1; spasi++) {
            tampil += " "
            
        }

        for(let j = 1; j <= (number-i) * 2 + 1; j ++){
            tampil += "*"
        }

        console.log(tampil)
    }
}

function segitiga2Terbalik(number){
    for(let i = 1; i <= number; i++){
        let tampil = ""

        for(let spasi = 0; spasi < i -1; spasi++){
            tampil += " "
        }
        for(let j = number; j >= i; j--){
            tampil += "* "
        }
        console.log(tampil)
    }
}

function diamondPatter(number){
    for(let i = 1; i <= number - 1; i++){
        let tampil = ""
        for(let spasi = 1; spasi <= number - i ; spasi++){
            tampil += " "
        }
        for(let j = 0; j < i * 2 -1; j++){
            tampil += "*"
        }
        console.log(tampil)
    } 
    for(let i = 1; i<= number; i++){
        let tampil = ""
       
        for (let spasi = 0; spasi < i - 1; spasi++) {
            tampil += " "
            
        }
        for(let j = 1; j <= (number -i) * 2 + 1; j++){
            tampil += "*"
        }
        console.log(tampil)
    }
}
console.log("=============")
kiriAtas(10)
console.log("=============")
kiriBawah(10)
console.log("=============")
kananAtas(10)
console.log("=============")
kananBawah(10)
console.log("=============")
kotak(10)
console.log("=============")
segitiga(5)
console.log("=============")
segitiga2(5)
console.log("=============")
segitigaTerbalik(5)
console.log("=============")
segitiga2Terbalik(5)
console.log("=============")
diamondPatter(5)


function segitigaKanan(number){
    for(let i = 1; i <= number - 1; i++){
        let tampil = ""
        for(let j = 1; j <= i; j++){
            tampil += "*"
        }
        console.log(tampil)
    }
    for(let i = 1; i <= number; i++){
        let tampil =""
        for(let j = number; j >= i; j--){
            tampil += "*"
        }
        console.log(tampil)
    }
}

function segitigaKiri(number){
    for(let i = 1; i <= number - 1; i++){
        let tampil = ""
        for(let spasi = number - 1; spasi >=i; spasi--){
            tampil += " " + " "
        }
        for(let j = 1; j <= i; j++){
            tampil += " " + "*" 
        }
        console.log(tampil)
    }
    for(let i = 1; i <= number; i++){
        let tampil = ""
        for(let spasi = 1; spasi <= i - 1; spasi++){
            tampil += " " + " "
        }
        for(let j = number; j >= i; j--){
            tampil += " " + "*"
        }
        console.log(tampil)
    }
}

segitigaKanan(5)

segitigaKiri(5)