const init = () => {
  let form = document.querySelector('form')
  form.addEventListener('submit',e => {
    e.preventDefault()
    getData(e.target.searchByID.value)
    form.reset()
  })
}

function getData (item){
    fetch(`http://localhost:3000/movies/${item}`)
        .then(res => res.json())
        .then(data => addToList(data))

}

function addToList(book){
    console.log(book)
    let titleValue = book.title
    let summaryValue = book.summary
    let title =document.querySelector("#movieDetails h4")
    let p =document.querySelector("#movieDetails p")
    title.innerHTML = `we found the book with title: <h3>${titleValue}</h3>`
    p.textContent = `this is the summary of the book: ${summaryValue}`
    // p.style.color = "red"
}

document.addEventListener('DOMContentLoaded', init);