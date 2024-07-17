document.addEventListener('DOMContentLoaded', ()=>{
    const signinButton = document.getElementById('signinBtn');
    const modal = document.getElementById('loginModal');
    const title = document.getElementById('modalTitle');
    //const closeBtn = document.querySelector('.close');
    
    console.log("ok");

    signinButton.addEventListener('click', ()=>{
        modal.style.display = 'flex';
        title.textContent = "로그인";
    });
    
    // closeBtn.addEventListener('click', ()=>{
    //     modal.style.display = 'none';
    // });
    
    window.addEventListener('click', (event)=>{
        if (event.target==modal) {
            modal.style.display = 'none';
        }
    });
});