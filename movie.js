console.log("welcome to movie watching");
//menu
document.querySelectorAll("ul ul li").forEach(item => {
  item.addEventListener("click", () => {

    
    document.querySelectorAll("ul ul li").forEach(li => {
      li.classList.remove("selected");
    });

    item.classList.add("selected");

    console.log(item.textContent + " is selected");
  });
});



//genre selction
document.querySelectorAll(".genre div").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("selected");

    if (item.classList.contains("selected")) {
      console.log(item.textContent + " is selected");
    } else {
      console.log(item.textContent + " is unselected");
    }

  });
});

//favorite

document.querySelectorAll(".favorite").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    if (btn.classList.contains("active")) {
      btn.textContent = "♥";
      console.log("Added to favorites");
    } else {
      btn.textContent = "♡";
      console.log("Removed from favorites");
    }
  });
});

//upgrade 

document.querySelector(".upgrade").addEventListener("click", () => {
  const result = confirm("Do you want to upgrade?");

  if (result) {
    console.log("User clicked YES");
  } else {
    console.log("User clicked NO");
  }
});

//more genre

document.querySelector(".moregenre").addEventListener("click", () => {
  const hiddenGenres = document.querySelectorAll(".genrehidden");


  hiddenGenres.forEach(item => {
    item.style.display = "block"; 
  });
});
