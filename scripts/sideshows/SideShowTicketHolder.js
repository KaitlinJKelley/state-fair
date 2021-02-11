const eventHub = document.querySelector("#state-fair")
const contentTarget = document.querySelector(".sideshow")

eventHub.addEventListener("SideShowTicketPurchased", event => {
    return contentTarget.innerHTML += `
    <div class="person gawker"></div>
    `
})

eventHub.addEventListener("FullPackageTicketPurchased", event => {
    return contentTarget.innerHTML += 
    `
        <div class="person bigSpender"></div>
    `
})