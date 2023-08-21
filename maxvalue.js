function maxvalue(num){
    var max = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
        }
        return(max);
}
console.log(maxvalue([5,9,-2,-3,15,7])); 