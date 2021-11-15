import "../index.css"
import JS_IMAGE from '../assets/bg.jpg';

console.log('hello world')

const textInContainer = document.querySelector('.container')


const mainText = document.createElement('div')
mainText.className = 'main-text'
mainText.innerHTML = '<h2>I love JavaScript</h2>'
textInContainer.append(mainText)

const homeWork = document.createElement('div')
homeWork.className = 'home-work'
homeWork.textContent = 'Домашняя работа по Rollup'

textInContainer.append(homeWork)


const jsImageHTML = document.createElement('img')
jsImageHTML.className = 'js-image'
jsImageHTML.src = JS_IMAGE
document.body.append(jsImageHTML)