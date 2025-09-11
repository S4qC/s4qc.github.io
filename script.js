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

// ✅ 8. Load Blogs from blogs.json
async function loadBlogs() {
  try {
    const response = await fetch("blogs.json"); // your JSON file
    const data = await response.json();

    // Detect category from URL hash (example: blog-list.html#Tech)
    let category = window.location.hash.substring(1);
    category = category ? category.charAt(0).toUpperCase() + category.slice(1).toLowerCase() : null;

    const blogList = document.getElementById("blogList");
    const heading = document.getElementById("pageHeading");
    blogList.innerHTML = "";

    if (category && data[category]) {
      // Show only one category
      heading.textContent = `${category}`;
      data[category].forEach(blog => {
        const card = document.createElement("a");
        card.href = `blogs/${blog.id}.html`;   // ✅ fixed link
        card.className = "category-btn";
        card.innerHTML = `<h2>${blog.name}</h2><p>${blog.description}</p>`;
        blogList.appendChild(card);
      });
    } else {
      // Show all categories
      heading.textContent = "Explore Blogs";
      for (const cat in data) {
        const catHeading = document.createElement("h2");
        catHeading.textContent = cat;
        blogList.appendChild(catHeading);

        data[cat].forEach(blog => {
          const card = document.createElement("a");
          card.href = `blogs/${blog.id}.html`;   // ✅ fixed link
          card.className = "category-btn";
          card.innerHTML = `<h2>${blog.name}</h2><p>${blog.description}</p>`;
          blogList.appendChild(card);
        });
      }
    }
  } catch (err) {
    console.error("Error loading blogs:", err);
  }
}

window.addEventListener("hashchange", loadBlogs);
window.addEventListener("DOMContentLoaded", loadBlogs);
