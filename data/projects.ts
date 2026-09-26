type Project = {
  project_id: string;
  title: string;
  language: string;
  type: string;
  link: string;
  status: "finished" | "undeploy";
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    project_id: "8b3ceb13-d05a-423f-8687-419398e8dd0a",
    title: "Shopify Bliss",
    language: "React JS & Node JS",
    type: "Website",
    link: "https://shopify-bliss.vercel.app",
    status: "finished",
    image: "/image/projects/web_builder.png",
    description:
      "Platform berbasis web yang memungkinkan pengguna membuat situs web secara instan melalui pemilihan tampilan yang tersedia tanpa memerlukan keahlian pemrograman.",
  },

  {
    project_id: "2a3df56a-8882-49aa-9034-f3fc33759c5f",
    title: "Penjualan Batik",
    language: "PHP Native",
    type: "Website",
    link: "-",
    status: "undeploy",
    image: "/image/projects/penjualan_batik.png",
    description:
      "Website e-commerce untuk penjualan batik, dengan proses transaksi melalui pengiriman bukti transfer sebagai metode pembayaran utama.",
  },

  {
    project_id: "c0d3d3c9-940d-4a65-aa6d-279143f4c3d3",
    title: "Goods Warehouse",
    language: "Laravel 10",
    type: "Website",
    link: "https://web-stock.sgp.dom.my.id/",
    status: "finished",
    image: "/image/projects/goods_warehouse.png",
    description:
      "Sistem manajemen pergudangan berbasis Laravel dan SQL dengan autentikasi, dashboard, CRUD produk, log aktivitas pengguna, transaksi, dan perhitungan moving average untuk pengelolaan stok.",
  },

  {
    project_id: "13e8c35a-9dae-4312-82ef-8d460871cdea",
    title: "Safety Management",
    language: "PHP Native",
    type: "Website",
    link: "-",
    status: "undeploy",
    image: "/image/projects/management_safety.png",
    description:
      "Website informasi keselamatan kerja untuk pekerja lapangan yang dilengkapi sistem pelaporan kerusakan agar pekerja dapat melaporkan masalah secara langsung kepada atasan.",
  },

  {
    project_id: "2b2bc158-f35d-40cb-ab9f-8bf58cd94aa7",
    title: "MyEdisi UI",
    language: "HTML & CSS",
    type: "Website",
    link: "https://www.myedisi.com/majalah-sekolah",
    status: "finished",
    image: "/image/projects/myedisi.png",
    description:
      "Pengembangan landing page untuk perusahaan MyEdisi. Tampilan dan fungsionalitas situs kemudian mengalami sejumlah perubahan dan penyesuaian oleh perusahaan.",
  },

  {
    project_id: "7b116bff-0a9c-4a85-b19a-8d75d9976ef6",
    title: "BPKAD Jawa Barat",
    language: "Vue 3",
    type: "Website",
    link: "-",
    status: "undeploy",
    image: "/image/projects/bpkad.png",
    description:
      "Pengembangan frontend landing page BPKAD Jawa Barat menggunakan Vue 3 dengan integrasi dan fetching data dari backend API.",
  },

  {
    project_id: "1e6379df-27c4-436f-a2ee-f818f1612ed4",
    title: "Manual QA Testing",
    language: "Manual Testing",
    type: "Quality Assurance",
    link: "https://accounts.google.com/v3/signin/confirmidentifier?authuser=2&continue=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fu%2F2%2Fd%2F1-5jhqJThOo6O-hheqHyeVNWZ68PDKx6X%2Fedit%3Fgid%3D772874303",
    status: "finished",
    image: "/image/projects/manual_qa.png",
    description:
      "Pengujian manual pada fitur login, pengajuan, verifikasi, penerbitan SP2D, serta validasi alur berbasis peran Operator dan Verifikator. Pengujian didokumentasikan melalui test scenario, hasil pengujian, dan temuan masalah.",
  },
];