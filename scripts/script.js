let products = {
  data: [
    {
      productName: "Celio Solid Black Long Sleeves Pu Jacket",
      category: "Jacket",
      price: "30",
      image: "images/jacket01.jpg"
    },
    {
      productName: "bottomwear black",
      category: "Bottomwear",
      price: "70",
      image: "images/bottomwear01.jpg"
    },
    {
      productName: "Topwear Black",
      category: "Topwear",
      price: "80",
      image: "images/topwear01.jpg"
    },
    {
      productName: "Watch Black",
      category: "Watch",
      price: "100",
      image: "images/watch01.jpg"
    },
  ]
}

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div")
  //Card should have category
  card.classList.add("card", i.category, "hide")
  //image div
  let imgContainer = document.createElement("div")
  imgContainer.classList.add("image-container")
  //img tag
  let image = document.createElement("img")
  image.setAttribute("src", i.image)
  imgContainer.appendChild(image)
  card.appendChild(imgContainer)

  document.getElementById("products").appendChild(card)
  //Container
  let container = document.createElement("div")
  container.classList.add("container")
  //Product name
  let name = document.createElement("h5")
  name.classList.add("product-name")
  name.innerText = i.productName.toUpperCase()
  container.appendChild(name)
  //Price
  let price = document.createElement("h6")
  price.innerText = "$" + i.price
  container.appendChild(price)

  card.appendChild(container)

}

//Paramenter passed from button (Paramenter same as category)

function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value")

  buttons.forEach(button => {
    //Check if value equals InnerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active")
    } else {
      button.classList.remove("active")
    }
  })

  //Select all cards
  let elements = document.querySelectorAll(".card")
  //Loop through all cards  
  elements.forEach(element => {
    //Display all cards on 'all' button click
    if (value == 'All') {
      element.classList.remove("hide")
    } else {
      console.log(value)
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //Display element based on category
        element.classList.remove("hide")
      } else {
        //Hide other elements
        element.classList.add("hide")
      }
    }
  })
}

//Inicitially display all products
window.onload = () => {
  filterProduct('All');
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //Initializations
  let searchInput = document.getElementById("search-input").value
  let elements = document.querySelectorAll(".product-name")
  let cards = document.querySelectorAll(".card")

  elements.forEach((element, index) => {
    console.log(element)
    //Check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //Display matching click
      cards[index].classList.remove("hide")
    } else {
      cards[index].classList.add("hide")
    }
  })

})