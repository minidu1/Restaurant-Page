import pizzaImg from "./img.jpg"
export default function loadMeanu() {
    const contentDiv = document.querySelector("#content")

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu")

    // const menuItem = document.createElement("div")
    // menuItem.classList.add("menu-item")

    // const imgDiv = document.createElement("img")
    // imgDiv.classList.add("img")
    // imgDiv.src = pizzaImg

    // const name = document.createElement("div")
    // name.classList.add("name")
    // name.textContent = "pizza"

    // const description = document.createElement("div")
    // description.classList.add("description")
    // description.textContent = `Juicy grilled beef patty with melted cheese, fresh lettuce, tomato, and house sauce in a toasted bun`

    // const price = document.createElement("div")
    // price.classList.add("price")
    // price.textContent = `$12.00`

    // menuItem.append(imgDiv, name, description, price)

    const item = new CreateMenuItem(pizzaImg, "pizza", "description", "12.00")
    console.log(item)

    menuContainer.appendChild(item.menuItem)
    contentDiv.appendChild(menuContainer)

}

class CreateMenuItem {
    constructor(image, name, description, price) {
        this.image = image
        this.name = name
        this.description = description
        this.price = price
    }

    get menuItem() {

        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item")

        const imgDiv = document.createElement("img")
        imgDiv.classList.add("img")
        imgDiv.src = this.image

        const name = document.createElement("div")
        name.classList.add("name")
        name.textContent = this.name

        const description = document.createElement("div")
        description.classList.add("description")
        description.textContent = this.description

        const price = document.createElement("div")
        price.classList.add("price")
        price.textContent = this.price

        menuItem.append(imgDiv, name, description, price)
        return menuItem
    }
}
