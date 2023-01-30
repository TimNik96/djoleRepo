# djoleRepo
frontend road

CONSOLE COMMANDS

touch imeFajla
mkdir imeFoldera
rm imeFajla
rm -r imeFoldera
cd
cd ..
pwd
ls
ls -a

GIT COMMANDS

git init
git clone URL
code .
git config --global user.name "mojUser"
git config --global user.email "mojMail"
git config user.name
git config user.email
git add imeFajla
git add .
git status
git commir -m "kratka poruka"
git push
git checkout cvor
git branch
git fetch
git merge
git pull

SINTAKSA

let promenljiva = vrednost

if(uslov) {
    kod ako je uslov tacan
} else {
    kod ako je uslov netacan
}

-ternary

uslov ? kod ako je uslov tacan : kod ako je uslov netacan

switch (vrednostKojuTrazim) {
    case vrednostSaKojomUporedjujem:
        // kod koji se izvrsava ako je uporedjivanje adekvatno
        break;
    default:
        // kod koji se izvrsava ako nijedno uporedjivanje nije adekvatno
        break;
}

for(deklarisanjeIteratora; uslovIzlazIzPetlje ; inkrementacijaIteratora) {
    // kod koji se izvrsava
}

POJMOVI

deklaracija - kreiranje promenljive pomocu rezervisane reci let, const, var
inicijalizacija - dodela vrednosti promenljivoj
iteracija - jedan ciklus (prolaz) kroz petlju
inkrementacija - povecanje vrednosti promnljive za 1
dekrementacija - smanjenje vrednosti promenljive za 1
