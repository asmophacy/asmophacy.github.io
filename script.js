const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const profilePic = document.querySelector('.profile-img');
const closeBtn = document.querySelector('.close-modal');

// Open modal when profile picture is clicked
profilePic.onclick = function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Close modal when X is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
}

// Get the button element
const dangerButton = document.getElementById('danger-button');

// Add a click event listener
dangerButton.addEventListener('click', function() {
    alert('You have been hacked, your device will now shortly self destruct!');

    // Countdown sequence
    setTimeout(() => alert('3'), 1000); // After 1 second
    setTimeout(() => alert('2'), 2000); // After 2 seconds
    setTimeout(() => alert('1'), 3000); // After 3 seconds
    setTimeout(() => alert('0'), 4000); // After 4 seconds
    setTimeout(() => alert('Just kidding! Your device is safe ( ͡° ͜ʖ ͡°)'), 5000); // After 5 seconds
    setTimeout(() => {
        // Redirect to the new website
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }, 5000); // After 5 seconds
});
//disabled due to not being needed anymore
// Check if the user is on a mobile device (including Android phones)
//const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//if (isMobile) {
    // Function to check screen orientation
    //const checkOrientation = () => {
        //if (window.innerHeight > window.innerWidth) {
            //alert("Please turn your phone horizontally to see the website properly.");
        //}
    //};

    // Run the check on page load
    checkOrientation();

    // Add an event listener to detect orientation changes
    window.addEventListener("resize", checkOrientation);
