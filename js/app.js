var URL = "http://localhost:8080/api"
	
function recupCollaborateurs(event){
	
	event.preventDefault();
	
	$.getJSON(URL + "/collaborateurs").then(result => {
		
		if(result != ""){
			
			var collab;
			var collabs;
			
			for(collab in result){
				
				collabs += "<tr><td>"+result[collab].matricule+"</td>" +
							   "<td>"+result[collab].nom+"</td>"+
							   "<td>"+result[collab].prenom+"</td></tr>"
			}
			
			document.getElementByTagName("tbody").innerHTML = collabs
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