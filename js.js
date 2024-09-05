
 function Mudartema(){
    
  
    const body = document.body;

    const tema_atual=body.getAttribute('data-bs-theme');
    const nav=document.getElementById('navbar');
   if(tema_atual==="ligth"){
body.setAttribute('data-bs-theme',"dark");
nav.classList.remove('navbar-light', 'bg-light')
nav.classList.add('navbar-dark', 'bg-dark')
   }else{
    body.setAttribute('data-bs-theme',"ligth");
    nav.classList.remove('navbar-dark', 'bg-dark')
nav.classList.add('navbar-light', 'bg-light')
   }



}


//data-bs-theme="dark"
//