var URL = "http://localhost:8080/api"
	
function recupCollaborateurs(event){
	
	event.preventDefault();
	
	$.getJSON(URL + "/collaborateurs").then(result => {
		
		if(result == ""){
			
			var collaborateurs = result
		}
	
	})
	
}

function valider(event){
	
	event.preventDefault();
	
	var banque = document.getElementById("banque").value;
	var bic = document.getElementById("bic").value;
	var iban = document.getElementById("iban").value;
	
	$.getJSON(URL + "/collaborateurs/")
}