(function () {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("currentYear").textContent = new Date().getFullYear();

        var darkToggle = document.getElementById("darkToggle");
        var themeIcon = document.getElementById("themeIcon");
        var root = document.documentElement;

        var stored = localStorage.getItem("pref-theme");
        if (stored === "dark") {
            root.classList.add("dark");
            darkToggle.setAttribute("aria-pressed", "true");
            themeIcon.textContent = "☀️";
        } else {
            root.classList.remove("dark");
            darkToggle.setAttribute("aria-pressed", "false");
            themeIcon.textContent = "🌙";
        }

        darkToggle.addEventListener("click", function () {
            var isDark = root.classList.toggle("dark");
            darkToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
            themeIcon.textContent = isDark ? "☀️" : "🌙";
            localStorage.setItem("pref-theme", isDark ? "dark" : "light");
        });

        if (window.gsap && window.ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);

            var staggerContainers = document.querySelectorAll("[data-stagger]");
            staggerContainers.forEach(function (el) {
                gsap.fromTo(el, { y: 20, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 0.7, ease: "power2.out", scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            gsap.to(".scroll-cue", { y: 8, repeat: -1, yoyo: true, duration: 0.9, ease: "sine.inOut" });
        }

        const headline = document.querySelector(".hero-headline");
        if (headline) {
            const text = headline.textContent;
            headline.textContent = "";
            text.split("").forEach((char) => {
                const span = document.createElement("span");
                span.textContent = char;
                span.style.display = "inline-block";
                headline.appendChild(span);
            });
            gsap.fromTo(
                headline.querySelectorAll("span"),
                { y: 0 },
                {
                    y: -2,
                    duration: 1,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    stagger: { each: 0.12, repeat: -1 }
                }
            );
        }

        const header = document.querySelector(".site-header");
        const headerHeight = header ? header.offsetHeight : 0;

        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener("click", function (e) {
                const targetId = this.getAttribute("href");
                if (targetId.length > 1) {
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        const targetPos = target.offsetTop - headerHeight;
                        window.scrollTo({ top: targetPos, behavior: "smooth" });
                    }
                }
            });
        });

        document.querySelectorAll('a[target="_blank"]').forEach(function (a) {
            a.setAttribute("rel", "noreferrer noopener");
        });
    });
})();
