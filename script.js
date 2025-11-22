const DESTINATIONS_DATA = [
    {
        id: 'himalayan-trek',
        name: 'The Himalayan Trek (5 Days)',
        description: 'An epic journey through the mountains of Uttarakhand, focusing on stunning high-altitude views and base camp experiences.',
        price: 29999, 
        rating: 4.8,
        tags: ['adventure', 'trekking', 'nature'],
        imagePlaceholderText: 'Himalayan-Trek'
    },
    {
        id: 'bali-beach',
        name: 'Bali Relaxation Retreat (7 Days)',
        description: 'A luxurious and peaceful getaway to the serene beaches and temples of Bali, Indonesia, including yoga sessions.',
        price: 45000, 
        rating: 4.5,
        tags: ['relaxation', 'luxury', 'beach'],
        imagePlaceholderText: 'Bali Beach'
    },
    {
        id: 'european-cities',
        name: 'Grand European Tour (10 Days)',
        description: 'A whirlwind tour covering Paris, Rome, and Berlin. Culture, history, and great food in iconic European cities!',
        price: 75000, 
        rating: 4.9,
        tags: ['culture', 'city-break', 'history'],
        imagePlaceholderText: 'European Tour'
    },
    {
        id: 'kerala-backwaters',
        name: 'Kerala Backwaters Holiday (4 Days)',
        description: 'Experience the tranquil beauty of Kerala on a houseboat, exploring the lush backwaters and local life.',
        price: 32000, 
        rating: 4.7,
        tags: ['nature', 'relaxation', 'domestic'],
        imagePlaceholderText: 'Kerala Backwaters'
    },
    {
        id: 'ladakh-bike-expedition',
        name: 'Ladakh High-Altitude Bike Expedition (9 Days)',
        description: 'The ultimate adventure trip: navigating challenging mountain passes (like Khardung La) and exploring the stunning landscapes of Leh, Nubra Valley, and Pangong Lake on a Royal Enfield.',
        price: 49999, // Budget/Mid-Range
        rating: 4.8,
        tags: ['adventure', 'high-altitude', 'biking', 'extreme'],
        imagePlaceholderText: 'Ladakh-Bike-Ride'
    },
    {
        id: 'rajasthan-palace',
        name: 'Rajasthan Luxury Palace Stay (6 Days)',
        description: 'A royal experience staying in converted heritage palaces (like in Udaipur and Jaipur), including private sightseeing, cultural shows, and gourmet Rajasthani dining.',
        price: 95000, // Luxury
        rating: 4.9,
        tags: ['luxury', 'history', 'culture', 'heritage'],
        imagePlaceholderText: 'Rajasthan-Palace'
    },
    {
        id: 'golden-triangle',
        name: 'The Golden Triangle Tour (7 Days)',
        description: 'The classic cultural circuit covering Delhi (historical monuments), Agra (Taj Mahal), and Jaipur (Pink City) for a comprehensive blend of Mughal and Rajput heritage.',
        price: 35000, // Budget
        rating: 4.7,
        tags: ['culture', 'history', 'city-break', 'iconic'],
        imagePlaceholderText: 'Golden-Triangle'
    },
    {
        id: 'andaman-island',
        name: 'Andaman Scuba & Beach Holiday (6 Days)',
        description: 'A tropical retreat to the serene beaches of Havelock and Neil Island, focusing on water sports, world-class scuba diving/snorkeling, and tranquil beach relaxation.',
        price: 40000, // Mid-Range
        rating: 4.6,
        tags: ['relaxation', 'beach', 'nature', 'domestic'],
        imagePlaceholderText: 'Andaman-Beach'
    },
   
    {
        id: 'tamil-nadu-temple-trail',
        name: 'Tamil Nadu Grand Temple Circuit (8 Days)',
        description: 'A deep cultural journey through Madurai (Meenakshi Temple), Thanjavur (Brihadeeswarar Temple - UNESCO World Heritage), and Rameshwaram, focusing on stunning Dravidian architecture and spirituality.',
        price: 35000, // Budget
        rating: 4.7,
        tags: ['culture', 'history', 'spiritual', 'iconic'],
        imagePlaceholderText: 'Madurai-Meenakshi-Temple'
    },
    {
        id: 'karnataka-heritage',
        name: 'Hampi & Mysore Royal Heritage (7 Days)',
        description: 'Explore the spectacular stone ruins of the Vijayanagara Empire at Hampi (UNESCO site), then immerse yourself in the royal grandeur of Mysore Palace and the silk city.',
        price: 42000, // Mid-Range
        rating: 4.6,
        tags: ['history', 'ruins', 'heritage', 'culture'],
        imagePlaceholderText: 'Hampi-Mysore-Palace'
    },
    {
        id: 'coorg-wildlife-coffee',
        name: 'Coorg & Wayanad: Coffee, Mist & Treks (5 Days)',
        description: 'A lush green retreat to the "Scotland of India" (Coorg, Karnataka) and Wayanad (Kerala). Focused on coffee and spice plantation tours, waterfall visits (Abbey Falls), and gentle forest treks.',
        price: 39000, // Mid-Range
        rating: 4.5,
        tags: ['nature', 'hills', 'plantations', 'trekking'],
        imagePlaceholderText: 'Coorg-Coffee-Estate'
    },
    {
        id: 'andhra-telangana-pilgrimage',
        name: 'Tirupati & Hyderabad Spiritual-City Break (5 Days)',
        description: 'Combines the spiritual draw of Tirumala Venkateswara Temple (Tirupati Balaji) in Andhra Pradesh with the historical monuments (Charminar, Golconda Fort) and food of Hyderabad, Telangana.',
        price: 36000, // Budget/Mid-Range
        rating: 4.4,
        tags: ['spiritual', 'city-break', 'history', 'iconic'],
        imagePlaceholderText: 'Tirupati-Charminar'
    },
    {
        id: 'kanyakumari-coastal',
        name: 'Tamil Nadu South Tip & Coastal Views (4 Days)',
        description: 'Visit the unique confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean at Kanyakumari. Includes Vivekananda Rock Memorial, Thiruvalluvar Statue, and the coastal drive to Rameshwaram.',
        price: 28000, // Budget
        rating: 4.5,
        tags: ['coastal', 'iconic', 'spiritual', 'scenic'],
        imagePlaceholderText: 'Kanyakumari-Sunrise'
    },
    {
        id: 'nilgiri-hill-stations',
        name: 'Ooty & Kodaikanal Mountain Getaway (6 Days)',
        description: 'A classic hill station tour covering Ooty (Queen of Hills, Botanical Gardens, Doddabetta Peak) and Kodaikanal (Lake, Coaker’s Walk), including a ride on the UNESCO Nilgiri Mountain Railway.',
        price: 37000, // Mid-Range
        rating: 4.7,
        tags: ['hills', 'scenic', 'family', 'romance'],
        imagePlaceholderText: 'Ooty-Toy-Train'
    },
    {
        id: 'periyar-wildlife-spice',
        name: 'Periyar Wildlife & Spice Tour (4 Days)',
        description: 'A nature-focused trip to Thekkady/Periyar in Kerala, featuring boat safaris in Periyar Tiger Reserve to spot elephants and birdlife, combined with guided tours of local spice plantations.',
        price: 32000, // Mid-Range
        rating: 4.4,
        tags: ['wildlife', 'nature', 'safari', 'adventure'],
        imagePlaceholderText: 'Periyar-Wildlife'
    },
    {
        id: 'gokarna-beach-retreat',
        name: 'Gokarna Beach & Coastal Karnataka (5 Days)',
        description: 'A relaxed, bohemian beach retreat on the scenic beaches of Om, Kudle, and Half Moon in Karnataka, balancing temple visits with beach hikes and local cuisine.',
        price: 30000, // Budget/Mid-Range
        rating: 4.3,
        tags: ['beach', 'relaxation', 'adventure', 'domestic'],
        imagePlaceholderText: 'Gokarna-Beach'
    },
    {
        id: 'pondicherry-french-charm',
        name: 'Pondicherry & Mahabalipuram Culture Trip (5 Days)',
        description: 'Experience the French colonial architecture and spiritual calm of Pondicherry (Aurobindo Ashram, Auroville), coupled with the ancient Pallava rock-cut temples and Shore Temple of Mahabalipuram (UNESCO site).',
        price: 48000, // Mid-Range/Luxury
        rating: 4.8,
        tags: ['culture', 'history', 'coastal', 'architecture'],
        imagePlaceholderText: 'Pondicherry-French-Colony'
    }.
];

