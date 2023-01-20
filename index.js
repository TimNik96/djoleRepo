let automobili = [
    {
        marka: 'mercedes',
        km: 80000,
        godiste: 2018,
        vlasnici: ['Veljko', 'Marija']
    },
    {
        marka: 'reno',
        km: 100000,
        godiste: 2016,
        vlasnici: ['Nikola', 'Petar']
    },
    {
        marka: 'audi',
        km: 10000,
        godiste: 2021,
        vlasnici: ['Petar']
    },
    {
        marka: 'audi',
        km: 10000,
        godiste: 2021,
        vlasnici: ['Nikola']
    },
    {
        marka: 'mercedes',
        km: 80000,
        godiste: 2018,
        vlasnici: ['Veljko', 'Marija']
    }
]

const markaNajmanjeKm = (niz, marka) => {
    let minKm = niz[0].km
    let najmladji = niz[0].godiste
    let nizTrazenih = niz.filter(el => el.marka === marka)
    
    if(nizTrazenih.length == 0)
        return null
    
    nizTrazenih.forEach(element => {
        if(element.km < minKm)
            minKm = element.km
    })

    nizTrazenih = nizTrazenih.filter(element => element.km === minKm)

    nizTrazenih.forEach(element => {
        if(element.godiste > najmladji)
            najmladji = element.godiste
    })

    nizTrazenih = nizTrazenih.filter(el => el.godiste == najmladji)

    return nizTrazenih[0]
}

// console.log(markaNajmanjeKm(automobili, 'audi'))

const rokfeler = (niz, vlasnik) => {
    let brAutomobila = 0
    
    niz.forEach(el => {
        if(el.vlasnici.includes(vlasnik)){
            brAutomobila++
        }
    })

    if(brAutomobila >= 2)
        return true

    return false
}

console.log(rokfeler(automobili, 'Nikola'))

let pP = automobili.slice(0, Math.ceil(automobili.length / 2))
let dP = automobili.slice(Math.ceil(automobili.length / 2))

console.log(pP, dP)