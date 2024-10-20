document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      const image = item.querySelector('img');
      const content = item.querySelector('.gallery-content');
      
      if (image && content) {
        image.onload = function() {
          const imageHeight = image.offsetHeight;
          const contentHeight = content.offsetHeight;
          if (imageHeight < contentHeight) {
            image.style.marginTop = (contentHeight - imageHeight) / 2 + 'px';
          }
        }
      }
    });
  });