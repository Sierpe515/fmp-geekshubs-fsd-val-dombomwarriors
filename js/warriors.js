class Warriors {

    constructor(raza, clase, subclase, fuerza, destreza, arma){

        this.raza = raza;
        this.clase = clase;
        this.subclase = subclase;
        this.fuerza = fuerza;
        this.destreza = destreza;
        this.arma = arma;

        this.daño = 0;
    }

    golpear (){
        this.daño += parseInt((this.fuerza * this.destreza) * Math.floor(Math.random() * 20));
            if (Math.random() > 18){
                this.daño * 3
            }
    }
}

let warrior1 = new Warriors("humano", "guerrero", "maestro de armas", 18, 3, "espada");
let warrior2 = new Warriors("elfo", "picaro", "asesino", 14, 4, "estoque");
let warrior3 = new Warriors("enano", "paladin", "revientapiedras", 26, 2, "hacha");
let warrior4 = new Warriors("orco", "barbaro", "berserker", 25, 2, "martillo");

let warriorsDictionary = {
    "1" : warrior1,
    "2" : warrior2,
    "3" : warrior3,
    "4" : warrior4
};