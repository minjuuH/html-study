document.addEventListener('DOMContentLoaded', ()=>{
    const signinButton = document.getElementById('signinBtn');
    const signupButton = document.getElementById('signupBtn');
    const btnText = document.getElementById('btnTxt');
    const modal = document.getElementById('loginModal');
    const title = document.getElementById('modalTitle');
    const findIdPw = document.getElementById('findID');
    const hiddenTxt = document.getElementById('hiddenTxt');
    //const closeBtn = document.querySelector('.close');
    
    console.log("ok");

    signinButton.addEventListener('click', ()=>{
        modal.style.display = 'flex';
        title.textContent = "로그인";
        btnText.textContent = '로그인';
        //findIdPw.style.display = 'flex';
        hiddenTxt.style.display = 'none';
    });

    signupButton.addEventListener('click', ()=>{
        modal.style.display = 'flex';
        title.textContent = "회원가입";
        btnText.textContent = '회원가입';
        findIdPw.style.display = 'none';
        hiddenTxt.style.display = 'inline';
    });
    
    // closeBtn.addEventListener('click', ()=>{
    //     modal.style.display = 'none';
    // });
    
    window.addEventListener('click', (event)=>{
        if (event.target==modal) {
            modal.style.display = 'none';
        }
    });

    const lBox = document.getElementById('listBox');
    const rBox = document.getElementById('releaseBox');
    const pBox = document.getElementById('popularBox');
    
    for (let index = 0; index < 10; index++) {
        lBox.insertAdjacentHTML(
            "beforeend", 
            `<div style="width: 250px;">
                <a href="" style="text-decoration-line: none; color: black;">
                    <div class="poster-container">
                        <img class="poster-img" src="/image/명탐정코난.jpg" alt="명탐정 코난: 100만 달러의 펜타그램">
                    </div>
                    <div class="title-text">명탐정 코난: 100만 달러의 펜타그램</div>
                    <div class="genre-year">장르명 ・ 2024</div>
                </a>
            </div>`
        )
        rBox.insertAdjacentHTML(
            "beforeend", 
            `<div style="width: 250px;">
                <a href="" style="width: 250px; text-decoration-line: none; color: black;">
                    <div class="poster-container">
                        <img class="poster-img" src="/image/데드풀과울버린.jpg" alt="데드풀과 울버린">
                    </div>
                    <div class="title-text">데드풀과 울버린</div>
                    <div class="genre-year">장르명 ・ 2024</div>
                </a>
            </div>`
        )
        pBox.insertAdjacentHTML(
            "beforeend", 
            `<div style="width: 250px;">
                <a href="" style="width: 250px; text-decoration-line: none; color: black;">
                    <div class="poster-container">
                        <img class="poster-img" src="/image/데드풀과울버린.jpg" alt="데드풀과 울버린">
                    </div>
                    <div class="title-text">데드풀과 울버린</div>
                    <div class="genre-year">장르명 ・ 2024</div>
                </a>
            </div>`
        )
    }
});