// Array to hold game data
let games = [
    {
        title: 'Num Equator',
        image: 'https://via.placeholder.com/200x150?text=Num+Equator',
        url: 'https://y8tireu.github.io/NumEquator/'
    },
    {
        title: 'Secret',
        image: 'https://via.placeholder.com/200x150?text=Secret',
        url: 'https://y8tireu.github.io/Secret/'
    },
    {
        title: 'Three.js Demo',
        image: 'https://via.placeholder.com/200x150?text=Three.js+Demo',
        url: 'https://y8tireu.github.io/Three.js-Demo/'
    },
    {
        title: 'Dodge The Rocks',
        image: 'https://via.placeholder.com/200x150?text=Dodge+The+Rocks',
        url: 'https://y8tireu.github.io/Dodge-The-Rocks/'
    },
    {
        title: '3D Graphics Demo',
        image: 'https://via.placeholder.com/200x150?text=3D+Graphics+Demo',
        url: 'https://y8tireu.github.io/3D-Graphics-Demo/'
    },
    {
        title: 'Cookie Clicker',
        image: 'https://via.placeholder.com/200x150?text=Cookie+Clicker',
        url: 'https://y8tireu.github.io/Cookie-Clicker/'
    },
    {
        title: 'Terraria',
        image: 'https://via.placeholder.com/200x150?text=Terraria',
        url: 'https://y8tireu.github.io/Terraria/'
    },
    {
        title: 'CraftMine',
        image: 'https://via.placeholder.com/200x150?text=CraftMine',
        url: 'https://y8tireu.github.io/CraftMine/'
    },
    {
        title: 'Pumpkin Run',
        image: 'https://via.placeholder.com/200x150?text=Pumpkin+Run',
        url: 'https://y8tireu.github.io/Pumpkin-Run/'
    },
    {
        title: 'Super Game Maker',
        image: 'https://via.placeholder.com/200x150?text=Super+Game+Maker',
        url: 'https://y8tireu.github.io/Super-Game-Maker/'
    },
    {
        title: 'Soccer Physics',
        image: 'https://via.placeholder.com/200x150?text=Soccer+Physics',
        url: 'https://y8tireu.github.io/Soccer-Physics/'
    },
    {
        title: 'Physics Game Maker 2',
        image: 'https://via.placeholder.com/200x150?text=Physics+Game+Maker+2',
        url: 'https://y8tireu.github.io/Physics-Game-Maker-2/'
    },
    {
        title: 'Physics Game Maker',
        image: 'https://via.placeholder.com/200x150?text=Physics+Game+Maker',
        url: 'https://y8tireu.github.io/Physics-Game-Maker/'
    },
    {
        title: 'Parkour Game',
        image: 'https://via.placeholder.com/200x150?text=Parkour+Game',
        url: 'https://y8tireu.github.io/Parkour-Game/'
    },
    {
        title: 'Game Maker',
        image: 'https://via.placeholder.com/200x150?text=Game+Maker',
        url: 'https://y8tireu.github.io/Game-Maker/'
    },
    {
        title: 'Collisions',
        image: 'https://via.placeholder.com/200x150?text=Collisions',
        url: 'https://y8tireu.github.io/Collisions/'
    },
    {
        title: 'Soccer Game',
        image: 'https://via.placeholder.com/200x150?text=Soccer+Game',
        url: 'https://y8tireu.github.io/Soccer-Game/'
    },
    {
        title: 'Fruit Ninja',
        image: 'https://via.placeholder.com/200x150?text=Fruit+Ninja',
        url: 'https://y8tireu.github.io/Fruit-Ninja/'
    },
    {
        title: 'Level Devil Remastered 2',
        image: 'https://via.placeholder.com/200x150?text=Level+Devil+Remastered+2',
        url: 'https://y8tireu.github.io/Level-Devil-Remastered-2/'
    },
    {
        title: '2D Platformer Game',
        image: 'https://via.placeholder.com/200x150?text=2D+Platformer+Game',
        url: 'https://y8tireu.github.io/2D-Platformer-Game/'
    },
    {
        title: 'Games Collection',
        image: 'https://via.placeholder.com/200x150?text=Games+Collection',
        url: 'https://y8tireu.github.io/games/'
    }
];

// Load games from localStorage if available
if (localStorage.getItem('games')) {
    const storedGames = JSON.parse(localStorage.getItem('games'));
    games = [...games, ...storedGames];
}

// Function to display games
function displayGames() {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';

    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';

        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;

        const title = document.createElement('h3');
        title.textContent = game.title;

        const link = document.createElement('a');
        link.href = game.url;
        link.target = '_blank';
        link.textContent = 'Play Now';

        gameCard.appendChild(img);
        gameCard.appendChild(title);
        gameCard.appendChild(link);
        gameList.appendChild(gameCard);
    });
}

// Function to add a new game
function addGame(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const image = document.getElementById('image').value;
    const url = document.getElementById('url').value;

    const newGame = { title, image, url };
    games.push(newGame);

    // Save only user-added games to localStorage
    const userGames = games.slice(21); // Assuming initial games are 21
    localStorage.setItem('games', JSON.stringify(userGames));

    // Reset form
    document.getElementById('game-form').reset();

    // Update game list
    displayGames();
}

// Event listener for form submission
document.getElementById('game-form').addEventListener('submit', addGame);

// Initial display of games
displayGames();

