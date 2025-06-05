// Mobile Menu Toggle
const navlines = document.querySelector(".navlines");
const mobileMenu = document.querySelector(".mobile-menu");

navlines.addEventListener("click", () => {
  navlines.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navlines.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const eventsData = [
  {
    id: 1,
    title: "Jazz Night Under the Stars",
    date: "2025-8-15",
    time: "7:00 PM",
    location: "Ayub Park",
    description:
      "Enjoy an evening of smooth jazz performances by renowned artists in the beautiful outdoor setting of Ayub Park.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Food Festival 2025",
    date: "2025-8-20",
    time: "11:00 AM",
    location: "Arid University",
    description:
      "Sample delicious cuisines from around the world at our annual food festival featuring over 50 vendors.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Tech Conference",
    date: "2025-9-05",
    time: "9:00 AM",
    location: "NUST University",
    description:
      "Learn about the latest technological advancements and network with industry leaders at this premier tech event.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Yoga in the Park",
    date: "2025-8-12",
    time: "8:00 AM",
    location: "Ayub Park",
    description:
      "Start your weekend with a rejuvenating yoga session surrounded by nature. All skill levels welcome.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    title: "Art Exhibition",
    date: "2025-8-25",
    time: "6:00 PM",
    location: "City Art Gallery",
    description:
      "Explore contemporary artworks from emerging and established artists in this thought-provoking exhibition.",
    image:
      "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80",
  },
];

function displayEvents(events) {
  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = "";

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}" class="event-image">
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <span><i class="fas fa-calendar-alt"></i> ${event.date}</span>
                    <span><i class="fas fa-clock"></i> ${event.time}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                </div>
                <p class="event-description">${event.description}</p>
                <button class="event-button">Register Now</button>
            </div>
        `;
    eventsContainer.appendChild(eventCard);
  });
}

displayEvents(eventsData);

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

function searchEvents() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredEvents = eventsData.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm) ||
      event.description.toLowerCase().includes(searchTerm) ||
      event.location.toLowerCase().includes(searchTerm)
  );
  displayEvents(filteredEvents);
}

searchButton.addEventListener("click", searchEvents);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    searchEvents();
  }
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  console.log({ name, email, subject, message });

  alert("Thank you for your message! We will get back to you soon.");

  contactForm.reset();
});

document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
