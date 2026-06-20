const translations = {
  zh: {
    documentTitle: "郑维则 · Weize Zheng",
    skip: "跳至主要内容",
    navProfile: "简介",
    navExperience: "经历",
    navProjects: "项目",
    navEducation: "教育",
    navContact: "联系",
    heroKicker: "个人档案 / 2026",
    heroLocation: "上海 · 利兹",
    firstName: "郑",
    lastName: "维则",
    heroStatus: "利兹大学计算机科学本科在读",
    heroStatement:
      "我对人工智能与软件工程方向的工作充满兴趣，希望把严谨的工程方法用于创造可靠、真正有用的产品。",
    interestTravel: "旅行",
    interestHiking: "徒步",
    interestPhotography: "摄影",
    scroll: "向下浏览",
    profileRail: "简介",
    profileEyebrow: "关于我",
    profileTitle: "在代码、硬件与真实世界之间，寻找最清晰的解法。",
    profileBody:
      "我目前就读于利兹大学计算机科学专业。我的实践横跨 ARM 嵌入式平台上的实时目标跟踪、AI 语音识别原型，以及全栈航班预订系统。我喜欢把问题拆开、把团队组织起来，再让方案稳定地运行。",
    focusLabel: "当前关注",
    focusValue: "嵌入式 AI / 视觉",
    languagesLabel: "语言",
    languagesValue: "中文 / English",
    availableLabel: "状态",
    availableValue: "开放合作机会",
    experienceEyebrow: "实践轨迹",
    experienceTitle: "工作与指导经历",
    projectsEyebrow: "选定作品",
    projectsTitle: "项目与构建",
    educationEyebrow: "教育背景",
    educationTitle: "持续学习，持续构建。",
    present: "至今",
    leeds: "利兹大学",
    degree: "计算机科学理学学士",
    gpa: "GPA 3.7 / 4.0 · 英国二等一学位水平",
    courseLabel: "课程选择",
    courseList: "数据结构 · 算法 · 操作系统 · 计算机体系结构 · 并行计算 · 软件工程",
    toolkitLabel: "技术工具箱",
    contactAside: "下一次对话，<br />可以从这里开始。",
    contactEyebrow: "联系",
    contactTitle: "一起做点有用的东西。",
    downloadCv: "下载中文简历",
    phoneChina: "中国",
    phoneUK: "英国",
    phoneUS: "美国",
    footerNote: "以克制构建，以好奇前行。",
    backTop: "返回顶部 ↑",
    expand: "展开详情",
    collapse: "收起详情",
    resumePath: "./assets/CV_cn.docx",
  },
  en: {
    documentTitle: "Weize Zheng · Portfolio",
    skip: "Skip to main content",
    navProfile: "Profile",
    navExperience: "Experience",
    navProjects: "Projects",
    navEducation: "Education",
    navContact: "Contact",
    heroKicker: "Personal archive / 2026",
    heroLocation: "Shanghai · Leeds",
    firstName: "Weize",
    lastName: "Zheng",
    heroStatus: "BSc Computer Science student at the University of Leeds",
    heroStatement:
      "I am deeply interested in artificial intelligence and software engineering, and in applying rigorous engineering to build reliable products that are genuinely useful.",
    interestTravel: "Travel",
    interestHiking: "Hiking",
    interestPhotography: "Photography",
    scroll: "Scroll to explore",
    profileRail: "Profile",
    profileEyebrow: "About",
    profileTitle: "Finding clear solutions between code, hardware, and the real world.",
    profileBody:
      "I study Computer Science at the University of Leeds. My work spans real-time object tracking on ARM embedded platforms, an AI speech-recognition prototype, and a full-stack flight booking system. I enjoy breaking down problems, aligning a team, and making the result run reliably.",
    focusLabel: "Current focus",
    focusValue: "Embedded AI / Vision",
    languagesLabel: "Languages",
    languagesValue: "English / 中文",
    availableLabel: "Status",
    availableValue: "Open to opportunities",
    experienceEyebrow: "Selected trajectory",
    experienceTitle: "Work & mentoring",
    projectsEyebrow: "Selected work",
    projectsTitle: "Projects & builds",
    educationEyebrow: "Education",
    educationTitle: "Keep learning. Keep building.",
    present: "Present",
    leeds: "University of Leeds",
    degree: "BSc Computer Science",
    gpa: "GPA 3.7 / 4.0 · 2:1 equivalent",
    courseLabel: "Selected coursework",
    courseList:
      "Data Structures · Algorithms · Operating Systems · Computer Architecture · Parallel Computing · Software Engineering",
    toolkitLabel: "Technical toolkit",
    contactAside: "The next conversation<br />can start here.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s make something useful.",
    downloadCv: "Download English CV",
    phoneChina: "China",
    phoneUK: "United Kingdom",
    phoneUS: "United States",
    footerNote: "Built with restraint. Moved by curiosity.",
    backTop: "Back to top ↑",
    expand: "Expand details",
    collapse: "Collapse details",
    resumePath: "./assets/CV_en.docx",
  },
};

