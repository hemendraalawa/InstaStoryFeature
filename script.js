let arr = [
  {
    dp: "https://images.unsplash.com/photo-1696908985739-b1fe74cecb4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    story:
      "https://images.unsplash.com/photo-1696671296367-1549e8236fe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1694399120199-72ac9241c2f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    story:
      "https://images.unsplash.com/photo-1696608505076-abc689f02ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1696416748833-0407ebea6047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    story:
      "https://images.unsplash.com/photo-1696422221633-1ae8f741b2cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1695822341415-84af280d2579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    story:
      "https://images.unsplash.com/photo-1696530858249-c84ad029ace1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2183&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1688981935578-ff26246327c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    story:
      "https://images.unsplash.com/photo-1696922856164-30aa86fc66a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2130&q=80",
  },
  {
    dp: "https://images.unsplash.com/photo-1691073123326-0686b6f2916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    story:
      "https://plus.unsplash.com/premium_photo-1695838577718-3a587e8996fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2188&q=80",
  },
];

let combine = "";
let stories = document.querySelector(".stories")
arr.forEach(function(elem,idx){
    combine += `<div class="story">
                  <img id="${idx}" src="${elem.dp}" alt="">
                </div>`
});

stories.innerHTML = combine;

// stories.addEventListener("click",function(dets){
//     console.log(arr[dets.target.id]);
// })

stories.addEventListener("click", function(dets){
    document.querySelector(".story-content").style.display = "block";
    document.querySelector(".story-content").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector(".story-content").style.display = "none";
    },2500)
})





let img = document.querySelector('.img');
let dil = document.querySelector("i");

img.addEventListener('dblclick',function(){
    dil.style.transform ="translate(-50%,-50% ) scale(1)"
    dil.style.opacity = 0.7
    
    setTimeout(function(){
        dil.style.opacity = 0
        dil.style.transform ="translate(-50%,-50% ) scale(0)"
    },1000);
});