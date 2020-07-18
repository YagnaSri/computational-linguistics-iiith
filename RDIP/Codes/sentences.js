var lanenglish = [
["John ate an apple before afternoon<br>","before afternoon John ate an apple<br>", "John before afternoon ate an apple<br>"],
 ["some students like to study in the night<br>", "at night some students like to study<br>"],
["John and Mary went to church<br>","Mary and John went to church<br>"],
["John went to church after eating<br>","after eating John went to church<br>","John after eating went to church<br>"],
["did he go to market<br>","he did go to market<br>"],
["the woman who called my sister sells cosmetics<br>","the woman who sells cosmetics called my sister<br>","my sister who sells cosmetics called the woman<br>","my sister who called the woman sells cosmetics<br>"],
["John goes to the library and studies<br>","John studies and goes to the library<br>"],
["John ate an apple so did she<br>","she ate an apple so did John<br>"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book<br>","after the teacher returned the book she noticed the error<br>","after the teacher noticed the error she returned the book<br>","she returned the book after the teacher noticed the error<br>","she noticed the error after the teacher returned the book<br>","after she returned the book the teacher noticed the error<br>","after she noticed the error the teacher returned the book<br>"],
["I told her that I bought a book yesterday<br>","I told her yesterday that I bought a book<br>","yesterday I told her that I bought a book<br>","I bought a book that I told her yesterday<br>","I bought a book yesterday that I told her<br>","yesterday I bought a book that I told her<br>"]
];


var allEng= [         "John ate an apple before afternoon",
                      "some students like to study in the night",
                      "John and Mary went to church",
                      "John went to church after eating",
                      "did he go to market",
                      "the woman who called my sister sells cosmetics",
                       "John goes to the library and studies",
                        "John ate an apple so did she",
                     "the teacher returned the book after she noticed the error",
                     "I bought a book yesterday that I told her",
            ]

var lanhindi=[
["राम और श्याम बाजार गयें",
"राम और श्याम गयें बाजार",
"बाजार गयें राम और श्याम",
"गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी",
"श्याम सोया और राम भी",
"सोया श्याम और राम भी",
"सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है",
"मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है",
"उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया",
"खाकर राम सोया",
"राम सोया खाकर",
"खाकर सोया राम",
"सोया राम खाकर",
"सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया",	
"मारकर बिल्लियों को कुत्ता सो गया",	 
"बिल्लियों को मारकर सो गया कुत्ता",	
"मारकर बिल्लियों को सो गया कुत्ता",	
"कुत्ता सो गया बिल्लियों को मारकर",	
"कुत्ता सो गया मारकर बिल्लियों को",	
"सो गया कुत्ता बिल्लियों को मारकर",
"सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है",
"एक लाल किताब है वहाँ",
"वहाँ है एक लाल किताब",
"है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है",
"एक बड़ी सी किताब है वहाँ",
"बड़ी सी एक किताब वहाँ है",
"बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब",
"वहाँ है बड़ी सी एक किताब",
"है वहाँ एक बड़ी सी किताब",
"है वहाँ बड़ी सी एक किताब"]
]

var allhindi=["राम और श्याम बाजार गयें",
                       "राम सोया और श्याम भी",
                       "मैंने उसे बताया कि राम सो रहा है",
                       "राम खाकर सोया",
                       "बिल्लियों को मारकर कुत्ता सो गया",
                       "एक लाल किताब वहाँ है",
                       "एक बड़ी सी किताब वहाँ है"
]

function display()

{
  clear();
	var lang = document.getElementById("select_lang").value;

	//console.log(lang);
  
	if(lang == "Hindi")
      {
    
         document.getElementById("dis1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given          words";
         document.getElementById("dis2").innerHTML="(select the buttons in proper order)";
         var  h = allhindi[Math.floor(Math.random()*allhindi.length)];
         var s_s=h.split(" ");
         jums_s = jumble(s_s);
	 jumbtn(jums_s);
    }
    else if(lang == "English")
{
        document.getElementById("dis1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("dis2").innerHTML="(select the buttons in proper order)";


         var  e = allEng[Math.floor(Math.random()*allEng.length)];
         var s_s=e.split(" ");
	 jums_s = jumble(s_s);
	 jumbtn(jums_s);
        console.log(s_s);
}
  else if(lang == "---Select Language---")
                alert("Select a language");
}


	function jumble(array)
	{
		
                l=array.length;
		console.log(l);
        for(var i=0;i<l;i++)
         {
              var  ord =Math.floor(Math.random()*l);
                 e=array[i];
                array[i]=array[ord];
               array[ord]=e;
         }
		return array;
	}
	function jumbtn(array)
	{
		var count=0;
		var l = array.length;
                var btn=0;

        for(var h =0 ;h<l;h++)
        {
                
                 let body = document.getElementById("demo1");
                 let button = document.createElement("button");
                 let dis = document.createTextNode(array[h]);
                 button.appendChild(dis);
                 body.appendChild(button);
		 count++;
		//console.log(count);
                button.addEventListener("click",function(s_s,l){
                document.getElementById("demo").innerHTML ="Formed Sentence(after selecting words)";
document.getElementById("reform").innerHTML="<button  id='reform' onclick='reset()'>Re-form the sentence</button>";
                document.getElementById("dissent").innerHTML+=this.innerHTML+" ";
               this.style.display="none";
               btn++;
			//console.log(btn);
                        //console.log(jums_s.length);
			if(btn == jums_s.length)
				document.getElementById("check").innerHTML="<button>Check the correctnes of this sentence</button>";
});
}

         }

function reset()
{
	clear();
        document.getElementById("demo1").innerHTML="";
	jumbtn(jums_s);  

}
function clear()
{    
	btn=0;
	document.getElementById("demo1").innerHTML="";
	document.getElementById("demo").innerHTML="";
	document.getElementById("dissent").innerHTML="";
	document.getElementById("reform").innerHTML="";
}

