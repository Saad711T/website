/* ========================================
   0xSaad — Main JavaScript
   Dark/Light mode, Custom Cursor,
   Scroll Animations, Smooth Interactions
   ======================================== */

(function () {
    'use strict';

    // ── Page Loader ──
    function initLoader() {
        var loader = document.getElementById('pageLoader');
        if (!loader) return;
        window.addEventListener('load', function () {
            setTimeout(function () {
                loader.classList.add('loaded');
            }, 400);
        });
    }

    // ── Dark / Light Mode ──
    function initTheme() {
        var toggle = document.getElementById('themeToggle');
        var icon = document.getElementById('themeIcon');
        if (!toggle || !icon) return;

        var saved = localStorage.getItem('theme');
        if (saved === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else if (!saved) {
            // respect system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                icon.classList.replace('fa-moon', 'fa-sun');
            }
        }

        toggle.addEventListener('click', function () {
            var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ── Custom Cursor ──
    function initCursor() {
        var dot = document.getElementById('cursorDot');
        var ring = document.getElementById('cursorRing');
        if (!dot || !ring) return;

        // check for touch device
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            dot.style.display = 'none';
            ring.style.display = 'none';
            return;
        }

        document.body.style.cursor = 'none';

        var mouseX = 0, mouseY = 0;
        var ringX = 0, ringY = 0;

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        });

        // smooth ring follow
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // hover effects
        var hoverElements = document.querySelectorAll('a, button, .post-preview, .project-card, .skill-card, .blog-post');
        hoverElements.forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                dot.classList.add('hover');
                ring.classList.add('hover');
            });
            el.addEventListener('mouseleave', function () {
                dot.classList.remove('hover');
                ring.classList.remove('hover');
            });
        });

        // hide cursor when leaving window
        document.addEventListener('mouseleave', function () {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        });
        document.addEventListener('mouseenter', function () {
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        });
    }

    // ── Scroll Reveal ──
    function initScrollReveal() {
        var reveals = document.querySelectorAll('.reveal');
        if (!reveals.length) return;

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(function (el) {
            observer.observe(el);
        });
    }

    // ── Header Show/Hide on Scroll ──
    function initHeaderScroll() {
        var header = document.getElementById('siteHeader');
        if (!header) return;

        var lastScrollY = 0;
        var ticking = false;

        window.addEventListener('scroll', function () {
            if (!ticking) {
                requestAnimationFrame(function () {
                    var currentScrollY = window.scrollY;
                    if (currentScrollY > lastScrollY && currentScrollY > 100) {
                        header.classList.add('hidden');
                    } else {
                        header.classList.remove('hidden');
                    }
                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // ── Mobile Navigation ──
    function initMobileNav() {
        var menuToggle = document.getElementById('menuToggle');
        var navClose = document.getElementById('navClose');
        var mainNav = document.getElementById('mainNav');
        if (!menuToggle || !mainNav) return;

        menuToggle.addEventListener('click', function () {
            mainNav.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        function closeNav() {
            mainNav.classList.remove('open');
            document.body.style.overflow = '';
        }

        if (navClose) {
            navClose.addEventListener('click', closeNav);
        }

        // close on link click
        var navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(function (link) {
            link.addEventListener('click', closeNav);
        });
    }

    // ── Featured Posts (Home page) ──
    function initFeaturedPosts() {
        var grid = document.getElementById('featured-posts-grid');
        if (!grid || typeof posts === 'undefined') return;

        var html = '';
        posts.forEach(function (post, index) {
            var isFirst = index === 0;
            var dateFormatted = formatDate(post.date);

            html += '<article class="post-preview' + (isFirst ? ' featured' : '') + '">';
            if (post.image) {
                html += '<a href="' + post.slug + '" class="post-image-link">';
                html += '<img src="' + post.image + '" alt="' + post.title + '" class="post-image" loading="lazy">';
                html += '</a>';
            }
            html += '<div class="post-content">';
            html += '<time datetime="' + post.date + '" class="post-date">' + dateFormatted + '</time>';
            html += '<h3 class="post-title"><a href="' + post.slug + '">' + post.title + '</a></h3>';
            html += '<p class="post-excerpt">' + post.excerpt + '</p>';
            html += '<a href="' + post.slug + '" class="read-more">قراءة المزيد <i class="fas fa-arrow-left"></i></a>';
            html += '</div>';
            html += '</article>';

            // after featured, wrap the rest in side stack
            if (isFirst && posts.length > 1) {
                html += '<div class="posts-side-stack">';
            }
        });

        if (posts.length > 1) {
            html += '</div>';
        }

        grid.innerHTML = html;
    }

    function formatDate(dateString) {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('ar-SA', options);
    }

    // ── Copyright Year ──
    function initCopyrightYear() {
        var el = document.getElementById('current-year');
        if (el) {
            el.textContent = new Date().getFullYear();
        }
    }

    // ── Smooth link transitions ──
    function initSmoothTransitions() {
        var links = document.querySelectorAll('a[href]');
        links.forEach(function (link) {
            var href = link.getAttribute('href');
            if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || link.hasAttribute('download') || link.getAttribute('target') === '_blank') return;

            link.addEventListener('click', function (e) {
                e.preventDefault();
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.25s ease';
                setTimeout(function () {
                    window.location.href = href;
                }, 250);
            });
        });

        // fade in on load
        document.body.style.opacity = '0';
        window.addEventListener('load', function () {
            document.body.style.transition = 'opacity 0.35s ease';
            document.body.style.opacity = '1';
        });
    }

    // ── Init Everything ──
    function init() {
        initLoader();
        initTheme();
        initCopyrightYear();
        initMobileNav();
        initHeaderScroll();
        initSmoothTransitions();

        // wait for DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function () {
                initCursor();
                initScrollReveal();
                initFeaturedPosts();
            });
        } else {
            initCursor();
            initScrollReveal();
            initFeaturedPosts();
        }
    }

    init();
})();
