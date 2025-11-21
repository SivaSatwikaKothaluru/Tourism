const DESTINATIONS_DATA = [
    {
        id: 'himalayan-trek',
        name: 'The Himalayan Trek (5 Days)',
        description: 'An epic journey through the mountains of Uttarakhand, focusing on stunning high-altitude views and base camp experiences.',
        price: 29999, // Budget
        rating: 4.8,
        tags: ['adventure', 'trekking', 'nature'],
        imagePlaceholderText: 'Himalayan-Trek'
    },
    {
        id: 'bali-beach',
        name: 'Bali Relaxation Retreat (7 Days)',
        description: 'A luxurious and peaceful getaway to the serene beaches and temples of Bali, Indonesia, including yoga sessions.',
        price: 45000, // Mid-Range
        rating: 4.5,
        tags: ['relaxation', 'luxury', 'beach'],
        imagePlaceholderText: 'Bali Beach'
    },
    {
        id: 'european-cities',
        name: 'Grand European Tour (10 Days)',
        description: 'A whirlwind tour covering Paris, Rome, and Berlin. Culture, history, and great food in iconic European cities!',
        price: 75000, // Luxury
        rating: 4.9,
        tags: ['culture', 'city-break', 'history'],
        imagePlaceholderText: 'European Tour'
    },
    {
        id: 'kerala-backwaters',
        name: 'Kerala Backwaters Holiday (4 Days)',
        description: 'Experience the tranquil beauty of Kerala on a houseboat, exploring the lush backwaters and local life.',
        price: 32000, // Mid-Range
        rating: 4.7,
        tags: ['nature', 'relaxation', 'domestic'],
        imagePlaceholderText: 'Kerala Backwaters'
    }
];

const REVIEWS_DATA = [
    { name: 'Riya S.', package: 'Bali Relaxation Retreat', rating: 5, comment: 'The package was seamless, and the price was excellent. Highly recommend the Bali trip.' },
    { name: 'John D.', package: 'The Himalayan Trek', rating: 4, comment: 'Challenging but rewarding trek. Guides were excellent, only wish the meals had more variety.' },
    { name: 'Priya K.', package: 'Grand European Tour', rating: 5, comment: 'Unforgettable experience! Everything was perfectly managed, worth every penny.' },
    { name: 'Vimal T.', package: 'Kerala Backwaters Holiday', rating: 5, comment: 'Pure tranquility. The houseboat stay was the highlight of our year.' }
];

const FEATURED_PACKAGE_IDS = ['bali-beach', 'european-cities'];

// --- 2. SPA Router Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Attach event listener to the quick search button
    const quickSearchButton = document.querySelector('.search-bar button');
    if (quickSearchButton) {
        quickSearchButton.addEventListener('click', () => {
            showPage('destinations');
        });
    }

    // Handle initial page load
    const initialPageId = window.location.hash.substring(1) || 'home';
    showPage(initialPageId);

    // Initial data rendering for the Destinations and Reviews pages
    renderDestinations();
    renderReviews();
    renderFeaturedPackages();
});

/**
 * Manages the visibility of the SPA sections (pages).
 * @param {string} pageId - The ID of the section to show (e.g., 'home', 'destinations').
 */
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.location.hash = pageId; // Update URL hash for better back-button support

        // Highlight active link in the navigation bar
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    }
}


// --- 3. Feature Rendering Functions ---

/**

 * Creates the HTML card for a single package.

 * @param {Object} pkg - The package data object.

 * @returns {string} The HTML string for the package card.

 */

