
let inputNom = document.getElementById('nom');
let buttonAfficher = document.getElementById('afficher');
let listeNoms = document.getElementById('listeNoms');
console.log(listeNoms);

buttonAfficher.addEventListener('click', function () {
    while (inputNom.value === '') {
        inputNom.value = prompt('Nom obligatoire !');
    }

    listeNoms.innerHTML += '<li>' + inputNom.value + '</li>';
    inputNom.value = '';
});