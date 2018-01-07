var URL = "http://localhost:8080/api"
	
function recupCollaborateurs(event){
	
	event.preventDefault();
	
	$.getJSON(URL + "/collaborateurs").then(result => {
		
			var collabs = "";
			result.forEach((c) => {
				
				collabs += "<tr onclick=\"preChargeInputs(event)\">"; 
				for(variable in c){
					
					if(variable == "matricule" || variable == "nom" || variable == "prenom")
					{
						collabs += "<td>"+c[variable]+"</td>"
					}; 	
				}
			});
			
		document.getElementById("tabBody").innerHTML = collabs;
	}, erreur => {
		document.getElementById("tab").innerHTML = "<div class=\"alert alert-danger\">Erreur de communication avec l'API backend</div>";
	});
}

function preChargeInputs(event){
	
	event.preventDefault();
	
	document.getElementById("champsCache").innerHTML = event.path[1].firstChild.innerHTML;
	
	$.getJSON(URL + "/collaborateurs/"+event.path[1].firstChild.innerHTML+"/banque").then(result => {
		
		document.getElementById("banque").value = result.nom;
		document.getElementById("bic").value = result.bic;
		document.getElementById("iban").value = result.iban;
		document.getElementById("champsCache").className = "hidden";
		
	}, erreur => {
		document.getElementById("tab").innerHTML = "<div class=\"alert alert-danger\">Erreur de communication avec l'API backend</div>";
	});

}

function valider(event){
	
	event.preventDefault();
	
	var nom = document.getElementById("banque").value;
	var bic = document.getElementById("bic").value;
	var iban = document.getElementById("iban").value;
	var banqueInfos = {nom: nom, bic: bic, iban: iban};

	$.ajax({
	    url: URL+"/collaborateurs/"+document.getElementById("champsCache").innerHTML+"/banque",
	    method: 'PUT',
	    data: JSON.stringify(banqueInfos),
	    contentType: 'application/json',
	    success: function(result) {
	    	document.getElementById("champsCache").innerHTML = "<div class=\"alert alert-success\">Modifications enregistrées!</div>";
	    	document.getElementById("champsCache").className = "show";
	    },
	    error: function(request,msg,error) {
	    	document.getElementById("champsCache").innerHTML = "<div class=\"alert alert-danger\">Erreur de communication avec l'API backend</div>";
	    	document.getElementById("champsCache").className = "show";
	    }
	});
}