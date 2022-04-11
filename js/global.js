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
            </ul>
        </div>
    `;
    $('nav').append(navBar);

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
    $('footer').append(footer)
});

