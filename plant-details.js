// Herbal Plants Database (with Detailed Information)
const plantDetails = {
    "Aloe Vera": {
        image: "aloe-vera.jpg",
        description: "Soothes burns and hydrates skin.",
        benefits: "Heals wounds, reduces acne, and improves skin hydration.",
        usage: "Apply gel directly on skin, or drink aloe juice in moderation.",
        precautions: "Avoid excessive consumption, may cause digestive discomfort."
    },
    "Basil (Tulsi)": {
        image: "basil.jpg",
        description: "Boosts immunity and reduces stress.",
        benefits: "Helps with respiratory health, reduces stress, and has antibacterial properties.",
        usage: "Consume as tea, fresh leaves, or in herbal remedies.",
        precautions: "Avoid in large quantities during pregnancy."
    },
    "Chamomile": {
        image: "chamomile.jpg",
        description: "Aids digestion and promotes relaxation.",
        benefits: "Relieves anxiety, aids digestion, and improves sleep quality.",
        usage: "Drink as tea or apply externally for skin benefits.",
        precautions: "May cause allergic reactions in people allergic to daisies."
    },
    "Turmeric": {
        image: "turmeric.jpg",
        description: "Boosts immunity and reduces inflammation.",
        benefits: "Anti-inflammatory, boosts immunity, and improves skin health.",
        usage: "Consume as spice, mix with milk, or apply as paste on skin.",
        precautions: "High doses may cause stomach upset."
    }
};

// Function to Load Plant Details
function loadPlantDetails() {
    // Get plant name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const plantName = urlParams.get("plant");

    if (plantName && plantDetails[plantName]) {
        const plant = plantDetails[plantName];

        // Populate the plant detail section
        document.getElementById("plantDetailContainer").innerHTML = `
            <div class="plant-detail-card">
                <img src="images/${plant.image}" alt="${plantName}">
                <h2>${plantName}</h2>
                <p><strong>Description:</strong> ${plant.description}</p>
                <p><strong>Benefits:</strong> ${plant.benefits}</p>
                <p><strong>Usage:</strong> ${plant.usage}</p>
                <p><strong>Precautions:</strong> ${plant.precautions}</p>
                <a href="herbal-library.html" class="btn">Back to Library</a>
            </div>
        `;
    } else {
        document.getElementById("plantDetailContainer").innerHTML = "<p>Plant details not found.</p>";
    }
}

// Load the details when the page loads
window.onload = loadPlantDetails;
