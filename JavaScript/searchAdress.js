const apiKey = "3ee64e7edeea1353eed5038655d1808953f86ee7";

function searchAddress(query) {
    const apiUrl = `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`;
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Token ${apiKey}`,
    };

    return new Promise((resolve, reject) => {
        fetch(apiUrl, {
            method: "POST",
            headers,
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.suggestions && data.suggestions.length > 0) {
                    const addresses = data.suggestions.map(
                        (suggestion) => suggestion.value
                    );
                    resolve(addresses);
                } else {
                    reject("Адреса не найдены.");
                }
            })
            .catch((error) => {
                reject("Ошибка при поиске адреса: " + error);
            });
    });
}

let dataAddress = null;

const searchButton = document.querySelector(".button__search-arddress");

searchButton.addEventListener("click", function () {
    const inputElement = document.querySelector("#searchInput");
    dataAddress = searchAddress(inputElement.value)
        .then((addresses) => {
            return addresses;
        })
        .catch((error) => {
            console.error("Ошибка: ", error);
        });
});

// -----------------------------------------------------------------------------------------------------------------------------------------------------

function performSearch() {
    const searchTerm = document
        .getElementById("searchInput")
        .value.toLowerCase();

    document.getElementById("searchResults").innerHTML = "";

    dataAddress.then((res) => {
        const filteredData = res.filter((item) => {
            for (let i = 0; i < res.length; i++) {
                if (res[i].toLowerCase().includes(searchTerm)) {
                    return true;
                }
            }
            return false;
        });

        // Выводим результаты фильтрации
        let i = 0;
        filteredData.forEach((item) => {
            const button = document.createElement("button");
            button.id = `link_${i}`;
            button.classList.add("address__link");
            button.textContent = item;
            button.addEventListener("click", () => {
                document.querySelector("#searchInput").value = item;
                document.getElementById("searchResults").innerHTML = "";
            });
            document.getElementById("searchResults").appendChild(button);

            i++;
        });
    });
}
document
    .querySelector(".button__search-arddress")
    .addEventListener("click", function () {
        performSearch();
    });
// ----------------------------------------------------------

let list = document.getElementById("imgFilesList");
document.querySelector("#input__file").addEventListener("change", function () {
    let newItem = document.createElement("li");
    newItem.innerText = document.querySelector("#input__file").value;
    list.appendChild(newItem);
});
