const loveMessages = [
  "🧭 Your heart is pointing to one direction: Rohan",
  "💘 No matter what, your heart always chooses Rohan",
  "🌹 Deep down, it’s always been Rohan for you",
  "💌 Even destiny agrees — you belong with Rohan",
  "💫 Your eyes may wander, but your heart stays with Rohan"
];

function generateCards() {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = "💖";
    card.onclick = () => showResult(i);
    container.appendChild(card);
  }

  document.getElementById("round-info").textContent = "Choose a card";
}

function showResult(index) {
  document.getElementById("cards-container").classList.add("hidden");
  document.getElementById("round-info").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("final-message").innerHTML = loveMessages[index];

  // Show the "does Rohan love you too?" link
  document.getElementById("extra-link").classList.remove("hidden");
}

function showLoveBack() {
  document.getElementById("love-back").classList.remove("hidden");
}

function restartGame() {
  document.getElementById("cards-container").classList.remove("hidden");
  document.getElementById("round-info").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("love-back").classList.add("hidden");
  document.getElementById("extra-link").classList.add("hidden");
  generateCards();
}

generateCards();