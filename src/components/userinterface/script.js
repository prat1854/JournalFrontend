// Handle dropdown menus
function toggleDropdown(menuId) {
    // Close all dropdowns first
    const dropdowns = document.getElementsByClassName("dropdown-content")
    for (const dropdown of dropdowns) {
      if (dropdown.id !== menuId && dropdown.classList.contains("show")) {
        dropdown.classList.remove("show")
      }
    }
  
    // Toggle the clicked dropdown
    document.getElementById(menuId).classList.toggle("show")
  }
  
  // Close dropdowns when clicking outside
  window.onclick = (event) => {
    if (!event.target.matches(".dropbtn")) {
      const dropdowns = document.getElementsByClassName("dropdown-content")
      for (const dropdown of dropdowns) {
        if (dropdown.classList.contains("show")) {
          dropdown.classList.remove("show")
        }
      }
    }
  }
  
  // Search functionality
  document.querySelector(".search-box input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const searchTerm = this.value
      // Implement search functionality here
      console.log("Searching for:", searchTerm)
    }
  })
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
  
  // Add active state to navigation links
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")
    })
  })
  
  // Handle mobile menu for responsive design
  function createMobileMenu() {
    const mobileBreakpoint = 768
    const nav = document.querySelector(".main-nav")
    const navLinks = document.querySelector(".nav-links")
  
    function checkWidth() {
      if (window.innerWidth <= mobileBreakpoint) {
        if (!document.querySelector(".mobile-menu-button")) {
          const menuButton = document.createElement("button")
          menuButton.classList.add("mobile-menu-button")
          menuButton.innerHTML = "☰"
          nav.insertBefore(menuButton, navLinks)
  
          menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("show-mobile")
          })
        }
      } else {
        const menuButton = document.querySelector(".mobile-menu-button")
        if (menuButton) {
          menuButton.remove()
          navLinks.classList.remove("show-mobile")
        }
      }
    }
  
    window.addEventListener("resize", checkWidth)
    checkWidth()
  }
  
  // Initialize mobile menu
  createMobileMenu()
  
  // Add loading state for images
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img")
    images.forEach((img) => {
      img.addEventListener("load", function () {
        this.classList.add("loaded")
      })
    })
  })
  
  