/**
 * SOLUNET INFORMATIQUE - JavaScript personnalisé
 * Gestion des interactions et animations du site
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Animation de la navbar au scroll
    const navbar = document.getElementById('mainNav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    // Animation des statistiques au scroll
    const stats = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        stats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !stat.classList.contains('animated')) {
                stat.classList.add('animated');
                animateValue(stat, 0, parseInt(stat.textContent), 2000);
            }
        });
    };
    
    // Animation des statistiques de satisfaction
    const satisfactionStats = document.querySelectorAll('.satisfaction-stat .stat-number');
    const animateSatisfactionStats = () => {
        satisfactionStats.forEach(stat => {
            const rect = stat.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !stat.classList.contains('animated')) {
                stat.classList.add('animated');
                const text = stat.textContent;
                if (text.includes('%')) {
                    animateValue(stat, 0, parseInt(text), 1500);
                } else if (text.includes('/')) {
                    // Pour les notes comme 4.9/5
                    const value = parseFloat(text.split('/')[0]);
                    animateValue(stat, 0, value * 10, 1500, (current) => {
                        return (current / 10).toFixed(1) + '/5';
                    });
                } else if (text.includes('h')) {
                    // Pour les délais comme 24h
                    const value = parseInt(text);
                    animateValue(stat, 0, value, 1500, (current) => {
                        return current + 'h';
                    });
                }
            }
        });
    };
    
    // Fonction d'animation des valeurs
    function animateValue(element, start, end, duration, formatter = null) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            
            if (formatter) {
                element.textContent = formatter(Math.floor(current));
            } else {
                element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    }
    
    // Observer pour les animations au scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    // Observer les éléments à animer
    document.querySelectorAll('.service-card, .team-section .card').forEach(el => {
        observer.observe(el);
    });
    
    // Observer pour les statistiques de satisfaction
    const satisfactionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSatisfactionStats();
            }
        });
    }, { threshold: 0.5 });
    
    // Observer la section avis clients
    const testimonialsSection = document.querySelector('.testimonials-section');
    if (testimonialsSection) {
        satisfactionObserver.observe(testimonialsSection);
    }
    
    // Gestion du formulaire de contact
    const contactForm = document.querySelector('form[action="#contact"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validation basique
            if (!data.name || !data.email || !data.message) {
                showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
                return;
            }
            
            // Simulation d'envoi (remplacer par votre logique d'envoi)
            showNotification('Message envoyé ! Nous vous répondrons dans les plus brefs délais.', 'success');
            this.reset();
        });
    }
    
    // Système de notifications
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
        notification.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-dismiss après 5 secondes
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animation des cartes de services au hover
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Lazy loading pour les images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Gestion du menu mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Fermer le menu mobile quand on clique sur un lien
        document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
    
    // Animation des icônes au hover
    document.querySelectorAll('.service-card .fas, .service-card .fab').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Détection de la préférence de réduction de mouvement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        // Désactiver les animations si l'utilisateur préfère moins de mouvement
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    }
    
    // Initialisation des animations
    animateStats();
    window.addEventListener('scroll', animateStats);
    
    // Console log pour debug
    console.log('SOLUNET INFORMATIQUE - Site web chargé avec succès !');

    // Génération dynamique de la grille de vente de matériel (36 images)
    const gridContainer = document.querySelector('.vente-materiel-grid');
    if (gridContainer) {
        let html = '';
        for (let i = 1; i <= 36; i++) {
            html += `
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm border-0 hover-lift">
                        <img src="packages/site_solunet/Resources/Public/img_illustration/${i}.jpg" 
                             class="card-img-top" 
                             alt="Matériel informatique #${i}" 
                             style="height: 180px; object-fit: cover;"
                             onerror="this.onerror=null; this.src='packages/site_solunet/Resources/Public/img_illustration/1.jpg'; this.alt='Image temporairement indisponible';">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">Matériel informatique #${i}</h5>
                            <p class="card-text text-muted">Découvrez ce produit disponible chez SOLUNET INFORMATIQUE.</p>
                            <a href="contact.html" class="btn btn-primary mt-auto"><i class="fas fa-paper-plane me-2"></i>Demander un devis</a>
                        </div>
                    </div>
                </div>
            `;
        }
        gridContainer.innerHTML = html;
        
        // Vérification et correction des images après chargement
        setTimeout(() => {
            const images = gridContainer.querySelectorAll('img');
            images.forEach((img, index) => {
                img.addEventListener('error', function() {
                    console.log(`Image ${index + 1} non trouvée, utilisation de l'image de remplacement`);
                    this.src = 'packages/site_solunet/Resources/Public/img_illustration/1.jpg';
                    this.alt = 'Image temporairement indisponible';
                });
            });
        }, 1000);
    }

    // Lightbox pour afficher un matériel en grand écran
    function createLightbox(imgSrc, altText) {
        // Supprimer toute lightbox existante
        const oldBox = document.getElementById('solunet-lightbox');
        if (oldBox) oldBox.remove();

        // Créer l'overlay
        const overlay = document.createElement('div');
        overlay.id = 'solunet-lightbox';
        overlay.style.position = 'fixed';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(0,0,0,0.85)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = 99999;
        overlay.style.cursor = 'zoom-out';

        // Créer l'image
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = altText;
        img.style.maxWidth = '90vw';
        img.style.maxHeight = '90vh';
        img.style.borderRadius = '1rem';
        img.style.boxShadow = '0 0 40px rgba(0,0,0,0.5)';
        img.style.background = '#fff';

        // Bouton de fermeture
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '30px';
        closeBtn.style.right = '40px';
        closeBtn.style.fontSize = '3rem';
        closeBtn.style.color = '#fff';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.zIndex = 100000;
        closeBtn.setAttribute('aria-label', 'Fermer');

        closeBtn.onclick = overlay.onclick = function(e) {
            if (e.target === overlay || e.target === closeBtn) {
                overlay.remove();
            }
        };

        overlay.appendChild(img);
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
    }

    // Ajout de l'événement sur les images de la grille vente-materiel
    function bindLightboxToVenteMateriel() {
        const gridContainer = document.querySelector('.vente-materiel-grid');
        if (gridContainer) {
            gridContainer.addEventListener('click', function(e) {
                const cardImg = e.target.closest('.card-img-top');
                if (cardImg) {
                    createLightbox(cardImg.src, cardImg.alt);
                }
            });
        }
    }

    bindLightboxToVenteMateriel();

    // Loader d'attente
    const loader = document.createElement('div');
    loader.id = 'solunet-loader';
    loader.innerHTML = '<div class="spinner" role="status" aria-label="Chargement du site"></div>';
    document.body.appendChild(loader);
    window.addEventListener('load', function() {
        setTimeout(() => loader.style.opacity = '0', 300);
        setTimeout(() => loader.remove(), 800);
    });

    // Scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.setAttribute('aria-label', 'Remonter en haut de page');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Amélioration du lazy loading (HTML natif)
    document.querySelectorAll('img').forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // Accessibilité : focus visible sur navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('focus', function() {
            this.classList.add('focus-visible');
        });
        link.addEventListener('blur', function() {
            this.classList.remove('focus-visible');
        });
    });

    // Mode Sombre/Clair
    function initThemeToggle() {
        // Créer le bouton toggle
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle ms-2';
        themeToggle.setAttribute('aria-label', 'Changer de thème');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        
        // Ajouter dans la navbar
        const navbarNav = document.querySelector('.navbar-nav');
        if (navbarNav) {
            const li = document.createElement('li');
            li.className = 'nav-item d-flex align-items-center';
            li.appendChild(themeToggle);
            navbarNav.appendChild(li);
        }
        
        // Charger la préférence sauvegardée
        const savedTheme = localStorage.getItem('solunet-theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeIcon(savedTheme);
        }
        
        // Gestion du clic
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('solunet-theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Animation de transition
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
    
    function updateThemeIcon(theme) {
        const icon = document.querySelector('.theme-toggle i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    // Barre de progression de lecture
    function initReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    // Fonctionnalité de recherche FAQ
    function initFAQSearch() {
        const searchInput = document.getElementById('faqSearch');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const accordionItems = document.querySelectorAll('.accordion-item');
                
                accordionItems.forEach(item => {
                    const question = item.querySelector('.accordion-button').textContent.toLowerCase();
                    const answer = item.querySelector('.accordion-body').textContent.toLowerCase();
                    
                    if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                        item.style.display = 'block';
                        // Mettre en surbrillance les résultats
                        if (searchTerm.length > 2) {
                            highlightText(item, searchTerm);
                        }
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Afficher/masquer les catégories vides
                const categories = document.querySelectorAll('.faq-category');
                categories.forEach(category => {
                    const visibleItems = category.querySelectorAll('.accordion-item[style="display: block"]');
                    if (visibleItems.length === 0 && searchTerm.length > 0) {
                        category.style.display = 'none';
                    } else {
                        category.style.display = 'block';
                    }
                });
            });
        }
    }
    
    function highlightText(element, searchTerm) {
        const question = element.querySelector('.accordion-button');
        const answer = element.querySelector('.accordion-body');
        
        // Supprimer les anciennes surbrillances
        question.innerHTML = question.innerHTML.replace(/<mark class="highlight">(.*?)<\/mark>/g, '$1');
        answer.innerHTML = answer.innerHTML.replace(/<mark class="highlight">(.*?)<\/mark>/g, '$1');
        
        // Ajouter les nouvelles surbrillances
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        question.innerHTML = question.innerHTML.replace(regex, '<mark class="highlight">$1</mark>');
        answer.innerHTML = answer.innerHTML.replace(regex, '<mark class="highlight">$1</mark>');
    }
    
    // Initialiser les nouvelles fonctionnalités
    initThemeToggle();
    initReadingProgress();
    initFAQSearch();
});

// Styles CSS pour les animations
const style = document.createElement('style');
style.textContent = `
    .navbar-scrolled {
        background: rgba(0, 123, 255, 0.95) !important;
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card, .team-section .card {
        opacity: 0;
        transform: translateY(30px);
    }
    
    .service-card.animate-in, .team-section .card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style); 