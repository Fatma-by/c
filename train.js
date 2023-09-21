function z (x,y){
    let res = 0;
    for(let i = 0; i< x.length;i++){
        if (!y.includes(x[i]))
        res= res + x[i]
        
    }
    for(let j = 0; j< y.length;j++){
        if (!x.includes(y[j]))
        res= res + y[j]
}
    return res}

z([1,2,3],[1,4,7,5])