const REVIEWS_DATA = [
    { name: 'Riya S.', package: 'Bali Relaxation Retreat', rating: 5, comment: 'The package was seamless, and the price was excellent. Highly recommend the Bali trip.' },
    { name: 'John D.', package: 'The Himalayan Trek', rating: 4, comment: 'Challenging but rewarding trek. Guides were excellent, only wish the meals had more variety.' },
    { name: 'Priya K.', package: 'Grand European Tour', rating: 5, comment: 'Unforgettable experience! Everything was perfectly managed, worth every penny.' },
    { name: 'Vimal T.', package: 'Kerala Backwaters Holiday', rating: 5, comment: 'Pure tranquility. The houseboat stay was the highlight of our year.' }
];

const FEATURED_PACKAGE_IDS = ['bali-beach', 'european-cities'];

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });


    const quickSearchButton = document.querySelector('.search-bar button');
    if (quickSearchButton) {
        quickSearchButton.addEventListener('click', () => {
            showPage('destinations');
        });
    }


    const initialPageId = window.location.hash.substring(1) || 'home';
    showPage(initialPageId);

    
    renderDestinations();
    renderReviews();
    renderFeaturedPackages();
});


function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.location.hash = pageId; 

    
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }
}



function createPackageCard(pkg) {

   

    const imageUrl = `https://placehold.co/400x200/5078a6/FFFFFF?text=${pkg.imagePlaceholderText.replace(/ /g, '+')}`;



    return `

        <div class="package-card">

            <h3>${pkg.name}</h3>

            <div class="gallery-placeholder">

                <img src="${imageUrl}" alt="Gallery for ${pkg.name}">

                <p class="rating">⭐ ${pkg.rating}</p>

            </div>

            <p class="description">${pkg.description}</p>

            <div class="price-info">

                <span class="dynamic-price">

                    Price From: **₹${pkg.price.toLocaleString('en-IN')}**

                </span>

                <button class="book-btn" data-package-id="${pkg.id}" onclick="startBooking('${pkg.id}')">Book Now</button>

            </div>

        </div>

    `;

}



