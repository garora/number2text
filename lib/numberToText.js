function numberToText(num)
{
  
  if(isNaN(num))
     return "Invalid number.";
  
  if(!isInt(num))
    return "Currently support for decimal is unavailable.";

  if(!isInRange(num))
    return "Please enter number between 0 - 999999999.";

  return toText(num,'Indian'); //currently supports for Indian number conversions    
}


function isIny(num)
   return (num===parseInt(num,10));

function isInRange(num)
  return ((num >= 0) || (num <= 999999999));

function toText(num,type)
{
  return toIndianText(num);
}

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
        res += (convert_number(Gn) + " Crore"); 
    } 
    if (kn>0) 
    { 
            res += (((res=="") ? "" : " ") + 
            convert_number(kn) + " Lakh"); 
    } 
    if (Hn>0) 
    { 
        res += (((res=="") ? "" : " ") +
            convert_number(Hn) + " Thousand"); 
    } 

    if (Dn) 
    { 
        res += (((res=="") ? "" : " ") + 
            convert_number(Dn) + " Hundred"); 
    } 


    var ones = Array("", "One", "Two", "Three", "Four", "Five", "Six","Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen","Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen","Nineteen"); 
    var tens = Array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty","Seventy", "Eighty", "Ninety");

    if (tn>0 || one>0) 
    { 
        if (!(res=="")) 
        { 
            res += " AND "; 
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
        res = "zero"; 
    } 
    return res;

}

//export
module.exports = numberToText;