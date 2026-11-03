import type { Section } from "./types";

export const sections: Section[] = [
  {
    slug: "etika-dasar",
    title: "Etika Dasar Komunikasi Digital",
    shortTitle: "Etika Dasar",
    description:
      "Prinsip dasar agar komunikasi digital tetap sopan, aman, dan bertanggung jawab.",
    intro:
      "Etika digital adalah nilai dan aturan yang membantu kita berkomunikasi secara sehat di internet. Di ruang digital, kata-kata kita bisa dibaca banyak orang dan tersimpan lama, sehingga etika menjadi sangat penting.",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Prinsip Utama",
      },
      {
        type: "list",
        items: [
          "Empati: bayangkan perasaan orang lain sebelum menulis.",
          "Hormat: gunakan bahasa yang sopan, hindari hinaan.",
          "Kejujuran: sampaikan informasi yang benar dan tidak menyesatkan.",
          "Tanggung jawab: akui kesalahan dan perbaiki.",
          "Privasi: hormati data dan informasi pribadi orang lain.",
        ],
      },
      {
        type: "tip",
        text: "Sebelum mengirim, tanya diri sendiri: 'Apakah saya nyaman jika pesan ini dibaca semua orang?'",
      },
      {
        type: "callout",
        tone: "info",
        title: "Ingat",
        text: "Di internet, ketiadaan tatap muka membuat pesan mudah disalahartikan. Gunakan emoji atau penjelasan tambahan jika perlu.",
      },
      {
        type: "doDont",
        do: [
          "Gunakan salam dan sapaan yang sesuai.",
          "Minta klarifikasi jika tidak yakin.",
          "Ucapkan terima kasih dan maaf.",
        ],
        dont: [
          "Membalas dengan emosi saat marah.",
          "Menyebarkan rumor atau informasi yang belum terverifikasi.",
          "Menggunakan huruf kapital berlebihan (terkesan berteriak).",
        ],
      },
    ],
  },
  {
    slug: "keamanan-akun",
    title: "Keamanan Akun Digital",
    shortTitle: "Keamanan Akun",
    description:
      "Cara menjaga akun dari peretasan, phishing, dan penyalahgunaan.",
    intro:
      "Akun digital adalah identitas kita di internet. Menjaga keamanan akun berarti melindungi data pribadi, reputasi, dan akses ke layanan penting.",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Password yang Kuat",
      },
      {
        type: "list",
        items: [
          "Gunakan minimal 12 karakter dengan kombinasi huruf besar, kecil, angka, dan simbol.",
          "Jangan gunakan ulang password di banyak layanan.",
          "Gunakan password manager untuk menyimpan password.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Autentikasi Dua Faktor (2FA)",
      },
      {
        type: "paragraph",
        text: "Aktifkan 2FA pada email, media sosial, dan layanan penting. 2FA menambah lapisan keamanan meskipun password bocor.",
      },
      {
        type: "callout",
        tone: "warning",
        title: "Waspada Phishing",
        text: "Jangan klik tautan mencurigakan atau membagikan OTP/kode verifikasi kepada siapa pun, termasuk yang mengaku dari layanan resmi.",
      },
      {
        type: "doDont",
        do: [
          "Periksa URL sebelum login.",
          "Keluar dari akun di perangkat publik.",
          "Perbarui aplikasi secara berkala.",
        ],
        dont: [
          "Menyimpan password di catatan yang tidak terenkripsi.",
          "Login melalui Wi-Fi publik tanpa VPN.",
          "Membagikan screenshot yang memuat kode OTP.",
        ],
      },
    ],
  },
  {
    slug: "privasi-data",
    title: "Privasi dan Perlindungan Data",
    shortTitle: "Privasi & Data",
    description:
      "Memahami data pribadi, risiko oversharing, dan cara menjaga privasi online.",
    intro:
      "Data pribadi (PII) seperti nama lengkap, nomor telepon, alamat, dan foto dapat disalahgunakan jika dibagikan sembarangan. Menjaga privasi adalah bagian dari etika digital.",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Apa yang Termasuk Data Pribadi?",
      },
      {
        type: "list",
        items: [
          "Nama lengkap, tanggal lahir, alamat.",
          "Nomor telepon, email, nomor identitas (NIK).",
          "Foto, video, dan informasi keluarga.",
          "Data keuangan dan password.",
        ],
      },
      {
        type: "tip",
        text: "Hindari membagikan lokasi real-time dan dokumen identitas di media sosial.",
      },
      {
        type: "callout",
        tone: "danger",
        title: "Oversharing",
        text: "Sekali data dibagikan, sulit untuk ditarik kembali. Pikirkan dampak jangka panjang sebelum memposting.",
      },
      {
        type: "doDont",
        do: [
          "Atur privasi akun (private/public).",
          "Baca izin aplikasi sebelum menginstal.",
          "Gunakan nama samaran bila perlu.",
        ],
        dont: [
          "Memposting kartu identitas atau tiket.",
          "Membagikan password atau PIN.",
          "Mengizinkan akses yang tidak perlu ke kontak/foto.",
        ],
      },
    ],
  },
  {
    slug: "cyberbullying",
    title: "Cyberbullying dan Ujaran Kebencian",
    shortTitle: "Cyberbullying",
    description:
      "Mengenali, mencegah, dan menangani cyberbullying serta ujaran kebencian.",
    intro:
      "Cyberbullying adalah tindakan intimidasi, pelecehan, atau penghinaan melalui media digital. Dampaknya bisa serius bagi kesehatan mental korban.",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Bentuk Cyberbullying",
      },
      {
        type: "list",
        items: [
          "Komentar menghina atau merendahkan.",
          "Sebaran foto/video tanpa izin.",
          "Ancaman dan intimidasi.",
          "Pengecualian sosial (mengabaikan/dikucilkan online).",
        ],
      },
      {
        type: "callout",
        tone: "danger",
        title: "Dampak",
        text: "Cyberbullying dapat menyebabkan stres, kecemasan, dan depresi. Jangan anggap remeh.",
      },
      {
        type: "doDont",
        do: [
          "Simpan bukti (screenshot).",
          "Blokir pelaku dan laporkan ke platform.",
          "Cari dukungan dari orang terpercaya.",
        ],
        dont: [
          "Membalas dengan kekerasan verbal.",
          "Menyebarkan ulang konten pelecehan.",
          "Menyalahkan korban.",
        ],
      },
      {
        type: "tip",
        text: "Jika melihat cyberbullying, jadilah bystander yang aktif: dukung korban dan laporkan.",
      },
    ],
  },
  {
    slug: "netiquette",
    title: "Netiquette: Tata Krama di Internet",
    shortTitle: "Netiquette",
    description:
      "Aturan tidak tertulis agar interaksi online tetap nyaman dan produktif.",
    intro:
      "Netiquette (network etiquette) adalah etika berkomunikasi di internet. Dengan netiquette yang baik, diskusi menjadi lebih sehat dan menghindari konflik.",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Aturan Dasar Netiquette",
      },
      {
        type: "list",
        items: [
          "Baca konteks sebelum berkomentar.",
          "Gunakan bahasa yang jelas dan tidak ambigu.",
          "Hormati perbedaan pendapat.",
          "Hindari spam dan pesan berulang.",
          "Gunakan emoji secukupnya.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Tone",
        text: "Teks tidak membawa intonasi. Tambahkan penjelasan atau emoji untuk menghindari salah paham.",
      },
      {
        type: "doDont",
        do: [
          "Beri kritik yang konstruktif.",
          "Ucapkan terima kasih saat dibantu.",
          "Minta izin sebelum membagikan konten orang lain.",
        ],
        dont: [
          "Memotong pembicaraan orang lain.",
          "Mengirim pesan berantai (hoax).",
          "Menggunakan CAPSLOCK berlebihan.",
        ],
      },
    ],
  },
  {
    slug: "tanggap-insiden",
    title: "Tanggap Insiden Digital",
    shortTitle: "Tanggap Insiden",
    description:
      "Langkah-langkah saat menghadapi peretasan, kebocoran data, atau cyberbullying.",
    intro:
      "Insiden digital bisa terjadi pada siapa saja. Yang penting adalah respons yang cepat dan tepat untuk meminimalkan dampak.",
    blocks: [
      {
        type: "heading",
        level: 2,
        text: "Jika Akun Diretas",
      },
      {
        type: "list",
        items: [
          "Ganti password segera.",
          "Keluar dari semua sesi/perangkat.",
          "Periksa aktivitas mencurigakan.",
          "Aktifkan 2FA.",
          "Laporkan ke platform.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Jika Menjadi Korban Cyberbullying",
      },
      {
        type: "list",
        items: [
          "Jangan membalas.",
          "Simpan bukti.",
          "Blokir pelaku.",
          "Laporkan ke platform dan pihak berwenang bila perlu.",
          "Cari dukungan (teman, keluarga, konselor).",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Jika Menjadi Saksi",
      },
      {
        type: "list",
        items: [
          "Jangan menyebarkan konten pelecehan.",
          "Dukung korban secara privat.",
          "Laporkan konten yang melanggar.",
        ],
      },
      {
        type: "callout",
        tone: "info",
        title: "Darurat",
        text: "Jika ada ancaman keselamatan, hubungi pihak berwenang setempat segera.",
      },
    ],
  },
];

export function getSection(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug);
}

export const sectionSlugs = sections.map((s) => s.slug);
