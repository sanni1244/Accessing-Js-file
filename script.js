function getinfo(){
   fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(response => response.json())
  .then(data =>  {

var content = document.getElementsByClassName("everything")

    let mypage = ``;
    data.forEach(element => {
        mypage += `  
    
    <div class="col-md-4">
        <div class="">
            <a href="post.html" class="text-decoration-none text-black bd-highlight mb-3  d-grid gap-3" onclick="otherlink(${element.id})">
            <div class="card-body border border-4  border-info  d-grid gap-3 p-3 arrange" style="min-height: 300px">
                <div class="d-flex justify-content-end">
                <h6 class="text-warning">${element.id}</h6>
            </div>
                <h5 class="post-title mb-4 text-capitalize">${element.title}</h5>
                <p class="post-body">${element.body}</p>
            </div>
            </a>
        </div>
    </div>
` 
   content[0].innerHTML = mypage;

    })
  })}

   getinfo();
   function otherlink(num) {
    localStorage.setItem('postid', num );
}
