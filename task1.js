var box=document.getElementsByClassName('box1');
var All=document.getElementsByTagName('div');
var a;
var id;
var stop=1;
var on;
var num1;var num2;var num3;
function randomHexColor() {
    var hex = Math.floor(Math.random() * 16777216).toString(16);
    while (hex.length < 6) {
        hex = '0' + hex;  }
        return '#' + hex; //返回‘#'开头16进制颜色
}
function color() {
    var r=Math.floor(255*Math.random());
    var g=Math.floor(255*Math.random());
    var l=Math.floor(255*Math.random());
    if(r===253&&g===166&&l===0){color()}
    else return 'rgb('+r+','+g+','+l+')';
}
function num() {
    a=Math.floor(8*Math.random());
    return a;
}
function rad() {
    var n1=num();
    var n2=num();
    var n3=num();
    if(n1===n2||n1===n3||n2===n3){rad();}
    else{num1=n1;num2=n2;num3=n3;}
}
function light() {
    for (var i=0;i<=8;i++) {
        box[i].style.backgroundColor='#FDA600';
    }
    rad();
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log('分界');
    box[num1].style.backgroundColor=color();
    box[num2].style.backgroundColor=color();
    box[num3].style.backgroundColor=color();
}
function start() {
    if(stop===1||on===1){
        id=setInterval(light,1000);
    }
    stop++;
}
function end() {
    on=1;
    clearInterval(id);
    for (var i=0;i<=8;i++) {
        box[i].style.backgroundColor='#FDA600';
    }
}

