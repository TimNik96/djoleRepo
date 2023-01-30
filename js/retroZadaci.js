// -Sabrati i pomnoziti dva broja i ispisati rezultate radnji u konzolu.

// let broj_1 = 15
// let broj_2 = 30

// console.log(broj_1 + broj_2, broj_1 * broj_2)

// -Proveriti da li je zadati broj paran.

// 3 / 2 = 2 * 1 + 1

// 102 / 10 = 10 * 10 + 2

// let broj_1 = 12

// if(broj_1 % 2 == 0) {
//     console.log('Broj je paran!')
// } else {
//     console.log('Broj je neparan!');
// }

// -Pomnoziti dva broja. Ukoliko je njihov proizvod veci od 100, ispisati njihov proizvod, u suprotnom ispisati njihov zbir.

// let br1 = 10
// let br2 = 50
// let zbir = br1 + br2
// let proizvod = br1 * br2

// if(proizvod > 100) {
//     console.log(proizvod)
// } else 
//     console.log(zbir)

// -Ispisati u template stringu ime, prezime i zanimanje.

// let ime = 'Djole'
// let prezime = 'Stojanovic'
// let zanimanje = 'programer'

// console.log(ime + ' ' + prezime + ' ' + zanimanje)
// console.log(`Moje ime je ${ime} ${prezime} i po zanimanju sam ${zanimanje}.`)

// SWITCH & TERNARY OPERATOR

// let mesec = 'februar'

// switch (mesec) {
//     case 'januar':
//     case 'mart':
//     case 'maj':
//     case 'jul':
//     case 'avgust':
//     case 'oktobar':
//     case 'decembar':
//         console.log(31)
//         break
//     case 'februar':
//         console.log(28)
//         break
//     case 'april':
//     case 'jun':
//     case 'septembar':
//     case 'novembar':
//         console.log(30)
//         break
//     default:
//         console.log('Pogresan unos')
//         break
// }

// let brojDana = 28

// switch (brojDana) {
//     case 30:
//         console.log('april', 'jun', 'septembar', 'novembar');
//         break;
//     case 31:
//         console.log('januar', 'mart', 'maj', 'jul', 'avgust', 'oktobar', 'decembar');
//         break;
//     case 28:
//         console.log('februar');
//         break;
//     default:
//         console.log('Pogresan unos')
//         break;
// }

// uslov ? kod ako je uslov tacan : kod ako je uslov netacan

// let godine = 18

// godine >= 18 ? 'Dozvoljen ulaz!' : 'Nemate dovoljno godina!'

// if(uslov) {
//     kod ako je uslov tacan
// } else {
//     kod ako je uslov netacan
// }

// let osobaGodine = 17

// if(osobaGodine >= 18) {
//     console.log('Dozvoljen ulaz!')
// } else {
//     console.log('Nemate dovoljno godina!')
// }

// i++
// i--

// for(deklarisanjeIteratora; uslovIzlazIzPetlje ; inkrementacijaIteratora) {
//     // kod koji se izvrsava u petlji
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let str = 'a'
// console.log(typeof str, typeof +str, +str)

// -Sabrati tri uneta broja i ispisati njih zbir

// let nekiBroj = 3
// let nekiDrugiBroj = 2
// let nekiTreciBroj = 4

// let zbir = nekiBroj + nekiDrugiBroj + nekiTreciBroj

// console.log(zbir)

// -Sabrati prvih 100 brojeva

// let suma = 0

// for(let i = 1; i <= 100; i++) {
//     suma = suma + i
// }

// console.log(suma)

// 0 + 1 = 1 
// 1 + 2 = 3
// . 
// . 
// . 
// 4950 + 100 = 

// -Odrediti maksimum od tri uneta broja

// let br1 = 10
// let br2 = 20
// let br3 = 30
// let max = br1

// if(max < br2)
//     max = br2
// if(max < br3)
//     max = br3

// console.log(max)