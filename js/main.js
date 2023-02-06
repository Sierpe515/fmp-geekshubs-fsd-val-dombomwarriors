const warriorHit = (numeroWarrior) => {

    let chosen = warriorsDictionary[numeroWarrior];

    chosen.golpear();

    document.getElementById(numeroWarrior).innerHTML= `${chosen.daño}`;
}