var box=document.getElementsByClassName('box1');
var a;
var id;
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
    return 'rgb('+r+','+g+','+l+')';
}
function num() {
    a=Math.floor(8*Math.random());
    return a;
}
function light() {
    for (var i=0;i<=8;i++) {
        box[i].style.backgroundColor='#FDA600';
    }
    box[num()].style.backgroundColor=randomHexColor();
    box[num()].style.backgroundColor=randomHexColor();
    box[num()].style.backgroundColor=randomHexColor();
}
function start() {
    id= setInterval(light,1000);
}
function end() {
    clearInterval(id);
    for (var i=0;i<=8;i++) {
        box[i].style.backgroundColor='#FDA600';
    }
}

