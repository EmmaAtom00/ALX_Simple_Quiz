function checkAnswer() {
  // Step 1: Identify the correct answer
  const correctAnswer = "4";

  // Step 2: Retrieve the user's selected radio answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  // Step 3: Select the feedback area
  const feedback = document.getElementById("feedback");

  // Step 4: Compare answers and update feedback
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Step 5: Add event listener for submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
