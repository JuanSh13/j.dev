document.addEventListener("DOMContentLoaded", function () {
  let show = document.getElementById("show-text");

  function animateText(text, element) {
    let index = 0;
    let animationIntervale = setInterval(() => {
      if (index >= text.length) {
        clearInterval(animationIntervale);
      } else {
        element.innerHTML = text.substring(0, index + 1);
        index++;
      }
    }, 100);
  }

  animateText("Desarrollador Web & Diseñador IU.");

  const content = {
    home: `
            <div class="main-section mb-5">
              <h1 id="show"></h1>
              <p>Soy un  desarrollador y diseñador Full-Stack creativo, reconocido por mi habilidad para transformar ideas en experiencias digitales impactantes. Mi pasión por el desarrollo y el diseño web me permite combinar estética y funcionalidad para crear soluciones visuales y tecnológicas que conectan con las personas.</p>
              <button class="download-btn mt-3"><i class="fa fa-download"></i> Download CV</button>
            </div>
            <div class="row g-4">
              <!-- Card 1 -->
              <div class="col-md-5">
                <div class="card shadow-sm rounded-4 border-0 h-100">
                  <img
                    src="https://via.placeholder.com/600x300"
                    class="card-img-top rounded-top-4"
                    alt="Project Image"
                    style="object-fit: cover; height: 200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title fw-bold">Landing Page - Fitness App</h5>
                    <div class="mb-3">
                      <span class="badge bg-dark me-1">HTML</span>
                      <span class="badge bg-dark me-1">CSS</span>
                      <span class="badge bg-dark me-1">Bootstrap</span>
                      <span class="badge bg-dark me-1">JavaScript</span>
                    </div>
                    <p class="card-text text-muted">
                      Sitio web responsivo para una aplicación de fitness, con animaciones suaves, CTA claro y enfoque en experiencia de usuario.
                    </p>
                    <div class="d-flex justify-content-between mt-3">
                      <a href="https://tusitio.com/proyecto" target="_blank" class="btn btn-outline-dark rounded-pill">
                        <i class="fa fa-globe me-2"></i> Ver en línea
                      </a>
                      <a href="https://github.com/usuario/repositorio" target="_blank" class="btn btn-dark rounded-pill">
                        <i class="fab fa-github me-2"></i> Código fuente
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card 2 -->
              <div class="col-md-5">
                <div class="card shadow-sm rounded-4 border-0 h-100">
                  <img
                    src="https://via.placeholder.com/600x300"
                    class="card-img-top rounded-top-4"
                    alt="Project Image"
                    style="object-fit: cover; height: 200px"
                  />
                  <div class="card-body">
                    <h5 class="card-title fw-bold">Dashboard de Administración</h5>
                    <div class="mb-3">
                      <span class="badge bg-dark me-1">React</span>
                      <span class="badge bg-dark me-1">Tailwind</span>
                      <span class="badge bg-dark me-1">Firebase</span>
                    </div>
                    <p class="card-text text-muted">
                      Panel de control moderno con autenticación, gráficas y administración de usuarios en tiempo real.
                    </p>
                    <div class="d-flex justify-content-between mt-3">
                      <a href="https://tusitio.com/dashboard" target="_blank" class="btn btn-outline-dark rounded-pill">
                        <i class="fa fa-globe me-2"></i> Ver en línea
                      </a>
                      <a href="https://github.com/usuario/dashboard-app" target="_blank" class="btn btn-dark rounded-pill">
                        <i class="fab fa-github me-2"></i> Código fuente
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
