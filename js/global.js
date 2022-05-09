$(document).ready(function() {
    let navBar = `
        <div id="logo-nav">
            <a href="index.html">
                <div class="grid-2by">
                    <img src="./img/logo_otter_prime_110x80.png" alt="Logo">
                    <h1>Otter<br>Run</h1>
                </div>
            </a>
            </div>               
            <div>
            <ul id="nav">
                <li id="home-page"><a href="index.html">Home</a><div></div></li>
                <li id="news-feed"><a href="newsfeed.html">News Feed</a><div></div></li>
                <li id="leaderboard"><a href="leaderboard.html">Leaderboard</a><div></div></li>
                <li id="resources"><a href="resources.html">Resources</a><div></div></li>
                <button id="signin"><h1>Login</h1></button>
            </ul>
        </div>
    `;
    $('nav').append(navBar);

    let modal1 = `
        <div id="modal-In">
            <div id="modal-content">
                <div id="modal-texts">
                    <br>
                    <br>
                    <input id="user1" type="user" placeholder="Username" required>
                    <br>
                    <br>
                    <input id="pass1" type="password" placeholder="Password" required>
                </div>
                <div id="modal-buttons">
                    <p>Don't have an account?</p>
                    <button id="signup-modal">Signup</button>
                    <button id="login">Login</button>
                </div>
            </div>
        </div>
    `;
    let modal2 = `
        <div id="modal-Up">
            <div id="modal-content">
                <div id="modal-texts">
                    <br>
                    <br>
                    <input id="user2" type="user" placeholder="Username" required>
                    <br>
                    <br>
                    <input id="pass2" type="password" placeholder="Password" required>
                </div>
                <div id="modal-buttons">
                    <p>Already have an account?</p>
                    <button id="login-modal">Login</button>
                    <button id="signup">Signup</button>
                </div>
            </div>
        </div>
    `;
    $('main').append(modal1);
    $('main').append(modal2);
    
    let footer = `
        <div id="copyright">©Copyright 2022 Otter Run. All Rights Reserved.</div>
        <div id="logo-footer">
            <div class="grid-2by">
                <img src="./img/logo_otter_prime_110x80.png" alt="Logo">
                <h1>Otter<br>Run</h1>
            </div>
        </div>
        <div id="social"> 
            <ul>
                <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/home"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    `;
    $('footer').append(footer);

    $(`#signin`).on('click', function() {
        $('#modal-In').css('display', 'flex')
    });

    $(`#signup-modal`).on('click', function() {
        $('#modal-In').css('display', 'none')
        $('#modal-Up').css('display', 'flex')
    });

    $(`#login-modal`).on('click', function() {
        $('#modal-Up').css('display', 'none')
        $('#modal-In').css('display', 'flex')
    });

    $('#modal-In').on('click', function(e) {
        const { target } = e;
        if (target.id === 'modal-In') {
            $('#modal-In').css('display', 'none');
        }
    });

    $('#modal-Up').on('click', function(e) {
        const { target } = e;
        if (target.id === 'modal-Up') {
            $('#modal-Up').css('display', 'none');
        }
    });

    $('#login').on('click', function() {
        let user = $('#user1').val()
        let pass = $('#pass1').val()
        for (let i = 0; i < localStorage.length; i++) {
            if (user === localStorage.key(i)) {
                if (pass === localStorage.getItem(user)) {
                    console.log("logged in")
                }
            }
        }
    });

    $('#signup').on('click', function() {
        let user = $('#user2').val()
        let pass = $('#pass2').val()
        let taken = false
        for (let i = 0; i < localStorage.length; i++) {
            if (user === localStorage.key(i)) {
                console.log("name taken")
                taken = true
            }
        }
        if (taken) {

        }else if (pass.length < 4) {
            console.log("password needs to be longer")
        } else {
            console.log("account created")
            localStorage.setItem(user, pass);
        }
    });
    localStorage.setItem("test", "test");
});

