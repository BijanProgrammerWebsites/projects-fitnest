const links = document.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.dataset.hoverState = 'entered';
    });

    link.addEventListener('mouseleave', () => {
        link.dataset.hoverState = 'left';
    });

    link.addEventListener('transitionend', () => {
        if (link.dataset.hoverState === 'left') {
            link.dataset.hoverState = 'idle';
        }
    });
});
