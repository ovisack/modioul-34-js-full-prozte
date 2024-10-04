 ///




 const  lodeCategoriesVideos=(id) =>{
    console.log(id);
    //  alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
      .then((res) => res.json())
      .then((data) =>{
        videosCategories(data.category);
        console.log(data);
        removeActiveClass()
        if(data.status){
          let activeBtn=document.getElementById(`btn-${id}`);
          console.log(id);
          activeBtn.classList.remove("active")
         activeBtn?.classList.add("active")
        }
        
      })
      .catch((error) => console.log(error));
     
  
  
  };
  
  const  removeActiveClass= ()=>{
   const buttons=document.getElementsByClassName("category-btn")
    console.log(buttons);
    for(let btn of buttons){
       btn.classList.remove("active")
  
    }
  };
  
  
  
   function getTimeString(time){
    //get Hour and seconds 
    const hour=parseInt(time/ 3600);
    let remainingSecond=time % 3600;
    const minute =remainingSecond / 60 ;
     remainingSecond =remainingSecond %60;
    return `${hour} hour ${minute} minute${remainingSecond} ago  `;
    
  }
  
  
  
   const lodeCategories= () =>{
      console.log('lode categories');
   
  /// fetch data
  
    fetch(`https://openapi.programming-hero.com/api/phero-tube/categories/`)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
   }
  
  
  
   const lodeDetails = async (videoId) =>{
     console.log(videoId);
      const uri =`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
       const res = await fetch(uri);
       const data =await res.json()
       console.log(data);
  
   };
  
  
  //  {category_id: '1001', category: 'Music'}
  // category
  // : 
  // "Music"
  // category_id
  // : 
  // "1001"
  
   const displayCategories = (categories) =>{
  
    const categoriesButton=document.getElementById("categories");
  
    categories.forEach(item => {
       console.log(item);
  
  
  
  
  
  
  
       //crete a button
        const buttonContainer =document.createElement("div")
       
       buttonContainer.innerHTML=
       ` <button id="btn-${item.category_id}"onclick="lodeCategoriesVideos(${item.category_id})"class="btn  category-btn">
       ${item.category}
       </button>`
       
        // button.classList = "btn";
  
  
  
  
        // button.innerText=item.category;
  
  
        // button.onclick=() => alert('hello')
  
        //add button to categories container
  
        categoriesButton.append(buttonContainer);
  
      
    });  
  
   }
  
  
  
  
  
   
  
  
   //lode videos
  const lodVideo= (video) =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
      .then((res) => res.json())
      .then((data) =>videosCategories(data.video))
      .catch((error) => console.log(error));
     }
  
  
     const videosCategories =(video) =>{
      const videosContainer=document.getElementById("videos")
      videosContainer.innerHTML="";
      if(video.length ===0){
        videosContainer.classList.remove("grid")
        videosContainer.innerHTML=`F
        <div class=" min-h-screen flex flex-col gap-5 justify-center items-center"> 
        <img src="icon.png" /> 
        <h1 class="text-center  text-xl font-bold"> content here is these</h1>
        </div>`;
        return;
      }
      else{
        videosContainer.classList.add("grid")
      }
      video.forEach((video) =>{
      //console.log(video);
      const card =document.createElement("div")
      card.classList="card card-compact "
      card.innerHTML=`
       <figure class="h-[200px] relative">
      <img
        src=${video.thumbnail}
        class=" h-full w-full object-cover"
        alt="Shoes" />
        ${video.others.posted_date?.length==0 ? "":` <span class="absolute right-2 bottom-2
           bg-black  text-gray-50">${getTimeString(video.others.posted_date)}</span>`}
       
    </figure>
    <div class="card-body px-0 py-2 flex gap-2">
    <div>  <img class="w-10 h-10 rounded-full object-cover " src=${video.authors[0].profile_picture}/>
    </div>
     <div>
     <h2 class="font-bold">${video.title} </h2>
     <div class="flex items-center gap-2">
     <p class="text-gray-400">${video.authors[0].profile_name} </p>
    ${video.authors[0].verified === true ? ' <img class="w-5 m-3" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" />' : ""}
     
     </div>
     <p> <button  onclick="lodeDetails(${video.video_id})" class="btn btn-sm btn-error  ">Details</button> </p>
    </div>
    </div>
    
    `;
  
  
    videosContainer.append(card)
  
      })
  
     
     }
  
   lodeCategories();
   lodVideo();


































   