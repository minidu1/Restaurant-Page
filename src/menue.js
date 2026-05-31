import pizzaImg from "./img.jpg"
export default function loadMeanu(){
    const contentDiv = document.querySelector("#content")

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu")

    const menuItem = document.createElement("div")
    menuItem.classList.add("menu-item")

    const imgDiv = document.createElement("img")
    imgDiv.classList.add("img")
    imgDiv.src = pizzaImg
    
    const name = document.createElement("div")
    name.classList.add("name")
    name.textContent = "pizza"

    const description = document.createElement("div")
    description.classList.add("description")
    description.textContent = `Juicy grilled beef patty with melted cheese, fresh lettuce, tomato, and house sauce in a toasted bun`

    const price = document.createElement("div")
    price.classList.add("price")
    price.textContent = `$12.00`

    menuItem.append(imgDiv, name, description, price)
    menuContainer.appendChild(menuItem)
    contentDiv.appendChild(menuContainer)
    
}