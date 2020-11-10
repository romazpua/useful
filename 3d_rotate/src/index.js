const items = document.querySelectorAll('.item')

for (let i = 0; i < items.length; i++) {
    const item = items[i]
    item.addEventListener('mousemove', startRotate)
    item.addEventListener('mouseout', stopRotate)
}


function startRotate(event) {
    const item_item = this.querySelector('.item_item')
    const halfHeight = item_item.offsetHeight / 2;
    const halfWidth = item_item.offsetWidth / 2;

    item_item.style.transform = 'rotateX(' + -(event.offsetY - halfHeight) / 50 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 20 + 'deg)'
}

function stopRotate(event) {
    const item_item = this.querySelector('.item_item')

    item_item.style.transform = 'rotate(0)'
}