$( document ).ready(function() {
   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );

    // Y mettre le code jQuery pour valider tous les champs du formulaire
	$('#myModal').modal("show");

});

function showModal() {
	var city = $('#exampleInputAdresse').val();
	var image = '<img width="250px" src="https://maps.googleapis.com/maps/api/staticmap?markers='+city+'&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg">';
	$('#modal-content').html(image);
	$('#myModal').modal("show");
}
