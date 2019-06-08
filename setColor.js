var body ={
  setColor : function(color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var link={
   setColor:function(color){
     var i;
     var alist=document.querySelectorAll('a');
     for(i=0; i<alist.length; i++){
      alist[i].style.color=color;
    }
  }
}
function nightDayHandler(self){
if(self.value==='night'){
  body.setBackgroundColor('black');
  body.setColor('white');
  self.value='day';
  link.setColor('pink');
} else {
  body.setBackgroundColor('white');
  body.setColor('black')
  self.value='night';
  link.setColor('black');
}
}
