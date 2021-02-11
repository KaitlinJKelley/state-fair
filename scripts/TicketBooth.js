const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", event => {
    if(event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    } else if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased")
        eventHub.dispatchEvent(foodEvent)
    } else if (event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased")
        eventHub.dispatchEvent(gameEvent)
    } else if (event.target.id === "SideShowTicket") {
        const showEvent = new CustomEvent("SideShowTicketPurchased")
        eventHub.dispatchEvent(showEvent)
    } else if (event.target.id === "FullPackageTicket") {
        const fullPackageEvent = new CustomEvent("FullPackageTicketPurchased")
        eventHub.dispatchEvent(fullPackageEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="SideShowTicket">SideShow Ticket</button>
            <button id="FullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

