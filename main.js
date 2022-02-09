
let inputNom = document.getElementById('nom');
let buttonAfficher = document.getElementById('afficher');
let listeNoms = document.getElementById('listeNoms');
console.log(listeNoms);

buttonAfficher.addEventListener('click', function () {
    if (inputNom.value === '') {
        alert('Nom obligatoire !');
        return;
    }

    listeNoms.innerHTML += '<li>' + inputNom.value + '</li>';
    inputNom.value = '';
});