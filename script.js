const DESTINATIONS_DATA = [
    {
        id: 'himalayan-trek',
        name: 'The Himalayan Trek (5 Days)',
        image: 'images/himalaya.jpg',
        price: 29999,
        rating: 4.8,
        itinerary: [
            "Day 1: Arrival in Dehradun & Drive to Sankri",
            "Day 2: Trek from Sankri to Juda-ka-Talab (Frozen Lake)",
            "Day 3: Trek to Kedarkantha Base Camp",
            "Day 4: Summit Push (12,500ft) & Descent to Base",
            "Day 5: Drive back to Dehradun & Departure"
        ]
    },
    {
        id: 'bali-beach',
        name: 'Bali Relaxation Retreat (7 Days)',
        image: 'images/bali.jpg',
        price: 45000,
        rating: 4.5,
        itinerary: [
            "Day 1: Arrival in Denpasar & Beachfront Dinner",
            "Day 2: Ubud Art Market & Tegenungan Waterfall",
            "Day 3: Monkey Forest & Rice Terrace Swing Experience",
            "Day 4: Tirta Empul Temple Purification Ritual",
            "Day 5: Uluwatu Temple Sunset & Kecak Fire Dance",
            "Day 6: Nusa Penida Island Day Trip (Snorkeling)",
            "Day 7: Balinese Spa Session & Departure"
        ]
    },
    {
        id: 'european-cities',
        name: 'Grand European Tour (10 Days)',
        image: 'images/europe.jpg',
        price: 75000,
        rating: 4.9,
        itinerary: [
            "Day 1: Welcome to Paris - Eiffel Tower Visit",
            "Day 2: Louvre Museum & Seine River Cruise",
            "Day 3: Train to Lucerne, Switzerland",
            "Day 4: Mt. Titlis Snow Adventure & Chapel Bridge",
            "Day 5: Scenic Train to Venice, Italy",
            "Day 6: Gondola Ride & St. Mark’s Basilica",
            "Day 7: Drive to Florence - Renaissance Tour",
            "Day 8: Arrival in Rome - The Colosseum",
            "Day 9: Vatican City & Trevi Fountain",
            "Day 10: Final Italian Brunch & Flight Home"
        ]
    },
    {
        id: 'kerala-backwaters',
        name: 'Kerala Backwaters Holiday (4 Days)',
        image: 'images/kerala.jpg',
        price: 32000,
        rating: 4.7,
        itinerary: [
            "Day 1: Arrival in Kochi & Fort Kochi Heritage Walk",
            "Day 2: Drive to Alleppey & Houseboat Check-in",
            "Day 3: Exploring Kumarakom Bird Sanctuary",
            "Day 4: Morning Shikara Ride & Departure from Kochi"
        ]
    },
    {
        id: 'ladakh-bike-expedition',
        name: 'Ladakh High-Altitude Bike Expedition (9 Days)',
        image: 'images/ladakh.jpg',
        price: 49999,
        rating: 4.8,
        itinerary: [
            "Day 1: Arrival in Leh - Acclimatization Day",
            "Day 2: Bike Pickup & Local Sightseeing (Shanti Stupa)",
            "Day 3: Ride to Nubra Valley via Khardung La",
            "Day 4: Hunder Sand Dunes & Camel Safari",
            "Day 5: Ride to Turtuk Village (India-Pak Border)",
            "Day 6: Nubra to Pangong Lake via Shyok River",
            "Day 7: Sunrise at Pangong & Ride back to Leh",
            "Day 8: Magnetic Hill & Hall of Fame Visit",
            "Day 9: Airport Transfer with Memories"
        ]
    },
    {
        id: 'rajasthan-palace',
        name: 'Rajasthan Luxury Palace Stay (6 Days)',
        image: 'images/rajasthan.jpg',
        price: 95000,
        rating: 4.9,
        itinerary: [
            "Day 1: Royal Welcome in Udaipur - Lake Pichola",
            "Day 2: City Palace & Jagdish Temple Tour",
            "Day 3: Drive to Jodhpur - Mehrangarh Fort",
            "Day 4: Umaid Bhawan Palace & Local Bazaars",
            "Day 5: Camel Safari in Sam Dunes (Jaisalmer)",
            "Day 6: Breakfast at the Haveli & Departure"
        ]
    },
    {
        id: 'golden-triangle',
        name: 'The Golden Triangle Tour (7 Days)',
        image: 'images/golden-triangle.jpg',
        price: 35000,
        rating: 4.7,
        itinerary: [
            "Day 1: Arrival in Delhi - Red Fort & India Gate",
            "Day 2: Old Delhi Heritage Walk & Qutub Minar",
            "Day 3: Drive to Agra - Mehtab Bagh Sunset",
            "Day 4: Taj Mahal Sunrise & Agra Fort",
            "Day 5: Drive to Jaipur via Fatehpur Sikri",
            "Day 6: Amer Fort (Elephant Ride) & Hawa Mahal",
            "Day 7: Jantar Mantar & Drive back to Delhi"
        ]
    },
    {
        id: 'andaman-island',
        name: 'Andaman Scuba & Beach Holiday (6 Days)',
        image: 'images/andaman.jpg',
        price: 40000,
        rating: 4.6,
        itinerary: [
            "Day 1: Port Blair Arrival & Cellular Jail show",
            "Day 2: Ferry to Havelock & Radhanagar Beach",
            "Day 3: Scuba Diving Session at Nemo Reef",
            "Day 4: Snorkeling at Elephant Beach",
            "Day 5: Neil Island Natural Bridge visit",
            "Day 6: Return to Port Blair & Departure"
        ]
    },
    {
        id: 'tamil-nadu-temple-trail',
        name: 'Tamil Nadu Grand Temple Circuit (8 Days)',
        image: 'images/tamilnadu.jpg',
        price: 35000,
        rating: 4.7,
        itinerary: [
            "Day 1: Arrival in Chennai & Kapaleeshwarar Temple",
            "Day 2: Shore Temples of Mahabalipuram",
            "Day 3: Drive to Thanjavur - Brihadeeswara Temple",
            "Day 4: Exploring Kumbakonam Heritage Sites",
            "Day 5: Drive to Madurai - Meenakshi Temple",
            "Day 6: Morning Darshan & Drive to Rameshwaram",
            "Day 7: Dhanushkodi Sightseeing & Temple Pooja",
            "Day 8: Departure from Madurai Airport"
        ]
    },
    {
        id: 'karnataka-heritage',
        name: 'Hampi & Mysore Royal Heritage (7 Days)',
        image: 'images/hampi.jpg',
        price: 42000,
        rating: 4.6,
        itinerary: [
            "Day 1: Arrival in Bangalore & Drive to Mysore",
            "Day 2: Mysore Palace & Chamundi Hills",
            "Day 3: Drive to Hampi via Chitradurga Fort",
            "Day 4: Virupaksha Temple & Vitthala Temple",
            "Day 5: Hampi Coracle Ride & Anjanadri Hill",
            "Day 6: Exploring the Royal Enclosure",
            "Day 7: Return Journey to Bangalore"
        ]
    },
    {
        id: 'coorg-wildlife-coffee',
        name: 'Coorg & Wayanad: Coffee, Mist & Treks (5 Days)',
        image: 'images/coorg.jpg',
        price: 39000,
        rating: 4.5,
        itinerary: [
            "Day 1: Drive from Bangalore to Coorg (Madikeri)",
            "Day 2: Abbey Falls & Dubare Elephant Camp",
            "Day 3: Coffee Plantation Walk & Drive to Wayanad",
            "Day 4: Edakkal Caves & Banasura Sagar Dam",
            "Day 5: Pookode Lake & Departure from Calicut"
        ]
    },
    {
        id: 'andhra-telangana-pilgrimage',
        name: 'Tirupati & Hyderabad Spiritual Break (5 Days)',
        image: 'images/tirupati.jpg',
        price: 36000,
        rating: 4.4,
        itinerary: [
            "Day 1: Arrival in Tirupati - Lord Venkateswara Temple",
            "Day 2: Local Temples (Padmavathi) & Drive to Hyderabad",
            "Day 3: Charminar, Mecca Masjid & Laad Bazaar",
            "Day 4: Golconda Fort & Salar Jung Museum",
            "Day 5: Ramoji Film City Tour & Departure"
        ]
    },
    {
        id: 'kanyakumari-coastal',
        name: 'Tamil Nadu South Tip & Coastal Views (4 Days)',
        image: 'images/kanyakumari.jpg',
        price: 28000,
        rating: 4.5,
        itinerary: [
            "Day 1: Arrival in Kanyakumari - Ferry to Rock Memorial",
            "Day 2: Sunrise View & Drive to Rameshwaram",
            "Day 3: Pamban Bridge & Temple Sightseeing",
            "Day 4: Dhanushkodi Drive & Final Departure"
        ]
    },
    {
        id: 'nilgiri-hill-stations',
        name: 'Ooty & Kodaikanal Mountain Getaway (6 Days)',
        image: 'images/ooty.jpg',
        price: 37000,
        rating: 4.7,
        itinerary: [
            "Day 1: Arrival in Coimbatore & Drive to Ooty",
            "Day 2: Botanical Gardens & Ooty Lake Boating",
            "Day 3: Toy Train Ride to Coonoor & Tea Estates",
            "Day 4: Drive to Kodaikanal & Evening Lake Walk",
            "Day 5: Coaker’s Walk & Pillar Rocks visit",
            "Day 6: Final Shopping & Departure"
        ]
    },
    {
        id: 'periyar-wildlife-spice',
        name: 'Periyar Wildlife & Spice Tour (4 Days)',
        image: 'images/periyar.jpg',
        price: 32000,
        rating: 4.4,
        itinerary: [
            "Day 1: Arrival in Thekkady & Spice Plantation Tour",
            "Day 2: Periyar Lake Boat Safari (Wildlife Spotting)",
            "Day 3: Jungle Night Trekking & Elephant Interaction",
            "Day 4: Morning Yoga & Departure from Kochi"
        ]
    },
    {
        id: 'gokarna-beach-retreat',
        name: 'Gokarna Beach & Coastal Karnataka (5 Days)',
        image: 'images/gokarna.jpg',
        price: 30000,
        rating: 4.3,
        itinerary: [
            "Day 1: Arrival in Gokarna & Mahabaleshwar Temple",
            "Day 2: Trek to Half Moon & Paradise Beach",
            "Day 3: Sunset at Om Beach & Local Seafood Dinner",
            "Day 4: Drive to Murudeshwar - Huge Shiva Statue",
            "Day 5: Beach Yoga & Return Journey"
        ]
    },
    {
        id: 'pondicherry-french-charm',
        name: 'Pondicherry & Mahabalipuram Culture (5 Days)',
        image: 'images/pondicherry.jpg',
        price: 48000,
        rating: 4.8,
        itinerary: [
            "Day 1: Arrival in Chennai & Drive to Mahabalipuram",
            "Day 2: Shore Temple & Five Rathas (UNESCO Site)",
            "Day 3: Drive to Pondicherry - White Town Walk",
            "Day 4: Auroville Matrimandir & Paradise Beach",
            "Day 5: French Breakfast & Departure"
        ]
    }
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
                    </strong>₹${pkg.price.toLocaleString('en-IN')}</strong>
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


