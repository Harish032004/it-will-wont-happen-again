// Smooth fade-in or any future animations (currently not required for static hero)
console.log("Hero Section Loaded");



// Optional scroll effect — highlight timeline items on scroll
document.addEventListener("scroll", () => {
    const items = document.querySelectorAll('.timeline-item');
    const trigger = window.innerHeight * 0.85;
  
    items.forEach(item => {
      const top = item.getBoundingClientRect().top;
      if (top < trigger) {
        item.classList.add('active');
      }
    });
  });

  

  // JavaScript to trigger animation on scroll
window.addEventListener('scroll', () => {
    const moments = document.querySelectorAll('.moment');
    moments.forEach(moment => {
      const momentPosition = moment.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (momentPosition < windowHeight - 50) {
        moment.classList.add('active');
      }
    });
  });

  


  // JavaScript for scroll animation effect
window.addEventListener('scroll', () => {
    const specialList = document.querySelector('.special-list');
    const specialPosition = specialList.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
  
    if (specialPosition < windowHeight - 50) {
      specialList.classList.add('active');
    }
  });

  

  // Optional scroll reveal effect
window.addEventListener('scroll', () => {
    const finalSection = document.querySelector('.final-words-container');
    const position = finalSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
  
    if (position < screenHeight - 50) {
      finalSection.classList.add('fade-in');
    }
  });

  
  function startMusic() {
    const song = document.getElementById("friendship-song");
    song.play();
    alert("Nanbiye 💖🎶")
  }
  