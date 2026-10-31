window.SITE_DATA = {
  profile: {
    name: "Arudji Hermatyar, S.Kom",
    title: "ARUDJI HERMATYAR, S.Kom",
    subtitle: "PPG Informatika | NIM: 25086085007",
    badge: "Calon Guru Profesional",
    role: "Mahasiswa PPG Prajabatan Informatika | Universitas Islam Makassar",
    photo: "profile.jpeg",
    logo: "LOGO_UIM.png",
    vision: {
      title: "Visi",
      icon: "target",
      text: "Menjadi pendidik yang menuntun kodrat murid, menghidupi nilai Pancasila, dan menciptakan pembelajaran Informatika yang mendalam, inklusif, serta menyenangkan di era digital.",
    },
    mission: {
      title: "Misi",
      icon: "rocket",
      items: [
        "Menerapkan pembelajaran berdiferensiasi.",
        "Mengintegrasikan teknologi secara bermakna.",
        "Menjadi teladan karakter yang baik.",
        "Membangun budaya refleksi berkelanjutan.",
      ],
    },
  },
  program: {
    label: "Portofolio Seminar PPG",
    title: "Karya Inovasi: Python Puzzle",
    details: [
      { label: "Mata Kuliah", value: "Pembelajaran Mendalam & Asesmen" },
      { label: "Sasaran", value: "Kelas XII SMAN 22 Makassar" },
      { label: "Tahun", value: "2026" },
    ],
  },
  quickStats: [
    { value: "11", label: "Kartu per Set" },
    { value: "3", label: "Komponen Utama" },
    { value: "3", label: "Pilar Deep Learning" },
    { value: "4", label: "Asesmen" },
  ],
  sections: {
    refleksi: {
      icon: "book-open",
      title: "Refleksi Pengalaman Belajar",
      paragraphs: [
        "Selama mengikuti perkuliahan PPG, khususnya pada mata kuliah <strong>Pembelajaran Mendalam dan Asesmen (PMA)</strong>, saya mengalami pergeseran paradigma yang signifikan. Dulu, saya menganggap pembelajaran adalah proses transfer ilmu dari guru ke murid. Kini, saya memahami bahwa pembelajaran adalah proses menuntun potensi murid agar mereka mampu memahami, mengaplikasikan, dan merefleksikan pengetahuan secara bermakna.",
        "Mata kuliah PMA mengajarkan saya bahwa asesmen bukan sekadar nilai akhir, melainkan bagian integral dari proses pembelajaran (<em>assessment as, for, and of learning</em>). Saya belajar merancang pembelajaran yang berkesadaran, bermakna, dan menggembirakan — tiga pilar <em>Deep Learning</em> yang kemudian menjadi fondasi utama karya inovasi saya, <strong>Python Puzzle</strong>.",
        "Pengalaman PPL di SMAN 22 Makassar semakin memperkuat pemahaman saya. Saya melihat langsung bagaimana keterbatasan laboratorium komputer dan kesulitan sintaks siswa menjadi tantangan nyata yang membutuhkan solusi kreatif. Dari situlah gagasan Python Puzzle lahir, sebagai bentuk tanggung jawab profesional saya sebagai calon guru Informatika.",
      ],
    },
    "latar-belakang": {
      icon: "alert-circle",
      title: "Latar Belakang Masalah",
      paragraphs: [
        "<strong>Konteks Ideal:</strong> Pembelajaran abad ke-21 menuntut penguasaan pemikiran komputasional. Dalam Kurikulum Merdeka dan Pembelajaran Mendalam (<em>Deep Learning</em>), pemrograman Python menjadi alat penting untuk mengembangkan keterampilan berpikir kritis, algoritmik, dan pemecahan masalah.",
        "<strong>Realita di Lapangan:</strong> Berdasarkan observasi di kelas XII SMAN 22 Makassar, ditemukan dua permasalahan utama:",
      ],
      list: [
        "<strong>Kesulitan Sintaks:</strong> Siswa sering mengalami <em>syntax error</em> berulang karena lupa titik dua, indentasi, atau operator. Hal ini menyebabkan frustrasi dan kehilangan motivasi.",
        "<strong>Keterbatasan Laboratorium:</strong> Jumlah komputer tidak sebanding dengan jumlah kelas, sehingga jadwal bertabrakan dan tidak semua siswa mendapat pengalaman <em>coding</em> langsung.",
      ],
      closing:
        "<strong>Kebutuhan:</strong> Diperlukan media pembelajaran inovatif yang mampu membantu siswa memahami sintaks secara bertahap <strong>dan</strong> tidak bergantung pada laboratorium komputer.",
    },
    gagasan: {
      icon: "lightbulb",
      title: "Gagasan Dasar & Kebaruan",
      paragraphs: [
        "<strong>Gagasan Solutif:</strong> Python Puzzle adalah media pembelajaran berbasis <em>Parsons Problems</em> yang dikemas dalam bentuk kartu fisik manipulatif (<em>unplugged</em>). Siswa menyusun potongan kode yang telah diacak menjadi program yang benar.",
        "<strong>Kebaruan (Novelty):</strong> Transformasi <em>Parsons Problems</em> dari digital ke fisik, diadaptasi khusus untuk siswa SMA Indonesia dengan keterbatasan laboratorium komputer. Desain kartu berwarna, kartu distractor, dan kartu hint bertingkat belum ditemukan pada implementasi sebelumnya.",
        "<strong>Keunggulan:</strong> Unplugged (tanpa komputer), murah (±Rp 15.000/set), konkret, melatih analisis, scaffolding bertingkat, kolaboratif, dan selaras dengan <em>Deep Learning</em> (mindful, meaningful, joyful).",
      ],
    },
    desain: {
      icon: "puzzle",
      title: "Desain & Komponen Media",
      components: [
        {
          emoji: "🟢",
          title: "Kartu Kode Benar",
          description: "5 kartu (hijau=variabel, kuning=kondisi, biru=output)",
          color: "green",
        },
        {
          emoji: "🔴",
          title: "Kartu Distractor",
          description: "3 kartu kode salah (sintaks, logika, typo)",
          color: "red",
        },
        {
          emoji: "💡",
          title: "Kartu Hint",
          description: "3 kartu petunjuk bertingkat (maks 2 per level)",
          color: "yellow",
        },
      ],
      howItWorks:
        "<strong>Cara Kerja:</strong> Siswa bekerja dalam kelompok 3 orang (Penyusun, Pemeriksa, Pencatat). Mereka menyusun kartu kode di HVS, membuang distractor, dan menggunakan hint jika perlu. Setelah selesai, siswa mengisi LKPD yang mencakup urutan kode, output, distractor yang dibuang, refleksi, dan penilaian pasangan.",
    },
    asesmen: {
      icon: "clipboard-check",
      title: "Sistem Penilaian (Student-Centered)",
      rows: [
        {
          source: "Self-Assessment",
          who: "Siswa",
          weight: "20%",
          instrument: "LKPD Refleksi",
        },
        {
          source: "Peer-Assessment",
          who: "Pasangan",
          weight: "20%",
          instrument: "LKPD Penilaian Pasangan",
        },
        {
          source: "Observasi Guru",
          who: "Guru",
          weight: "20%",
          instrument: "Lembar Observasi",
        },
        {
          source: "Tes Pemahaman",
          who: "Siswa",
          weight: "40%",
          instrument: "Pre-test, Post-test, Kinerja",
        },
      ],
      formula:
        "Nilai Akhir = (Self × 0,2) + (Peer × 0,2) + (Guru × 0,2) + (Tes × 0,4)",
      deepLearning:
        "<strong>Kaitan dengan Deep Learning:</strong> Asesmen ini mencakup tiga pilar. <em>Berkesadaran</em>: siswa menilai diri sendiri. <em>Bermakna</em>: tes kinerja mengukur aplikasi nyata. <em>Menggembirakan</em>: apresiasi bintang untuk kemandirian (tanpa hint).",
    },
    hasil: {
      icon: "trending-up",
      title: "Hasil & Manfaat",
      paragraphs: [
        "<strong>Hasil yang Diperoleh:</strong> Produk final Python Puzzle (11 kartu per set) yang telah divalidasi ahli media dan ahli materi. LKPD terisi sebagai bukti autentik hasil belajar siswa. Lembar observasi guru yang mencatat aktivitas dan sikap siswa. Data pre-test, post-test, dan tes kinerja yang menunjukkan peningkatan pemahaman.",
        "<strong>Manfaat bagi Siswa:</strong> Pengalaman belajar sintaks yang konkret dan menyenangkan, terlatih berpikir logis dan analitis, serta mampu berkolaborasi dalam kelompok.",
        "<strong>Manfaat bagi Guru:</strong> Alternatif media pembelajaran yang murah, mudah dibuat, dan tidak bergantung pada laboratorium komputer. Guru lebih mudah memantau proses berpikir siswa secara langsung.",
        "<strong>Manfaat bagi Sekolah:</strong> Solusi atas keterbatasan fasilitas laboratorium dan peningkatan kualitas pembelajaran Informatika secara keseluruhan.",
      ],
    },
  },
  rtl: {
    title: "Harapan & Rencana Tindak Lanjut (RTL)",
    items: [
      {
        title: "Harapan",
        text: "Python Puzzle diharapkan menjadi alternatif media pembelajaran yang efektif, murah, inklusif, dan kontekstual untuk membantu siswa SMA memahami sintaks dasar Python, sekaligus menjawab tantangan keterbatasan laboratorium komputer.",
      },
      {
        title: "RTL Jangka Pendek",
        text: "Melakukan uji coba lebih luas di beberapa kelas XII SMAN 22 Makassar untuk mengukur efektivitas secara lebih komprehensif (N-Gain).",
      },
      {
        title: "RTL Jangka Menengah",
        text: "Mengembangkan Python Puzzle untuk materi lain (perulangan, fungsi, array) dan jenjang kelas X & XI.",
      },
      {
        title: "RTL Jangka Panjang",
        text: "Mempublikasikan hasil penelitian ke jurnal pendidikan Informatika, serta berbagi praktik baik melalui komunitas MGMP Informatika.",
      },
    ],
  },
  dokumentasi: {
    icon: "folder-open",
    title: "Dokumentasi & Bukti",
    description:
      "Berikut adalah artefak dan bukti pelaksanaan inovasi Python Puzzle di lapangan.",
    items: [
      {
        title: "Laporan Karya Inovasi (LK 4)",
        subtitle: "PDF Document",
        icon: "file-text",
        color: "red",
        href: "#",
      },
      {
        title: "Buku Panduan Penggunaan",
        subtitle: "PDF Document",
        icon: "book-open",
        color: "blue",
        href: "#",
      },
      {
        title: "LKPD Siswa (Terisi)",
        subtitle: "PDF Document",
        icon: "clipboard-list",
        color: "green",
        href: "#",
      },
      {
        title: "Dokumentasi Kegiatan",
        subtitle: "Foto & Video (Drive)",
        icon: "camera",
        color: "purple",
        href: "#",
      },
    ],
  },
  footer: {
    copyright:
      "© 2026 Arudji Hermatyar, S.Kom. — PPG Prajabatan Informatika, Universitas Islam Makassar.",
    sub: "Portofolio Seminar PPG | Karya Inovasi Python Puzzle.",
  },
};

