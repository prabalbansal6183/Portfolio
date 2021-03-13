
/*====== MENU SHOW Y HIDDEN =====*/
console.log("here");
const navMenue = document.getElementById('nav-menue');
    toggleMenue = document.getElementById('nav-toggle');
    navClose = document.getElementById('nav-close');



//SHOW
toggleMenue.addEventListener('click',()=>{
    navMenue.classList.toggle('show');
})

//HIDDEN
navClose.addEventListener('click',()=>{
    navMenue.classList.remove('show');
})


/*====== REMOVE MENU ===== */
const navLink = document.querySelectorAll('.nav_link');
function linkAction(){
    navMenue.classList.remove('show');
}
navLink.forEach(m => m.addEventListener('click',linkAction));

/*====== SCROLL SECTION AVTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollAction)

function scrollAction(){
    const scrolly = window.pageYOffset;
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id');

        if(scrolly > sectionTop && scrolly <= screenTop+sectionHeight)
        {
             document.querySelectorAll('.nav_menue a[href*='+sectionId+']').classList.add('active');
        }else{
            document.querySelectorAll('.nav_menue a[href*='+sectionId+']').classList.add('active');
        }
    })
}

//*===== Email ========*/
const cont_butt = document.getElementById("cont");
cont_butt.addEventListener('click',()=>{
    const Name = document.getElementById('names').value;
    const Sender_email = document.getElementById('Email').value;
    const topic = document.getElementById('top').value;
    const message = document.getElementById('message').value;
    console.log(Name);
    console.log(Sender_email);
    console.log(topic);
    console.log(message);

    // Email.send({ 
    //           Host: "smtp.gmail.com", 
    //           Username: Sender_email, 
    //           Password: "Enter your password", 
    //           To: 'receiver@email_address.com', 
    //           From: "sender@email_address.com", 
    //           Subject: "Sending Email using javascript", 
    //           Body: "Well that was easy!!"
    //         })
})


// console.log(s.Name);

// window.addEventListener('scroll', scrollAction)
// function sendEmail() { 
//     Email.send({ 
//       Host: "smtp.gmail.com", 
//       Username: "sender@email_address.com", 
//       Password: "Enter your password", 
//       To: 'receiver@email_address.com', 
//       From: "sender@email_address.com", 
//       Subject: "Sending Email using javascript", 
//       Body: "Well that was easy!!", 
//     }) 
//       .then(function (message) { 
//         alert("mail sent successfully") 
//       }); 
//   } 

