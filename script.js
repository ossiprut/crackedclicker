let points = 0; // Initialize points
let pointsPerClick = 1; // Points earned per click
const button = document.getElementById('clickerButton');
const pointsDisplay = document.getElementById('points');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeButtonX4 = document.getElementById('upgradeButtonX4');
const upgradeButtonX10 = document.getElementById('upgradeButtonX10');
const upgradeCost = 10; // Cost of the first upgrade
const upgradeCostX4 = 20; // Cost of the x4 upgrade
const upgradeCostX10 = 250; // Cost of the x10 upgrade
let linkOpened = false; // Track if the link has already been opened

// Add a click event listener to the body for tapping anywhere
document.body.addEventListener('click', (event) => {
    const upgradeBox = document.getElementById('upgradeBox');
    if (upgradeBox.contains(event.target)) {
        return; // Prevent points increment when clicking inside the upgrade box
    }

    points += pointsPerClick; // Increment points by the current multiplier
    pointsDisplay.textContent = points; // Update points display

    // Enable the upgrade buttons if points are enough
    upgradeButton.disabled = points < upgradeCost;
    upgradeButtonX4.disabled = points < upgradeCostX4;
    upgradeButtonX10.disabled = points < upgradeCostX10;

    // Open the link automatically when points reach or surpass 6900
    if (points >= 6900 && !linkOpened) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // Open the link in a new tab
        linkOpened = true; // Mark the link as opened to prevent repeated openings
    }
});

// Add a click event listener to the first upgrade button
upgradeButton.addEventListener('click', () => {
    if (points >= upgradeCost) {
        points -= upgradeCost; // Deduct points for the upgrade
        pointsPerClick *= 2; // Double the points earned per click
        pointsDisplay.textContent = points; // Update points display
        upgradeButton.disabled = true; // Disable the button again
    }
});

// Add a click event listener to the x4 upgrade button
upgradeButtonX4.addEventListener('click', () => {
    if (points >= upgradeCostX4) {
        points -= upgradeCostX4; // Deduct points for the upgrade
        pointsPerClick *= 4; // Multiply the points earned per click by 4
        pointsDisplay.textContent = points; // Update points display
        upgradeButtonX4.disabled = true; // Disable the button again
    }
});

// Add a click event listener to the x10 upgrade button
upgradeButtonX10.addEventListener('click', () => {
    if (points >= upgradeCostX10) {
        points -= upgradeCostX10; // Deduct points for the upgrade
        pointsPerClick *= 10; // Multiply the points earned per click by 10
        pointsDisplay.textContent = points; // Update points display
        upgradeButtonX10.disabled = true; // Disable the button again
    }
});