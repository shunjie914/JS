var liveKill=0;
var liveVill=0;
var player= function ($elem) {
    var log = function (fsm, previousState) {
        console.log('currentState is : ' + fsm.currentState + ((previousState || '') && (' , and previous state is : ' + previousState)));
    };
    return {
        currentState: 'live',
        states: {
            'live': {
                to: 'death',
                action:'Death'
            },
            'death': {
                to: 'died',
                action:'Died'
            }
        },
        init: function (obj) {
            var self = this;
            (function () {
                self.transition(args);
            }());
            log(this);
        },
        transition: function (e) {
            var old = this.currentState;
            this.currentState = this.states[old].to;
            var action = this.states[old].action;
            (action in this) && this[action](old);
        },
        Death: function (fromState) {
            $elem.parent().siblings().css('background-color','#82AF9B');
            var kt=choose();
            console.log(kt);
            sessionStorage['color']=kt;
            log(this, fromState);
            judge();
            window.location.href='task5.html';
        },
        Died: function (fromState) {
            $elem.removeClass('on');
            log(this, fromState);
        }
    }
};
function choose() {
    var box=document.getElementsByClassName('box3-t');
    var a=[];
    for (var i=0,j=0,k=0;i+1<arrary.length;i+=3,j++){
        if (box[j].style.backgroundColor==='rgb(130, 175, 155)'){
            a[k]=j;
            k++;
        }
    }
    return a;
}
function judge() {
    for(var i=0,j=1;i<arrary.length;i+=3,j++){
        var a=$('#player'+j+'');
        if(a.prev().prev().css('backgroundColor')==="rgb(243, 200, 129)"&&a.prev().prev().html()==='杀手'){
            liveKill++;
        }
        if(a.prev().prev().css('backgroundColor')==="rgb(243, 200, 129)"&&a.prev().prev().html()==='村民'){
            liveVill++;
        }
    }
    if(liveVill<=liveKill||liveKill===0){
        var gameover=1;
        sessionStorage['liveKill']=liveKill;
        sessionStorage['liveVill']=liveVill;
    }
    sessionStorage['judge']=gameover;
}
function sure() {
    var a=100;
    var box=document.getElementsByClassName('box3-t');
    for (var k=0,j=1,l=0;k+1<arrary.length;k+=3,j++){
        if($('#player'+j+'').css('display')==='block'){
            a=j-1;
            l++;
        }
    }
    if(l===1&&a!==100){
        $('.box3-t')[parseInt(a)].style.backgroundColor='rgb(130, 175, 155)';
        var kt=choose();
        var edm=parseInt(sessionStorage['sign']);
        sessionStorage['endnum'+edm+'']=a+1;
        sessionStorage['endhtml'+edm+'']=box[a].innerHTML;
        sessionStorage['color']=kt;
        judge();
        sessionStorage['sign']=parseInt(sessionStorage['sign'])+1;
        window.location.href='task5.html';
    }
}