(function(){
    let AjaxRequest;
    document.getElementById('ajax_js').addEventListener('click' , chargerAjax);
    function chargerAjax(){
        AjaxRequest = new XMLHttpRequest();
        if(!AjaxRequest){
            console.log("Sa fonctionne pas ta merde FDP");
            return false;
        }
        AjaxRequest.onreadystatechange = chargeContenu;
        AjaxRequest.open("GET" , 'assets/ajax/ajax.html');
        AjaxRequest.send();
    }
    function chargeContenu(){
        if(AjaxRequest.readyState === XMLHttpRequest.DONE){
            if(AjaxRequest.status === 200){
                document.getElementById('charge').innerHTML = AjaxRequest.responseText;
            }
            else {
                alert("t'es qu'un gros con, c'est mal coder FDP");
            }
        }
    }
})();
// ajax en Jquery
$(document).ready(function(){
    // $('#ajax_jquery').on('click', function(){
    //     $('#charge2').load('assets/ajax/ajax2.html');
    // });
    // $('#ajax_jquery').on('click', function(){
    //     $.ajax({
    //         url : 'assets/ajax/ajax2.html',
    //         method: 'GET',
    //         dataType: 'html',
    //     })
    //     .done(function(response){
    //         $('#charge2').html(response);
    //     })
    //     .fail(function(error){
    //         alert('Sa fonctionne pas du gland');
    //     });
    // });
    $('#formulaire_ajax').on('submit',function(){
        let formulaire = $('#formulaire_ajax').serialize();
        $.ajax({
            url: 'assets/ajax/formulaire.php',
            method: 'GET',
            // data: 'nom='+$('#nom').val()+'&prenom='+$('#prenom').val()+ '&email=' +$('#email').val(),
            data: formulaire,
            dataType: 'html',
        })
        .done(function(response){
            alert(response);
        })
        .fail(function(error){
            alert('Le formulaire peux pas être enregistrer car je suis un code de merde');
        });
        return false;
    });

    $('#email').on('change', function(){
        let email = $(this).val();
        if(email.length >= 10){
            $(this).css('background', 'green');
        $.ajax({
            url: 'assets/ajax/email.php', 
            method: 'GET',
            data: 'email=' +email,
            dataType: 'html',
            success: function(response){
                alert(response); 
            },
            error: function(error){
                alert('La requête a échoué :('); 
            }
        });
    } else {
        $(this).css('background', 'red');
        $('#email_saisie').empty();
    }
    });
});
