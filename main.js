const container = document.createElement('div')
const text = document.createElement('p')
const textDiv = document.createElement('p')
const h3 = document.createElement('h3')
const div = document.createElement('div')
const h1 = document.createElement('h1')


text.textContent = 'Hey im red!'
text.style.color = 'red'

h3.textContent = 'Hey im blue!'
h3.style.color = 'blue'

div.setAttribute('style', 'background-color: pink ; border: 1px, black')

h1.textContent = 'Im in a div'
textDiv.textContent= 'ME TOO!!'

div.appendChild(h1)
div.appendChild(textDiv)

container.appendChild(text)
container.appendChild(h3)

document.body.appendChild(container)
document.body.appendChild(div)