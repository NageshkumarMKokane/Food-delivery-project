// script.js
document.addEventListener("DOMContentLoaded", function () {
    const orderButtons = document.querySelectorAll(".order-button");
    const subscribeButton = document.getElementById("subscribe-button");

    orderButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const itemName = this.getAttribute("data-item");
            alert(`You've ordered ${itemName}!`);
        });
    });

    subscribeButton.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        if (email) {
            alert(`Subscribed with email: ${email}`);
            document.getElementById("email").value = "";
        }
    });
});
