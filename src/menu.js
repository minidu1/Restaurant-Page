import pizza from "./images/pizza.jpg"
import burger from "./images/burger.jpg"
import crispyChicken from "./images/crispy-chicken.jpg"
import iceCream from "./images/ice-cream.jpg"
import pasta from "./images/pasta.jpg"
import ramen from "./images/ramen.jpg"
import sushi from "./images/sushi.jpg"

export default function loadMenu() {
    const contentDiv = document.querySelector("#content")
    const menu = createMenu()
    contentDiv.appendChild(menu)

}

class MenuItem {
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
        price.textContent = `$ ${this.price}`

        menuItem.append(imgDiv, name, description, price)
        return menuItem
    }
}

function createMenu() {
    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu")

    const menu = [
        {
            image: burger,
            name: "Cheeseburger",
            description:
                "Juicy grilled beef patty with melted cheese, fresh lettuce, tomato, and house sauce in a toasted bun.",
            price: 8.5,
        },
        {
            image: pizza,
            name: "Pepperoni Pizza",
            description:
                "Classic pizza topped with spicy pepperoni, mozzarella cheese, and rich tomato sauce on a crispy crust.",
            price: 12.0,
        },
        {
            image: pasta,
            name: "Creamy Alfredo Pasta",
            description:
                "Soft pasta tossed in a rich creamy Alfredo sauce with garlic and parmesan cheese.",
            price: 10.0,
        },
        {
            image: sushi,
            name: "Sushi Platter",
            description:
                "Fresh assortment of sushi rolls including salmon, tuna, and avocado with soy sauce and wasabi.",
            price: 14.5,
        },
        {
            image: crispyChicken,
            name: "Fried Chicken Bucket",
            description:
                "Crispy golden fried chicken seasoned with spices, served hot and crunchy.",
            price: 11.0,
        },
        {
            image: iceCream,
            name: "Chocolate Ice Cream",
            description:
                "Smooth and rich chocolate ice cream made with premium cocoa, topped with chocolate chips.",
            price: 5.0,
        },
    ];

    menu.forEach(item => {
        const card = new MenuItem(item.image, item.name, item.description, item.price)
        menuContainer.appendChild(card.menuItem)
    });

    return menuContainer
}