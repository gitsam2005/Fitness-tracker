let totalMinutes = 0;

function addWorkout() {
  const exercise = document.getElementById("exercise").value;
  const minutes = parseInt(document.getElementById("minutes").value);

  if (exercise && minutes > 0) {
    // Create a list item
    const li = document.createElement("li");
    li.textContent = `${exercise} - ${minutes} min`;

    // Add to workout list
    document.getElementById("workout-list").appendChild(li);

    // Update total time
    totalMinutes += minutes;
    document.getElementById("total-time").textContent =
      `Total Time: ${totalMinutes} minutes`;

    // Clear inputs
    document.getElementById("exercise").value = "";
    document.getElementById("minutes").value = "";
  } else {
    alert("Please enter a valid exercise and time.");
  }
}