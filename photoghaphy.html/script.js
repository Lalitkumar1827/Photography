// Sample data for the website
const galleryData = [
    {
        id: 1,
        title: "Golden Hour Portrait",
        category: "portrait",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "A beautiful portrait captured during golden hour"
    },
    {
        id: 2,
        title: "Mountain Landscape",
        category: "landscape",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Majestic mountain scenery at sunrise"
    },
    {
        id: 3,
        title: "Wedding Ceremony",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Emotional moments from a wedding ceremony"
    },
    {
        id: 4,
        title: "Urban Architecture",
        category: "architecture",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Modern architecture in an urban setting"
    },
    {
        id: 5,
        title: "Wildlife Photography",
        category: "wildlife",
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Wild animals in their natural habitat"
    },
    {
        id: 6,
        title: "Product Showcase",
        category: "commercial",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Professional product photography for commercial use"
    },
    {
        id: 7,
        title: "Family Portrait",
        category: "portrait",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "A joyful family portrait session in the park"
    },
    {
        id: 8,
        title: "Beach Wedding",
        category: "wedding",
        image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Romantic beach wedding ceremony at sunset"
    },
    {
        id: 9,
        title: "Forest Path",
        category: "landscape",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description: "Serene forest path in autumn colors"
    }
];

const servicesData = [
    {
        id: 1,
        title: "Portrait Photography",
        icon: "fas fa-camera-retro",
        description: "Professional portrait sessions for individuals, families, and groups in our studio or on location.",
        price: "Starting at $150"
    },
    {
        id: 2,
        title: "Wedding Photography",
        icon: "fas fa-ring",
        description: "Comprehensive wedding coverage to capture every special moment of your big day.",
        price: "Packages from $1,200"
    },
    {
        id: 3,
        title: "Event Photography",
        icon: "fas fa-calendar-alt",
        description: "Corporate events, parties, and special occasions captured with creativity and professionalism.",
        price: "Starting at $200/hour"
    },
    {
        id: 4,
        title: "Commercial Photography",
        icon: "fas fa-building",
        description: "Professional photography for businesses, products, and marketing materials.",
        price: "Custom quotes available"
    },
    {
        id: 5,
        title: "Landscape Photography",
        icon: "fas fa-mountain",
        description: "Breathtaking landscape and nature photography for your home or office.",
        price: "Print sales starting at $50"
    },
    {
        id: 6,
        title: "Photo Editing",
        icon: "fas fa-edit",
        description: "Professional photo editing and retouching services to enhance your images.",
        price: "Starting at $25/image"
    }
];

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeRegisterModal = document.getElementById('closeRegisterModal');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const contactForm = document.getElementById('contactForm');
const galleryContainer = document.getElementById('gallery-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const viewAllServicesBtn = document.querySelector('a[href="#all-services"]');

// Initialize the website
function init() {
    // Load gallery
    loadGallery();
    
    // Load services
    loadServices();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up modal events
    setupModals();
    
    // Set up form submissions
    setupForms();
}

// Load gallery content
function loadGallery() {
    galleryContainer.innerHTML = '';
    
    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.category}`;
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        galleryContainer.appendChild(galleryItem);
    });
}

// Load services content
function loadServices() {
    const servicesContainer = document.querySelector('#services-page .services-grid');
    if (servicesContainer) {
        servicesContainer.innerHTML = '';
        
        servicesData.forEach(service => {
            const serviceCard = document.createElement('div');
            serviceCard.className = 'service-card';
            serviceCard.innerHTML = `
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="service-price">${service.price}</div>
            `;
            servicesContainer.appendChild(serviceCard);
        });
    }
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter gallery
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
        });
    });
    
    // Load more button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real application, this would load more items from an API
            alert('Loading more images... (This is a demo)');
        });
    }
    
    // View all services button
    if (viewAllServicesBtn) {
        viewAllServicesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showServicesPage();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Filter gallery by category
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Show services page
function showServicesPage() {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show services page sections
    document.getElementById('all-services').style.display = 'block';
    document.getElementById('services-page').style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Set up modal functionality
function setupModals() {
    // Login modal
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });
    
    closeLoginModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
    
    // Register modal
    registerBtn.addEventListener('click', () => {
        registerModal.style.display = 'flex';
    });
    
    closeRegisterModal.addEventListener('click', () => {
        registerModal.style.display = 'none';
    });
    
    // Switch between login and register modals
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'flex';
    });
    
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'none';
        loginModal.style.display = 'flex';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
}

// Set up form submissions
function setupForms() {
    // Login form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // In a real application, you would send this to a backend
        console.log('Login attempt:', { email, password });
        
        // Simulate successful login
        alert('Login successful! (This is a demo)');
        loginModal.style.display = 'none';
        loginForm.reset();
    });
    
    // Register form
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // In a real application, you would send this to a backend
        console.log('Registration attempt:', { name, email, password });
        
        // Simulate successful registration
        alert('Registration successful! (This is a demo)');
        registerModal.style.display = 'none';
        registerForm.reset();
    });
    
    // Contact form
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this to a backend
        console.log('Contact form submission:', { name, email, service, message });
        
        // Simulate successful submission
        alert('Thank you for your message! We will get back to you soon. (This is a demo)');
        contactForm.reset();
    });
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', init);