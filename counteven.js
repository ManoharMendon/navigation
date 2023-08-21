function countevennum(num){
    var even= 0;
    for(var i= 0; i<num.length; i++){
        if((num[i]%2)=== 0){
            even++;
            
        }
    }
   return even;
    

}
console.log(countevennum([1,2,5,6,8,12,10]));