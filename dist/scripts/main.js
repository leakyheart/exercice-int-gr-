const $speaker = document.querySelector('.speaker__front');
const $speakerDetails = document.querySelector('.speaker__details');
const $speakerBtn = document.querySelector('.speaker__cover__button');

$speaker.addEventListener('click', e=> {
    e.preventDefault();
    $speakerDetails.classList.toggle('hidden_mobile')
})

/*$speakerBtn.addEventListener('click', e=>{
    e.preventDefault();
    $speakerDetails.classList.toggle('hidden_desktop')
})*/

$speakerBtn.addEventListener('click', e=>{
    e.preventDefault();
    $speakerDetails.classList.remove('hidden_desktop')
    $speaker.classList.add('hidden_desktop')
})



//je sais que ce code marchera pas pour toute la page et faut faire une boucle pour que ça marche partout mais franchement ça marche un peu sur un c'est déjà une petite victoire pour moi


