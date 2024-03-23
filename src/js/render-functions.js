import simpleLightbox from 'simplelightbox';

export function renderGallery(images, gallery) {
  gallery.innerHTML = '';

  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('card');

    const link = document.createElement('a');
    link.href = image.largeImageURL;
    card.appendChild(link);

    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    link.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('info');

    info.innerHTML = `
            <p><span class="bold-word">Likes</span><br/>${image.likes}</p>
            <p><span class="bold-word">Views</span><br/>${image.views}</p>
            <p><span class="bold-word">Comments</span><br/>${image.comments}</p>
            <p><span class="bold-word">Downloads</span><br/>${image.downloads}</p>
        `;

    gallery.appendChild(card);
    card.appendChild(info);
  });

  let largeImage = new simpleLightbox('a', {
    captionSelector: 'img',
    captionType: 'text',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

  largeImage.refresh();
}
