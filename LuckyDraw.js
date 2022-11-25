// Immediately invoked function expression
// to not pollute the global scope
// local function
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  let deg = 0;

// Add click event inline arrow function =>
  startButton.addEventListener('click', () => {
    // Disable button during spin - deactivate so that can spin the wheel again
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000; try and error; its like math.random - 0 to 1; * 5000 => the final ans is 5000 to 10000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel - for 5 seconds
    wheel.style.transition = 'all 5s ease-out';
    // Rotate the wheel - string; css work - 0 to 360
    wheel.style.transform = `rotate(${deg}deg)`;
  });

// trigger when the transition will finish
  wheel.addEventListener('transitionend', () => {
    // Enable button when spin is over - start the button
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360 -> real actual value from rotation - if dun have; it will go backwards
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
  });
})();
