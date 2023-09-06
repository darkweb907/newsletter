const form= document.querySelector("form");
const error= document.querySelector("span");
let newsletter= document.querySelector(".newspaper");
let dismiss='crop'
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let value= form.mail.value
    if(value && value.includes('@') && value.includes(".com")){
        form.mail.style.color="var(---grey)"
        error.style.display="none"
        let message=`
        <div class="submit-container">
        <img src="assets/images/icon-success.svg" alt="submitCheck">
        <h1>Thanks for subscribing!</h1>
        <p> A confirmation email has been sent to <b>${value}.</b> 
          Please open it and click the button inside to confirm your subscription.
        </p>
        <input type="submit" value="Dismiss message" id=${dismiss}>
       </div>
        `
        newsletter.innerHTML=message;

        let getbutton= newsletter.querySelector("#crop")
        newbutton(getbutton)
    }else{
        error.style.display="block"
        form.mail.style.color="red"
    }
})

let newbutton= (click)=>{
    click.onclick=(e)=>{
        e.preventDefault()
       window.location.href="index.html"
    }
}
