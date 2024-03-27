let elBtn = document.querySelectorAll(".paginetion--btn");
let elCard = document.querySelectorAll(".swiper-card");
let modals = document.querySelectorAll(".modal");
let cards = document.querySelectorAll(".galary--photo");
let modalImage = document.querySelectorAll("modal--image");

elBtn[0].classList.add("active--btn");
elCard[0].classList.add("active--card");

elBtn.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        elBtn.forEach(btn => btn.classList.remove("active--btn"));
        event.currentTarget.classList.add("active--btn");

        elCard.forEach(card => card.classList.remove("active--card"));

        elCard[index].classList.add("active--card");
    });
});



let active = () => {
    document.body.classList.toggle("active")
}

function openModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
}

cards.forEach((card) => {
    card.addEventListener("click", () => {
        let modalId = card.getAttribute("data-modal");
        openModal(modalId);
    });
});

let closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation(); // Stop the event from propagating to the window
        let modalId = event.currentTarget.getAttribute("data-modal");
        closeModal(modalId);
    });
});

document.addEventListener("click", (event) => {
    modals.forEach((modal) => {
        if (event.target === modal || modal.contains(event.target)) {
            let modalId = modal.id;
            closeModal(modalId);
        }
    });
});

function toggleImageSize(element) {
    var imageBoxes = document.querySelectorAll('.card--img-box');

    imageBoxes.forEach(function (otherBox) {
        otherBox.classList.remove('enlarged');
    });

    element.classList.toggle('enlarged');
}
function toggleModalImageSizeCustom(element) {
    var modalImages = document.querySelectorAll('.modal--image');

    modalImages.forEach(function (otherImage) {
        otherImage.classList.remove('modal-enlarged');
    });
}


let leftSideItems = document.querySelectorAll(".left-side--item");
let rightSideCards = document.querySelectorAll(".img--box--right-side");

// Добавляем активный класс первой кнопке и карточке при загрузке страницы
leftSideItems[0].classList.add("active--left-side");
rightSideCards[0].classList.add("active--right-side");

// Добавляем обработчик событий для каждой кнопки
leftSideItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log("hello");
        // Убираем активность у всех кнопок
        leftSideItems.forEach(btn => btn.classList.remove("active--left-side"));
        // Добавляем активность текущей кнопке
        item.classList.add("active--left-side");

        // Убираем активность у всех карточек
        rightSideCards.forEach(card => card.classList.remove("active--right-side"));
        // Добавляем активность карточке с соответствующим индексом
        rightSideCards[index].classList.add("active--right-side");
    });
});

