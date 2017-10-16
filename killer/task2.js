var a;
var num;
var bad;
var good;
var kill;
var vill;
var orginArrary=[];
document.onkeydown=function (event) {
    var e=event||window.event||arguments.callee.caller.arguments[0];
    if (e&&e.keyCode===13){
        kk();
    }
};
function checkform(obj) {
    var number=obj;
    var regx=/[^\d]/;
    if (regx.test(number)){
        confirm("请输入正确数");
        return false;
    }
    else key();
}
function radomArray(array) {
    var _array=array.concat();
    for(var i=_array.length;i--;) {
        var j=Math.floor(Math.random()*(i+1));
        var temp=_array[i];
        _array[i]=_array[j];
        _array[j]=temp;
    }
    return _array;
}
function key() {
    a=document.getElementById("nn").value;
    num=parseInt(a);
    kill=document.getElementById('num1');
    vill=document.getElementById('num2');
    if (num&&num>=3&&num<=18) {
        if (num&&num>=3&&num<=8){
            good=num-=1;
            bad=1;
            orginArrary[0]='杀手';
            for(orginArrary.length=num;num>=1;num--){
                orginArrary[num]='村民';
            }
        }
        if (num&&num>=9&&num<=11) {
            good=num-2;
            bad=2;
            num-=1;
            orginArrary[0]='杀手';
            orginArrary[1]='杀手';
            for(orginArrary.length=num;num>=2;num--){
                orginArrary[num]='村民';
            }
        }
        if (num&&num>=12){
            good=num-3;
            bad=3;
            num-=1;
            orginArrary[0]='杀手';
            orginArrary[1]='杀手';
            orginArrary[2]='杀手';
            for(orginArrary.length=num;num>=3;num--){
                orginArrary[num]='村民';
            }
        }
        var narrary=radomArray(orginArrary);
        kill.innerHTML=bad;
        vill.innerHTML=good;
        sessionStorage['narrary']=narrary;
    }
    else {
        confirm("请输入正确数");
    }
}
function kk() {
    a=document.getElementById("nn").value;
    checkform(a);
}
function next() {
    if (parseInt($('#nn').val())){
        kk();
        window.location.href='task3.html';
    }
    else {confirm("请输入正确数");}
}