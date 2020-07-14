function display(){
        var lang = document.getElementById("select_lang").value;
	console.log(lang);
	if (lang == "English" || lang == "Hindi")
	{
	document.getElementById("dis1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
	document.getElementById("dis2").innerHTML="(select the buttons in proper order)";
	}
	else
		alert("Select a language");

	}

