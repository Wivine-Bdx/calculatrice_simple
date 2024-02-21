// DOM
// Récupérer toutes les touches de la calculatrice
// Le [...] permet de mettre la Nodelist dans un tableau + facile pour s'y retrouver
const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran= document.querySelector('.ecran');

document.addEventListener('keydown', (e) =>  {
    // e.keyCode.toString (changer number en String)
    const valeur = e. keyboardEvent.toString();
    calculer(valeur)
})


document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})


const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)) {
        switch(valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})
