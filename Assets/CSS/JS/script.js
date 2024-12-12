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




