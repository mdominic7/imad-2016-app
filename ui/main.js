
var button = document.getElementById('counter');
button.onClick = function()
{
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
            //not done yet
        }
        
    };
    
    //make the rquest
    request.open('GET', 'http://mdominic7.imad.hasura-app.io/counter',true);
    request.send(null);
};


