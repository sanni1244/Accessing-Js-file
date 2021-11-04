const spec = localStorage.getItem('postid')

function getinfo(){
    fetch('https://jsonplaceholder.typicode.com/posts/')
   .then(response => response.json())
   .then((data) =>  {

        let second = document.getElementsByClassName("second")

     let newpage = ``;
     
        newpage += `  
     
         <div style="padding: 10px" class="col-md-4"> 
         <div class="">
                 <div class="card-body border border-4  border-info  d-grid gap-3 p-3 arrange">
                 <div class="d-flex justify-content-end">
                 <h6 class="text-warning ">${data[spec-1].id}</h6>
                 </div>
                     <h5 class="post-title mb-4 text-capitalize">${data[spec-1].title}</h5>
                     <p class="post-body">${data[spec-1].body}</p>
                 </div>
             </div>
         </div>
   
 ` 
    second[0].innerHTML = newpage;
 

})}
getinfo();