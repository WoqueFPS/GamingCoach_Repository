function showGreeting() {
    alert("Welcome to Valorant Vault! Let's boost your gameplay!");
}

//DOMContentLoaded geleerd op youtube
document.addEventListener("DOMContentLoaded", () => {
    let heroButton = document.querySelector(".hero .cta a");
    heroButton.addEventListener("click", (event) => {
        event.preventDefault();
        showGreeting();
    });
});

