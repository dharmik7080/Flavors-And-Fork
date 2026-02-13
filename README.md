🍽️ Flavors & Fork
A modern, responsive restaurant management website featuring dynamic menu ordering, cart logic, and a smart reservation system.

Live Demo: https://flavors-and-fork.vercel.app/index.html

Tech Stack: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5

✨ Key Features
🏠 Interactive UI

Hero Section: Parallax effect with dark gradient overlay for readability.

Smart Status: "Open Now" badge updates in real-time based on operating hours (10 AM - 11 PM).

Dark Mode: System-wide theme toggle persisted via LocalStorage.

🍔 Dynamic Menu & Cart

State Management: Global cart array handles items and quantities in real-time.

Reactive Buttons: "Add to Order" instantly swaps to [ - ] 1 [ + ] counters.

Live Bill: Subtotal, Tax (5%), and Grand Total update automatically.

Favorites: Users can "Heart" items to save them permanently.

📅 Reservation System

Visual Grid: Interactive floor plan built with CSS Grid.

Date-Specific Logic: Prevents double-booking by storing data as { "YYYY-MM-DD": [TableIDs] }.

Persistence: All reservations are saved in the browser's LocalStorage.

💳 Checkout Simulation

Payment Flow: Modal summary with simulated network delay (setTimeout) and random transaction ID generation.

🛠️ Setup & Usage
Clone the repo:

Bash
git clone https://github.com/your-username/flavors-and-fork.git
Run: Open index.html in your browser.

📂 Project Structure
index.html - Landing page (Hero, Features, Map).

menu.html - Menu, Filtering, and Cart logic.

reservation.html - Table booking interface.

js/main.js - Core logic (Cart state, Validation, LocalStorage).

css/style.css - Custom styles, CSS variables, and Animations.

Developed by Dharmik
