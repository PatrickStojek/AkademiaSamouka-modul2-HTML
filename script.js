const popupCloseBtn = document.querySelector('.close-icon')
const popup = document.querySelector('.popup')
const showPopupBtn = document.querySelector('.show-popup-btn')



function closePopup() {
    popup.style.display = 'none'
}

function showPopup() {
    popup.style.display = 'block'
}

popupCloseBtn.addEventListener('click', () => {
    closePopup();
})

showPopupBtn.addEventListener('click', () => {
    showPopup();
})


if(popup.style.display != 'none') {
    document.addEventListener('click', function(event) {
        if(event.key === 'Escape') {
            closePopup();
        }
    })
}