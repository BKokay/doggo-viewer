const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

fetch(BREEDS_URL)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const breedsObject = data.message; //Turn the message into an object
        const breedsArray = Object.keys(breedsObject) //Turn the object into an array 
        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option') //<option></option>
            option.value = breedsArray[i] //<option value='breed'>
            option.innerText = breedsArray[i] //<option value='breed'>breed</option>
            select.appendChild(option)  //adds current <option> tag to the select box list of options
        }

    })

select.addEventListener('change', event => {
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
    getDoggoImg(url)
    doggoInfo.assignMF()
    doggoInfo.assignAge()
    doggoInfo.assignLikes()
    doggoInfo.assignDislikes()
    doggoInfo.assignFunFact()
})

const img = document.querySelector('.dog-img')

const getDoggoImg = url => {
    fetch(url) //going to the API url above
        .then(res => {
            return res.json(); //get JSON message back
        })
        .then(data => {
            img.src = data.message //extract message from JSON and attach to img tag as new source
        })
}

