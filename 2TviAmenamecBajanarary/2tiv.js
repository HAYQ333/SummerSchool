<script>
function maxComDen(a,b){
    let max,min
    
    if (a>b){
        max = a
        min = b
    }
    else {
        min = a 
        max = b 
    }
    
    for (let i=min; i>0; i--) {
        let d = min%i
        if (d==0) {
            d=max%i
            if (d==0) {
                return i 
                
            }
                
        }
    }
}
console.log(maxComDen(24,6));  
</script>
