import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const imagesContainer = document.getElementById("galerie");

galleryItems.forEach(

    item => {

       const galleryItem = document.createElement("li");
       galleryItem.classList.add("gallery__item")

       const galleryItem2= document.createElement("a");
   
       


       const imgElement = document.createElement("img")

       imgElement.src =item.preview;
       imgElement.alt =item.description;
       imgElement.dataset.original = item.original
       imgElement.setAttribute("data-source", item.original)
       imgElement.className= "gallery__image"
       galleryItem.appendChild(imgElement)
       console.log(galleryItem);
       galleryItem2.appendChild(imgElement)
       galleryItem.appendChild(galleryItem2)
   
       imagesContainer.appendChild(galleryItem);

  

     

       })

       imagesContainer.addEventListener("click" , openphoto) 

       function openphoto(e) {
        e.preventDefault();
      
        const currentImage = e.target.dataset.source;
        const instance = basicLightbox.create(
         `
          <img src="${currentImage}" width="800" height="600">
      `,
          {
            onShow: () => {
              window.addEventListener("keydown", closeOnEscClick);
            },
            onClose: () => {
              window.removeEventListener("keydown", closeOnEscClick);
            },
          }
        );
        if (e.target !== e.currentTarget) instance.show();
      
        function closeOnEscClick(e) {
          if (e.code === "Escape") instance.close();
        }
      }

       



        



     
      
       
    










  














