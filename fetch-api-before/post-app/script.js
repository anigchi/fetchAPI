const container = document.querySelector(".container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

//Making http request
//1.Get the endpoint of the server/api
const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch(url).then(response => response.json())
//           .then(json => console.log(json))
//           .catch(err=>console.log(err))

    //   .then(response => {
    //     response.json().then((data)=>console.log(data))
    //   })

const fetchPost = async()=>{
    try{
        const response = await fetch(url) //url에서 fetch해 오고
        const data = await response.json() //fetch한 데이터는 json으로 빠꾸기 
       
        //display to DOM
        const display=data.map((item)=>{
            return( `<div class="card">
                     <div class="card-title">
                      <h2>Post ${item.title}</h2>
                     </div>
                     <div class="card-body">
                       <p>
                         ${item.body}
                        </p>
                      </div>
                   </div>`)}
            )
        
        container.innerHTML = display.join("")
    }catch(err){
        console.log(err)
    }
}

btn.addEventListener('click',fetchPost)