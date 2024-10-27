let getDiv = document.getElementById('getDiv')
let getsearch = document.getElementById('news')
let getnews = () => {

fetch('https://newsapi.org/v2/everything?q=${getsearch.value}&from=2024-09-27&sortBy=publishedAt&apiKey=02144f6fa3cd49fd8526ab1b1f7da803')

.then(data => data.json())
.then(data => {
 for(let i=0; i<data.articles.length; i++){
 getDiv.innerHTML =`<div class="card m-4" style="width: 18rem;">
 <img src="${data.article[0].urlToImage}" class="card-img-top" alt="...">
 <div class="card-body">
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 </div>
</div>`
 
 }
   
 
}
)
    
}

