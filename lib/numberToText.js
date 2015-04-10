/**
* Note: This file require refactoring
*/

function numberToText(num, language,isCurrency)
{
  var lang = new Array("indian", "english"); //make in lower case
  var stringValue = "This is a String";
  

  if(isNaN(num))
     return "Invalid number.";
  
  if(num < 0)
    return "Please enter +ve number only.";
    
  if(isBlank(language) || isNull(language))
    language = "indian";

   if (typeof language != typeof stringValue)
    return "Please enter valid type.";
    
      
  if(lang.indexOf(language.toLowerCase()) == -1)
        return "Support for type: " + language + " is not available. Available types are: " + lang.toString();
       
  return toText(num,language,isCurrency); //currently supports for Indian number conversions    
}


function isNull(varIsNull){  return (typeof varIsNull === 'undefined'); }

function isBlank(str) {    return (!str || /^\s*$/.test(str));}

function toText(num,type,isCurrency){  
    
    var res;
    var fract_part = Math.round(frac_one(num)*100);
    var fract_num  = "";

    switch (type.toLowerCase()) {
        
        case "indian":           
            if(fract_part > 0) 
            {            
                if(isCurrency)
                    fract_num =  "And "+ toIndianText(fract_part,isCurrency) + " Paise" ;
                else
                    fract_num =  " Point "+ toIndianText(fract_part,isCurrency);
            }

            if(isCurrency)
                res = toIndianText(num,isCurrency) + " Rupee " + fract_num+" only";
            else
                res = toIndianText(num,isCurrency) + fract_num;
            break;
        case "english":
            if(fract_part > 0) 
            {            
                if(isCurrency)
                    fract_num =  "And "+ toEnglishText(fract_part,isCurrency) + " Cent" ;
                else
                    fract_num =  " Point "+ toEnglishText(fract_part,isCurrency);
            }

            if(isCurrency)
                res = toEnglishText(num,isCurrency) + " Dollar " + fract_num+" only";
            else
                res = toEnglishText(num,isCurrency) + fract_num;

            break;
    }
    return res;
}

function frac_one(num) {return num % 1;}

function toEnglishText(num,isCurrency)
{
    //For English conversion

    var quintillion = Math.floor(num / 1000000000000000000); /* quintillion */
    num -= quintillion * 1000000000000000000;
    var quar = Math.floor(num / 1000000000000000); /* quadrillion */
    num -= quar * 1000000000000000;
    var trin = Math.floor(num / 1000000000000); /* trillion */
    num -= trin * 1000000000000;
    var Gn = Math.floor(num / 1000000000); /* billion */
    num -= Gn * 1000000000;
    var million = Math.floor(num / 1000000); /* million */
    num -= million * 1000000;
    var Hn = Math.floor(num / 1000); /* thousand */
    num -= Hn * 1000;
    var Dn = Math.floor(num / 100); /* Tens (deca) */
    num = num % 100; /* Ones */
    var tn = Math.floor(num / 10);
    var one = Math.floor(num % 10);
    var res = "";

    if (quintillion > 0) {
        res += (toEnglishText(quintillion) + " Quintillion");
    }
    if (quar > 0) {
        res += (toEnglishText(quar) + " Quadrillion");
    }
    if (trin > 0) {
        res += (toEnglishText(trin) + " Trillion");
    }
    if (Gn > 0) {
        res += (toEnglishText(Gn) + " Billion");
    }
    if (million > 0) {
        res += (((res == "") ? "" : " ") + toEnglishText(million) + " Million");
    }
    if (Hn > 0) {
        res += (((res == "") ? "" : " ") + toEnglishText(Hn) + " Thousand");
    }

    if (Dn) {
        res += (((res == "") ? "" : " ") + toEnglishText(Dn) + " Hundred");
    }


    var ones = Array("", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eightteen", "Nineteen");
    var tens = Array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety");

    if (tn > 0 || one > 0) {
        if(isCurrency)
        {
            if (!(res == "")) {
            res += " And "; //for currency only
            }
        }

        if (!(res == "")) {
            res += " ";
        }


        if (tn < 2) {
            res += ones[tn * 10 + one];
        } else {

            res += tens[tn];
            if (one > 0) {
                res += ("-" + ones[one]);
            }
        }
    }

    if (res == "") {
        res = "Zero";
    }
    return res;
}

//This function is used for Indian conversion only
function toIndianText(num,isCurrency){
    var Gn = Math.floor(num / 10000000);  /* Crore */ 
    num -= Gn * 10000000; 
    var kn = Math.floor(num / 100000);     /* lakhs */ 
    num -= kn * 100000; 
    var Hn = Math.floor(num / 1000);      /* thousand */ 
    num -= Hn * 1000; 
    var Dn = Math.floor(num / 100);       /* Tens (deca) */ 
    num = num % 100;               /* Ones */ 
    var tn= Math.floor(num / 10); 
    var one=Math.floor(num % 10); 

    var res = ""; 

    if (Gn>0) 
    { 
        res += (toIndianText(Gn) + " Crore"); 
    } 
    if (kn>0) 
    { 
            res += (((res=="") ? "" : " ") + 
            toIndianText(kn) + " Lakh"); 
    } 
    if (Hn>0) 
    { 
        res += (((res=="") ? "" : " ") +
            toIndianText(Hn) + " Thousand"); 
    } 

    if (Dn) 
    { 
        res += (((res=="") ? "" : " ") + 
            toIndianText(Dn) + " Hundred"); 
    } 


    var ones = Array("", "One", "Two", "Three", "Four", "Five", "Six","Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen","Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen","Nineteen"); 
    var tens = Array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty","Seventy", "Eighty", "Ninety");

    if (tn>0 || one>0) 
    { 
          if(isCurrency)
          {
              if (!(res=="")) 
                res += " And ";
          }

        if (!(res=="")) 
                res += " ";

        if (tn < 2) 
        { 
            res += ones[tn * 10 + one]; 
        } 
        else 
        { 

            res += tens[tn];
            if (one>0) 
            { 
                res += ("-" + ones[one]); 
            } 
        } 
    }

    if (res=="")
    { 
        res = "Zero"; 
    } 
    return res;

}


//export
module.exports = numberToText;
