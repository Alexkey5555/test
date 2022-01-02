const div = document.getElementById('block')
const btn = document.getElementById('btn')
const reset = document.getElementById('reset')

let interval
let count = 0
let active = false;

const animate = () => {
    count++
    interval = requestAnimationFrame(animate)
    if (count < 150) {
        div.style.left = count * 2 + 'px'
    }
    else {
        cancelAnimationFrame(interval)
    }
}
btn.addEventListener('click', (e) => {
    if (active) {
        cancelAnimationFrame(interval)
        active = false
    }
    else {
        interval = requestAnimationFrame(animate)
        active = true
    }
})
reset.addEventListener('click', () => {
    cancelAnimationFrame(interval)
    div.style.left = 10 + 'px'
    count = 0
    active = false
})
