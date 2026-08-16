document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth Scrolling para sa Navbar at mga Internal Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            
            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Active Navbar Link Highlighter habang nagse-scroll
    const sections = document.querySelectorAll("section, div[id]");
    const navItems = document.querySelectorAll(".navlinks a");

    window.addEventListener("scroll", () => {
        let currentScrollPos = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${sectionId}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    });

});
