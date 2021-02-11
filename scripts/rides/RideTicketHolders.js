const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("rideTicketPurchased", customEvent => {
    return contentTarget.innerHTML += 
    `
        <div class="person rider"></div>
    `
})

eventHub.addEventListener("FullPackageTicketPurchased", event => {
    return contentTarget.innerHTML += 
    `
        <div class="person bigSpender"></div>
    `
})


