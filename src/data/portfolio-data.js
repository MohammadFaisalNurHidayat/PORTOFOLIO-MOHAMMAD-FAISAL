// ============================================================
// Portfolio Data — single source of truth untuk semua konten
// Ubah data di sini, seluruh UI otomatis update.
// ============================================================

export const PERSONAL = {
  name: "Mohammad Faisal Nur Hidayat",
  initials: "MF",
  roles: [
    "IT Quality Assurance",
    "Fullstack Web Developer",
    "Informatics Student",
  ],
  bio: `Mahasiswa semester 6 Teknik Informatika di Universitas Jember yang berfokus pada pengendalian mutu perangkat lunak (Software Quality) dan pengembangan web modern. Memiliki kemampuan analitis kuat untuk Defect Management, Root Cause Analysis, dan membangun antarmuka web yang cepat serta interaktif.`,
  university: "Universitas Jember",
  major: "Teknik Informatika",
  email: "faisal@example.com",
  github: "https://github.com/MohammadFaisalNurHidayat",
  linkedin: "https://linkedin.com/in/faisalnurhidayat",
  cvFile: "/cv-faisal.pdf",
};

export const STATS = [
  { value: "3+", label: "Projects" },
  { value: "120+", label: "Bugs Analyzed" },
  { value: "6", label: "Semester" },
  { value: "2", label: "Tech Stacks" },
];

export const EDUCATION = [
  {
    year: "2023 — Sekarang",
    title: "S1 Teknik Informatika",
    institution: "Universitas Jember",
    description: "Fokus pada Software Quality Assurance dan Web Development.",
  },
];

export const PROJECTS = [
  {
    title: "Analisis Defect Management — React Open Source",
    role: "QA Analyst",
    description:
      "Melakukan analisis klasifikasi 120 pelaporan bug (Severity & Priority) pada repositori React di GitHub. Mengimplementasikan Root Cause Analysis (RCA) menggunakan Fishbone, 5 Why, dan Pareto untuk mengevaluasi lead time dan merumuskan perbaikan workflow QA.",
    tags: ["QA Analysis", "RCA", "Bug Triage", "Fishbone", "Pareto"],
    category: "qa",
    link: "#",
  },
  {
    title: "AgriFlow — Sistem Irigasi & Katalog Benih",
    role: "QA Tester & Fullstack Developer",
    description:
      "Membangun aplikasi web (React.js & Python) yang terintegrasi dengan API BMKG dan Machine Learning (XGBoost). Melakukan Black Box Testing menyeluruh, menyusun dokumen Software Test Planning (STP) & Report (STR), serta memvalidasi bug sebelum deployment.",
    tags: ["React.js", "Python", "XGBoost", "Black Box Testing", "STP/STR"],
    category: "fullstack",
    link: "#",
  },
];

export const RESEARCH_PROJECTS = [
  {
    title: "Prediksi Fermentasi Kopi Arabika — Stacking Ensemble",
    role: "ML Researcher",
    description:
      "Mengembangkan model prediksi parameter fermentasi kopi Arabika menggunakan pendekatan Stacking Ensemble (Random Forest + Artificial Neural Network). Menerapkan K-Fold Out-of-Fold (OOF) prediction untuk generalisasi model, serta membangun Arrhenius-based kinetic dataset generator untuk augmentasi data eksperimen.",
    methodology: "RF+ANN Stacking Ensemble, K-Fold OOF, Arrhenius-based Kinetic Dataset Generator",
    outcome: "AI-detection <20%, draft jurnal JIK (Jurnal Ilmu Komputer)",
    tags: ["Random Forest", "ANN", "Stacking", "K-Fold", "Arrhenius", "Python"],
  },
  {
    title: "YOLOv8s + WIoUv3 Loss — Deteksi Objek Aerial",
    role: "ML Researcher · Kelompok 8",
    description:
      "Menerapkan arsitektur YOLOv8s yang dimodifikasi dengan Wise-IoU v3 Loss Function untuk meningkatkan performa deteksi objek pada citra aerial (VisDrone2019 dataset). Fokus pada peningkatan akurasi deteksi objek kecil dengan occlusion tinggi pada skenario pandangan udara.",
    methodology: "YOLOv8s, WIoUv3 (Wise-IoU v3) Loss Function, VisDrone2019 Dataset",
    outcome: "Peningkatan mAP pada deteksi objek kecil di citra aerial",
    tags: ["YOLO", "Computer Vision", "Object Detection", "WIoU", "Deep Learning"],
  },
  {
    title: "Hybrid GA+XGBoost — Prediksi Kurs USD/IDR",
    role: "Researcher · Kelompok 4",
    description:
      "Merancang pendekatan hybrid Genetic Algorithm dan XGBoost untuk memprediksi pergerakan kurs USD/IDR. Laporan disusun dalam format IMRAD (Introduction, Methods, Results, and Discussion) dengan rujukan minimal 3 artikel Scopus-indexed.",
    methodology: "Genetic Algorithm + XGBoost Hybrid, IMRAD Report Format",
    outcome: "Laporan IMRAD lengkap, 3 referensi Scopus-indexed",
    tags: ["Genetic Algorithm", "XGBoost", "Time Series", "IMRAD", "Evolutionary Computing"],
  },
];

export const SKILLS = {
  "Quality Assurance": {
    icon: "🔍",
    items: [
      "Bug Reporting & Triage",
      "Defect Management",
      "Root Cause Analysis (RCA)",
      "Test Planning (STP/STR)",
      "Logic Bug Detection",
    ],
  },
  "Web Development": {
    icon: "💻",
    items: [
      "React / Vite",
      "JavaScript",
      "Tailwind",
      "Python",
      "HTML & CSS",
      "Laravel + MySQL",
    ],
  },
  Tools: {
    icon: "🛠️",
    items: [
      "Git & GitHub",
      "VS Code",
      "Postman",
    ],
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
];
