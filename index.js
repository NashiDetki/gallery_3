function showImage(imageSrc){
    let popupImage = document.getElementById('PopupImage');
    popupImage.src = imageSrc;
    let imagePopup = document.getElementById('imagePopup');
    let popup_text = imagePopup.querySelector('.popup_text');
    console.log(imageSrc)
  if (imageSrc == "http://127.0.0.1:5500/img/1.jpg"){
    popup_text.innerText = 'С новым годом!!!';
} else if (imageSrc == "http://127.0.0.1:5500/img/2.jpg"){
    popup_text.innerText = 'Желаю счастья, здоровья и блогаполучия!!!';
} else if (imageSrc == "http://127.0.0.1:5500/img/3.jpg"){
    popup_text.innerText = 'С новым годом!!!';
} else if (imageSrc == "http://127.0.0.1:5500/img/4.jpg"){
    popup_text.innerText = 'С новым годом!!!';
} else if (imageSrc == "http://127.0.0.1:5500/img/5.jpg"){
    popup_text.innerText = 'С новым годом!!!';
} else if (imageSrc == "http://127.0.0.1:5500/img/6.jpg"){
    popup_text.innerText = 'С новым годом!!!';
} else if (imageSrc == "http://127.0.0.1:5500/img/7.jpg"){
    popup_text.innerText = 'С новым годом!!!';
} else if (imageSrc == "http://127.0.0.1:5500/img/8.jpg"){
    popup_text.innerText = 'С новым годом!!!';
} else if (imageSrc == "http://127.0.0.1:5500/img/9.jpg"){
    popup_text.innerText = 'С новым годом!!!';
} else{
    popup_text.innerText = 'С новым годом!!!';
}

 imagePopup.style.display = "flex";
}

function closeImage(){
    let imagePopup = document.getElementById('imagePopup');
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto"
}