var i=0;
var j=1;
function check() {
    var a=$('h5');
    var b=[];
    var c=[];
    for(var l=0,j=0,m=1,n=0;l<18;l++){
        if(a[l].style.backgroundColor==='rgb(130, 175, 155)'){
            b[j]=l;
            if(j%4===3){
                c[n]=m;
                n++;m++;
            }
            j++;
        }
    }
    sessionStorage['day']=c;
    sessionStorage['checkout']=b;
    console.log(sessionStorage['checkout']);
    console.log(sessionStorage['day']);
}
function over() {
    if(confirm('本轮游戏是否已结束？')){
        window.location.href='task7.html';
    }

}