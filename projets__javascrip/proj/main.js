function inscription () {
    // récupèrer les champs
    let input_email = document.getElementById ("email")
    let input_pass = document.getElementById ("pass" )
    var xhr = new XMLHttpRequest ();
    // paramétrage de la requête
    xhr.open('POST', 'http://localhost/backend/traitement_inscription.php' , true);
    // configuration
    xhr.setRequestHeader ("Content-Type" , "application/x-www-form-urlencoded" );
    // écouteur de la réponse
    xhr.onload = function () {
     if (xhr.status === 200) {
     let response = xhr.responseText
     let donneeJson = JSON.parse(response)
     console.log(donneeJson);
     } else {
     console.log('Erreur : code=' + xhr.status);
     }
     };
    // envoie de la requête avec des paramètres
    xhr.send("email=" + encodeURIComponent (input_email .value) + "&pass=" +
    encodeURIComponent (input_pass .value));
    }