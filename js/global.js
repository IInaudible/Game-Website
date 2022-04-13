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
                <li><a href="index.html">Home</a><div></div></li>
                <li><a href="newsfeed.html">News Feed</a><div></div></li>
                <li><a href="leaderboard.html">Leaderboard</a><div></div></li>
                <li><a href="resources.html" class="active">Resources</a><div></div></li>
                <button id="signin">Login</button>
            </ul>
        </div>
    `;
    $('nav').append(navBar);

    let modal1 = `
        <div id="modal-In">
            <div id="modal-content">
                <div id="modal-texts">
                    <br>
                    <label>Username:</label>
                    <br>
                    <input type="user" placeholder="Username" required>
                    <br>
                    <br>
                    <label>Password:</label>
                    <br>
                    <input type="password" placeholder="Password" required>
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
                    <label>Username:</label>
                    <br>
                    <input type="user" placeholder="Username" required>
                    <br>
                    <br>
                    <label>Password:</label>
                    <br>
                    <input type="password" placeholder="Password" required>
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
});


