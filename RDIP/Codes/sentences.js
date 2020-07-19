var lanenglish = [
["John ate an apple before afternoon","before afternoon John ate an apple", "John before afternoon ate an apple"],
 ["some students like to study in the night", "at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]
];



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




var array= ["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम","राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी","मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम","राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम","बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को","एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब","एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब","John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple","some students like to study in the night","at night some students like to study","John and Mary went to church","Mary and John went to church","John went to church after eating","after eating John went to church","John after eating went to church","did he go to market","he did go to market","the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics", "John goes to the library and studies","John studies and goes to the library", "John ate an apple so did she","she ate an apple so did John", "the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book", "I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her" ];

  y = [Math.floor(Math.random()*lanenglish.length)];
 y =[Math.floor(Math.random()*lanhindi.length)];

function display() 
{
   clear();
	if(document.getElementById("select_lang").value=='Hindi')
      {
         document.getElementById("show").innerHTML="";
         document.getElementById("dis1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
         document.getElementById("dis2").innerHTML="(select the buttons in proper order)";
//console.log(y);
        t = lanhindi[y][0];
         var s_s=t.split(" ");
         jums_s = jumble(s_s);
	 jumbtn(jums_s);
    }
    else if(document.getElementById("select_lang").value=='English')
{
        document.getElementById("dis1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("dis2").innerHTML="(select the buttons in proper order)";

 document.getElementById("show").innerHTML="";
        
        t=lanenglish[y][0];
         var s_s=t.split(" ");
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
   for(var i=0;i<l;i++)
         {
              var  ord =Math.floor(Math.random()*l);
                
                 var temp=array[i];
                array[i]=array[ord];
               array[ord]=temp;
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
    sentence=document.getElementById("dissent").innerHTML;
                               //  console.log(sentence);
			
                        //console.log(jums_s.length);
			if(btn == jums_s.length)
				document.getElementById("check").innerHTML="<button  onclick='check()'>Check the correctnes of this sentence</button>";
});

         }
}

function check()
{
        var j,crt;
                   for(j=0;j<array.length;j++)
{
                     var str = array[j];
                     var sent=sentence.trim();
              crt = str.localeCompare(sent);
                     if(crt == 0){
                             document.getElementById('crt').innerHTML ="Right Answer!";
                     return;
                     }
            }
             document.getElementById('crt').innerHTML= "Wrong Answer";
             document.getElementById('showbtn').innerHTML="<button onclick='showing()'>Get Correct Sentence</button>";
}

function showing()
{
         ans="";
         num =0;
 if(document.getElementById("select_lang").value=='English')
          {
          // console.log(lanenglish[y]);
           num = lanenglish[y].length-1;
      document.getElementById("showbtn").innerHTML="<button onclick='hide()' >Hide correct answer</button>";
             for(let k=0;k<=num;k++)
               {
                               ans = ans+"<center>"+lanenglish[y][k]+"<br></center>";
                 }
 document.getElementById("show").innerHTML = ans;
            }
 else if(document.getElementById("select_lang").value=='Hindi')
{
           num = lanhindi[y].length-1;
      document.getElementById("showbtn").innerHTML="<button onclick='hide()' >Hide correct answer</button>";
             for(let k=0;k<=num;k++)
{
                               ans = ans+"<center>"+lanhindi[y][k]+"<br></center>";
}
document.getElementById("show").innerHTML = ans;
}
}


function hide(){
document.getElementById("showbtn").innerHTML="<button onclick='toggle()'> Get Correct Sentence</button>"
document.getElementById("show").innerHTML="";
}
 
function toggle(){
while(document.getElementById("show").innerHTML == ""){
document.getElementById('showbtn').innerHTML ="<button onclick='hide()'>hide correct answer</button>"
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
                   document.getElementById("check").innerHTML="";             
                   document.getElementById("crt").innerHTML="";
                    document.getElementById("showbtn").innerHTML="";
                    document.getElementById("show").innerHTML=""
}