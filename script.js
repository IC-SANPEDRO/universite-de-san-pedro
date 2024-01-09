const displayform=_('displayform');
        const forlogin =_('forlogin');
        const formlogin=_('formlogin');
        const forregister =_('forregister');
        const formregister =_('formregister');
        const formContainer =_('formContainer');
        const formbutton =_('formbutton')
        displayform.addEventListener('click',showform)
       
       
        forlogin.addEventListener('click', () => {
            forlogin.classList.add('active');
                forregister.classList.remove('active');
                if(formlogin.classList.contains('toggleform')){
                    formContainer.style.transform = 'translate(0%)';
                    formContainer.style.transition = 'transform .5s';
                    formregister.classList.add('toggleform');
                    formlogin.classList.remove('toggleform');
            }
        });
        
        forregister.addEventListener('click', () => {
            
                forlogin.classList.remove('active');
                forregister.classList.add('active');
                if(formregister.classList.contains('toggleform')){
                    formContainer.style.transform = 'translate(-100%)';
                    formContainer.style.transition = 'transform .3s';
                    formregister.classList.remove('toggleform');
                    formlogin.classList.add('toggleform');
            }
        });        
        
        function _(e) {
            return document.getElementById(e);
        }
        
        function showform() {
            document.querySelector('.form-wrapper .card').classList.toggle('show');
        }
        
        
        formregister.addEventListener("submit", function(event){
            event.preventDefault();
            var nom = document.getElementsByName("nom")[0].value;
            var prenom = document.getElementsByName("prenom")[0].value;
            var email = document.getElementsByName("email")[0].value;
            var selectedValue1 = _("Niveau").value;
            var selectedValue2 = _("Filières").value;
            
            console.group('Inscription');
            console.log("Nom :", nom);
            console.log("Prenom :", prenom);
            console.log("Email :", email);
            console.log("Niveau :", selectedValue1 );
            console.log("Filière :", selectedValue2);
            console.groupEnd();
            var consoleOutput = _("consoleOutput");
            var consoleMessages = consoleOutput.innerText;
            consoleOutput.innerHTML = consoleMessages.replace(/\n/g, "<br>");
        })
        
        formregister.addEventListener("submit", function(event){
            event.preventDefault();
            afficherMessage();
        });
        function afficherMessage(){
            var messageElement = document.getElementById('message');
            messageElement.innerHTML = 'Merci pour votre insciption'

        }
        function disableSubmitButton(){
            document.getElementById('submitBtn').disabled= true;
        } //
        
        document.getElementById('home').addEventListener('click', function() {
            document.getElementById('accueil').style.display = 'block';
            document.getElementById('contactez-nous').style.display = 'none';
            document.getElementById('inscrivez-vous').style.display ='none';
            document.getElementById('connectez-vous').style.display ='none';
        });

        document.getElementById('contact').addEventListener('click', function() {
            
        });
        document.getElementById('inscription').addEventListener('click', function() {
            document.getElementById('accueil').style.display = 'none';
            document.getElementById('contactez-nous').style.display = 'none';
            document.getElementById('inscrivez-vous').style.display ='block';
            document.getElementById('connectez-vous').style.display ='none';
        });
        document.getElementById('connexion').addEventListener('click', function() {
        document.getElementById('accueil').style.display = 'none';
        document.getElementById('contactez-nous').style.display = 'none';
        document.getElementById('inscrivez-vous').style.display ='none';
        document.getElementById('connectez-vous').style.display ='block';
        });
        // Fonction pour ouvrir le formulaire Google dans la section
    function ouvrirGoogleForm() {
        // Remplacez 'URL_DU_FORMULAIRE' par l'URL de votre formulaire Google
        var urlFormulaire = 'https://forms.gle/a2Y7n7fQd3EAbgSB6';

        // Obtient la référence de la section
        var formulaireSection = document.getElementById('formulaireSection');

        // Charge le formulaire Google dans la section en utilisant innerHTML
        formulaireSection.innerHTML = '<iframe src="' + urlFormulaire + '" width="100%" height="600px" frameborder="0" marginheight="0" marginwidth="0">Chargement...</iframe>';
    }
    
    


  function rafraichirPage() {
    // Rafraîchir la page
    location.reload();}
    

    function afficherCacher(welcome) {
  // Récupérer l'élément par son ID
  var paragraphe = document.getElementById(welcome);

  // Récupérer toutes les divs
  var toutesLesDivs = document.querySelectorAll('.sub-section');

  // Masquer les autres divs
  toutesLesDivs.forEach(function(div) {
    if (div.id !== welcome) {
      div.classList.remove('visible');
    }
  });

  // Changer la propriété display pour le faire apparaître ou disparaître
  paragraphe.classList.toggle('visible');
}

 const menuButton = _('menu'); // Ajout d'une référence au bouton de menu pour les petits écrans

// Gestionnaire d'événement pour le bouton de menu sur les petits écrans
menuButton.addEventListener('click', function () {
    // Fermer le menu après la sélection d'une option
    formContainer.style.transform = 'translate(0%)';
    formContainer.style.transition = 'transform .5s';
    formregister.classList.add('toggleform');
    formlogin.classList.remove('toggleform');
});   
    
    
    
    
