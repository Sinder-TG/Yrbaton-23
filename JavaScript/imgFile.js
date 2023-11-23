let list = document.getElementById("imgFilesList");
document.querySelector("#input__file").addEventListener("change", function () {
    let newItem = document.createElement("li");
    newItem.innerText = document.querySelector("#input__file").value;
    list.appendChild(newItem);
});
