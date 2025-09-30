document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.preview-wrapper');
  if (!wrapper) return;
  const iframe = wrapper.querySelector('#siteone-iframe');
  let loaded = false;
  wrapper.addEventListener('mouseenter', () => {
    if (loaded || !iframe) return;
    iframe.src = 'https://rosenode.github.io/Historical-Figure/';
    loaded = true;
  });
});

// finish this - redirect on click