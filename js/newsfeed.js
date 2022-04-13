let userPosts = [
    {
        img: './img/otter-pfp.png',
        imgAlt: 'otter-pfp',
        username: 'OtterLover702',
        title: 'Save the Otters',
        post: `The cutest sea critters are otters. I can't get enough of them, and it hurts to see them being affected by improper disposal of plastic waste,
        and even worse they're not the only ones. The amount of space that the waste takes up is unreal. The amount of creatures affected by it is even
        more unbelievable. Please help and contribute by signing this petition to get rid of some of the plastic waste in the ocean.`,
        likes: 6,
        comments: [
            {
                img: './img/trash.jpg',
                username: 'TrashHater934',
                profLink: '',
                post: `Good job!`
            },
            {
                img: './img/duck.png',
                username: 'DuckSaver',
                profLink: '',
                post: `The ducks like this`
            },
            {
                img: './img/bear.png',
                username: 'MichaelJ',
                profLink: '',
                post: 'I like Pudding'
            },
            {
                img: './img/penguin.png',
                username: 'BigPenguin',
                profLink: '',
                post: '@MichaelJ Who asked'
            }
        ]
        
    },
    {
        img: './img/trash.jpg',
        imgAlt: 'trash-pfp',
        username: 'TrashHater934',
        title: 'Stop Littering',
        post: `I see people looking at the bigger picture, blaming waste management companies for how they dispose of their waste. Let's take a look at the 
        little picture. You, if you're reading this and don't litter good for you that is an accomplishment. However there is a percentage of people out there reading
        this that still litter, and to those people I want you to know that it isn't as simple as "1 candy wrapper" because there are millions of people that think the
        exact same way. Then you end up with a 2 ton pile of plastic. So please do not litter and spread the word.`,
        likes: 2,
        comments: [
            {
                img: './img/trash.jpg',
                username: 'ßeluga',
                profLink: '',
                post: `#1 Jungle Beluga`
            },
        ]  
    },
    {
        img: './img/duck.png',
        imgAlt: 'duck-pfp',
        username: 'DuckSaver',
        title: 'Ducks Need Help',
        post: `Ducks are drowing in plastic. LITERALLY! Sign this petition to stop plastic pollution in the ocean and help save the ducks. Even it's a small amount
        of their population being affected, zero ducks should be getting hurt or dying to plastic pollution. There is no reason not to sign this petition if it
        doesn't cost you anything but acouple of minutes and buys the little duckies a lifetime freedom and hapiness.`,
        likes: 2,
        comments: [
            {
                img: './img/trash.jpg',
                username: 'Trash_Hater934',
                profLink: '',
                post: `This is why I hate trash`
            },
            {
                img: './img/humpback-whale.jpg',
                username: 'Whale',
                profLink: '',
                post: `Not the duckies :(`
            },
        ]  
    },
];

$(document).ready(function() {
    $('#news-feed a').css('color', '#007FFF')

    for (let i = 0; i < userPosts.length; i += 1) {
    let userPostsTemplate = `
        <div class="user-entries">
            <div class="holder">
                <div> 
                    <div class="pfp"><img src="${userPosts[i].img}" alt="${userPosts[i].imgAlt}"></div>
                </div>
                <div class="username">
                    <h1>${userPosts[i].username}</h1>
                </div>
            </div>
            <div class="user-post">
                <div class="user-entry">
                    <h1>${userPosts[i].title}</h1>
                </div>
                <p>${userPosts[i].post}</p>
            </div>
            <div class="user-response">
                <ul>
                    <li><a href="#"><i class="fas fa-thumbs-up"></i></a>${userPosts[i].likes}</li>
                    <li><a href="#"><i class="fa-solid fa-message"></i></a>${userPosts[i].comments.length}</li>
                </ul>
            </div>
        </div>
    `;
    $('#page').append(userPostsTemplate);
    }
});

