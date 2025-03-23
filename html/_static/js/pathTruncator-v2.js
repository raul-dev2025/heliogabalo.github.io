// _static/js/simplify-url.js
function simplifyUrlBar() {
    const currentUrl = window.location.href;

    if (currentUrl.startsWith('file://')) {
        const path = new URL(currentUrl).pathname;
        const segments = path.split('/').filter(segment => segment.length > 0);
        const truncatedPath = segments.slice(-2).join('/') + '/';
        history.replaceState(null, '', `file:///${truncatedPath}`);

        // Add a visual indicator for local files
        const indicator = document.createElement('span');
        indicator.textContent = ' (Local)';
        indicator.style.color = 'gray';
        document.querySelector('h1').appendChild(indicator);
    }
}

document.addEventListener('DOMContentLoaded', simplifyUrlBar);
