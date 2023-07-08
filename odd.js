(function(a){
    var a1="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            a1+=a[i]
        }
    }
    a1+=a[a.length-1]
    console.log(a1);
})([10,21,30,41,50,61]);