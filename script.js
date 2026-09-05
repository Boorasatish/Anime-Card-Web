
const characters = {'zenitsu': {'name': 'Zenitsu Agatsuma', 'anime': 'Demon Slayer', 'type': 'Character', 'image': 'zenitsu.jpg', 'description': 'Zenitsu Agatsuma is a talented Demon Slayer who often appears nervous, but becomes extremely focused when pushed to his limits.', 'abilities': ['Thunder Breathing', 'First Form: Thunderclap and Flash', 'Enhanced hearing']}, 'goku': {'name': 'Goku', 'anime': 'Dragon Ball', 'type': 'Character', 'image': 'dargon ball.jpeg', 'description': 'Goku is the central hero of the Dragon Ball series, known for his love of training, battles, and protecting his friends and Earth.', 'abilities': ['Saiyan strength', 'Super Saiyan transformations', 'Kamehameha']}, 'gojo': {'name': 'Satoru Gojo', 'anime': 'Jujutsu Kaisen', 'type': 'Character', 'image': 'gojo.webp', 'description': 'Satoru Gojo is a powerful jujutsu sorcerer associated with the Limitless technique and Six Eyes.', 'abilities': ['Limitless', 'Six Eyes', 'Domain Expansion: Unlimited Void']}, 'luffy': {'name': 'Monkey D. Luffy', 'anime': 'One Piece', 'type': 'Character', 'image': 'monkey-d-luffy-one-piece-red-background-minimal-art-5k-8k-3840x2160-7772.png', 'description': 'Monkey D. Luffy dreams of becoming the Pirate King and leads the Straw Hat Pirates on an enormous adventure.', 'abilities': ['Gum-Gum abilities', 'Haki', 'Gear transformations']}, 'tanjiro': {'name': 'Tanjiro Kamado', 'anime': 'Demon Slayer', 'type': 'Character', 'image': 'demon slayer.jpg', 'description': 'Tanjiro Kamado joins the Demon Slayer Corps while searching for a way to help his sister Nezuko.', 'abilities': ['Water Breathing', 'Hinokami Kagura', 'Keen sense of smell']}, 'sung': {'name': 'Sung Jin-Woo', 'anime': 'Solo Leveling', 'type': 'Character', 'image': 'solo leveling.webp', 'description': 'Sung Jin-Woo grows from a weak hunter into a powerful Shadow Monarch capable of commanding an army of shadows.', 'abilities': ['Shadow Extraction', 'Shadow Army', "Ruler's Authority"]}, 'deku': {'name': 'Izuku Midoriya (Deku)', 'anime': 'My Hero Academia', 'type': 'Character', 'image': 'deku.webp', 'description': 'Deku is a determined hero-in-training who inherits One For All and works to master its enormous power.', 'abilities': ['One For All', 'Blackwhip', 'Full Cowling']}, 'naruto': {'name': 'Naruto Uzumaki', 'anime': 'Naruto', 'type': 'Character', 'image': 'naruto.jpg', 'description': 'Naruto Uzumaki grows from an outcast ninja into a legendary shinobi and eventually becomes the Seventh Hokage.', 'abilities': ['Shadow Clone Jutsu', 'Rasengan', 'Sage Mode']}, 'madara': {'name': 'Madara Uchiha', 'anime': 'Naruto', 'type': 'Villain', 'image': 'madara uchiha.jpg', 'description': 'Madara Uchiha is one of the most formidable figures in Naruto and plays a major role in the Fourth Shinobi World War.', 'abilities': ['Sharingan', 'Rinnegan', 'Perfect Susanoo']}, 'muzan': {'name': 'Muzan Kibutsuji', 'anime': 'Demon Slayer', 'type': 'Villain', 'image': 'muzan.webp', 'description': 'Muzan Kibutsuji is the primary antagonist of Demon Slayer and the origin of the demon lineage.', 'abilities': ['Blood Demon Art', 'Regeneration', 'Demon creation']}, 'sukuna': {'name': 'Ryomen Sukuna', 'anime': 'Jujutsu Kaisen', 'type': 'Villain', 'image': 'sukuna.webp', 'description': 'Ryomen Sukuna is known as the King of Curses and is one of the most dangerous supernatural beings in Jujutsu Kaisen.', 'abilities': ['Cleave & Dismantle', 'Malevolent Shrine', 'Reverse Cursed Technique']}, 'pain': {'name': 'Pain', 'anime': 'Naruto', 'type': 'Villain', 'image': 'pain 2.webp', 'description': "Pain uses the Six Paths of Pain through Nagato's power and becomes a major threat to the Hidden Leaf Village.", 'abilities': ['Six Paths of Pain', 'Rinnegan', 'Shinra Tensei']}, 'titan': {'name': 'Titan', 'anime': 'Attack on Titan', 'type': 'Villain', 'image': 'attack on titan.webp', 'description': 'The Titans are giant humanoid beings central to the conflict and mystery of Attack on Titan.', 'abilities': ['Titan transformations', 'Regeneration', 'Giant physical power']}, 'akaza': {'name': 'Akaza', 'anime': 'Demon Slayer', 'type': 'Villain', 'image': 'akaza.avif', 'description': 'Akaza is Upper Rank Three among the Twelve Kizuki and is a powerful martial-arts-focused demon.', 'abilities': ['Destructive Death', 'Compass Needle', 'Extreme regeneration']}, 'obito': {'name': 'Obito Uchiha', 'anime': 'Naruto', 'type': 'Villain', 'image': 'obito.jpg', 'description': 'Obito Uchiha plays a key role in the Fourth Shinobi World War and operates behind several identities.', 'abilities': ['Kamui', 'Sharingan', 'Ten-Tails power']}, 'mr-villain': {'name': 'Mr. Villain', 'anime': 'My Hero Academia', 'type': 'Villain', 'image': 'my hero accadime.jpg', 'description': 'A featured villain card from the My Hero Academia section of your collection.', 'abilities': ['Quirk power', 'Combat ability', 'Villain strategy']}};

// Open one shared detail page for every hero/villain card.
function openCharacter(id) {
    window.location.href = `details.html?id=${encodeURIComponent(id)}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".page-loader");
    window.addEventListener("load", () => {
        setTimeout(() => loader?.classList.add("hide"), 350);
    });

    document.querySelectorAll(".card[data-character]").forEach(card => {
        const id = card.dataset.character;
        card.addEventListener("click", (event) => {
            if (!event.target.closest("button")) openCharacter(id);
        });
        card.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openCharacter(id);
            }
        });
        card.querySelector(".view-card")?.addEventListener("click", () => openCharacter(id));
    });

    // Scroll reveal animation.
    const revealItems = document.querySelectorAll(".reveal, .reveal-card");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, {threshold: 0.12});
    revealItems.forEach((el, index) => {
        if (el.classList.contains("reveal-card")) el.style.transitionDelay = `${(index % 4) * 70}ms`;
        observer.observe(el);
    });

    // Small mouse-follow glow.
    const glow = document.querySelector(".cursor-glow");
    window.addEventListener("pointermove", e => {
        if (glow) {
            glow.style.left = e.clientX + "px";
            glow.style.top = e.clientY + "px";
        }
    });
});
