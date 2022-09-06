let array = [34, 12, 76, 87, 43]
let kattasi = array[0]
let kichigi = 0

const maxMin = () => {

  for (let i = 1; i < array.length-1; i++){
      if (kattasi < array[i]) {
        kattasi = array[i]
      } else if (kattasi > array[i]) { kichigi = array[i]}
  }
  let kattaKichik = kichigi.toString() +" "+ kattasi.toString()
  return kattaKichik
}

const result = maxMin()

console.log(result);


let raqamMatn = ['nul','bir','ikki','uch','turt','besh']

const NumberText = (suz) => {
let probel = suz.indexOf(" ")
let ajdarBoshi = suz.slice(0, probel)
let qolganSuz = suz.slice(1)
let ajdarBoshiMatn

  for (let i = 0; i < raqamMatn.length; i++) {
    if (ajdarBoshi==i) {ajdarBoshiMatn = raqamMatn[i]
    }
  }
let natija = ajdarBoshiMatn + qolganSuz
return natija
}

const result2 = NumberText("3 boshli ajdarho")
console.log(result2);


let butunSonlar = [1,2,3,4,3,2,1]
let tekshir = 0
let juftsizSon

const checkNumber = () => {
  for (let i = 0; i < butunSonlar.length; i++) {
    tekshir=0
        for (let a = 0; a < butunSonlar.length; a++) {
          if (butunSonlar[i]==butunSonlar[a]){tekshir++}
       } if (tekshir==1) {
    juftsizSon = butunSonlar[i]}
    }
    return juftsizSon
}

const result3 = checkNumber()
console.log(result3);
