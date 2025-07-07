document.addEventListener("DOMContentLoaded", function () {
  const content = {
    home: `
      <div class="main-section mb-5">
        <h1 id="show"></h1>
        <p>Soy un desarrollador y diseñador Full-Stack creativo, reconocido por mi habilidad para transformar ideas en experiencias digitales impactantes. Mi pasión por el desarrollo y el diseño web me permite combinar estética y funcionalidad para crear soluciones visuales y tecnológicas que conectan con las personas.</p>
        <button class="btn btn-outline-dark rounded-pill download-btn mt-3">
          <i class="fa fa-download"></i> Descargar CV
        </button>
      </div>
      
      <div class="row g-4" id="cardsContainer"></div>
    `,
    about: `
      <div class="main-section">
        <h1 id="show"></h1>
        <p>Hello! I’m Arya, a self-taught & award-winning Web Designer & UI Developer with over Seven years of experience. I started designing in my childhood room and became a pro working with renowned tech agencies.</p>
        <p>I love crafting intuitive and impactful digital experiences that connect with users around the world.</p>
      </div>
    `,
    services: `
      <div class="main-section">
        <h1 id="show"></h1>
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

  const cardsInfo = [
    {
      image: "assets/img/website-rumbo.png",
      creationDate: "2020",
      title: "Rumbo",
      description: "No Responsive",
      technologies: ["HTML", "CSS"],
      link: "https://juansh13.github.io/Rumbo-Landign-Page/",
    },
    {
      image: "assets/img/website-construction-company-responsive.png",
      creationDate: "2020",
      title: "Construction Company",
      description: "Responsive",
      technologies: ["HTML", "CSS"],
      link: "https://juansh13.github.io/Construction-Company-Responsive-Website/",
    },
    {
      image: "assets/img/website-pets-app.png",
      creationDate: "2020",
      title: "Pets App",
      description: "Mobile App",
      technologies: ["HTML", "CSS", "Javascript", "PHP", "MySql"],
      link: "https://github.com/JuanSh13/pets-mobile_application",
    },
    {
      image: "assets/img/website-beraw.png",
      creationDate: "2022",
      title: "Beraw",
      description: "Responsive",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://juansh13.github.io/Beraw/",
    },
    {
      image: "assets/img/website-clothing-shop.png",
      creationDate: "2022",
      title: "Clothing Shop",
      description: "Responsive",
      technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySql"],
      link: "https://github.com/JuanSh13/clothing_store",
    },
    {
      image: "assets/img/website-kfc-responsive.png",
      creationDate: "2023",
      title: "Kentucky Fried Chicken",
      description: "Responsive",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://juansh13.github.io/KFC-Responsive/",
    },
    {
      image: "assets/img/website-google.png",
      creationDate: "2023",
      title: "Google",
      description: "No Responsive",
      technologies: ["HTML", "CSS"],
      link: "https://juansh13.github.io/Google/",
    },
    {
      image: "assets/img/website-wikipedia.png",
      creationDate: "2023",
      title: "Wikipedia",
      description: "No Responsive",
      technologies: ["HTML", "CSS"],
      link: "https://juansh13.github.io/Wikipedia/",
    },
    {
      image: "assets/img/website-yardsale.png",
      creationDate: "2023",
      title: "Yard Sale",
      description: "Responsive",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://juansh13.github.io/YardSale-JS/",
    },
    {
      image: "assets/img/website-coffe-shop.png",
      creationDate: "2023",
      title: "Coffe Shop",
      description: "No Responsive",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://juansh13.github.io/Coffe-Shop-Responsive/",
    },
    {
      image: "assets/img/website-yardsale-angular.png",
      creationDate: "2023",
      title: "Yard Sale Angular",
      description: "Responsive",
      technologies: ["Angular", "SASS"],
      link: "https://yardsale-angular.netlify.app",
    },
    {
      image: "assets/img/website-batatabit.png",
      creationDate: "2024",
      title: "Batatabit",
      description: "Responsive",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://juansh13.github.io/Batatabit/",
    },
    {
      image: "assets/img/website-jungle.png",
      creationDate: "2024",
      title: "Jungle",
      description: "Responsive",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://juansh13.github.io/Jungle/",
    },
    {
      image: "assets/img/website-fruits.png",
      creationDate: "2024",
      title: "Fruits",
      description: "Responsive",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://juansh13.github.io/Fruits/",
    },
  ];

  function loadSection(section) {
    mainContent.innerHTML =
      content[section] ||
      "<div class='main-section'><p>Section not found</p></div>";

    updateActiveNav(section);

    if (section === "home") {
      animateText(
        "Desarrollador Web & Diseñador IU.",
        document.getElementById("show")
      );
      renderCards();
    } else if (section === "about") {
      animateText("About Me.", document.getElementById("show"));
      renderCards();
    } else if (section === "services") {
      animateText("My Services.", document.getElementById("show"));
      renderCards();
    }
  }

  function updateActiveNav(section) {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("fw-bold", "active");
    });
    const activeLink = document.getElementById("nav-" + section);
    if (activeLink) {
      activeLink.classList.add("fw-bold", "active");
    }
  }

  function animateText(text, element) {
    if (!element) return;
    let index = 0;
    const interval = setInterval(() => {
      element.innerHTML = text.substring(0, index + 1);
      index++;
      if (index === text.length) clearInterval(interval);
    }, 50);
  }

  function renderCards() {
    const container = document.getElementById("cardsContainer");
    if (!container) return;

    cardsInfo.forEach((project) => {
      const isGitHub = project.link.includes("github.com");
      const onlineLink = isGitHub ? "#" : project.link;
      const githubLink = isGitHub ? project.link : "#";

      const techIcons = project.technologies
        .map((tech) => `<span class="badge bg-dark me-1">${tech}</span>`)
        .join("");

      const card = `
        <div class="col-md-6">
          <div class="card shadow-sm rounded-4 border-0 h-100">
            <img src="${
              project.image
            }" class="card-img-top rounded-top-4" alt="${
        project.title
      }" style="object-fit: cover; height: 200px" />
            <div class="card-body">
              <h5 class="card-title fw-bold">${
                project.title
              } <small class="text-muted ms-2">${
        project.creationDate
      }</small></h5>
              <div class="mb-2">${techIcons}</div>
              <p class="card-text text-muted">${project.description}</p>
              <div class="d-flex justify-content-between mt-3">
                <a href="${onlineLink}" target="_blank" class="btn btn-outline-dark rounded-pill ${
        isGitHub ? "disabled" : ""
      }">
                  <i class="fa fa-globe me-2"></i> Ver en línea
                </a>
                <a href="${githubLink}" target="_blank" class="btn btn-dark rounded-pill ${
        !isGitHub ? "disabled" : ""
      }">
                  <i class="fab fa-github me-2"></i> Código fuente
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  }

  // Listeners nav
  document
    .getElementById("nav-home")
    ?.addEventListener("click", () => loadSection("home"));
  document
    .getElementById("nav-about")
    ?.addEventListener("click", () => loadSection("about"));
  document
    .getElementById("nav-services")
    ?.addEventListener("click", () => loadSection("services"));

  // Load default
  loadSection("home");
});
