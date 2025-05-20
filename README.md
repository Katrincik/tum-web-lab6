# Page description
This is a responsive landing page for a skincare brand. The web application built with React and Tailwind CSS, designed to showcase a list of skincare products, where users can browse between these products, add them to their cart, and switch between light and dark themes with a custom toggle. The project fulfills core requirements like dynamic data manipulation (add to cart, remove, adjust quantity), custom theming, and accessibility via a public link.

---

## Features

- **Cart/Entity Management:**
    - Add products to cart
    - Increase/decrease quantity
    - Remove products from cart

- **Theming:**
    - Customized light/dark mode with a dynamic icons switch
    - Custom Tailwind-based theme for UI components and styling

- **Deployment:**
    - Live, public URL hosted on Vercel 

---

## App Flow

### 1. **Landing Page / Hero Section**
- Displays brand message with a call to action button
- Theme toggle is visible in the header

### 2. **Bestsellers Section**
- Lists top-selling products 
- Each product displays image, title, description, and price
- Users can interact via **"Add to Cart"**

### 3. **Cart Panel**
- Opens from the header on the right
- Displays added products with:
    - Quantity control (+ / -)
    - Remove button
- Works with persistent state and supports light/dark mode

### 4. **Theme Toggle**
- Sun icon for light mode
- Moon icon for dark mode
- Switches UI styles instantly using Tailwind's `dark:` classes

---

## Tech Stack

- **Frontend:** React
- **Styling:** Tailwind CSS (with custom classes and dark mode)
- **Persistence:** LocalStorage (cart state & theme preference)
- **Deployment:** Vercel

---

## Public Link

> 🌐 [Live Demo](https://tum-web-lab6-i3yv.vercel.app)
