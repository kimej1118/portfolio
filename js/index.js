// ============================================
// Mobile viewport height fix (--vh)
// ============================================
function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVh();
window.addEventListener("resize", setVh);
window.addEventListener("orientationchange", setVh);

// ============================================
// GSAP & ScrollTrigger
// ============================================
gsap.registerPlugin(ScrollTrigger);

// Hero animation
const heroTl = gsap.timeline({ delay: 0.5 });
heroTl
    .to(".hero-anim", { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "start")
    .to(".hero-anim-lottie", { opacity: 1, duration: 1, ease: "power2.inOut" }, "start+=0.4");

// Section content pop-in
const sections = gsap.utils.toArray(".stack-section:not(:first-child)");
sections.forEach((section) => {
    const content = section.querySelector(":scope > div");
    if (!content) return;

    gsap.from(content, {
        scrollTrigger: {
            trigger: section,
            start: "top center+=20%",
            end: "top top",
            toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    });
});

ScrollTrigger.addEventListener("refreshInit", () => setVh());
window.addEventListener("load", () => ScrollTrigger.refresh());

// ============================================
// Dark mode toggle
// ============================================
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

function setTheme(isDark) {
    if (isDark) {
        html.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
    }
}

if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    setTheme(true);
} else {
    setTheme(false);
}

themeToggle.addEventListener("click", () => setTheme(!html.classList.contains("dark")));

// ============================================
// Projects Data (8개)
// ============================================
const projectsData = [
    {
        id: 1,
        badge: "쇼핑몰 구축",
        badgeTheme: "primary",
        periodShort: "2025.05 ~ 2025.07",
        title: "플레이타임 쇼핑몰 구축",
        stackShort: ["Cafe24", "SCSS", "jQuery"],
        link: {
            url: "https://playtimemall.com/",
            label: "사이트 바로가기 ↗",
            target: "_blank"
        },
        summary:
            "Cafe24 기본 스킨을 기반으로 커스터마이징 및 디자인을 반영한 반응형 쇼핑몰 구축 프로젝트입니다. 결제, 프로모션 등 주요 기능 QA를 수행했습니다.",
        period: "2025.05 ~ 2025.07 (3개월)",
        role: "퍼블리셔 (기여도 100%)",
        stack: ["HTML5", "CSS3(SCSS)", "JavaScript", "jQuery", "Cafe24"],
        description:
            "Cafe24 솔루션을 활용하여 키즈 카페 플레이타임의 온라인 쇼핑몰을 구축했습니다. 디자인 시안을 바탕으로 기본 스킨을 커스터마이징하여 브랜드 아이덴티티를 반영하고, 데스크탑/모바일/태블릿 등 다양한 디바이스에 최적화된 반응형 웹을 구현했습니다.",
        details: [
            "Cafe24 스마트디자인 편집기를 활용한 레이아웃 및 디자인 커스터마이징",
            "SCSS 변수 및 믹스인을 활용하여 일관된 스타일 가이드 적용 및 유지보수성 향상",
            "Swiper.js 플러그인을 활용한 메인 배너 및 상품 슬라이드 구현",
            "결제 프로세스, 회원가입, 프로모션 페이지 등 핵심 기능 퍼블리싱 및 크로스 브라우징 QA 수행",
            "개발팀과 협업하여 상품 정렬, 필터링 등 동적 기능 연동을 위한 마크업 구조 설계",
        ],
    },
    {
        id: 2,
        badge: "이벤트 페이지",
        badgeTheme: "blue",
        periodShort: "2023.03 ~ 2025.04",
        title: "웹젠 게임 이벤트 페이지 퍼블리싱",
        stackShort: ["HTML5", "SCSS", "jQuery"],
        link: {
            url: "https://docs.google.com/spreadsheets/d/1_UhJSBo7ULWYw0KosBhMDCN5WsJqGFSB7BOGfDqOCYY/edit?usp=sharing",
            label: "바로가기 ↗",
            target: "_blank"
        },
        summary:
            "뮤 온라인, 샷 온라인 등 다수 게임의 이벤트 페이지를 제작했습니다. 월 평균 10~15건을 소화하며 글로벌/다국어 대응 경험을 쌓았습니다.",
        period: "2023.03 ~ 2025.04 (상시 진행)",
        role: "퍼블리셔 (메인 담당)",
        stack: ["HTML5", "SCSS", "jQuery", "JavaScript", "Git"],
        description:
            "뮤 온라인, 샷 온라인, R2 등 웹젠의 주요 게임 서비스에 대한 정기/비정기 이벤트 페이지를 제작했습니다. 짧은 일정 내에 완성도 높은 인터랙티브 페이지를 구현하는 데 중점을 두었습니다.",
        details: [
            "월 평균 10~15건의 다양한 프로모션 페이지 퍼블리싱 전담",
            "GSAP 및 jQuery를 활용한 사용자의 흥미를 유발하는 인터랙션 및 애니메이션 구현 (룰렛, 카드 뒤집기 등)",
            "글로벌 서비스를 위한 다국어(영어, 중국어, 일본어 등) CSS 스타일 대응 경험",
            "Git을 활용한 소스 코드 버전 관리 및 협업 진행",
            "다양한 해상도 및 구형 브라우저(IE) 호환성 확보",
        ],
    },
    {
        id: 3,
        badge: "유지보수/리뉴얼",
        badgeTheme: "green",
        periodShort: "2023.03 ~ 2025.05",
        title: "희망브리지 유지보수 및 리뉴얼",
        stackShort: ["SCSS", "JavaScript", "Git", "GSAP"],
        link: {
            url: "https://hopebridge.or.kr/",
            label: "사이트 바로가기 ↗",
            target: "_blank"
        },
        summary:
            "홈페이지 리뉴얼 퍼블리싱을 담당했습니다. UI/개발 오류 검수를 수행했습니다.",
        period: "2023.03 ~ 2025.05 / 2024.11 ~ 2025.02",
        role: "퍼블리셔 (유지보수 및 리뉴얼 참여)",
        stack: ["HTML5", "SCSS", "JavaScript", "jQuery", "GSAP"],
        description:
            "희망브리지 전국재해구호협회의 노후화된 협회 홈페이지의 전면 리뉴얼 프로젝트에 퍼블리셔로 참여했습니다.",
        details: [
            "**[리뉴얼]** 웹 접근성을 고려한 시맨틱 마크업 및 반응형 웹 구현",
            "**[리뉴얼]** 외주 개발사 및 디자이너와 원활한 소통을 통해 일정 및 품질 관리 수행",
            "**[리뉴얼]** 라이브 배포 전 전반적인 UI/UX QA 및 크로스 브라우징 테스트 주도",
        ],
    },
    {
        id: 4,
        badge: "리뉴얼",
        badgeTheme: "purple",
        periodShort: "2025.05 ~ 2025.06",
        title: "LCK CL 홈페이지 리뉴얼 퍼블리싱",
        stackShort: ["HTML5", "SCSS", "jQuery","GSAP"],
        link: {
            url: "http://lckcl.co.kr/",
            label: "사이트 바로가기 ↗",
            target: "_blank"
        },
        summary:
            "반응형 레이아웃 구성과 공통 컴포넌트 정리, QA 및 크로스 브라우징 대응을 수행했습니다.",
        period: "2025.05 ~ 2025.06 (프로젝트)",
        role: "퍼블리셔 (메인 담당)",
        stack: ["HTML5", "SCSS", "JavaScript", "jQuery", "Git", "GSAP"],
        description:
            "LCK CL 홈페이지 리뉴얼 프로젝트에서 퍼블리싱을 담당했습니다. 반응형 레이아웃 구성과 공통 컴포넌트 정리, QA 및 크로스 브라우징 대응을 수행했습니다.",
        details: [
            "디자인 반영 및 반응형 레이아웃 구현",
            "공통 UI 컴포넌트/가이드 기반 마크업 구조 정리",
            "크로스 브라우징 및 이슈 대응(QA/수정) 수행",
            "개발팀 협업을 위한 마크업 규칙/구조 정리",
        ],
    },
    {
        id: 5,
        badge: "운영/개선",
        badgeTheme: "cyan",
        periodShort: "2025.05 ~ 2025.06",
        title: "Keg 홈페이지 리뉴얼 및 운영 유지보수",
        stackShort: ["HTML5", "SCSS", "Git"],
        link: {
            url: "http://e-games.or.kr/",
            label: "사이트 바로가기 ↗",
            target: "_blank"
        },
        summary:
            "기능 수정/콘텐츠 업데이트/이슈 대응을 반복적으로 처리하며 안정적인 운영을 지원했습니다.",
        period: "2025.05 ~ 2025.06 (운영/개선)",
        role: "퍼블리셔 (운영 및 개선)",
        stack: ["HTML5", "SCSS", "JavaScript", "jQuery", "Git"],
        description:
            "Keg 관련 페이지의 운영 유지보수 및 개선 작업을 수행했습니다. 기능 수정/콘텐츠 업데이트/이슈 대응을 반복적으로 처리하며 안정적인 운영을 지원했습니다.",
        details: [
            "운영 이슈 기반 UI 수정 및 기능 변경 대응",
            "반복 작업 효율화를 위한 스타일/컴포넌트 정리",
            "각종 이벤트/공지 콘텐츠 업데이트 퍼블리싱",
            "크로스 브라우징 및 디바이스 대응 점검",
        ],
    },
    {
        id: 6,
        badge: "뉴스레터",
        badgeTheme: "slate",
        periodShort: "2023.03 ~ 2025.05",
        title: "희망브리지 뉴스레터 퍼블리싱 유지보수",
        stackShort: ["HTML(Email)", "CSS", "QA"],
        link: {
            url: "https://hopebridge.or.kr/hope/newsletters.php",
            label: "사이트 바로가기 ↗",
            target: "_blank"
        },
        summary:
            "Outlook, Gmail 등 주요 메일 클라이언트 호환성을 고려하여 테이블 기반 뉴스레터 퍼블리싱을 수행했습니다.",
        period: "2023.03 ~ 2025.05 (상시)",
        role: "퍼블리셔 (유지보수 담당)",
        stack: ["HTML(Email)", "CSS", "테이블 코딩", "QA"],
        description:
            "Outlook, Gmail 등 주요 메일 클라이언트 호환성을 고려하여 테이블 기반 뉴스레터 퍼블리싱을 수행했습니다.",
        details: [
            "메일 클라이언트별 렌더링 차이 고려한 테이블 기반 마크업",
            "이미지/텍스트 비율 및 가독성 최적화",
            "템플릿화로 제작 효율 개선 및 재사용성 확보",
            "발송 전후 렌더링 QA 및 수정 대응",
        ],
    },
    {
        id: 7,
        badge: "모금/캠페인",
        badgeTheme: "teal",
        periodShort: "2023.03 ~ 2025.05",
        title: "희망브리지 모금함 페이지 제작 및 유지보수",
        stackShort: ["HTML5", "SCSS", "jQuery", "GSAP"],
        link: {
            url: "https://hopebridge.or.kr/support/camfundraising.php",
            label: "사이트 바로가기 ↗",
            target: "_blank"
        },
        summary:
            "긴급 모금/캠페인 페이지 제작과 기부 현황 UI 업데이트 등 운영성 작업을 신속하게 처리했습니다.",
        period: "2023.03 ~ 2025.05 (상시)",
        role: "퍼블리셔 (제작/유지보수)",
        stack: ["HTML5", "SCSS", "JavaScript", "jQuery", "GSAP"],
        description:
            "긴급 모금/캠페인 페이지 제작과 기부 현황 UI 업데이트 등 운영성 작업을 신속하게 처리했습니다.",
        details: [
            "긴급 캠페인/모금 페이지 신속 제작",
            "기부 현황/콘텐츠 변경에 따른 UI 업데이트 대응",
            "반응형 레이아웃 및 접근성 고려한 마크업",
            "운영 중 발생 이슈 수정 및 QA 수행",
        ],
    },
    {
        id: 8,
        badge: "협회/운영",
        badgeTheme: "amber",
        periodShort: "2023.03 ~ 2025.07",
        title: "한국 이스포츠 협회 사업 페이지 유지보수",
        stackShort: ["HTML5", "SCSS", "Git"],
        link:[
            {
                url: "https://www.e-sports.or.kr/",
                label: "사이트 바로가기 ↗(협회)",
                target: "_blank"
            },
            {
                url: "https://lck-academy.co.kr/",
                label: "사이트 바로가기 ↗(아카데미)",
                target: "_blank"
            },
            {
                url: "http://lckcl.co.kr/",
                label: "사이트 바로가기 ↗(챌린저스)",
                target: "_blank"
            }
        ],
        summary:
            "LCK 아카데미/챌린저스 등 협회 사업 관련 페이지의 운영 유지보수 및 개선을 담당했습니다.",
        period: "2023.03 ~ 2025.07 (운영)",
        role: "퍼블리셔 (유지보수 담당)",
        stack: ["HTML5", "SCSS", "JavaScript", "jQuery", "Git"],
        description:
            "LCK 아카데미/챌린저스 등 협회 사업 관련 페이지의 운영 유지보수 및 개선을 담당했습니다.",
        details: [
            "콘텐츠/기능 변경에 따른 퍼블리싱 수정 대응",
            "운영 요청 기반 UI 개선 및 레이아웃 보완",
            "디바이스별 레이아웃 점검 및 크로스 브라우징 대응",
            "협업 프로세스 내 Git 기반 변경 관리",
        ],
    },
];


// ============================================
// Projects Markup Render
// ============================================
const projectsTrack = document.getElementById("projects-track");

function getBadgeGradient(theme) {
    const map = {
        primary: "from-primary/20 to-purple-500/20",
        blue: "from-blue-500/20 to-cyan-500/20",
        green: "from-green-500/20 to-teal-500/20",
        purple: "from-purple-500/20 to-indigo-500/20",
        cyan: "from-cyan-500/20 to-sky-500/20",
        slate: "from-slate-500/20 to-slate-300/20",
        teal: "from-teal-500/20 to-emerald-500/20",
        amber: "from-amber-500/20 to-orange-500/20",
    };
    return map[theme] || map.primary;
}

function renderProjects() {
    if (!projectsTrack) return;

    projectsTrack.innerHTML = projectsData
        .map((p) => {
            const gradient = getBadgeGradient(p.badgeTheme);
            const stackBadges = (p.stackShort || [])
                .map(
                    (s) =>
                        `<span class="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-secondary dark:text-slate-300">${s}</span>`
                )
                .join("");

            return `
        <div class="project-card group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border border-slate-200 dark:border-slate-700/50 hover:-translate-y-2">
          <div class="h-48 bg-slate-200 dark:bg-slate-700/50 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr ${gradient} mix-blend-multiply"></div>
            <div class="absolute bottom-4 left-4 bg-white dark:bg-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              ${p.badge}
            </div>
          </div>

          <div class="p-6 flex flex-col flex-1">
            <time class="text-sm text-primary font-semibold">${p.periodShort}</time>
            <h3 class="text-xl font-bold mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              ${p.title}
            </h3>
            <div class="flex flex-wrap gap-2 mb-4">${stackBadges}</div>
            <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-1">${p.summary}</p>
            <button
              class="view-project-btn w-full py-3 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
              data-id="${p.id}"
              type="button"
            >
              자세히 보기 ↗
            </button>
          </div>
        </div>
      `;
        })
        .join("");
}

// ============================================
// Hero Typing (Code Window)
// ============================================
function initHeroTyping() {
  const target = document.getElementById("type-target");
  if (!target) return;

  // prefers-reduced-motion 존중: 텍스트만 고정 출력
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scripts = [
    [
      "const name = 'Kim Seo Wan';",
      "const role = 'Front-End Developer';",
      "",
      "function buildExperience() {",
      "  return ['UX', 'Animation', 'Responsive'];",
      "}",
      "",
      "console.log(`${name} | ${role}`);",
    ],
    [
      "/* Key strengths */",
      "- HTML5 / SCSS",
      "- JavaScript (ES6+)",
      "- GSAP / ScrollTrigger",
      "- Accessibility / QA",
      "",
      "export default 'Clean UI, solid delivery.';",
    ],
    [
      "/* Now learning */",
      "React + component thinking",
      "",
      "nextStep()",
      "  .focus('state')",
      "  .improve('architecture')",
      "  .ship();",
    ],
  ];

  if (reduceMotion) {
    target.textContent = scripts[0].join("\n");
    return;
  }

  let scriptIndex = 0;
  let lineText = scripts[scriptIndex].join("\n");

  let pos = 0;
  let isDeleting = false;

  const TYPE_SPEED = 26;     // 타이핑 속도
  const DELETE_SPEED = 14;   // 지우기 속도
  const HOLD_AFTER_TYPE = 900;
  const HOLD_AFTER_DELETE = 350;

  function tick() {
    const full = lineText;

    if (!isDeleting) {
      pos++;
      target.textContent = full.substring(0, pos);

      if (pos >= full.length) {
        isDeleting = true;
        setTimeout(tick, HOLD_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      pos--;
      target.textContent = full.substring(0, pos);

      if (pos <= 0) {
        isDeleting = false;
        scriptIndex = (scriptIndex + 1) % scripts.length;
        lineText = scripts[scriptIndex].join("\n");
        setTimeout(tick, HOLD_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
}

// Hero 코드창도 hero-anim처럼 등장시키기(선택)
function initHeroCodeIntro() {
  const el = document.querySelector(".hero-anim-code");
  if (!el || typeof gsap === "undefined") return;

  gsap.to(el, { opacity: 1, duration: 1, ease: "power2.inOut", delay: 0.8 });
}


// ============================================
// Modal
// ============================================
const modal = document.getElementById("project-modal");
const modalBackdrop = modal.querySelector(".modal-backdrop");
const modalContent = modal.querySelector(".modal-content");
const closeModalBtn = document.getElementById("close-modal-btn");

const mTitle = document.getElementById("modal-title");
const mPeriod = document.getElementById("modal-period");
const mRole = document.getElementById("modal-role");
const mStack = document.getElementById("modal-stack");
const mLink = document.getElementById("modal-link");
const mDesc = document.getElementById("modal-desc");
const mList = document.getElementById("modal-details-list");

function lockBodyScroll() {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`;
}

function unlockBodyScroll() {
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
}

function openModal(projectId) {
  const project = projectsData.find((p) => p.id === parseInt(projectId, 10));
  if (!project) return;

  // =========================
  // 기본 데이터 주입
  // =========================
  mTitle.textContent = project.title || "";
  mPeriod.textContent = project.period || "";
  mRole.textContent = project.role || "";
  mDesc.textContent = project.description || "";

  // =========================
  // 기술 스택 주입
  // =========================
  mStack.innerHTML = (project.stack || [])
    .map(
      (tech) =>
        `<span class="text-xs px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-full font-medium text-secondary dark:text-slate-300 border border-slate-200 dark:border-slate-700">${tech}</span>`
    )
    .join("");

    // =========================
    // 링크 주입 (단일 객체 및 배열 모두 대응)
    // =========================
    if (mLink) {
        // 1. 데이터를 무조건 배열 형태로 정규화
        const linkData = project.link;
        let linksArray = [];

        if (Array.isArray(linkData)) {
            linksArray = linkData;
        } else if (linkData && typeof linkData === 'object' && linkData.url) {
            linksArray = [linkData];
        }

        // 2. 링크가 없을 때 처리
        if (linksArray.length === 0) {
            mLink.innerHTML = `<span class="text-sm text-slate-500 dark:text-slate-400">등록된 링크가 없습니다.</span>`;
        } else {
            // 3. 배열을 순회하며 HTML 생성
            mLink.innerHTML = `
                <div class="flex flex-wrap gap-2">
                    ${linksArray.map(link => {
                        const url = String(link.url || "").trim();
                        const label = String(link.label || "바로가기 ↗").trim();
                        const target = String(link.target || "_blank").trim();
                        const rel = target === "_blank" ? "noopener noreferrer" : "";

                        return `
                            <a
                            href="${url}"
                            target="${target}"
                            rel="${rel}"
                            class="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                            >
                            ${label}
                            </a>
                        `;
                    }).join("")}
                </div>
            `;
        }
    }

  // =========================
  // 상세 내용 리스트 주입
  // =========================
  mList.innerHTML = (project.details || [])
    .map((detail) => {
      const formattedDetail = detail.replace(
        /\*\*(.*?)\*\*/g,
        '<b class="font-bold text-slate-800 dark:text-slate-100">$1</b>'
      );
      return `<li class="relative pl-5 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-slate-300 dark:before:bg-slate-600 before:rounded-full">${formattedDetail}</li>`;
    })
    .join("");

  // =========================
  // 모달 표시 애니메이션
  // =========================
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  setTimeout(() => {
    modalBackdrop.classList.remove("opacity-0");
    modalContent.classList.remove("scale-95", "opacity-0");
  }, 10);

  // 스크롤 잠금
  lockBodyScroll();
}


function closeModal() {
    modalBackdrop.classList.add("opacity-0");
    modalContent.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
        unlockBodyScroll();
    }, 300);
}

function bindProjectButtons() {
    document.querySelectorAll(".view-project-btn").forEach((btn) => {
        btn.addEventListener("click", () => openModal(btn.dataset.id));
    });
}

closeModalBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// ============================================
// Desktop Only: Vertical Scroll -> Horizontal Slide (Key Projects)
// ============================================
function killProjectsHorizontalTrigger() {
    const st = ScrollTrigger.getById("projects-horizontal");
    if (st) st.kill(true);
}

function initProjectsHorizontalScroll() {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    const section = document.querySelector("#projects");
    const wrap = section ? section.querySelector(".projects-wrap") : null;
    const track = section ? section.querySelector("#projects-track") : null;

    if (!section || !wrap || !track) return;

    killProjectsHorizontalTrigger();

    if (!isDesktop) {
        gsap.set(track, { x: 0 });
        return;
    }

    const getMaxX = () => track.scrollWidth - wrap.clientWidth;
    const maxX = Math.max(0, getMaxX());
    if (maxX <= 0) {
        gsap.set(track, { x: 0 });
        return;
    }

    const pauseRatio = 0.18;

    const tl = gsap.timeline({
        scrollTrigger: {
            id: "projects-horizontal",
            trigger: section,
            start: "top top",
            end: () => `+=${Math.round(maxX * (1 + pauseRatio))}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        },
    });

    tl.to(track, { x: -maxX, ease: "none", duration: 1 });
    tl.to({}, { duration: pauseRatio });
}

// ============================================
// Boot
// ============================================
window.addEventListener("load", () => {
    renderProjects();
    bindProjectButtons();

    initProjectsHorizontalScroll();
    ScrollTrigger.refresh();

    initHeroTyping();
    initHeroCodeIntro();
});

window.addEventListener("resize", () => {
    initProjectsHorizontalScroll();
    ScrollTrigger.refresh();
});

window.addEventListener("orientationchange", () => {
    initProjectsHorizontalScroll();
    ScrollTrigger.refresh();
});
