/* Gallery section */

const onGalleryImageClick = () => {
  const galleryImageList = document.querySelectorAll("#agd-gallery li");
  const galleryImages = [...galleryImageList];

  galleryImages.forEach(image => {
      image.addEventListener("click", event => {
          galleryImageOpen(event.target);
      })
  })
};

const galleryImageOpen = image => {
  const imageSrc = image.getAttribute("src");
  const openedImage = `<div class='aw-backdrop'><img src='${imageSrc}' alt='' />
		                    <span class="aw-backdrop-close">X</span></div>`;
    document.body.insertAdjacentHTML("beforeend", openedImage);
};