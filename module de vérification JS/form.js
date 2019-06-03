
function valider() {
                if(document.form2.prenom.value !="" && document.form2.password.value !="" && document.form2.ville.value !="" && document.form2.mail.value !="" && document.form2.nom.value !="" && document.form2.adresse.value !="" && document.form2.cp.value !="" && document.form2.tel.value !=""){
                    
                    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

                    if (document.form2.cp.value.length != 5){
                    alert("Le code postal doit avoir 5 chiffres");
                        return false;
                    }
                    else if(document.form2.tel.value.length != 10) {
                        alert("Le téléphone doit avoir 10 chiffres");
                        return false;
                        }
                    else if(strongRegex.test(document.form2.password.value)) {
                        
                        return true;
                        }
                    else {
                        alert("Le password doit contenir 8 caractères , une minuscule , une majuscule , un chiffre et un caractère spéciale");
                        return false;
                    }
                }
                else {
                    alert("Champs vide saisissez quelque chose");
                    return false;
                }
            }
    
