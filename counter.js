
  
    var num =0;
    var ans =document.getElementById("ans");
    function Inre(){
        num++;
        ans.innerHTML = num
    }
    function Decre(){
        if(num < 1){
            num=0;
            ans.innerHTML=num
        }
        else{
            num--;
            ans.innerHTML=num
        }
    }