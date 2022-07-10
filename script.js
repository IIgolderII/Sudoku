// var canvas = document.getElementById('canvaSudoku');
// canvas.width = 500;
// canvas.height = 500;
// var ctx = canvas.getContext('2d');
// ctx.font = '40px sans-serif';

var jeu = new Array(9).fill("").map(() => new Array(9).fill(document.createElement("input")));
console.log(jeu);

for (let i = 0; i < jeu.length; i++) {
    for (let j = 0; j < jeu[i].length; j++) {
        document.getElementById('jeu').appendChild(jeu[i][j]);
        jeu[i][j].value = (i+1).toString() + (j+1).toString();
    }
}

// var lineWidth = 2;
// for (let i = 1; i < jeu.length; i++) {
//     if ((i + 1) % 3 == 1) {
//         lineWidth = 2;
//     } else {
//         lineWidth = .5;
//     }
//     ctx.fillRect(i * canvas.width / 9, 0, lineWidth, canvas.height);
//     ctx.fillRect(0, i * canvas.height / 9, canvas.width, lineWidth);
// }

// for (let i = 0; i < jeu.length; i++) {
//     for (let j = 0; j < jeu[i].length; j++) {
//         while (!placerChiffre(Math.ceil(Math.random() * 9), i, j));
//     }
// }

// function placerChiffre(chiffre, i, j) {
//     let ligne = "";
//     for (let iChiffre = 0; iChiffre < jeu.length; iChiffre++) {
//         ligne += jeu[iChiffre][j];
//     }
//     if (!jeu[i].includes(chiffre) && !ligne.includes(chiffre)) {
//         jeu[i][j] = chiffre;
//         ctx.fillText(chiffre, i * canvas.width / 9 + 18, j * canvas.height / 9 + 42);
//         return true;
//     } else {
//         return true;
//     }
// }