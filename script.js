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
//    checkOrientation(); // This line was causing an error as checkOrientation is defined inside the commented block

    // Add an event listener to detect orientation changes
//    window.addEventListener("resize", checkOrientation);
//} // Closing brace for the commented if (isMobile) block

function copyText() {
    /* Copy text into clipboard */
    navigator.clipboard.writeText("minhkhoi.nguyengamer12@proton.me").then(() => {
        // Optional: Add feedback here if you want
        console.log("Email copied via copyText function!");
        // alert("Email copied!"); // Simple feedback
    }).catch(err => {
        console.error("Failed to copy email via copyText function:", err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // ... other code ...

    // --- Email Copy Code ---
    const emailLink = document.querySelector('a.social-button.proton'); // Select the specific Proton link

    if (emailLink) {
        // Remove the code block that directly used navigator.clipboard.writeText
        // Find the emailLink.addEventListener('click', ...) block from previous attempts

        emailLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent navigating to the link's href
            copyText(); // Call your function here

            // Optional: Add the visual feedback logic here if needed,
            // using iconSpan and originalIconHTML like before,
            // since copyText() itself doesn't handle it.
            const iconSpan = emailLink.querySelector('span.icon');
            if (iconSpan) {
                const originalIconHTML = iconSpan.innerHTML;
                iconSpan.textContent = 'Copied';
                 setTimeout(() => {
                    iconSpan.innerHTML = originalIconHTML;
                 }, 2000);
            }
        });

    } else {
        console.warn('Could not find the email link element (a.social-button.proton).');
    }

    // ... rest of your code ...
    const discordLink = document.querySelector('a.social-button.discord'); // Select the specific Discord link

    if (discordLink) {
        const iconSpan = discordLink.querySelector('span.icon'); // Get the icon span inside the Discord link
        const usernameSpan = discordLink.querySelector('span.username'); // Get the username span inside the Discord link

        if (iconSpan && usernameSpan) {
            const discordUsername = usernameSpan.textContent.trim(); // Get the Discord username text
            const originalIconHTML = iconSpan.innerHTML; // Store the original HTML of the icon span

            discordLink.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent navigating to the link's href

                navigator.clipboard.writeText(discordUsername).then(() => {
                    // Success: Change text and revert after delay
                    iconSpan.textContent = 'Copied'; // Change text for feedback

                    setTimeout(() => {
                        iconSpan.innerHTML = originalIconHTML; // Restore original icon HTML
                    }, 2000); // Revert back after 2 seconds

                }).catch(err => {
                    // Error handling
                    console.error('Failed to copy Discord username: ', err);
                    // Optionally provide user feedback on failure
                    iconSpan.textContent = 'Copy Failed!';
                     setTimeout(() => {
                        iconSpan.innerHTML = originalIconHTML; // Restore original icon HTML even on failure
                    }, 2000);
                });
            });
        } else {
            console.warn('Could not find the icon (span.icon) or username (span.username) span within the Discord link.');
        }
    } else {
        console.warn('Could not find the Discord link element (a.social-button.discord).');
    }
});

 function playsound() {
    
    var sfx = document.getElementById("sfx");
    sfx.autoplay = 'true';
sfx.load();}
