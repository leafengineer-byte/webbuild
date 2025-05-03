// Herbal Plants Database
const plants = [
    { name: "Aloe Vera", category: "skin", image: "aloe-vera.jpg", description: "Soothes burns and hydrates skin." },
    { name: "Basil (Tulsi)", category: "immunity", image: "basil.jpg", description: "Boosts immunity and reduces stress." },
    { name: "Chamomile", category: "digestive", image: "chamomile.jpg", description: "Aids digestion and promotes relaxation." },
    { name: "Lavender", category: "skin", image: "lavender.jpg", description: "Calms skin irritation and improves sleep." },
    { name: "Peppermint", category: "digestive", image: "peppermint.jpg", description: "Relieves bloating and improves digestion." },
    { name: "Neem", category: "skin", image: "neem.jpg", description: "Treats acne and purifies blood." },
    { name: "Ginger", category: "digestive", image: "ginger.jpg", description: "Aids digestion and reduces nausea." },
    { name: "Turmeric", category: "immunity", image: "turmeric.jpg", description: "Boosts immunity and reduces inflammation." },
    { name: "Rosemary", category: "digestive", image: "rosemary.jpg", description: "Improves memory and digestion." },
    { name: "Echinacea", category: "immunity", image: "echinacea.jpg", description: "Supports immune system and fights infections." }
];

// Function to Display Plants
function displayPlants(filteredPlants) {
    const container = document.getElementById("plantContainer");
    container.innerHTML = ""; // Clear previous content

    filteredPlants.forEach(plant => {
        const plantCard = `
            <div class="plant-card">
                <img src="${plant.image}" alt="${plant.name}">
                <h3>${plant.name}</h3>
                <p>${plant.description}</p>
                <a href="plant-details.html?plant=${encodeURIComponent(plant.name)}" class="btn" >View Details</a>
                
            </div>
        `;
        container.innerHTML += plantCard;
    });
}

// Function to Filter Plants
function filterPlants() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const selectedCategory = document.getElementById("categoryFilter").value;

    const filteredPlants = plants.filter(plant => {
        const matchesSearch = plant.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === "all" || plant.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayPlants(filteredPlants);
}

// Initialize Page with All Plants
window.onload = () => displayPlants(plants);
