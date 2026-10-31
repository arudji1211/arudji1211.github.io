// ==================== HELPERS ====================
const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => [...parent.querySelectorAll(sel)];

// ==================== RENDER: PROFILE ====================
function renderProfile(p) {
  $("#brand-name").textContent = p.title;
  $("#brand-subtitle").textContent = p.subtitle;

  const logoImg = $("#logo-img");
  logoImg.src = p.logo;
  logoImg.onerror = () => { logoImg.style.display = "none"; };

  const profileImg = $("#profile-img");
  profileImg.src = p.photo;
  profileImg.alt = `Foto ${p.name}`;
  profileImg.onerror = () => {
    profileImg.src = "https://placehold.co/192x192/006d45/ffffff?text=Foto";
  };

  $("#badge").textContent = p.badge;
  $("#profile-name").textContent = p.name;
  $("#profile-role").textContent = p.role;

  // Vision
  const visionBox = $("#vision-box");
  visionBox.querySelector("h3").innerHTML =
    `<i data-lucide="${p.vision.icon}" class="w-5 h-5"></i> ${p.vision.title}`;
  visionBox.querySelector("p").textContent = p.vision.text;

  // Mission
  const missionBox = $("#mission-box");
  missionBox.querySelector("h3").innerHTML =
    `<i data-lucide="${p.mission.icon}" class="w-5 h-5"></i> ${p.mission.title}`;
  missionBox.querySelector("ul").innerHTML = p.mission.items
    .map((m) => `<li>${m}</li>`)
    .join("");
}

// ==================== RENDER: PROGRAM ====================
function renderProgram(pr) {
  $("#program-label").textContent = pr.label;
  $("#program-title").textContent = pr.title;
  $("#program-details").innerHTML = pr.details
    .map(
      (d) => `
      <div>
        <p class="text-uimlight">${d.label}</p>
        <p class="font-bold">${d.value}</p>
      </div>`
    )
    .join("");
}

// ==================== RENDER: QUICK STATS ====================
function renderQuickStats(stats) {
  $("#quick-stats").innerHTML = stats
    .map(
      (s) => `
      <div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition">
        <p class="text-3xl font-heading font-bold text-uim">${s.value}</p>
        <p class="text-xs text-gray-500 uppercase tracking-wider mt-1">${s.label}</p>
      </div>`
    )
    .join("");
}

// ==================== RENDER: GENERIC PARAGRAPH SECTION ====================
function renderParagraphSection(id, data) {
  const section = $(`#${id}`);
  if (!section) return;

  const header = section.querySelector(".section-header");
  if (header) {
    header.querySelector("[data-icon]").setAttribute("data-lucide", data.icon);
    header.querySelector("[data-title]").textContent = data.title;
  }

  const prose = section.querySelector(".prose");
  if (!prose) return;

  let html = data.paragraphs.map((p) => `<p>${p}</p>`).join("");

  if (data.list) {
    html += `<ol class="list-decimal list-inside space-y-2 ml-4">${data.list
      .map((i) => `<li>${i}</li>`)
      .join("")}</ol>`;
  }
  if (data.closing) {
    html += `<p>${data.closing}</p>`;
  }

  prose.innerHTML = html;
}

