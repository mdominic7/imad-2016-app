console.log('Loaded Up!');
//alert("welocme Guys!!!");
/*var element = document.getElementById('main-text')
element.innerHTML = 'Hello! the content has been changed through JS!!!'*/

// making an image move by 100px to right
/*var element2 = document.getElementById('Mypic');

var marginLeft=0;*/
/*
function moveRight()
{
    marginLeft = marginLeft + 5;
    element2.style.marginLeft = marginLeft + 'px';
}

element2.onclick = function(){
    var interval = setInterval(moveRight,30);

}*/
var button = document.getElementById('counter');
button.onClick = function(){

    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the request
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status === 200)   //succesful request
            {
                var counter = request.responseText;
            
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            
        }
     }//not done yet
        
        
 };
    
    //make the rquest
   request.open('GET', 'http://mdominic7.imad.hasura-app.io/counter',true);
    request.send(null);

};

