function numberToText(num, language)
{
  var lang = new Array("indian", "english"); //make in lower case
  

  if(isNaN(num))
     return "Invalid number.";
  
  if(!isInt(num))
    return "Currently, currency/decimal support is unavailable.";

    if(num < 0)
        return "Please enter +ve number only.";

  /* To disallow large numbers -uncomment
  if(!isInRange(num))
    return "Please enter number between 0 - 999999999.";
*/
    if(isBlank(language))
        language = "indian";

   if(lang.indexOf(language.toLowerCase()) == -1)
        return "Support for language: " + language + " is not available. Available languages are: " + lang.toString();
       
  return toText(num,language); //currently supports for Indian number conversions    
}


function isInt(num)   {return (num === parseInt(num,10));}

function isInRange(num)  {return !((num < 0) || (num > 999999999));}

function isBlank(str) {    return (!str || /^\s*$/.test(str));}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function toText(num,type){  
    var res;

    switch (type.toLowerCase()) {
        case "indian":
            res = toIndianText(num);
            break;
        case "english":
            res = toEnglishText(num);
            break;
    }
    return res;
}

function toEnglishText(num)
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
        if(isCurrency())
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
function toIndianText(num){
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
        if(isCurrency())
        {
            if (!(res=="")) 
            { 
                res += " And ";  //Reserve it only for Currentcy 
            } 
        }

        if (!(res=="")) 
            { 
                res += " ";  
            } 

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

function isCurrency()
{
    return false;   //Reserved for future, this function will accept one parameter for currency
}

//export
module.exports = numberToText;
