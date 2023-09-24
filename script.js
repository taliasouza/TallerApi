document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const digimonInput = document.getElementById("digimonInput");
    const resultContainer = document.getElementById("resultContainer");

    searchButton.addEventListener("click", () => {
        const searchTerm = digimonInput.value.trim();
        if (searchTerm !== "") {
            fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    displayDigimon(data);
                })
                .catch(error => {
                    console.error(error);
                    resultContainer.innerHTML = "No se encontró ningún Digimon con ese nombre.";
                });
        }
    });

    function displayDigimon(data) {
        const digimon = data[0]; 
        resultContainer.innerHTML = `
            <h2>${digimon.name}</h2>
            <img src="${digimon.img}" alt="${digimon.name}">
            <p>Nivel: ${digimon.level}</p>
        `;
    }
});
