import "../scss/main.scss";

(()=> {

     _initContact();

 })();


function _initContact(){

    
    let contactEl = document.getElementsByClassName("contact")
            

    for(let index = 0; index < contactEl.length; index++) {
        contactEl[index].addEventListener("click", (e) => {
            let formEl = document.getElementById("form");
            formEl.classList.add("show-form");
        });
    }
    document.getElementById("close")
            .addEventListener("click", (e) => {
                let formEl = document.getElementById("form");
                formEl.classList.remove("show-form");
            });
}

// const arr = [1, 2, 3];
// const iAmJavascriptES6 = () => console.log(...arr);
// window.iAmJavascriptES6 = iAmJavascriptES6;