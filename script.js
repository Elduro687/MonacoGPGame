const turnInput = document.getElementById('turn-input');
const moveCarButton = document.getElementById('move-car');
const turnCountDisplay = document.getElementById('turn-count');
const totalTurns = 21;  // Update with the actual number of turns

let turnCount = 1;
let totalTurnCount = 0;

const turnImages = [
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_0.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_1.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_2.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_3.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_4.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_5.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_6.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_7.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_8.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_9.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_10.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_11.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_12.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_13.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_14.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_15.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_16.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_17.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_18.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_19.jpg",
    "/Users/sergioruiz/Desktop/F1sim/turns/monaco_turn_20.jpg"
];

moveCarButton.addEventListener('click', () => {
  const turnNumberInput = parseInt(turnInput.value, 10);

  // Handle both positive and negative turn changes
  let turnChange = turnNumberInput;
  if (turnChange < 0) {
      turnChange = Math.abs(turnChange); // Convert negative to positive
  }

  // Update turn count using modular arithmetic for laps
  turnCount = (turnCount + turnChange - 1) % totalTurns + 1;

  totalTurnCount += turnChange

  // Update image source based on turn count
  const carImage = document.getElementById('f1-track');
  carImage.src = turnImages[turnCount % totalTurns]; // Replace with your image naming convention

  turnCountDisplay.textContent = `Turn Count: ${totalTurnCount}`;
});

// Initialize turn count display
turnCountDisplay.textContent = `Turn Count: ${totalTurnCount}`;
