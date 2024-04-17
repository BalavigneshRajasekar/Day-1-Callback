let display =document.getElementById('h1')

setTimeout(function(){
    display.innerText=9
    setTimeout(function(){
        display.innerText=8
        setTimeout(function(){
            display.innerText=7
            setTimeout(function(){
                display.innerText=6
                setTimeout(function(){
                    display.innerText=5
                    setTimeout(function(){
                        display.innerText=4
                        setTimeout(function(){
                            display.innerText=3
                            setTimeout(function(){
                                display.innerText=2
                                setTimeout(function(){
                                    display.innerText=1
                                    setTimeout(function(){
                                        display.classList.add('h2')
                                        display.innerText="Happy Independence day"
                                        
                                        
                                    
                                    },1000)
                                    
                                
                                },1000)
                                
                            
                            },1000)
                        
                        },1000)
                    
                    },1000)
                
                },1000)
            
            },1000)
        
        },1000)
    
    },1000)

},1000)