function renderDestinations(filteredData = DESTINATIONS_DATA) {
    const listingContainer = document.getElementById('package-listing');
    listingContainer.innerHTML = ''; // Clear previous content

    if (filteredData.length === 0) {
        listingContainer.innerHTML = '<p class="no-results" style="padding: 20px; text-align: center;">No packages found matching your criteria. Try adjusting your filters!</p>';
        return;
    }


    const cardsHtml = filteredData.map(createPackageCard).join('');
    listingContainer.innerHTML = cardsHtml;
}


function renderFeaturedPackages() {
    const featuredList = document.getElementById('featured-list');
    if (!featuredList) return;

    const featuredData = DESTINATIONS_DATA.filter(pkg => FEATURED_PACKAGE_IDS.includes(pkg.id));
    
   
    const cardsHtml = featuredData.map(pkg => `
        <div class="package-card" style="width: 45%; max-width: 350px;">
            <h3>${pkg.name}</h3>
            <div class="gallery-placeholder">
                <img src="https://placehold.co/300x150/28a745/FFFFFF?text=DEAL" alt="Featured Deal for ${pkg.name}">
                <p class="rating">⭐ ${pkg.rating}</p>
            </div>
            <p class="description" style="min-height: 20px;">Limited time offer!</p>
            <div class="price-info">
                <span class="dynamic-price">
                    **₹${pkg.price.toLocaleString('en-IN')}**
                </span>
                <button class="book-btn" onclick="startBooking('${pkg.id}')">View Deal</button>
            </div>
        </div>
    `).join('');

    featuredList.innerHTML = cardsHtml;
}


