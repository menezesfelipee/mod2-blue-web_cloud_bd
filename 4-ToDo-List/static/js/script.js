const lista = document.querySelectorAll('.lista')

lista.forEach((item) => {
    item.addEventListener('click', () => {
        if(item.style.textDecoration == '') {
            item.style.textDecoration = 'line-through'
            item.style.backgroundColor = '#ccc'
            item.style.borderBottomColor = '#fff'
        } else {
            item.style.textDecoration = ''
            item.style.backgroundColor = '#fff'
            item.style.borderBottomColor = '#ccc'
        }
    })
})