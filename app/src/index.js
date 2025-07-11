onload = function () {
    const button = document.getElementById("calculate");
    button.addEventListener("click", () => {
        let yourName = document.getElementById("your-name");
        let crushName = document.getElementById("crush-name");

        if (yourName.value === "" && crushName.value === "") {
            alert("Enter a name");
            console.warn("The inputs are empty or invalid")
        } else {
            let percentage = Math.floor(Math.random() * 101);
            document.getElementById("result-message").innerHTML =
                yourName.value + " and "  + crushName.value + " '$ chance of love: "
            document.getElementById("result-percentage").innerText =
                percentage.toString() + "%";
            yourName.value = "";
            crushName.value = "";
        }
    })
} 