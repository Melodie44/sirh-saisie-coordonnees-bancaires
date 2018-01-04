var URL = "http://localhost:8080/api"
	
function recupCollaborateurs(event){
	
	event.preventDefault();
	
	$.getJSON(URL + "/collaborateurs").then(result => {
			
			var collabs = "";
			result.forEach((c) => {
				collabs += "<tr>"; 
				for(variable in c){
					if(variable == "matricule" || variable == "nom" || variable == "prenom"){
					collabs += "<td>"+c[variable]+"</td>"}; 
				}
				collabs += "</tr>";
			});
		
		document.getElementsByTagName("tbody").innerHTML = collabs;
	});
}

function valider(event){
	
	event.preventDefault();
	
	var banque = document.getElementById("banque").value;
	var bic = document.getElementById("bic").value;
	var iban = document.getElementById("iban").value;
	
	$.getJSON(URL + "/collaborateurs/")
}