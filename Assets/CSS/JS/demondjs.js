document.getElementById('joke-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const search = document.getElementById('search').value;
    
    try {
      const response = await fetch(`https://official-joke-api.appspot.com/jokes/search?term=${search}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      const jokeText = document.getElementById('joke-text');
      jokeText.textContent = result[0]?.setup + ' ' + result[0]?.punchline || 'No jokes found for this keyword.';
      jokeText.style.display = 'block';
    } catch (error) {
      alert('There was an issue finding a joke. Please try again later.');
      console.error('Error:', error);
    }
  });