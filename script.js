// const boxToCircle = () =>{
//     // 1.) target box
//     let square = document.querySelector('.box')
//     square.classList.toggle('circle')
// }

// const boxToBio = ()=>{
//     let square = document.querySelector('.box')
//     square.classList.toggle('bio')
// }

// const showBio = ()=>{
//     boxToBio()
//     let newBox = document.querySelector('.bio')
//     newBox.innerHTML = "This represents "
// }

// const hideImage = ()=>{
//     let target = document.querySelector('.jordan')
//     target.classList.toggle('disappear')
//     let btn = document.querySelector('.hidden')
//     btn.innerHTML = "Show Me"
// }

//Toggle 1
const boxToCircle = () =>{
    // 1.) target box
    let square = document.querySelector('.box')
    square.classList.toggle('.circle')
}

const boxToBio = ()=>{
    let square = document.querySelector('.box')
    square.classList.toggle('bio')
}

const showBio = ()=>{
    boxToBio()
    let newBox = document.querySelector('.bio')
    newBox.innerHTML = "This represents "
}

const hideImage = ()=>{
    let target = document.querySelector('.wondWoman')
    target.classList.toggle('disappear')
    let btn = document.querySelector('.hidden')
    btn.innerHTML = "See Me"
    wonderWoman.classList.toggle("fighting")
}