console.log('Loaded Up!');
alert("welocme Guys!!!");
var element = document.getElementById('main-text')
element.innerHTML = 'Hello! the content has been changed through JS!!!'

// making an image move by 100px to right
var element2 = document.getElementById('Mypic');
element2.onclick = function(){
    element2.style.marginLeft = '100px';
};
