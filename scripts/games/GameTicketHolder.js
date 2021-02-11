const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("gameTicketPurchased", customEvent => {
    return contentTarget.innerHTML += 
    `
        <div class="person player"></div>
    `
})

eventHub.addEventListener("FullPackageTicketPurchased", event => {
    return contentTarget.innerHTML += 
    `
        <div class="person bigSpender"></div>
    `
})