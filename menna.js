// let hh = document.getElementById('hh')
let res=document.getElementById("reslt")
let res2=document.getElementById('reslt2');
   let text = res.textContent;
   let final
let clickCount = 0;
let clickTimeout;
//  hh.addEventListener('click', function () {
  // clickCount++;

  // if (clickCount === 1) {
  // res.innerHTML+='('
    //  clickTimeout = setTimeout(() => {
      //  clickCount = 0; // reset if second click doesn't happen in 1.5s
  //  }, 4500);
  // } else if (clickCount === 2) {
    // clearTimeout(clickTimeout);
    // res.innerHTML+=')'
    //  clickCount = 0;
  // }
// }) 
let waitingForClosing = false;

function handleParentheses() {
  

  if (!waitingForClosing) {
    res.innerText += "(";
    waitingForClosing = true;
  } else {
    res.innerText += ")";
    waitingForClosing = false;
  }
}


function written(value){
res.innerHTML+=value
};

  document.getElementById("clear").addEventListener("click", function() {
    res.innerHTML=' '
    res2.innerHTML=' '
  });
  document.getElementById("delet").addEventListener("click", function() {
    
    
     let text = res.textContent;
    res.innerHTML=text.slice(0,-1)

  });
  document.getElementById("equal").addEventListener("click", function() {
    let text = res.textContent;
    if(text==='1461989'){
res2.innerHTML='i love u mom <3'
    }
   else if(text==='942013'){
      res2.innerHTML='u are a stupied girl somiia'
    }
    else if(text==='2112008'){
      res2.innerHTML='i love u girl <3'
    }
    else if (text==='1052005'){
      res2.innerHTML='ur computer is making a good job'
    }
    else{     let text = res.textContent;
 
res2.innerHTML=eval(text)
}

  }
  



  );










   


 

     
