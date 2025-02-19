document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Set animation delay for timeline items
    document.querySelectorAll(".timeline-item").forEach((item, index) => {
      item.style.setProperty("--item-count", index)
    })
  
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
  
    // Observe all timeline items
    document.querySelectorAll(".timeline-item").forEach((item) => {
      observer.observe(item)
    })
  
    // Observe all portfolio items
    document.querySelectorAll(".portfolio-item").forEach((item) => {
      observer.observe(item)
    })
  
    // Observe all skill items
    document.querySelectorAll(".skill-item").forEach((item) => {
      observer.observe(item)
    })
  
    // Observe all highlight items
    document.querySelectorAll(".highlight-item").forEach((item) => {
      observer.observe(item)
    })
  
    // Navbar scroll effect
    let lastScroll = 0
    const navbar = document.querySelector(".navbar")
  
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset
  
      if (currentScroll <= 0) {
        navbar.style.boxShadow = "none"
        return
      }
  
      if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.style.transform = "translateY(-100%)"
      } else {
        // Scrolling up
        navbar.style.transform = "translateY(0)"
        navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
      }
  
      lastScroll = currentScroll
    })
  })
  
  