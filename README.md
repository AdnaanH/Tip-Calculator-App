# Tip Calculator App

A simple, responsive tip calculator app that helps users calculate the tip and total bill per person. The app includes features like dark mode, transaction logging, and a user-friendly interface, making it easy to calculate and track tip amounts.

---

## Features

- **Responsive UI:** Optimized for both desktop and mobile devices.
- **Dark Mode:** Toggle dark mode for a better user experience in low light.
- **Transaction Logging:** Automatically logs the last 5 valid transactions.
- **Custom Tip Input:** Choose from preset tip percentages or enter a custom value.
- **Error Handling:** Displays an error when the number of people is zero or invalid.
- **Debounced Input:** Updates tip and total calculations with a debounce for smoother performance.

---

## Live Demo

Check out the live version of the Tip Calculator app here:  
[Tip Calculator App - Live Demo](https://tip-calculator-app-sable-two.vercel.app/)

---

## Installation

To run the Tip Calculator app locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AdnaanH/Tip-Calculator-App.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd Tip-Calculator-App
   ```

3. **Open the `index.html` file in a browser:**

   You can simply open `index.html` in any modern browser to run the app.

---

## File Structure

```
Tip-Calculator-App/
├── index.html         # Main HTML file
├── style.css          # Stylesheet for the app
├── app.js             # JavaScript file for app logic
├── assets/            # Folder containing static assets like icons and logos
│   ├── logo.svg       # App logo
│   ├── icon-dollar.svg # Dollar icon for buttons
│   ├── icon-person.svg # Person icon for the number of people input
│   └── favicon-32x32.png # Favicon
```

---

## Usage

- **Bill:** Enter the total bill amount.
- **Tip %:** Select a predefined tip percentage or enter a custom value.
- **People:** Enter the number of people to split the bill between.
- **Results:** The tip amount and total per person are calculated dynamically.
- **Reset:** Click the "Reset" button to clear inputs and results.

---

## Dark Mode

- Toggle dark mode by clicking the moon 🌙 icon in the header. The theme is stored in `localStorage` and will persist across sessions.

---

## Transaction Log

- The app logs the last 5 valid transactions (bill, tip, number of people) in localStorage.
- Transactions are displayed below the calculator after each valid calculation.

---

## Technologies

- **HTML5**: Structure and content of the web app.
- **CSS3**: Styling, including responsive design and dark mode.
- **JavaScript**: App logic, event handling, and transaction management.
- **localStorage**: Used to persist transaction data and dark mode preference.

---

## Repository

You can find the source code for this project on GitHub:  
[Tip Calculator App - GitHub Repository](https://github.com/AdnaanH/Tip-Calculator-App.git)

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- The app uses a simple and minimal design, focusing on user experience and clarity.
- Special thanks to the contributors of the `JavaScript` and `CSS` libraries.
