// 1. Force Page to Top on Reload
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
    // 2. Clear the '#contact' from the URL so it doesn't jump back
if (window.location.hash) {
    history.replaceState(null, null, ' ');
    window.scrollTo(0, 0);
}

/**
 * Global variable to store fetched menu data.
 */
// --- Master Menu Data ---
let currentMenuData = []; // Track currently displayed items for re-rendering
const menuData = [
    // --- STARTERS ---
    { id: 1, name: "Paneer Tikka Masala", category: "main", type: "veg", price: 350, image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80", description: "Spiced paneer cubes grilled to perfection." },
    { id: 2, name: "Crispy French Fries", category: "starters", type: "veg", price: 180, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80", description: "Golden fried salted fries with ketchup." },
    {
        id: 4,
        name: "Creamy Tomato Soup",
        category: "starters",
        type: "veg",
        price: 150,
        // New Image Source: Pexels (Red soup with basil)
        image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Rich tomato soup served with croutons."
    },
    {
        id: 17,
        name: "Veg Manchurian",
        category: "starters",
        type: "veg",
        price: 240,
        // New Image: Indo-Chinese Manchurian Balls (Pexels ID 28674530)
        image: "https://images.pexels.com/photos/28674530/pexels-photo-28674530.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Fried veg balls in spicy Chinese sauce."
    },
    {
        id: 18,
        name: "Pani Puri",
        category: "starters",
        type: "veg",
        price: 100,
        // New Image: Vibrant Indian Street Food (Pexels ID 30660300)
        image: "https://images.pexels.com/photos/30660300/pexels-photo-30660300.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Crispy hollow balls filled with spicy tangy water."
    },
    // --- MAIN COURSE ---
    {
        id: 5,
        name: "Margherita Pizza",
        category: "main",
        type: "veg",
        price: 400,
        // New Image: Classic Margherita Pizza (Pexels)
        image: "https://images.pexels.com/photos/10790638/pexels-photo-10790638.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Classic cheese pizza with fresh basil."
    },
    {
        id: 6,
        name: "Chicken Kung Pao",
        category: "main",
        type: "non-veg",
        price: 280,
        // New Image: Delicious Kung Pao on white plate (Pexels ID 30708204)
        image: "https://images.pexels.com/photos/30708204/pexels-photo-30708204.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Spicy chicken with peanuts and vegetables."
    },
    {
        id: 7,
        name: "Butter Chicken",
        category: "main",
        type: "non-veg",
        price: 450,
        // New Image: Butter Chicken in Copper Pan (Pexels ID 29685054)
        image: "https://images.pexels.com/photos/29685054/pexels-photo-29685054.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Tender chicken cooked in rich tomato gravy."
    },
    {
        id: 8,
        name: "Dal Makhani",
        category: "main",
        type: "veg",
        price: 320,
        // New Image: Elegant Dal Makhani in copper pan (Pexels ID 28674561)
        image: "https://images.pexels.com/photos/28674561/pexels-photo-28674561.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Slow-cooked black lentils with butter."
    },
    {
        id: 9,
        name: "Veg Hakka Noodles",
        category: "starters",
        type: "veg",
        price: 250,
        // New Image: Stir-fried noodles with vegetables (Pexels ID 2347311)
        image: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Stir-fried noodles with crunchy veggies."
    },
    {
        id: 10,
        name: "Hyderabadi Biryani",
        category: "main",
        type: "veg",
        price: 380,
        // New Image: Hyderabadi Biryani with side dishes (Pexels ID 35287418)
        image: "https://images.pexels.com/photos/35287418/pexels-photo-35287418.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Aromatic basmati rice cooked with spices."
    },
    {
        id: 16,
        name: "Garlic Naan",
        category: "main",
        type: "veg",
        price: 60,
        // New Image: Flavorful Garlic Naan Close-up (Pexels ID 30203311)
        image: "https://images.pexels.com/photos/30203311/pexels-photo-30203311.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Soft Indian bread topped with garlic and butter."
    },
    {
        id: 20,
        name: "Tandoori Roti",
        category: "main",
        type: "veg",
        price: 40,
        // New Image: Basket of cooked flatbreads (Pexels ID 1117862)
        image: "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Whole wheat bread baked in a clay oven."
    },
    // --- DESSERTS ---
    {
        id: 11,
        name: "Sizzling Brownie",
        category: "desserts",
        type: "veg",
        price: 250,
        // New Image: Brownie with Vanilla Ice Cream (Pexels)
        image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Hot chocolate brownie with vanilla ice cream."
    },
    {
        id: 12,
        name: "Gulab Jamun",
        category: "desserts",
        type: "veg",
        price: 120,
        // New Image: Bowl of Gulab Jamun (Pexels ID 15014919)
        image: "https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Soft milk dumplings soaked in sugar syrup."
    },
    {
        id: 13,
        name: "Blueberry Cheesecake",
        category: "desserts",
        type: "veg",
        price: 300,
        // New Image: Blueberry Cheesecake Slice (Pexels ID 28377760)
        image: "https://images.pexels.com/photos/28377760/pexels-photo-28377760.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Creamy cheesecake topped with blueberries."
    },
    // --- BEVERAGES ---
    {
        id: 14,
        name: "Virgin Mojito",
        category: "beverages",
        type: "veg",
        price: 180,
        // New Image: Refreshing Mint Mojito (Pexels)
        image: "https://images.pexels.com/photos/4051259/pexels-photo-4051259.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Refreshing mint and lemon soda."
    },
    {
        id: 15,
        name: "Cold Coffee",
        category: "beverages",
        type: "veg",
        price: 200,
        // New Image: Cold Coffee (Pexels ID 28744927)
        image: "https://images.pexels.com/photos/28744927/pexels-photo-28744927.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Chilled creamy coffee with chocolate topping."
    },
    {
        id: 19,
        name: "Chocolate Milkshake",
        category: "beverages",
        type: "veg",
        price: 220,
        // New Image: Chocolate Milkshake (Pexels)
        image: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Thick chocolate shake topped with whipped cream."
    },
    {
        id: 21,
        name: "Red Sauce Pasta",
        category: "main",
        type: "veg",
        price: 260,
        // New Image: Cooked pasta in wooden bowl (Pexels ID 803963)
        image: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Penne pasta tossed in spicy tomato sauce."
    },
    {
        id: 22,
        name: "Vada Pav",
        category: "starters",
        type: "veg",
        price: 50,
        // New Image: Vada Pav with spicy chili (Pexels ID 34682732)
        image: "https://images.pexels.com/photos/34682732/pexels-photo-34682732.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Spicy potato fritter stuffed in a soft bun."
    },
    {
        id: 23,
        name: "Masala Tea",
        category: "beverages",
        type: "veg",
        price: 80,
        // New Image: Masala Tea (Pexels ID 16942969)
        image: "https://images.pexels.com/photos/16942969/pexels-photo-16942969.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Aromatic spiced tea brewed with milk and sugar."
    },
    {
        id: 24,
        name: "Garlic Bread",
        category: "starters",
        type: "veg",
        price: 150,
        // New Image: Garlic Bread (Pexels ID 13698106)
        image: "https://images.pexels.com/photos/13698106/pexels-photo-13698106.jpeg?auto=compress&cs=tinysrgb&w=800",
        description: "Crunchy toasted bread topped with garlic butter and herbs."
    },
    {
        id: 25,
        name: "Omelette",
        category: "non-veg",
        type: "non-veg",
        price: 120,
        // New Image: Omelette (Unsplash)
        image: "https://unsplash.com/photos/ivFdoHieX08/download",
        description: "A classic fluffy masala omelette."
    }
];

// Initialize currentMenuData with all items
currentMenuData = [...menuData];

/**
 * Filters menu items by category.
 * @param {Array} menuArray - The array of menu items.
 * @param {string} category - The category to filter by (e.g., 'starter').
 * @returns {Array} The filtered array of items.
 */
function filterMenuByCategory(menuArray, category) {
    return menuArray.filter(item => item.category === category);
}

/**
 * Sorts menu items by price.
 * @param {Array} menuArray - The array of menu items.
 * @param {string} direction - Sorting direction: 'asc' or 'desc'.
 * @returns {Array} The sorted array of items.
 */
function sortMenuByPrice(menuArray, direction) {
    return menuArray.sort((a, b) => {
        if (direction === 'asc') {
            return a.price - b.price;
        } else if (direction === 'desc') {
            return b.price - a.price;
        }
        return 0;
    });
}

// --- Validation Logic ---

/**
 * Validates a phone number.
 * Rule: Must be exactly 10 digits.
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function validatePhoneNumber(phone) {
    // Regex explanation:
    // ^      : Start of string
    // \d     : Matches any digit (0-9)
    // {10}   : Quantifier, matches exactly 10 occurrences of the preceding token
    // $      : End of string
    const regex = /^\d{10}$/;
    return regex.test(phone);
}

/**
 * Validates the reservation date.
 * Rule: The date cannot be in the past.
 * @param {string} selectedDate - The date string to validate.
 * @returns {boolean} True if the date is today or in the future.
 */
function validateDate(selectedDate) {
    const inputDate = new Date(selectedDate);
    const today = new Date();
    // Reset time part of today to ensure we only compare dates
    today.setHours(0, 0, 0, 0);
    return inputDate >= today;
}

/**
 * Validates the guest count.
 * Rule: Must be a number between 1 and 20.
 * @param {number} count - The number of guests.
 * @returns {boolean} True if valid.
 */
function validateGuestCount(count) {
    return count >= 1 && count <= 20;
}

// --- Display Logic ---

/**
 * Global variable to track the cart items.
 */
let cart = [];

/**
 * Adds an item to the cart and updates the display.
 * @param {number} id - The ID of the menu item.
 */
/**
 * Adds an item to the cart and updates the display.
 * @param {number} id - The ID of the menu item.
 */
function addToCart(id) {
    // Find item in your menuData array (Make sure menuData is global)
    const item = menuData.find(dish => dish.id === id);

    // Check if item already exists in cart
    const existingItem = cart.find(x => x.id === id);
    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({...item, qty: 1 });
    }

    // Trigger UI Updates
    updateCartUI();
    updateItemButton(id); // Only update this specific button

    // Optional: Feedback vibration (mobile)
    if (navigator.vibrate) navigator.vibrate(50);
}

/**
 * Removes an item from the cart or decreases quantity.
 * @param {number} id - The ID of the menu item.
 */
function removeFromCart(id) {
    const existingItem = cart.find(x => x.id === id);
    if (existingItem) {
        existingItem.qty--;
        if (existingItem.qty <= 0) {
            cart = cart.filter(x => x.id !== id);
        }
    }

    // Trigger UI Updates
    updateCartUI();
    updateItemButton(id); // Only update this specific button
}

/**
 * Clears the cart and updates the display.
 */
function clearCart() {
    cart = []; // Empty the cart array
    updateCartUI(); // Update the cart drawer UI

    // Close the Offcanvas Drawer
    const drawerEl = document.getElementById('cartDrawer');
    if (drawerEl) {
        const drawerInstance = bootstrap.Offcanvas.getInstance(drawerEl);
        if (drawerInstance) drawerInstance.hide();
    }

    // Reset all "Add to Order" buttons
    // Since we cleared the cart, all items should revert to default state
    // We can just re-render the whole menu to be safe and simple
    displayMenu(currentMenuData);
}

/**
 * Updates ONLY the button container for a specific item to prevent re-rendering the whole list.
 * @param {number} id - The ID of the menu item.
 */
function updateItemButton(id) {
    const item = menuData.find(d => d.id === id);
    if (!item) return;

    const container = document.getElementById(`btn-container-${id}`);
    if (container) {
        container.innerHTML = getButtonHTML(item);
    }
}

/**
 * Updates the Cart UI (Bar totals and Off-Canvas details).
 */
function updateCartUI() {
    const cartBar = document.getElementById('cart-bar');
    const cartCount = document.getElementById('cart-count');
    const cartTotalBar = document.getElementById('cart-total-bar');
    const itemsContainer = document.getElementById('cart-items-container');
    const billDetails = document.getElementById('bill-details');
    const drawerTitle = document.querySelector('#cartDrawer .offcanvas-title');

    // Update Drawer Title
    if (drawerTitle) {
        drawerTitle.innerText = "Your Order";
        drawerTitle.classList.add('text-warning', 'fw-bold', 'font-serif');
    }

    // A. Handle Visibility (The Pop-Up Logic)
    if (cart.length > 0) {
        cartBar.classList.add('show'); // Slide Up
    } else {
        cartBar.classList.remove('show'); // Slide Down
    }

    // B. Calculate Totals
    let subtotal = 0;
    let totalQty = 0;
    let html = '';

    cart.forEach(item => {
        subtotal += item.price * item.qty;
        totalQty += item.qty;

        // Generate List HTML (New Card Style)
        html += `
            <div class="cart-item-card mb-3 p-3 bg-dark border border-secondary rounded position-relative">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="text-white mb-1 fw-bold">${item.name}</h6>
                        <div class="d-flex align-items-center">
                            <span class="text-warning fw-bold me-2">${item.qty}x</span>
                            <small class="text-white-50">₹${item.price} x ${item.qty} = ₹${item.price * item.qty}</small>
                        </div>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-sm btn-outline-danger me-2" onclick="removeFromCart(${item.id})">
                            <i class="bi bi-dash"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-success" onclick="addToCart(${item.id})">
                            <i class="bi bi-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    // C. Tax Math
    const gst = subtotal * 0.05; // 5% Tax
    const serviceCharge = 20;
    const grandTotal = subtotal + gst + serviceCharge;

    // D. Update Text Elements
    if (cartCount) cartCount.innerText = totalQty;
    if (cartTotalBar) cartTotalBar.innerText = Math.round(grandTotal); // Show Grand Total on Bar

    // Update Drawer Content
    if (!itemsContainer) return;

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<p class="text-white-50 text-center mt-5">Your cart is empty.</p>';
        if (billDetails) billDetails.style.display = 'none';

        // Also reset title if empty
        if (drawerTitle) drawerTitle.innerText = "Cart";

    } else {
        itemsContainer.innerHTML = html;

        if (billDetails) {
            billDetails.style.display = 'block';
            billDetails.className = ''; // Remove old border classes

            // Update Bill Details HTML (The Receipt Card)
            billDetails.innerHTML = `
                <div class="bill-receipt-card">
                    <div class="d-flex justify-content-between mb-2">
                        <span>Item Total</span>
                        <span>₹${subtotal}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-2 text-white-50 small">
                        <span>Taxes & Charges (5%)</span>
                        <span>₹${gst.toFixed(2)}</span>
                    </div>
                    <div class="d-flex justify-content-between mb-4 text-white-50 small">
                        <span>Platform Fee</span>
                        <span>₹20.00</span>
                    </div>
                    
                    <hr class="border-secondary my-3">
                    
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <span class="fs-5 fw-bold">To Pay</span>
                        <span class="fs-2 fw-bold text-warning font-serif">₹${Math.round(grandTotal)}</span>
                    </div>
                    
                    <button class="btn btn-checkout w-100 mb-3" onclick="openPaymentModal()">
                        Place Order <i class="bi bi-arrow-right-circle-fill ms-2"></i>
                    </button>
                    
                    <button class="btn btn-outline-danger w-100 rounded-pill" onclick="clearCart()">
                        Clear Cart
                    </button>
                </div>
            `;
        }
    }
}

/**
 * Generates the HTML for the action button (Add or Toggle).
 * @param {Object} item - The menu item object.
 * @returns {string} The HTML string for the button.
 */
function getButtonHTML(item) {
    const cartItem = cart.find(x => x.id === item.id);

    if (cartItem) {
        // Render Quantity Toggle
        return `
            <div class="d-flex justify-content-between align-items-center w-100 mt-auto">
                <button class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${item.id})">
                    <i class="bi bi-dash"></i>
                </button>
                <span class="fw-bold fs-5">${cartItem.qty}</span>
                <button class="btn btn-outline-success btn-sm" onclick="addToCart(${item.id})">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
        `;
    } else {
        // Render Add Button
        return `<button class="btn btn-outline-gold mt-auto btn-sm w-100" onclick="addToCart(${item.id})">Add to Order</button>`;
    }
}

/**
 * Generates the HTML for a single menu item card.
 * @param {Object} item - The menu item object.
 * @returns {string} The HTML string for the item card.
 */
function renderMenuItem(item) {
    // Check local storage for favorites
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.includes(item.id);
    const heartClass = isFavorite ? 'bi-heart-fill' : 'bi-heart';

    // Determine Logic for Image vs Placeholder
    let imageHtml = '';
    if (item.image.includes('placehold.co')) {
        // Extract color and text using Regex
        // Example: https://placehold.co/600x400/orange/white?text=Gulab+Jamun
        const colorMatch = item.image.match(/\/([a-zA-Z0-9]+)\/([a-zA-Z0-9]+)\?text=(.*)/);
        let bgColor = '#333';
        let text = item.name;

        if (colorMatch) {
            bgColor = colorMatch[1]; // e.g. 'orange'
            // Decode URI component for text (e.g. Gulab+Jamun -> Gulab Jamun)
            text = decodeURIComponent(colorMatch[3].replace(/\+/g, ' '));
        }

        // Create Gradient based on the extracted color
        // Simple lightening effect: mixing with white
        imageHtml = `
            <div class="placeholder-box card-img-top" 
                 style="background: linear-gradient(135deg, ${bgColor}, #ffffff80, ${bgColor});">
                <span class="placeholder-text">${text}</span>
            </div>
        `;

    } else {
        imageHtml = `<img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">`;
    }

    return `
        <div class="col-md-4 mb-4 fade-in">
            <div class="card h-100 shadow-sm position-relative">
                 <button onclick="toggleFavorite(${item.id})" class="btn btn-sm position-absolute top-0 end-0 m-2 rounded-circle bg-white shadow-sm" style="z-index: 10;">
                    <i id="fav-icon-${item.id}" class="bi ${heartClass} text-danger"></i>
                </button>
                ${imageHtml}
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title mb-0">${item.name}</h5>
                        <span class="badge badge-gold rounded-pill">₹${item.price}</span>
                    </div>
                    <p class="card-text text-muted small mb-3">${item.description}</p>
                    <div id="btn-container-${item.id}" class="w-100 mt-auto">
                        ${getButtonHTML(item)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renders the menu items into the menu container.
 * @param {Array} items - The array of menu items to display.
 */
function displayMenu(items) {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) return;

    menuContainer.innerHTML = '';

    if (items.length === 0) {
        menuContainer.innerHTML = '<p class="text-center">No items found.</p>';
        return;
    }

    // Using map/join for performance instead of appending in a loop
    menuContainer.innerHTML = items.map(item => renderMenuItem(item)).join('');
}

/**
 * Sets up menu filter buttons.
 */
function setupFilters() {
    const filterButtons = document.querySelectorAll('#menu-filters button');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // 2. Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            // 3. Filter the Data
            const filteredItems = menuData.filter(item => {
                if (filterValue === 'all') {
                    return true; // Show everything
                } else if (filterValue === 'veg' || filterValue === 'non-veg') {
                    return item.type === filterValue; // Check Type (Veg/Non-Veg)
                } else {
                    return item.category === filterValue; // Check Category (Starters, Main, etc.)
                }
            });

            // 4. Update Global State
            currentMenuData = filteredItems;

            // 5. Re-render the Menu
            displayMenu(currentMenuData);
        });
    });
}

/**
 * Sets up table selection interactions.
 */
/**
 * Sets up table selection interactions.
 */
function setupTableSelection() {
    const tables = document.querySelectorAll('.table-box');
    const selectedTableInput = document.getElementById('selectedTable');

    tables.forEach(table => {
        table.addEventListener('click', () => {
            // Prevent selection if booked
            if (table.classList.contains('booked')) {
                // alert('This table is already booked for the selected date.'); // Optional feedback
                return;
            }

            // Reset: Remove 'selected' from all tables
            tables.forEach(t => t.classList.remove('selected'));

            // Highlight: Add 'selected' to clicked table
            table.classList.add('selected');

            // Update Data: Set hidden input value
            const tableId = table.getAttribute('data-table');
            if (selectedTableInput) {
                selectedTableInput.value = tableId;
            }
            console.log(`Table ${tableId} selected`);
        });
    });
}

/**
 * Sets up theme toggle interactions.
 */
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}

// --- Favorites Logic ---
/**
 * Toggles a menu item as a favorite.
 * @param {number} id - The ID of the menu item.
 */
function toggleFavorite(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const icon = document.getElementById(`fav-icon-${id}`);

    if (favorites.includes(id)) {
        // Remove from favorites
        favorites = favorites.filter(favId => favId !== id);
        if (icon) {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
        }
        console.log(`Removed item ${id} from favorites.`);
    } else {
        // Add to favorites
        favorites.push(id);
        if (icon) {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill');
        }
        console.log(`Added item ${id} to favorites.`);
        alert('Added to Favorites!');
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// --- Payment Logic ---
/**
 * Opens the Payment Modal with the correct details.
 */
function openPaymentModal() {
    // Calculate Grand Total again (or store it globally, but recalc is safer)
    let subtotal = 0;
    cart.forEach(item => subtotal += item.price * item.qty);
    const tax = subtotal * 0.05;
    const serviceCharge = 20;
    const grandTotal = Math.round(subtotal + tax + serviceCharge);

    // Update Modal
    const modalAmountEl = document.getElementById('modal-pay-amount');
    if (modalAmountEl) modalAmountEl.innerText = grandTotal;

    // Reset Button State
    const payBtn = document.querySelector('.modal-footer .btn-success');
    const btnText = document.getElementById('pay-btn-text');
    const spinner = document.getElementById('pay-spinner');

    if (payBtn) payBtn.disabled = false;
    if (btnText) btnText.innerText = "Pay Now";
    if (spinner) spinner.style.display = "none";

    // Show Modal
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
}

/**
 * Processes the payment (Visually).
 */
function processPayment() {
    const btnText = document.getElementById('pay-btn-text');
    const spinner = document.getElementById('pay-spinner');
    const selectedMethod = document.querySelector('input[name="payment-method"]:checked').id;
    const payBtn = document.querySelector('.modal-footer .btn-success');

    // 1. Loading State
    if (btnText) btnText.innerText = "Processing...";
    if (spinner) spinner.style.display = "inline-block";
    if (payBtn) payBtn.disabled = true; // Prevent double clicks

    // 2. Wait 2 seconds (Simulation)
    setTimeout(() => {
        // 3. Generate Random ID (e.g., #ORD-4592)
        const orderId = Math.floor(Math.random() * 9000 + 1000);

        // 4. Custom Message based on Method
        let msg = "";
        if (selectedMethod === 'pay-cash') {
            // Pay on Counter Logic
            msg = `✅ Order Placed Successfully!\n\n🔹 YOUR TOKEN: #ORD-${orderId}\n\nPlease show this ID at the counter to complete payment.`;
        } else {
            // Online Payment Logic
            msg = `✅ Payment Successful!\n\nTransaction ID: TXN-${orderId}\nYour food is being prepared.`;
        }

        // 5. Show Success Alert
        alert(msg);

        // 6. Reset & Cleanup
        cart = []; // Empty cart
        updateCartUI(); // Update UI
        displayMenu(currentMenuData); // Re-render menu to show updated state

        // Close Modal
        const modalEl = document.getElementById('paymentModal');
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();

        // Close Drawer
        const drawerEl = document.getElementById('cartDrawer');
        const drawerInstance = bootstrap.Offcanvas.getInstance(drawerEl);
        if (drawerInstance) drawerInstance.hide();

        // Reset Button state
        if (btnText) btnText.innerText = "Pay Now";
        if (spinner) spinner.style.display = "none";
        if (payBtn) payBtn.disabled = false;

    }, 2000);
}

