// ✅ 1. Smooth Scrolling (ONLY for same-page anchor links)
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        const targetId = this.getAttribute("href");

        // Apply smooth scrolling only for same-page (#) links
        if (targetId.startsWith("#") && document.querySelector(targetId)) {
            event.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



// ✅ 3. Copy UPI ID Button (For Donations)
document.addEventListener("DOMContentLoaded", function() {
    const donationSection = document.querySelector(".donation-info");
    if (donationSection) {
        const upiElement = document.createElement("p");
        upiElement.innerHTML = `<strong>UPI ID:</strong> <span id="upi-text">saadmir@fam</span> 
                                <button id="copy-upi">Copy</button>`;
        donationSection.appendChild(upiElement);

        document.getElementById("copy-upi").addEventListener("click", function() {
            navigator.clipboard.writeText("saadmir@fam");
            alert("✅ UPI ID copied to clipboard!");
        });
    }
});

// ✅ 4. Auto-Update Footer Year
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("footer p").innerHTML = `© ${new Date().getFullYear()} ShulkerCode. All Rights Reserved.`;
});

// ✅ 5. Fade-in Animation for Sections on Scroll
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            section.classList.add("fade-in");
        }
    });
});

// ✅ 6. Contact Form Validation (Prevents Invalid Submissions)
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            if (!email.includes("@") || message.length < 5) {
                event.preventDefault();
                alert("⚠️ Please enter a valid email and a message of at least 5 characters.");
            }
        });
    }
});

// ✅ 7. Page Load Animation
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("page-loaded");
});
