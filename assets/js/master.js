const span = document.querySelectorAll('.box2>h2>span')
const span1 = document.querySelectorAll('.box2>h1>span')
const spmouse = document.querySelector('.c1')
const spmouse1 = document.querySelector('.c2')
const scroll1 = document.querySelector('.sc1')
const picbox = document.querySelectorAll('.sc1>.picbox')
const picbox1 = document.querySelectorAll('.sc2>.picbox')
const picbox2 = document.querySelectorAll('.sc3>.picbox')
const picbox3 = document.querySelectorAll('.sc4>.picbox')
const textbox1 = document.querySelectorAll('.mybox>.textbox1')
const figpic = document.querySelectorAll('.slide10>.row>.figpic')
const img = document.querySelector('.flobox>img')
const vidbox = document.querySelector('.vidbox')
const movetext = document.querySelectorAll('.slide12>.row>div')
let x = 0
let y = 0
let x1 = 0
let y1 = 0
span.forEach((val) => {
    val.addEventListener('mouseenter', () => {
        val.style.opacity = '0'
        val.style.transform = 'translateY(-200px)translateX(100px)rotate(120deg)'
    })
    val.addEventListener('mouseleave', () => {
        setTimeout(() => {
            val.style.opacity = '100%'
            val.style.transform = 'translateY(0px)translateX(0px)rotate(0deg)'
        }, 1000);
    })
})
/////////////////// span 1/////////////////////////
span1.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        item.style.opacity = '0'
        item.style.transform = 'translateY(-300px)translateX(-150px)rotate(-180deg)'
    })
    item.addEventListener('mouseleave', () => {
        setTimeout(() => {
            item.style.opacity = '100%'
            item.style.transform = 'translateY(0px)translateX(0px)rotate(0deg)'
        }, 1000);
    })
})
/////////////////// span 1/////////////////////////
window.addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
    spmouse.style.top = y + 'px'
    spmouse.style.left = x + 'px'
    spmouse1.style.top = y + 'px'
    spmouse1.style.left = x + 'px'
})
///////////////////////////////////////////////////
img.addEventListener('mousemove', (e) => {
    x1 = ((e.offsetX) / 10) - 27.5
    y1 = ((e.offsetY) / 10) - 27.5
    img.style.transform = 'perspective(600px)rotateY(' + x1 + 'deg)rotateX(' + y1 + 'deg)'
})
//////////////////////////////////////////////////
////////////// Scroll 1- Picbox //////////////////
picbox.forEach((val, i) => {
    val.setAttribute('data-h', val.offsetTop)
    console.log(val);
})
picbox1.forEach((val, i) => {
    val.setAttribute('data-h', val.offsetTop)
    console.log(val);
})
picbox2.forEach((val, i) => {
    val.setAttribute('data-h', val.offsetTop)
    console.log(val);
})
picbox3.forEach((val, i) => {
    val.setAttribute('data-h', val.offsetTop)
    console.log(val);
})
////////////////// textbox ////////////////////
textbox1.forEach((val) => {
    val.setAttribute('data-h', val.offsetTop)
    console.log(val);
})
////////////////// figpic ///////////////////////////
figpic.forEach((val) => {
    val.setAttribute('data-h', val.offsetTop)
    console.log(val);
})
///////////////////////////////////////////////
vidbox.setAttribute('data-h', vidbox.offsetTop)
console.log(vidbox);
///////////////////////////////////////////////
movetext.forEach((val) => {
    val.setAttribute('data-h', val.offsetTop)
    console.log(val);
})
window.addEventListener('scroll', () => {
    let st = window.scrollY
    console.log(st);
    picbox.forEach((val) => {
        if ((st + 650) > val.getAttribute('data-h')) {
            picbox[0].firstElementChild.style.transform = 'translateX(0)rotate(-7deg)'
            picbox[1].firstElementChild.style.transform = 'translateX(0)rotate(7deg)'
        }
        else if ((st + 50) < val.getAttribute('data-h')) {
            picbox[0].firstElementChild.style.transform = 'translateX(300px)rotate(-7deg)'
            picbox[1].firstElementChild.style.transform = 'translateX(-300px)rotate(7deg)'
        }
    })
    ///////////////////////////////
    picbox1.forEach((val) => {
        if ((st + 650) > val.getAttribute('data-h')) {
            picbox1[0].firstElementChild.style.transform = 'translateX(0)rotate(-7deg)'
            picbox1[1].firstElementChild.style.transform = 'translateX(0)rotate(7deg)'
        }
        else if ((st + 50) < val.getAttribute('data-h')) {
            picbox1[0].firstElementChild.style.transform = 'translateX(300px)rotate(-7deg)'
            picbox1[1].firstElementChild.style.transform = 'translateX(-300px)rotate(7deg)'
        }
    })
    /////////////////////////////////
    picbox2.forEach((val) => {
        if ((st + 650) > val.getAttribute('data-h')) {
            picbox2[0].firstElementChild.style.transform = 'translateX(0)rotate(-7deg)'
            picbox2[1].firstElementChild.style.transform = 'translateX(0)rotate(7deg)'
        }
        else if ((st + 50) < val.getAttribute('data-h')) {
            picbox2[0].firstElementChild.style.transform = 'translateX(300px)rotate(-7deg)'
            picbox2[1].firstElementChild.style.transform = 'translateX(-300px)rotate(7deg)'
        }
    })
    /////////////////////////////////////
    picbox3.forEach((val) => {
        if ((st + 650) > val.getAttribute('data-h')) {
            picbox3[0].firstElementChild.style.transform = 'translateX(0)rotate(-7deg)'
            picbox3[1].firstElementChild.style.transform = 'translateX(0)rotate(7deg)'
        }
        else if ((st + 50) < val.getAttribute('data-h')) {
            picbox3[0].firstElementChild.style.transform = 'translateX(300px)rotate(-7deg)'
            picbox3[1].firstElementChild.style.transform = 'translateX(-300px)rotate(7deg)'
        }
    })
    /////////////// --------textbox-------/////////////////////////////////
    textbox1.forEach((val) => {
        if ((st - 3200) > val.getAttribute('data-h')) {
            val.style.top = '-180px'
        }
        else if ((st - 3700) <= val.getAttribute('data-h')) {
            textbox1[1].style.top = '150px'
            textbox1[2].style.top = '200px'
            textbox1[3].style.top = '300px'
            textbox1[4].style.top = '400px'
            // val.style.top='180px'
        }

    })
    /////////////////////////////////////
    figpic.forEach((item) => {
        if ((st - 4200) > item.getAttribute('data-h')) {
            figpic[1].style.transform = 'translateY(-100px)'
        }
        if ((st - 5500) > item.getAttribute('data-h')) {
            figpic[3].style.transform = 'translateY(-100px)'
        }
        else if ((st - 4000) <= item.getAttribute('data-h')) {
            figpic[1].style.transform = 'translateY(0)'
        }
        else if ((st - 5300) > item.getAttribute('data-h')) {
            figpic[3].style.transform = 'translateY(0)'
        }
    })
    ///////////////////////////////////////////////////////
    if ((st + 100) > vidbox.getAttribute('data-h')) {
        vidbox.style.transform = 'scale(.90)'
    }
    else {
        vidbox.style.transform = 'scale(1)'
    }
    //////////////////////////////////////////////////////

    if ((st + 450) > movetext[1].getAttribute('data-h')) {
        movetext[1].firstElementChild.style.transform = 'translateX(70%)'
    }
    else {
        movetext[1].firstElementChild.style.transform = 'translateX(-100%)'
    }
    ///////////////////////////////////////////////////
    if ((st + 520) > movetext[3].getAttribute('data-h')) {
        movetext[3].firstElementChild.style.transform = 'translateX(-70%)'
    }
    else {
        movetext[3].firstElementChild.style.transform = 'translateX(100%)'
    }

})