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
// Your copy function (make sure it's defined, preferably near the top or outside the DOMContentLoaded if needed elsewhere)

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
// email copy code
    const emailLink = document.querySelector('a.social-button.proton');

    if (emailLink) {
        // {{ START: Modify ProtonMail button click listener }}
        emailLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent navigating

            const emailToCopy = "minhkhoi.nguyengamer12@proton.me"; // Define email here

            navigator.clipboard.writeText(emailToCopy).then(() => {
                // Success: Create the floating text effect
                const floatingText = document.createElement('span');
                floatingText.textContent = 'Copied!';
                floatingText.classList.add('floating-copy-text');

                // Position the floating text
                const rect = emailLink.getBoundingClientRect();
                floatingText.style.position = 'absolute';
                floatingText.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
                floatingText.style.top = `${window.scrollY + rect.top - 10}px`;
                floatingText.style.transform = 'translateX(-50%)';

                document.body.appendChild(floatingText);

                // Remove the element after the animation
                const removeElement = () => {
                     if (floatingText.parentNode) {
                        floatingText.remove();
                     }
                };
                floatingText.addEventListener('animationend', removeElement);
                setTimeout(removeElement, 1500); // Fallback

            }).catch(err => {
                console.error('Failed to copy email: ', err);

                // Failure: Create floating text with error styling
                const floatingText = document.createElement('span');
                floatingText.textContent = 'Copy Failed!';
                floatingText.classList.add('floating-copy-text', 'error');

                // Position the floating text
                const rect = emailLink.getBoundingClientRect();
                floatingText.style.position = 'absolute';
                floatingText.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
                floatingText.style.top = `${window.scrollY + rect.top - 10}px`;
                floatingText.style.transform = 'translateX(-50%)';

                document.body.appendChild(floatingText);

                // Remove the element after the animation
                const removeElement = () => {
                     if (floatingText.parentNode) {
                        floatingText.remove();
                     }
                };
                floatingText.addEventListener('animationend', removeElement);
                setTimeout(removeElement, 1500); // Fallback
            });
            // {{ Remove old feedback mechanism }}
            // const iconSpan = emailLink.querySelector('span.icon');
            // if (iconSpan) {
            //     const originalIconHTML = iconSpan.innerHTML;
            //     iconSpan.textContent = 'Copied';
            //     setTimeout(() => {
            //         iconSpan.innerHTML = originalIconHTML;
            //     }, 2000);
            // }

        });
        // {{ END: Modify ProtonMail button click listener }}

    } else {
        console.warn('Could not find the email link element (a.social-button.proton).');
    }
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
                    // Success: Create the floating text effect
                    // Success: Create the floating text effect
                    // {{ START: New floating text mechanism }}
                    const floatingText = document.createElement('span');
                    floatingText.textContent = 'Copied!';
                    floatingText.classList.add('floating-copy-text'); // Add base class

                    // Position the floating text near the button
                    const rect = discordLink.getBoundingClientRect();
                    floatingText.style.position = 'absolute';
                    // Position slightly above and centered horizontally relative to the button, accounting for scroll
                    floatingText.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
                    floatingText.style.top = `${window.scrollY + rect.top - 10}px`; // 10px above the button
                    floatingText.style.transform = 'translateX(-50%)'; // Center horizontally

                    document.body.appendChild(floatingText); // Add to the body

                    // Remove the element after the animation finishes (duration should match CSS)
                    floatingText.addEventListener('animationend', () => {
                        if (floatingText.parentNode) { // Check if it hasn't already been removed
                            floatingText.remove();
                        }
                    });
                     // Fallback removal in case animationend doesn't fire reliably
                     setTimeout(() => {
                        if (floatingText.parentNode) {
                           floatingText.remove();
                        }
                     }, 1500); // Matches CSS animation duration

                    // {{ END: New floating text mechanism }}

                }).catch(err => {
                    console.error('Failed to copy Discord username: ', err);

                    // Optional: Implement a floating text for failure as well
                    const floatingText = document.createElement('span');
                    floatingText.textContent = 'Copy Failed!';
                    floatingText.classList.add('floating-copy-text'); // Reuse the style or create a new one for error
                    floatingText.style.backgroundColor = 'rgba(200, 0, 0, 0.7)'; // Red background for error

                    const rect = discordLink.getBoundingClientRect();
                    floatingText.style.position = 'absolute';
                    floatingText.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
                    floatingText.style.top = `${window.scrollY + rect.top - 10}px`;
                    floatingText.style.transform = 'translateX(-50%)';

                    document.body.appendChild(floatingText);

                    floatingText.addEventListener('animationend', () => {
                         if (floatingText.parentNode) {
                           floatingText.remove();
                        }
                    });
                     setTimeout(() => {
                        if (floatingText.parentNode) {
                           floatingText.remove();
                        }
                     }, 1500);
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

document.addEventListener('DOMContentLoaded', function() {
    const jsbModeToggle = document.getElementById('jsbModeToggle');
    
    if (jsbModeToggle) {
        jsbModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('jsb-mode');
            
            // Optional: Save user preference
            if (document.body.classList.contains('jsb-mode')) {
            localStorage.setItem('themeMode', 'jsb');
            } else {
            localStorage.removeItem('themeMode');
            }
        });
    }

    // Optional: Check for saved preference on page load
    if (localStorage.getItem('themeMode') === 'jsb') {
    document.body.classList.add('jsb-mode');
     }
});
    var sfx = document.getElementById("sfx");
    sfx.autoplay = 'true';
sfx.load();}