// ==================== RENDER: DESAIN ====================
function renderDesain(d) {
  const section = $("#desain");
  if (!section) return;

  const header = section.querySelector(".section-header");
  header.querySelector("[data-icon]").setAttribute("data-lucide", d.icon);
  header.querySelector("[data-title]").textContent = d.title;

  const colorMap = {
    green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-700" },
    red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700" },
    yellow: { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700" }
  };

  section.querySelector(".components-grid").innerHTML = d.components
    .map((c) => {
      const cm = colorMap[c.color] || colorMap.green;
      return `
        <div class="p-5 ${cm.bg} rounded-xl border ${cm.border} text-center">
          <div class="text-3xl mb-2">${c.emoji}</div>
          <h3 class="font-bold ${cm.text}">${c.title}</h3>
          <p class="text-sm text-gray-600 mt-1">${c.description}</p>
        </div>`;
    })
    .join("");

  section.querySelector(".prose").innerHTML = `<p>${d.howItWorks}</p>`;
}

// ==================== RENDER: ASESMEN ====================
function renderAsesmen(a) {
  const section = $("#asesmen");
  if (!section) return;

  const header = section.querySelector(".section-header");
  header.querySelector("[data-icon]").setAttribute("data-lucide", a.icon);
  header.querySelector("[data-title]").textContent = a.title;

  section.querySelector("tbody").innerHTML = a.rows
    .map(
      (r, i) => `
      <tr class="${i % 2 === 1 ? "bg-gray-50" : ""}">
        <td class="p-3 border">${r.source}</td>
        <td class="p-3 border">${r.who}</td>
        <td class="p-3 border">${r.weight}</td>
        <td class="p-3 border">${r.instrument}</td>
      </tr>`
    )
    .join("");

  section.querySelector(".formula").textContent = a.formula;
  section.querySelector(".prose").innerHTML = `<p>${a.deepLearning}</p>`;
}

// ==================== RENDER: RTL TIMELINE ====================
function renderRTL(rtl) {
  $("#rtl-title").textContent = rtl.title;

  const timeline = $("#rtl .timeline");
  if (!timeline) return;

  timeline.innerHTML = rtl.items
    .map(
      (item) => `
      <div class="timeline-item">
        <h4 class="font-bold text-uim text-sm mb-1">${item.title}</h4>
        <p class="text-sm text-gray-600">${item.text}</p>
      </div>`
    )
    .join("");
}

// ==================== RENDER: DOKUMENTASI ====================
function renderDokumentasi(d) {
  const section = $("#dokumentasi");
  if (!section) return;

  const header = section.querySelector(".section-header");
  header.querySelector("[data-icon]").setAttribute("data-lucide", d.icon);
  header.querySelector("[data-title]").textContent = d.title;

  section.querySelector(".description").textContent = d.description;

  const colorMap = {
    red: { bg: "bg-red-50", text: "text-red-500" },
    blue: { bg: "bg-blue-50", text: "text-blue-500" },
    green: { bg: "bg-green-50", text: "text-green-500" },
    purple: { bg: "bg-purple-50", text: "text-purple-500" }
  };

  section.querySelector(".docs-grid").innerHTML = d.items
    .map((item) => {
      const cm = colorMap[item.color] || colorMap.blue;
      return `
        <a href="${item.href}" target="_blank" rel="noopener" class="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
          <div class="${cm.bg} h-40 flex items-center justify-center border-b border-gray-100">
            <i data-lucide="${item.icon}" class="w-16 h-16 ${cm.text} group-hover:scale-110 transition"></i>
          </div>
          <div class="p-4 flex justify-between items-center">
            <div>
              <p class="font-bold text-gray-800">${item.title}</p>
              <p class="text-xs text-gray-500">${item.subtitle}</p>
            </div>
            <i data-lucide="external-link" class="w-5 h-5 text-gray-400"></i>
          </div>
        </a>`;
    })
    .join("");
}

// ==================== RENDER: FOOTER ====================
function renderFooter(f) {
  $("#footer-copy").textContent = f.copyright;
  $("#footer-sub").textContent = f.sub;
}

// ==================== REVEAL ANIMATION ====================
function initReveal() {
  const revealElements = $$(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  revealElements.forEach((el) => observer.observe(el));
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  $$('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = $(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ==================== SECTION NAVIGATION (FLOATING) ====================
function initSectionNav() {
  const sectionIds = [
    "info-program",
    "quick-stats",
    "refleksi",
    "latar-belakang",
    "gagasan",
    "desain",
    "asesmen",
    "hasil",
    "rtl",
    "dokumentasi",
  ];

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const btnPrev = $("#nav-prev");
  const btnNext = $("#nav-next");
  const label = $("#nav-label");
  if (!btnPrev || !btnNext || sections.length === 0) return;

  let currentIndex = 0;

  const updateButtons = () => {
    btnPrev.disabled = currentIndex <= 0;
    btnNext.disabled = currentIndex >= sections.length - 1;

    if (label) {
      const current = sections[currentIndex];
      const titleEl = current.querySelector(
        "[data-title], #program-title, #rtl-title"
      );
      label.textContent = titleEl
        ? titleEl.textContent.trim().slice(0, 22)
        : "";
    }
  };

  const scrollToIndex = (i) => {
    const idx = Math.max(0, Math.min(sections.length - 1, i));
    currentIndex = idx;
    sections[idx].scrollIntoView({ behavior: "smooth", block: "start" });
    updateButtons();
  };

  btnPrev.addEventListener("click", () => scrollToIndex(currentIndex - 1));
  btnNext.addEventListener("click", () => scrollToIndex(currentIndex + 1));

  // Update currentIndex saat user scroll manual
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = sections.indexOf(entry.target);
          if (idx !== -1) {
            currentIndex = idx;
            updateButtons();
          }
        }
      });
    },
    { threshold: 0.4, rootMargin: "-20% 0px -40% 0px" }
  );

  sections.forEach((s) => observer.observe(s));

  updateButtons();
}

// ==================== INIT ====================
function init() {
  const data = window.SITE_DATA;
  if (!data) {
    console.error("SITE_DATA tidak ditemukan. Pastikan data.js dimuat sebelum index.js.");
    return;
  }

  renderProfile(data.profile);
  renderProgram(data.program);
  renderQuickStats(data.quickStats);
  renderParagraphSection("refleksi", data.sections.refleksi);
  renderParagraphSection("latar-belakang", data.sections["latar-belakang"]);
  renderParagraphSection("gagasan", data.sections.gagasan);
  renderDesain(data.sections.desain);
  renderAsesmen(data.sections.asesmen);
  renderParagraphSection("hasil", data.sections.hasil);
  renderRTL(data.rtl);
  renderDokumentasi(data.dokumentasi);
  renderFooter(data.footer);

  if (window.lucide) lucide.createIcons();

  initReveal();
  initSmoothScroll();
  initSectionNav();
}

document.addEventListener("DOMContentLoaded", init);