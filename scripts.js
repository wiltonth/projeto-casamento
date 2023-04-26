var btn = document.querySelector('#show-or-ride');
var container = document.querySelector('.container');
var bt = document.querySelector('.but'); 

btn.addEventListener('click', function(){

        if(container.style.display === 'block'){
            container.style.display = 'none';
        }else{
            container.style.display = 'block';
        }

});

btn.addEventListener('click', function(){

        if(bt.style.display === 'block'){
            bt.style.display = 'none';
        }else{
            bt.style.display = 'block';
        }

})
