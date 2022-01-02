const input = document.getElementById('one')
const p = document.querySelector('#result')
let timeOut;
input.addEventListener('input', (e) => {
    console.log(e.target.value);
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
        p.textContent = e.target.value
    }, 300)

})
