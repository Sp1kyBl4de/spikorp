document.querySelectorAll('.section').forEach(div => {
    div.addEventListener('click', () => {
        const link = div.getAttribute('data-link'); // Get the link from the data-link attribute
        if (link) {
            window.location.href = link; // Navigate to the link
        }
    });
});