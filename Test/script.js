const input = document.getElementById('one')
const p = document.querySelector('#result')
let timeOut;
input.addEventListener('input', (e) => {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
        p.textContent = e.target.value
    }, 300)

})
