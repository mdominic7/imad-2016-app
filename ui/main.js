console.log('Loaded Up!');
alert("welocme Guys!!!");
/*var element = document.getElementById('main-text')
element.innerHTML = 'Hello! the content has been changed through JS!!!'*/

// making an image move by 100px to right
var element2 = document.getElementById('Mypic');

var marginLeft=0;

function moveRight()
{
    marginLeft = marginLeft + 5;
    element2.style.marginLeft = marginLeft + 'px';
}

element2.onclick = function(){
    var interval = setInterval(moveRight,30);

};