// --- Newsletter Logic ---
/**
 * Handles the newsletter subscription form submission.
 * @param {Event} event - The form submission event.
 */
function handleSubscribe(event) {
    event.preventDefault();

    const emailInput = document.getElementById('newsletter-email');
    const msgElement = document.getElementById('newsletter-msg');
    const email = emailInput.value.trim();

    // Regex for email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        msgElement.innerText = "❌ Invalid email format";
        msgElement.classList.remove('text-success');
        msgElement.classList.add('text-danger');
        msgElement.style.display = 'block';
    } else {
        msgElement.innerText = "✅ Subscribed!";
        msgElement.classList.remove('text-danger');
        msgElement.classList.add('text-success');
        msgElement.style.display = 'block';
        emailInput.value = ''; // Clear input
    }

    // Hide message after 3 seconds
    setTimeout(() => {
        msgElement.style.display = 'none';
    }, 3000);
}

// --- Booking Logic ---

/**
 * Handles the reservation booking submission.
 * @param {Event} event - The form submission event.
 */
function handleBooking(event) {
    event.preventDefault();

    const selectedTableInput = document.getElementById('selectedTable');
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const date = document.getElementById('dateInput').value;
    const guests = document.getElementById('guestCountInput').value;
    const submitBtn = event.target.querySelector('button[type="submit"]');

    // Validation
    if (!selectedTableInput.value) {
        alert('Please select a table first!');
        return;
    }

    if (!validatePhoneNumber(phone)) {
        document.getElementById('phoneError').innerText = 'Please enter a valid 10-digit phone number.';
        return;
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    if (!validateDate(date)) {
        document.getElementById('dateError').innerText = 'Please select a future date.';
        return;
    } else {
        document.getElementById('dateError').innerText = '';
    }

    // Check if table is already booked for this specific date (Double Check)
    const bookings = JSON.parse(localStorage.getItem('restaurantBookings')) || {};
    if (bookings[date] && bookings[date].includes(selectedTableInput.value)) {
        alert('This table is already booked for the selected date. Please choose another.');
        return;
    }

    // Loading Simulation
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = 'Processing...';
    submitBtn.disabled = true;

    // Simulate API Call
    setTimeout(() => {
        // 1. Hide Form (Optional - keeping layout same/similar)
        document.getElementById('booking-form').style.display = 'none';

        // 2. Show Success Message
        const successDiv = document.getElementById('booking-success');
        if (successDiv) successDiv.style.display = 'block';

        // 3. Populate Details
        document.getElementById('conf-name').innerText = name;
        // Rewrite innerHTML with inline styles to force black text (overriding global dark mode CSS)
        const summaryBox = document.querySelector('#booking-success .alert');
        if (summaryBox) {
            summaryBox.innerHTML = `
                <p class='mb-1' style='color: black !important;'>
                    <strong style='color: black !important;'>Table No:</strong> 
                    <span style='color: black !important;'>${selectedTableInput.value}</span>
                </p>
                <p class='mb-1' style='color: black !important;'>
                    <strong style='color: black !important;'>Date:</strong> 
                    <span style='color: black !important;'>${date}</span>
                </p>
                <p class='mb-0' style='color: black !important;'>
                    <strong style='color: black !important;'>Guests:</strong> 
                    <span style='color: black !important;'>${guests}</span>
                </p>
            `;
        }

        // 4. Mark Table as Booked (Persist with Date)
        const tableId = selectedTableInput.value;

        // Get existing bookings object: { "YYYY-MM-DD": ["1", "2"] }
        let allBookings = JSON.parse(localStorage.getItem('restaurantBookings')) || {};

        // Initialize array for this date if it doesn't exist
        if (!allBookings[date]) {
            allBookings[date] = [];
        }

        // Add table ID if not already booked
        if (!allBookings[date].includes(tableId)) {
            allBookings[date].push(tableId);
            localStorage.setItem('restaurantBookings', JSON.stringify(allBookings));
        }

        // Update UI immediately (Only if the selected date matches the input date - which it should)
        updateTableAvailability();

        // Remove 'selected' class from all tables (visual cleanup)
        document.querySelectorAll('.table-box.selected').forEach(t => t.classList.remove('selected'));

        // 5. Reset Button & Input
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
        selectedTableInput.value = '';

    }, 1500);
}

/**
 * Updates the availability of tables based on the selected date.
 */
function updateTableAvailability() {
    const dateInput = document.getElementById('dateInput');
    if (!dateInput) return;

    const selectedDate = dateInput.value;
    const allBookings = JSON.parse(localStorage.getItem('restaurantBookings')) || {};
    const bookedTablesForDate = allBookings[selectedDate] || [];

    // 1. Reset ALL tables to Available first
    document.querySelectorAll('.table-box').forEach(table => {
        const id = table.getAttribute('data-table');
        table.classList.remove('booked', 'selected');
        // Restore original text (or just simplify)
        table.innerHTML = `Table ${id}`;
        // Re-enable clicks logic is handled by CSS (pointer-events) or check in click handler
        // For visual, we just remove the class.
    });

    // 2. Mark specific tables as Booked
    bookedTablesForDate.forEach(tableId => {
        const tableEl = document.querySelector(`.table-box[data-table="${tableId}"]`);
        if (tableEl) {
            tableEl.classList.add('booked');
            tableEl.innerHTML = `Table ${tableId}<br><small>Booked</small>`;
        }
    });
}

// --- Back to Top Logic ---

/**
 * Sets up the 'Back to Top' button functionality.
 */
function setupBackToTop() {
    let mybutton = document.getElementById("btn-back-to-top");

    if (!mybutton) return;

    // Scroll Logic
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    // Click Logic
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// --- Status Indicator Logic ---

/**
 * Checks the current time and updates the shop status badge.
 * Open: 11 AM (11) to 11 PM (23).
 */
function checkShopStatus() {
    const statusBadge = document.getElementById('status-badge');
    if (!statusBadge) return;

    const hour = new Date().getHours();

    // Open from 11:00 AM to 11:00 PM (23:00)
    // Open from 11:00 AM to 11:00 PM (23:00)
    if (hour >= 11 && hour < 23) {
        statusBadge.innerHTML = '🟢 OPEN NOW';
        statusBadge.className = 'badge rounded-pill bg-success me-3 shadow-sm';
    } else {
        statusBadge.innerHTML = '🔴 CLOSED';
        statusBadge.className = 'badge rounded-pill bg-danger me-3 shadow-sm';
    }
}

// Initialize Pages
document.addEventListener('DOMContentLoaded', async() => {
    // Check Status Immediately
    checkShopStatus();

    // Initialize Theme Toggle on all pages
    setupThemeToggle();

    // Initialize Back to Top Button
    setupBackToTop();

    const path = window.location.pathname;

    if (path.endsWith('menu.html')) {
        displayMenu(menuData);
        setupFilters();
    } else if (path.endsWith('reservation.html')) {
        setupTableSelection();

        // Date Input Setup
        const dateInput = document.getElementById('dateInput');
        if (dateInput) {
            // Set Default Date to Today
            const today = new Date().toISOString().split('T')[0];
            dateInput.value = today;
            // Set Min Date to Today
            dateInput.min = today;

            // Listen for changes
            dateInput.addEventListener('change', updateTableAvailability);
        }

        // Initial Load
        updateTableAvailability();
    }
});

// --- Live Search Bar Logic ---
const searchInput = document.getElementById('menuSearch');

if (searchInput) {
    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();

        // Filter the array based on name or description
        const filteredItems = menuData.filter(item => {
            const matchesName = item.name.toLowerCase().includes(searchTerm);
            const matchesDesc = item.description.toLowerCase().includes(searchTerm);
            return matchesName || matchesDesc;
        });

        // Re-render the menu instantly
        displayMenu(filteredItems);
    });
}