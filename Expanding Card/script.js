const panels = document.querySelectorAll('.panel')

console.log(panels[0])


panels.forEach((panel) => {
    panel.addEventListener('click', ()=> {
        console.log(panel)
        //removeClass()
        panel.classList.add('active')
    })
})

function removeClass(){
    panels.forEach(panel => {

        panel.classList.remove('active')
    })
}