
export function homePage(){
    const contentDiv = document.querySelector("#content")

    const topic = document.createElement("h1")
    topic.classList.add("topic")
    topic.textContent = "Food Place"

    const details = document.createElement("div")
    details.classList.add("details")
    details.textContent = `
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit saepe natus sunt odio distinctio sequi repellat et iure illo magnam, voluptates expedita iste ab omnis ullam atque eaque quaerat placeat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus beatae optio adipisci sint corrupti error ullam fugit aspernatur velit! Voluptatum explicabo eligendi vel, sequi soluta enim facilis molestias perspiciatis quos.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eius culpa. Corrupti dolorum autem obcaecati veritatis et id ipsa tenetur nesciunt. Minima maiores tempore dolorum, earum magnam voluptates! Amet, neque?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quibusdam recusandae corporis, reiciendis atque quo ullam maiores impedit? Consectetur minima voluptate inventore dignissimos maiores aspernatur fugit excepturi sit perspiciatis nihil.
            Eius provident quaerat aperiam ex numquam dolor, iste illum placeat illo ea neque quis adipisci, vero odit id veritatis ratione distinctio molestias. Reprehenderit ex eos nam fugit nulla debitis voluptatem.
            `

    contentDiv.appendChild(topic)
    contentDiv.appendChild(details)
}