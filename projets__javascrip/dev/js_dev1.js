// Fonction pour demander à l'utilisateur de saisir un nombre
function demanderNombre() {
    let nombre = prompt("Veuillez saisir un nombre :");
    return parseInt(nombre); // Convertir la saisie en nombre entier
}

// Fonction pour afficher une table de multiplication dans le DOM
function afficherTableMultiplication(nombre) {
    let tableMultiplication = document.getElementById("tableMultiplication");
    tableMultiplication.innerHTML = ""; // Effacer le contenu précédent de la table

    // Générer les lignes de la table de multiplication
    for (let i = 1; i <= 10; i++) {
        let resultat = nombre * i;
        let ligne = "<tr><td><li>" + nombre + "</td><td>x</td><td>" + i + "</td><td>=</td><td>" + resultat + "</td></tr>";
        tableMultiplication.innerHTML += ligne;
    }
}
// Fonction pour afficher toutes les tables de multiplication en utilisant la fonction précédente
function afficher() {
    for (let i = 1; i <= 10; i++) {
        afficher(i);
    }
}

// Fonction pour choisir un nombre et afficher sa table de multiplication
function choisirNombre() {
    let nombre = demanderNombre();
    if (isNaN(nombre)) {
        alert("Veuillez saisir un nombre valide.");
    } else {
        afficherTableMultiplication(nombre);
    }
}
