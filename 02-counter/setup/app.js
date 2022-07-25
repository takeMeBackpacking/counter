//increase count
//decrease count
//reset count

let currCount = 0;
const allBtns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");


allBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("clicked");
        if (btn.classList.contains("decrease")){
            console.log("yes, decrease");
            currCount--;
        } else if (
            btn.classList.contains("increase")
        ){
            console.log("increased");
            currCount++;
        } else {
            console.log("resets");
            currCount = 0;
        }

        if (currCount > 0) {
            value.style.color = "green";
        } else if (currCount < 0) {
            value.style.color = "red";
        } else{
            value.style.color = "black";
        }
        value.textContent = currCount;

    });
});
