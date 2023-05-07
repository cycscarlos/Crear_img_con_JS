const photoContainer = document.getElementById("photo_container");

// Manera No. 1 
// photoContainer.innerHTML = getPhotoElement(1);
// photoContainer.innerHTML += getPhotoElement(2);

// Manera No. 2
for (let i = 0; i < 7; i++) {
  photoContainer.innerHTML += getPhotoElement(i + 1);
}

function getPhotoElement(photo_id) {
  return `<a href="#" class="photo">
  <img alt="Photo ${photo_id}" src="img/photo_${photo_id}.jpg"/>
  </a>`;
}
