const apiUrl = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean';

// Function to fetch data from the API and display it
async function fetchTrivia() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    // Get the container where the questions will be displayed
    const container = document.getElementById('questions-container');

    // Loop through the questions and display them
    data.results.forEach(question => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');

      // Create HTML for each question
      questionElement.innerHTML = `
        <h3>${question.question}</h3>
        <p><strong>Answer:</strong> ${question.correct_answer}</p>
      `;
      container.appendChild(questionElement);
    });
  } catch (error) {
    console.error('Error fetching trivia data:', error);
  }
}

// Call the fetchTrivia function when the page loads
window.onload = fetchTrivia;