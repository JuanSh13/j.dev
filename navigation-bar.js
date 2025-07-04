document.addEventListener("DOMContentLoaded", function () {
  const content = {
    home: `
            <div class="main-section">
              <p>Hi there! 👋</p>
              <h1>Creative Web & UI Designer.</h1>
              <p>I am a visionary creative designer, known for my ability to turn concepts into captivating visual narratives. My deep passion for the world of design allows me to craft compelling stories through my artistic ingenuity.</p>
              <button class="download-btn mt-3"><i class="fa fa-download"></i> Download CV</button>
            </div>
          `,
    about: `
            <div class="main-section">
              <h1>About Me</h1>
              <p>Hello! I’m Arya, a self-taught & award-winning Web Designer & UI Developer with over Seven years of experience. I started designing in my childhood room and became a pro working with renowned tech agencies.</p>
              <p>I love crafting intuitive and impactful digital experiences that connect with users around the world.</p>
            </div>
          `,
    services: `
            <div class="main-section">
              <h1>My Services</h1>
              <ul>
                <li>✅ Web Design & Development</li>
                <li>✅ UI/UX Prototyping</li>
                <li>✅ Branding & Visual Identity</li>
                <li>✅ Responsive/Mobile Design</li>
              </ul>
            </div>
          `,
  };

  const mainContent = document.getElementById("main-content");

  function loadSection(section) {
    mainContent.innerHTML =
      content[section] ||
      "<div class='main-section'><p>Section not found</p></div>";
    updateActiveNav(section);
  }

  function updateActiveNav(section) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("fw-bold", "active");
    });
    document
      .getElementById("nav-" + section)
      .classList.add("fw-bold", "active");
  }

  // Cargar HOME por defecto
  loadSection("home");

  // Asignar eventos
  document
    .getElementById("nav-home")
    .addEventListener("click", () => loadSection("home"));
  document
    .getElementById("nav-about")
    .addEventListener("click", () => loadSection("about"));
  document
    .getElementById("nav-services")
    .addEventListener("click", () => loadSection("services"));
});
