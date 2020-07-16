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
        var lang = document.getElementById("select_lang").value;
       //console.log(lang);
         if(lang == "Hindi")
      {
    
         document.getElementById("dis1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given          words";
         document.getElementById("dis2").innerHTML="(select the buttons in proper order)";
         var  h = allhindi[Math.floor(Math.random()*allhindi.length)];
         var h_s=h.split(" ");
         console.log(h_s);
         for(var i=0;i<h_s.length;i++)
          {
              var  ord =Math.floor(Math.random()*h_s.length);
                 h=h_s[i];
                h_s[i]=h_s[ord];
               h_s[ord]=h;
          }
        for(var l =0 ;l<h_s.length;l++)
          {
                 let body = document.getElementsByTagName("body")[0];
                 let button = document.createElement("button");
                 let dis = document.createTextNode(h_s[l]);
                 button.appendChild(dis);
                 body.appendChild(button);
          }
    }
    else if(lang == "English")
{
        document.getElementById("dis1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words";
        document.getElementById("dis2").innerHTML="(select the buttons in proper order)";


         var  e = allEng[Math.floor(Math.random()*allEng.length)];
         var e_s=e.split(" ");
        console.log(e_s);
        for(var i=0;i<e_s.length;i++)
         {
              var  ord =Math.floor(Math.random()*e_s.length);
                 e=e_s[i];
                e_s[i]=e_s[ord];
               e_s[ord]=e;
         }
        for(var h =0 ;h<e_s.length;h++)
        {

                 let body = document.getElementsByTagName("body")[0];
                 let button = document.createElement("button");
                 let dis = document.createTextNode(e_s[h]);
                 button.appendChild(dis);
                 body.appendChild(button);
        }
}


    else if(lang == "---Select Language---")    
                alert("Select a language");

}