function renderReviews() {
    const reviewList = document.getElementById('review-list');
    
    
    reviewList.innerHTML = '';
    const submissionButton = document.createElement('button');
    submissionButton.setAttribute('onclick', 'openReviewSubmission()');
    submissionButton.textContent = 'Submit Your Review';
    reviewList.appendChild(submissionButton);

    REVIEWS_DATA.forEach(review => {
        const item = document.createElement('div');
        item.className = 'review-item';
       
        const stars = '⭐'.repeat(review.rating);
        item.innerHTML = `
            <h3>${stars} "${review.comment.substring(0, 70).trim()}${review.comment.length > 70 ? '...' : ''}" - ${review.name}</h3>
            <p class="package-name">Package: ${review.package}</p>
            <p>${review.comment}</p>
        `;
    
        reviewList.insertBefore(item, reviewList.firstChild);
    });
}


function startBooking(packageId) {
    const selectedPackage = DESTINATIONS_DATA.find(p => p.id === packageId);
    
    if (selectedPackage) {
       
        document.getElementById('selected-package-name').textContent = selectedPackage.name;

       
        const itineraryDetails = document.querySelector('#booking .itinerary-details');
        itineraryDetails.innerHTML = `
            <h2>Your Itinerary: ${selectedPackage.name}</h2>
            <p><strong>Duration:</strong> ${selectedPackage.name.match(/\((\d+)/)?.[1] || 'Unknown'} Days</p>
            <p><strong>Price:</strong> **₹${selectedPackage.price.toLocaleString('en-IN')}**</p>
            <p><strong>Overview:</strong> ${selectedPackage.description}</p>
            <hr>
            <p>Day 1: Arrival & Local Sightseeing/Acclimatization.</p>
            <p>Day 2: Main Activity (e.g., Start Trek / Beach Day).</p>
            <p>Day 3: Mid-Trip Highlight (e.g., Summit Push / Cultural Tour).</p>
            <p>Day 4: Departure Preparation / Relaxation.</p>
        `;
        
        showPage('booking');
    } else {
        alert('Package details not found. Please try again.');
    }
}


function filterPackages() {
    const priceRange = document.getElementById('price-select').value;
    const dateInput = document.getElementById('date-select').value; // Currently not used for filtering, but captured

    let filtered = DESTINATIONS_DATA;
    
    if (priceRange === 'budget') {
        filtered = filtered.filter(pkg => pkg.price <= 30000);
    } else if (priceRange === 'mid') {
        filtered = filtered.filter(pkg => pkg.price > 30000 && pkg.price <= 60000);
    } else if (priceRange === 'luxury') {
        filtered = filtered.filter(pkg => pkg.price > 60000);
    }
   
    const quickSearchInput = document.getElementById('quick-search-input').value.toLowerCase();
    if (quickSearchInput) {
        filtered = filtered.filter(pkg => 
            pkg.name.toLowerCase().includes(quickSearchInput) || 
            pkg.description.toLowerCase().includes(quickSearchInput)
        );
    }
    console.log("Filtered Packages Count:", filtered.length);
    renderDestinations(filtered);
    alert(`Applied filters (Date: ${dateInput || 'Any'}, Price: ${priceRange}). ${filtered.length} packages found.`);
}




document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    alert(' Success! Thank you for your question. We will get back to you shortly.');
    e.target.reset();
});


document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert(' Success! Thank you for your question. We will get back to you shortly.');
    e.target.reset();
});


