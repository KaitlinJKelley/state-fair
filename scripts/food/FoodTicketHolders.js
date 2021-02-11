const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("foodTicketPurchased", customEvent => {
    return contentTarget.innerHTML += 
    `
        <div class="person eater"></div>
    `
})

eventHub.addEventListener("FullPackageTicketPurchased", event => {
    return contentTarget.innerHTML += 
    `
        <div class="person bigSpender"></div>
    `
})