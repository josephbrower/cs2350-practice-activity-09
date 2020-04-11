// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import 'bootstrap';

function displayCard(c){//good
    return `
        <div class="card" data-title="${c.title}">
            <img src="${c.poster}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${c.title}</h5>
                <p class="card-text">${c.decription}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                <button class="btn btn-danger">Delete</button>
            </div>
        </div>
    `
}

function displayCards(){//good
    let cards = JSON.parse(localStorage.getItem('cards') || '[]')
    document.querySelector('#cards').innerHTML = ''
    for(let c of cards){
        let col = document.createElement('div')
        col.setAttribute('class', 'col-md-4')
        col.innerHTML = displayCard(c);//good
        document.querySelector('#cards').appendChild(col)
    }

    document.querySelectorAll('button.btn-danger').forEach(function(b){
        b.onclick = function(event){
            let cards = JSON.parse(localStorage.getItem('cards') || '[]')
            let ndx = -1
            for(let i in cards){
                if(cards[i].title === event.target.closest('.card').dataset.title){
                    ndx = i
                    break
                }
            }

            if(ndx != -1){
                card.splice(ndx, 1)
                localStorage.setItem('cards', JSON.stringify(cards))
                location.reload()
            }
        }
    })
}

function addNewCard(event){//good
    if(event) event.preventDefault()//good

    let t = document.querySelector('#title').Value
    let d = document.querySelector('#description').Value
    let p = document.querySelector('#poster').Value

let cards = JSON.parse(localStorage.getItem('cards') || '[]')//good

    if(t && d && p){//good
        let card = {title: t, decription: d, poster: p}
        cards.push(card)
        localStorage.setItem('cards', JSON.stringify(cards))
    }

    this.reset()//good
    document.querySelector('#cards').classList.remove('d-none')
    document.querySelector('#myForm').classList.add('d-none')

    displayCards()//good
}

document.querySelector('#new_card').onclick = function(){//good
    document.querySelector('#myForm').classList.remove('d-none')
    document.querySelector('#cards').classList.add('d-none')
}

document.forms[0].querySelector('[type="button"').onclick = function(){//good
    document.querySelector('#cards').classList.remove('d-none')
    document.querySelector('#myForm').classList.add('d-none')
}

document.forms[0].addEventListener('submit', addNewCard, false)//good
displayCards()