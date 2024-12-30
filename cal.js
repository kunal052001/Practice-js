function calculate()
{
       n1=document.getElementById("n1").value;
       op=document.getElementById("op").value;
       n2=document.getElementById("n2").value;
       if(op=='+')
       {
        res=n1+n2;
       }
       else 
       if(op=='-')
       {
        res=n1-n2;
       }
       else
       if(op=='*')
       {
        res=n1*n2;
       }
       else
       if(op=='/')
       {
         if(n2==0)
         {
            res="cannot divide by zero";
         }
         else{
            res=n1/n2;
         }
       }
       else{
          res="plese enter proper value";
       }
       document.getElementById("display").textContent=res;
}