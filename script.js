// Function to handle clicking on a project
function handleProjectClick(projectName) {
    console.log("Navigating to: " + projectName);
    // You can add logic here to open a modal or redirect to a new page
    // alert("You clicked on " + projectName);
}

// Navbar Scroll Effect: Changes background color when scrolling
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/80', 'backdrop-blur-md', 'sticky', 'top-0', 'z-50', 'shadow-sm');
    } else {
        nav.classList.remove('bg-white/80', 'backdrop-blur-md', 'sticky', 'top-0', 'z-50', 'shadow-sm');
    }
});

console.log("Level Up Desk Portfolio Loaded Successfully.");