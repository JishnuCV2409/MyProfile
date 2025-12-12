document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    const skillsSection = document.querySelector("#skills");
    const skillItems = skillsSection ? skillsSection.querySelectorAll("ul li") : [];
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            if (entry.target.id === "skills") {
                entry.target.classList.add("revealed");
                skillItems.forEach((item, i) => {
                    item.style.transitionDelay = `${i * 0.12}s`;
                    item.style.opacity = "1";
                    item.style.transform = "translateY(0)";
                });
            }
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12 });
    revealElements.forEach(el => observer.observe(el));
    const themeBtn = document.getElementById("themeBtn");
    const body = document.body;
    const setTheme = mode => {
        if (mode === "dark") {
            body.classList.add("dark");
            if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark");
            if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem("theme", "light");
        }
    };
    setTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");
    if (themeBtn) themeBtn.addEventListener("click", () => {
        setTheme(body.classList.contains("dark") ? "light" : "dark");
        document.body.classList.add("theme-fade");
        setTimeout(() => document.body.classList.remove("theme-fade"), 380);
    });
    const form = document.getElementById("contactForm");
    if (form) form.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            alert("Please fill out all fields.");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            alert("Please enter a valid email address.");
            return;
        }
        alert("Thanks! Your message has been received.");
        form.reset();
    });
});
