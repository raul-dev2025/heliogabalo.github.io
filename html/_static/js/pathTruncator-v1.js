// _static/js/simplify-url.js
function simplifyUrlBar() {
    // Get the current URL from the address bar
    const currentUrl = window.location.href;

    // Check if the URL points to a local file
    if (currentUrl.startsWith('file://')) {
        // Extract the path from the URL
        const path = new URL(currentUrl).pathname;

        // Truncate the path to show only the last 2 segments
        const segments = path.split('/').filter(segment => segment.length > 0);
        const truncatedPath = segments.slice(-2).join('/') + '/';

        // Update the displayed URL in the address bar
        history.replaceState(null, '', `file:///${truncatedPath}`);
    }
}

// Run the function when the page loads
document.addEventListener('DOMContentLoaded', simplifyUrlBar);
