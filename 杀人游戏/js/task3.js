var i=0;
var j=1;
var k=0;
function check() {
    if($('#id').html()==='法官查看'){
        window.location.href='task4.html';
    }
    $("#front").toggle();
    $("#back").toggle();
    i++;
    if(i%2===0){
        j++;
        $('#num').html(j);
    }
    times(i,j);
    $('#role').html(arrary[k] + arrary[k+1]);
    k+=1.5;
}
function times(a,b) {
    if(a%2===1){$('#id').html('隐藏并传递给'+(b+1)+'号');}
    else $('#id').html('查看'+b+'号身份');
    if(k+3>arrary.length){
        $('#id').html('法官查看');
    }
}
function tr () {
	window.location.href='task2.html'
}