document.getElementById('payment-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    const travelerName = document.getElementById('traveler-name').value;
    const travelerEmail = document.getElementById('traveler-email').value;
    const cardNumber = document.getElementById('card-number').value;
    
   
    const maskedCard = '**** **** **** ' + cardNumber.slice(-4);

    const selectedPackage = DESTINATIONS_DATA.find(p => 
        p.name === document.getElementById('selected-package-name').textContent
    );
    
    if (selectedPackage) {
        
        alert(` Congratulations! Successfully booked "${selectedPackage.name}"! A confirmation email has been sent to ${travelerEmail}.`);
        
       
        const itineraryDetails = document.querySelector('#booking .itinerary-details');
        
        itineraryDetails.innerHTML = `
            <h2>CONFIRMED BOOKING ITINERARY</h2>
            
            <div class="transaction-details-box" style="background-color: #e9f5ff; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
                <h3>Traveler & Transaction Details</h3>
                <p><strong>Traveler Name:</strong> ${travelerName}</p>
                <p><strong>Email:</strong> ${travelerEmail}</p>
                <p><strong>Transaction ID:</strong> GJ-${Date.now().toString().slice(-6)}</p>
                <p><strong>Payment Method:</strong> Card ending in ${maskedCard}</p>
            </div>
            
            <h2>Your Package: ${selectedPackage.name}</h2>
            <p><strong>Duration:</strong> ${selectedPackage.name.match(/\((\d+)/)?.[1] || 'Unknown'} Days</p>
            <p><strong>Total Price:</strong> **₹${selectedPackage.price.toLocaleString('en-IN')}**</p>
            <p><strong>Overview:</strong> ${selectedPackage.description}</p>
            <hr>
            <h3>Detailed Itinerary:</h3>
            <p>Day 1: Arrival & Local Sightseeing/Acclimatization.</p>
            <p>Day 2: Main Activity (e.g., Start Trek / Beach Day).</p>
            <p>Day 3: Mid-Trip Highlight (e.g., Summit Push / Cultural Tour).</p>
            <p>Day 4: Departure Preparation / Relaxation.</p>
        `;

        
        e.target.style.display = 'none';
        
        const receiptDiv = document.getElementById('confirmation-receipt');
        receiptDiv.style.display = 'block';
        receiptDiv.innerHTML = `
            <h2> Booking Confirmed!</h2>
            <p><strong>Package:</strong> ${selectedPackage.name}</p>
            <p>Your detailed itinerary is ready to download.</p>
            <button onclick="downloadItineraryPdf()" style="margin-top: 15px; width: 100%; background-color: var(--secondary-color);">
                 Download Booking PDF
        
            </button>
        `;
    }
});



function downloadItineraryPdf() {
   
    const itineraryArea = document.querySelector('#booking .itinerary-details');

    
    const receiptContent = document.querySelector('#confirmation-receipt');

    if (!itineraryArea || !receiptContent) {
        alert('Cannot find itinerary details to generate PDF.');
        return;
    }

    
    html2canvas(itineraryArea, { scale: 2 }).then(canvas => {
       
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pdfWidth - 20; // 10mm margin on each side
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 10; // Start position (10mm margin from top)

        
        if (imgHeight > (pdfHeight - 20)) {
           
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        } else {
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        }

       
        pdf.save("GlobalJourneys_Itinerary.pdf");
        
       
        setTimeout(() => {
            document.getElementById('payment-form').style.display = 'block';
            document.getElementById('confirmation-receipt').style.display = 'none';
           
            document.getElementById('selected-package-name').textContent = '...';
            document.querySelector('#booking .itinerary-details').innerHTML = '<p>Please select a package on the Destinations page.</p>';
        }, 500); 
    });
}

function openReviewSubmission() {
   
    const reviewName = prompt("Please enter your name:");
    const reviewPackage = prompt("Which package did you book?");
    const reviewRating = parseInt(prompt("Give us a rating (1-5):"), 10);
    const reviewComment = prompt("What was your experience?");

    if (reviewName && reviewPackage && reviewRating >= 1 && reviewRating <= 5 && reviewComment) {
        
        REVIEWS_DATA.unshift({ 
            name: reviewName, 
            package: reviewPackage, 
            rating: reviewRating, 
            comment: reviewComment 
        });
        renderReviews();
        alert('Thank you! Your review has been submitted successfully.');
    } else if (reviewName || reviewPackage || reviewRating || reviewComment) {
        alert('Review submission cancelled or some information was missing/invalid.');
    } else {
       
    }
}


