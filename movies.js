let movieContainer=document.querySelector(".movies .max-width");

let filters={
    org:"All",
    category:"All",
    "release-date":"All"
}

window.onload=()=>{
    fetchMovies();
}

document.body.onclick=(event)=>{
    document.querySelectorAll(".dropdowns .select .options").forEach(options=>{
        if(event.target.classList.contains("select") ||
        event.target.classList.contains("default") ||
        event.target.classList.contains("fa-solid")){
        }else if(event.target.classList.contains("option")){
            filters[event.target.parentNode.parentNode.id]=event.target.innerHTML;
            event.target.parentNode.parentNode.querySelector(".default").innerHTML=`${event.target.innerHTML} <i class="fa-solid fa-caret-down"></i>`;
            options.style.opacity="0";
            setTimeout(()=>{
                options.style.display="none";
            },100);
        }else{
            options.style.opacity="0";
            setTimeout(()=>{
                options.style.display="none";
            },100);
        }
    });
}

document.querySelectorAll(".dropdowns .select .default").forEach(select=>{
    select.onclick=()=>{
        document.querySelectorAll(".dropdowns .select .options").forEach(options=>{
        
            options.style.opacity="0";
    });
        select.parentNode.querySelector(" .options").style.display="flex";
        select.parentNode.querySelector(" .options").style.opacity="1";
    }
});

function fetchMovies(){
    movieContainer.innerHTML=movies.map(movie=>{
      return `<div onclick="goTo('./movie.html?index=${movie.index}')" class="movie">
                <img src="${movie.poster}" alt="poster" class="poster">
                <div class="description">
                    <p class="title">${movie.name}</p>
                    <p class="category">${movie.category.map((cat)=>cat).join(" , ")}</p>
                </div>
            </div>`;  
    }).join("");
}