# Solo State Complete Ecommerce UI

This is a consolidated Solo State frontend with the corrected product navigation.

## Routes
- `/` Home
- `/shop` Shop
- `/new-arrivals` New Arrivals
- `/collections` Collections
- `/about` About
- `/favorites` Favorites
- `/login` Login
- `/cart` Cart
- `/product/[id]` Product Details

## Product click behavior
- Clicking a product image or product name opens `/product/[id]`.
- The `QUICK ADD` button opens the quick-add dialog.
- Product details use the shared product data in `app/shop-components/shop-data.ts`.
- Home product cards are also linked to the details route.

## Run
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.