const experience = {
  zh: [
    {
      date: "2025.06—08",
      place: "北京",
      title: "人工智能 / 计算机视觉实习生",
      org: "北京中广上洋科技股份有限公司",
      details: [
        "参与嵌入式 AI 系统的开发、部署、调试与性能优化。",
        "与团队协作完成跨架构编译、模型测试及原型集成。",
      ],
    },
    {
      date: "2026.01",
      place: "利兹",
      title: "Micro:bit 项目导师",
      org: "利兹大学学生导师项目",
      details: [
        "通过培训、技术指导和项目规划，支持大一学生完成 Micro:bit 项目。",
        "协助团队制定里程碑与交付成果，参与代码审查、集成测试与沟通协调。",
      ],
    },
  ],
  en: [
    {
      date: "Jun—Aug 2025",
      place: "Beijing",
      title: "AI / Computer Vision Intern",
      org: "Beijing Shineon Technology Incorporate",
      details: [
        "Contributed to the development, deployment, debugging, and performance tuning of embedded AI systems.",
        "Worked across cross-architecture compilation, model testing, and prototype integration.",
      ],
    },
    {
      date: "Jan 2026",
      place: "Leeds",
      title: "Micro:bit Project Mentor",
      org: "University of Leeds Student Mentoring",
      details: [
        "Supported first-year students through training, technical guidance, and project planning.",
        "Helped teams define milestones and deliverables while contributing to code review and integration testing.",
      ],
    },
  ],
};

const projects = {
  zh: [
    {
      date: "2026.03—05",
      place: "Ktor / PostgreSQL",
      title: "航班预订系统",
      org: "软件工程团队项目 · 团队负责人",
      details: [
        "带领团队开发前后端分离的航班预订系统，使用 Ktor、Pebble、JavaScript 与数据库集成技术。",
        "协调 Pull Request、分支管理及合并冲突处理，并负责测试、调试和代码集成。",
        "组织会议、分配任务并跟踪项目进度，提升系统稳定性与交付可靠性。",
      ],
    },
    {
      date: "2025.06—08",
      place: "YOLO / ARM / C",
      title: "嵌入式 AI 原型组",
      org: "目标跟踪与语音识别",
      details: [
        "在 ARM 嵌入式平台部署基于 YOLO 的实时目标跟踪系统。",
        "完成从 x86 到 ARM 的交叉编译，并针对资源受限环境优化性能。",
        "构建基于 C 语言的 AI 语音识别原型，提高系统集成度。",
      ],
    },
    {
      date: "2022.01",
      place: "Web Design",
      title: "青少年计算机应用竞赛作品",
      org: "上海市二等奖",
      details: ["以网页设计作品获得市级二等奖，也是我持续构建数字产品的早期起点。"],
    },
  ],
  en: [
    {
      date: "Mar—May 2026",
      place: "Ktor / PostgreSQL",
      title: "Flight Booking System",
      org: "Software Engineering Team Project · Team Lead",
      details: [
        "Led development of a separated frontend and backend system using Ktor, Pebble, JavaScript, and database integration.",
        "Coordinated pull requests, branches, merge conflicts, testing, debugging, and code integration.",
        "Organized meetings, allocated work, and tracked progress to improve delivery reliability.",
      ],
    },
    {
      date: "Jun—Aug 2025",
      place: "YOLO / ARM / C",
      title: "Embedded AI Prototypes",
      org: "Object tracking and speech recognition",
      details: [
        "Deployed a YOLO-based real-time object tracking system on an ARM embedded platform.",
        "Cross-compiled from x86 to ARM and optimized performance for resource-constrained environments.",
        "Built a compiled C-based AI speech-recognition prototype to improve system integration.",
      ],
    },
    {
      date: "Jan 2022",
      place: "Web Design",
      title: "Youth Computing Competition Entry",
      org: "Second Prize, Shanghai",
      details: [
        "Received a city-level second prize for web design—an early milestone in my habit of building digital products.",
      ],
    },
  ],
};

const languageSwitch = document.querySelector(".language-switch");
const experienceTimeline = document.querySelector("#experienceTimeline");
const projectTimeline = document.querySelector("#projectTimeline");
const resumeLink = document.querySelector("[data-resume-link]");
let activeLanguage = localStorage.getItem("preferred-language") === "en" ? "en" : "zh";

function renderTimeline(container, items, lang) {
  container.innerHTML = items
    .map(
      (item, index) => `
        <article class="timeline-item reveal ${index === 0 ? "is-open" : ""}">
          <div class="timeline-meta">
            <span>${item.date}</span>
            <span>${item.place}</span>
          </div>
          <div class="timeline-main">
            <h3>${item.title}</h3>
            <p>${item.org}</p>
          </div>
          <button
            class="timeline-toggle"
            type="button"
            aria-expanded="${index === 0}"
            aria-label="${index === 0 ? translations[lang].collapse : translations[lang].expand}"
          ></button>
          <div class="timeline-details">
            <div>
              <ul>
                ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
              </ul>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  container.querySelectorAll(".timeline-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".timeline-item");
      const willOpen = !item.classList.contains("is-open");
      item.classList.toggle("is-open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
      button.setAttribute(
        "aria-label",
        willOpen ? translations[activeLanguage].collapse : translations[activeLanguage].expand,
      );
    });
  });
}

function applyLanguage(lang) {
  activeLanguage = lang;
  const copy = translations[lang];

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = copy.documentTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key] !== undefined) element.innerHTML = copy[key];
  });

  document.querySelectorAll("[data-lang-option]").forEach((option) => {
    option.classList.toggle("is-active", option.dataset.langOption === lang);
  });

  resumeLink.href = copy.resumePath;
  renderTimeline(experienceTimeline, experience[lang], lang);
  renderTimeline(projectTimeline, projects[lang], lang);
  observeReveals();
  localStorage.setItem("preferred-language", lang);
}

languageSwitch.addEventListener("click", () => {
  applyLanguage(activeLanguage === "zh" ? "en" : "zh");
});

let revealObserver;

function observeReveals() {
  revealObserver?.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
  );

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    revealObserver.observe(element);
  });
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-links a")];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-current", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
);

sections.forEach((section) => sectionObserver.observe(section));
document.querySelector("#year").textContent = new Date().getFullYear();
applyLanguage(activeLanguage);
