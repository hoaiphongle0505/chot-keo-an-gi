# Chốt Kèo Ăn Gì

A Vietnamese-first food discovery and group-choice app. Open `index.html` in a browser to try it; the static app has no build step or credentials.

## What it does

- Browse a curated starter collection of Vietnamese and international dishes, with search, cuisine/category filters, dietary filtering, and cook-time sorting.
- Search TheMealDB's public API by dish name to discover additional recipes. Search is optional; the local collection continues to work without the network, and API failures are surfaced in the interface.
- Select several dishes and draw one at random to settle the group's choice.
- Spin a horizontal photo reel of all dishes or narrow the draw to breakfast, lunch, or dinner; the centered marker lands on the chosen dish, and each result suggests a type of place and opens a nearby Google Maps search.
- Use the responsive layout and reduced-motion support on desktop or mobile.

The starter collection is not an exhaustive list of every dish worldwide. The public recipe search extends discovery on demand; data availability and coverage depend on TheMealDB.

Dish photos are matched to the catalog using Wikimedia Commons, TheMealDB, and Unsplash. Source links are available on the photos; an internet connection is needed to load them.

The venue result is a restaurant type, not a verified business listing. Google Maps uses the query to find nearby real venues without requesting location access from this app.
