
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
      "A web-based platform that allows users to instantly create websites by selecting from available templates without requiring any programming skills.",
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
      "An e-commerce website for selling batik products, featuring a transaction process where customers submit proof of bank transfer as the primary payment method.",
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
      "A warehouse management system built with Laravel and SQL, featuring authentication, a dashboard, product CRUD operations, user activity logs, transactions, and moving average calculations for inventory management.",
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
      "An occupational safety information website for field workers, equipped with a damage reporting system that allows workers to directly report issues to their supervisors.",
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
      "Development of a landing page for MyEdisi. The website's design and functionality were subsequently modified and adjusted by the company.",
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
      "Frontend development of the BPKAD West Java landing page using Vue 3, including backend API integration and data fetching.",
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
      "Manual testing of login, submission, verification, SP2D issuance, and role-based workflow validation for Operator and Verifier roles. Testing activities were documented through test scenarios, test results, and identified issues.",
  },

  {
    project_id: "1f2e3c4-5b6a-4d7e-8f9a-0b1c2d3e4f5g",
    title: "Anime Website",
    language: "Next JS",
    type: "Website",
    link: "-",
    status: "undeploy",
    image: "/image/projects/rezzkai.png",
    description:
      "A website developed using Next.js for anime streaming, utilizing the Wajik-Anime API to retrieve anime content.",
  },
];
