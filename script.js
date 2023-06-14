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
    square.classList.toggle('circle')
}

const boxToBio = ()=>{
    let square = document.querySelector('.box')
    square.classList.toggle('bio')
    let newBox = document.querySelector('.bio')
    newBox.innerHTML = "This represents "
}

const showBio = ()=>{
    boxToBio()
    let newBox = document.querySelector('.bio')
    newBox.innerHTML = "This represents "
}

const hideImage = ()=>{
    let target = document.querySelector('.wonderWoman')
    target.classList.toggle('disappear')
    let btn = document.querySelector('.hidden')
    btn.innerHTML = "See Me"
    wonderWoman.classList.toggle('fighting')
}

const newImage = () => {
    let img = document.querySelector('.wondWoman')
    img.src = 'https://media2.giphy.com/media/ej20RQRslMpAUKr0sI/giphy.gif?cid=6c09b9529mnp4obtu7yrxr2bzb8hgm2g162z37hneldoni8j&ep=v1_gifs_search&rid=giphy.gif&ct=g'
}

const beepBeep = ()=>{
    let target = document.querySelector('.roadRunner')
    target.classList.toggle('spin')
    let btn = document.querySelector('.hidden')
    btn.innerHTML = "See Me"
    wonderWoman.classList.toggle('fighting')
}

const beginRun = () => {
    let whiteHorse = document.querySelector('.runningContainer')
   whiteHorse.classList.toggle('horseRun')
}




