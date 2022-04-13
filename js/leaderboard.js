let users = [
    {
        username: 'avocadosa',
        score: 163
    },
    {
        username: 'bansea',
        score: 150
    },
    {
        username: 'bobsleigha',
        score: 141
    },
    {
        username: 'boxinga',
        score: 120
    },
    {
        username: 'coconuta',
        score: 112
    },
    {
        username: 'decembra',
        score: 108
    },
    {
        username: 'della',
        score: 92
    },
    {
        username: 'demurea',
        score: 75
    },
    {
        username: 'dodgera',
        score: 68
    },
    {
        username: 'earningsa',
        score: 64
    },
    {
        username: 'frocka',
        score: 61
    },
    {
        username: 'hawsera',
        score: 57
    },
    {
        username: 'heartfelta',
        score: 53
    },
    {
        username: 'hoppera',
        score: 50
    },
    {
        username: 'kookaburraa',
        score: 48
    },
    {
        username: 'layera',
        score: 46
    },
    {
        username: 'mosquea',
        score: 45
    },
    {
        username: 'mothera',
        score: 42
    },
    {
        username: 'passivea',
        score: 40
    },
    {
        username: 'playoffsa',
        score: 37
    },
    {
        username: 'raciala',
        score: 35
    },
    {
        username: 'rattya',
        score: 31
    },
    {
        username: 'recordinga',
        score: 30
    },
    {
        username: 'resemblea',
        score: 27
    },
    {
        username: 'ipsum',
        score: 23
    }
]

$(document).ready(function() {
    $('#leaderboard a').css('color', '#007FFF')
    // write a for loop that loops over the array and gives the first 3 users a trophy template and for the 
    //rest give them a regular template

    // loop over the array of users
    for (let i = 0; i < users.length; i += 1) {
       
        // if i is less than 3
        if (i < 3) { 
            let userTrophyTemp = `
                <div class="individual">
                    <div><p>${i + 1}${'. '}${users[i].username}</p><i class="fas fa-trophy"></i></div>
                    <div>${users[i].score}</div>
                </div>
            `;

            $('#user-scores').append(userTrophyTemp);
        // otherwise
        } else {
            let userRegularTemp = `
                <div class="individual">
                    <div><p>${i + 1}${'. '}${users[i].username}</p></div>
                    <div>${users[i].score}</div>
                </div>
            `;

            $('#user-scores').append(userRegularTemp);
        }
    }
});   
    