ANIME WORLD - CARD DETAILS VERSION

Files:
- index.html       Main website and all character/villain cards
- details.html     Shared full character detail page
- style.css        Main styling + transitions + animations
- script.js        Card click handling + character data + scroll animations

How it works:
1. Each card has data-character="gojo" (or another ID).
2. Clicking the card runs openCharacter(id).
3. The browser opens details.html?id=gojo.
4. details.html reads the id from the URL.
5. script.js supplies the matching character data.
6. The detail page fills in image, name, anime, description and abilities.

IMPORTANT:
Keep your existing image files in the same folder as these HTML/CSS/JS files.
The image filenames from your uploaded website are used directly.
