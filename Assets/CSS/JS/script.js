const baseurl ="https://official-joke-api.appspot.com/jokes/random/10";

const jokeElement = document.getElementById('joke');


async function fetchJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random/10');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Select a random joke from the array
    const randomJokeIndex = Math.floor(Math.random() * data.length);
    const randomJoke = data[randomJokeIndex];
  // Split the joke into characters
  const jokeText = `${randomJoke.setup} - ${randomJoke.punchline}`;
  const jokeChars = jokeText.split('');

  // Display characters one by one with a delay
  jokeChars.forEach((char, index) => {
    setTimeout(() => {
      jokeElement.textContent += char;
    }, index * 50); // Adjust the delay as needed
  });
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeElement.textContent = 'Error fetching joke. Please try again later.';
  }
}

fetchJoke();

const rickRollButton = document.querySelector('.btn-26');

rickRollButton.addEventListener('click', () => {
  alert('Loading...'); // Display a loading message
  setTimeout(() => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  }, 2000); // Delay the redirect for 2 seconds
});



async function fetchRandomMeme() {
  try {
    const response = await fetch('https://api.imgflip.com/get_memes');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const randomMemeIndex = Math.floor(Math.random() * data.data.memes.length);
    const randomMeme = data.data.memes[randomMemeIndex];

    const memeUrl = randomMeme.url;
    const memeCaption = randomMeme.caption; // Access caption property

    const memeContainer = document.getElementById('meme-container');

    // Clear the container before adding the new meme
    memeContainer.innerHTML = '';

    const memeDiv = document.createElement('div');
    const memeImage = document.createElement('img');
    memeImage.classList.add('meme-image');
    memeImage.src = memeUrl;
    memeImage.alt = "Random Meme";
    const memeText = document.createElement('p');
    memeText.textContent = memeCaption;

    memeDiv.appendChild(memeImage);
    memeDiv.appendChild(memeText);

    memeContainer.appendChild(memeDiv);

  } catch (error) {
    console.error('Error fetching meme:', error);
    memeContainer.textContent = 'Error fetching meme. Please try again later.';
  }
}

const memeInput = document.getElementById('memeInput');

memeInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    fetchRandomMeme();
  }
});

const specificButton = document.getElementById('mySpecificButton');

specificButton.addEventListener('click', () => {
  alert('JUST KIDDING YOU JUST GET A MEME');
  fetchRandomMeme();
});