function createPackageCard(pkg) {

    // Use the placeholder service for dynamic images

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


/**
 * Renders package cards on the Destinations page.
 * @param {Array<Object>} [filteredData=DESTINATIONS_DATA] - The list of packages to render.
 */
function renderDestinations(filteredData = DESTINATIONS_DATA) {
    const listingContainer = document.getElementById('package-listing');
    listingContainer.innerHTML = ''; // Clear previous content

    if (filteredData.length === 0) {
        listingContainer.innerHTML = '<p class="no-results" style="padding: 20px; text-align: center;">No packages found matching your criteria. Try adjusting your filters!</p>';
        return;
    }

    // Use map and join for efficient rendering
    const cardsHtml = filteredData.map(createPackageCard).join('');
    listingContainer.innerHTML = cardsHtml;
}

/**
 * Renders featured package cards on the Home page.
 */
function renderFeaturedPackages() {
    const featuredList = document.getElementById('featured-list');
    if (!featuredList) return;

    const featuredData = DESTINATIONS_DATA.filter(pkg => FEATURED_PACKAGE_IDS.includes(pkg.id));
    
    // Create a simplified card for the featured section
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

/**
 * Renders customer reviews on the Reviews page.
 */
function renderReviews() {
    const reviewList = document.getElementById('review-list');
    
    // Clear the placeholder content and re-add the button
    reviewList.innerHTML = '';
    const submissionButton = document.createElement('button');
    submissionButton.setAttribute('onclick', 'openReviewSubmission()');
    submissionButton.textContent = 'Submit Your Review';
    reviewList.appendChild(submissionButton);

    REVIEWS_DATA.forEach(review => {
        const item = document.createElement('div');
        item.className = 'review-item';
        // Generate star rating string
        const stars = '⭐'.repeat(review.rating);
        item.innerHTML = `
            <h3>${stars} "${review.comment.substring(0, 70).trim()}${review.comment.length > 70 ? '...' : ''}" - ${review.name}</h3>
            <p class="package-name">Package: ${review.package}</p>
            <p>${review.comment}</p>
        `;
        // Insert review before the submission button (for newest-first display)
        reviewList.insertBefore(item, reviewList.firstChild);
    });
}

/**
 * Handles the logic when a user clicks 'Book Now'.
 * Transfers data to the booking page.
 * @param {string} packageId - The ID of the selected package.
 */
function startBooking(packageId) {
    const selectedPackage = DESTINATIONS_DATA.find(p => p.id === packageId);
    
    if (selectedPackage) {
        // Update the booking page with the selected package name
        document.getElementById('selected-package-name').textContent = selectedPackage.name;

        // Load detailed itinerary data
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

/**
 * Filters the packages based on user-selected criteria.
 */
function filterPackages() {
    const priceRange = document.getElementById('price-select').value;
    const dateInput = document.getElementById('date-select').value; // Currently not used for filtering, but captured

    let filtered = DESTINATIONS_DATA;
    
    if (priceRange === 'budget') {
        // Up to 30,000
        filtered = filtered.filter(pkg => pkg.price <= 30000);
    } else if (priceRange === 'mid') {
        // 30,001 to 60,000
        filtered = filtered.filter(pkg => pkg.price > 30000 && pkg.price <= 60000);
    } else if (priceRange === 'luxury') {
        // Over 60,000
        filtered = filtered.filter(pkg => pkg.price > 60000);
    }
    
    // Add logic for filtering by text input if implemented later
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


// --- 4. Form Submission Handlers ---

document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, this would send data to the backend API.
    alert('✅ Success! Thank you for your question. We will get back to you shortly.');
    e.target.reset();
});
// --- 4. Form Submission Handlers ---

document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, this would send data to the backend API.
    alert('✅ Success! Thank you for your question. We will get back to you shortly.');
    e.target.reset();
});

// 🛑 UPDATED: Booking Form Handler (Now captures and displays user/payment data)
document.getElementById('payment-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // --- 1. Capture Form Data ---
    const travelerName = document.getElementById('traveler-name').value;
    const travelerEmail = document.getElementById('traveler-email').value;
    const cardNumber = document.getElementById('card-number').value;
    
    // Mask the card number, showing only the last 4 digits
    const maskedCard = '**** **** **** ' + cardNumber.slice(-4);

    const selectedPackage = DESTINATIONS_DATA.find(p => 
        p.name === document.getElementById('selected-package-name').textContent
    );
    
    if (selectedPackage) {
        // 2. Alert Success
        alert(`🎉 Congratulations! Successfully booked "${selectedPackage.name}"! A confirmation email has been sent to ${travelerEmail}.`);
        
        // 3. Update the Itinerary Details (This is the content that becomes the PDF)
        const itineraryDetails = document.querySelector('#booking .itinerary-details');
        
        itineraryDetails.innerHTML = `
            <h2>✅ CONFIRMED BOOKING ITINERARY</h2>
            
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

        // 4. Show Receipt Button and Hide Form
        e.target.style.display = 'none';
        
        const receiptDiv = document.getElementById('confirmation-receipt');
        receiptDiv.style.display = 'block';
        receiptDiv.innerHTML = `
            <h2>🎉 Booking Confirmed!</h2>
            <p><strong>Package:</strong> ${selectedPackage.name}</p>
            <p>Your detailed itinerary is ready to download.</p>
            <button onclick="downloadItineraryPdf()" style="margin-top: 15px; width: 100%; background-color: var(--secondary-color);">
                ⬇️ Download Booking PDF
        
            </button>
        `;
    }
});
// (The downloadItineraryPdf function below remains UNCHANGED from the previous step)

// 🛑 NEW: PDF Generation Function
/**
 * Uses html2canvas and jsPDF to convert the itinerary section into a PDF.
 */
function downloadItineraryPdf() {
    // 1. Select the content area to be converted to PDF.
    const itineraryArea = document.querySelector('#booking .itinerary-details');

    // Display the receipt content which also contains the itinerary
    const receiptContent = document.querySelector('#confirmation-receipt');

    if (!itineraryArea || !receiptContent) {
        alert('Cannot find itinerary details to generate PDF.');
        return;
    }

    // 2. Use html2canvas to convert the HTML/CSS content to a Canvas (image).
    // The Promise ensures the rendering completes before we proceed.
    html2canvas(itineraryArea, { scale: 2 }).then(canvas => {
        // 3. Initialize jsPDF
        // The canvas dimensions are used to determine the PDF size.
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4'); 
        
        // PDF paper dimensions (A4 is 210mm x 297mm)
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pdfWidth - 20; // 10mm margin on each side
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 10; // Start position (10mm margin from top)

        // If the content is longer than one page, split it across multiple pages
        if (imgHeight > (pdfHeight - 20)) {
            // This is simplified, for complex multi-page handling, consider autoTable or a different approach
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        } else {
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        }

        // 4. Download the PDF
        pdf.save("GlobalJourneys_Itinerary.pdf");
        
        // Reset the booking page display after a short delay
        setTimeout(() => {
            document.getElementById('payment-form').style.display = 'block';
            document.getElementById('confirmation-receipt').style.display = 'none';
            // You might want to clear the itinerary details here too if the user navigated away.
            document.getElementById('selected-package-name').textContent = '...';
            document.querySelector('#booking .itinerary-details').innerHTML = '<p>Please select a package on the Destinations page.</p>';
        }, 500); // 500ms delay to ensure download starts
    });
}

function openReviewSubmission() {
    // A simple prompt to simulate getting user input for the review.
    const reviewName = prompt("Please enter your name:");
    const reviewPackage = prompt("Which package did you book?");
    const reviewRating = parseInt(prompt("Give us a rating (1-5):"), 10);
    const reviewComment = prompt("What was your experience?");

    if (reviewName && reviewPackage && reviewRating >= 1 && reviewRating <= 5 && reviewComment) {
        // Simulate adding the new review to the data and re-rendering
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
        // User cancelled the first prompt
    }
}


