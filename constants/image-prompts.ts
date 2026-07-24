import type { ImagePromptAsset } from "@/types";

// Drop the generated image at each `src` path under /public; PromptImage falls back to a placeholder until it exists.
export const IMAGE_PROMPTS: Record<string, ImagePromptAsset> = {
  hero: {
    id: "hero",
    src: "/images/hero.png",
    alt: "Illustration of a premium technology workspace with software dashboards",
    prompt:
      "Ultra realistic 3D illustration of a premium technology company workspace, elegant business environment with floating software interfaces, ERP dashboard, CRM, financial analytics, cloud computing, automation panels, desktop computer, laptop and smartphone displaying modern UI, futuristic yet minimalist workspace, white background, subtle navy blue, emerald green and gold accents, luxury SaaS aesthetic, clean composition, soft shadows, premium lighting, Apple Keynote style, Stripe inspired, Vercel inspired, high-end web agency illustration, ultra realistic, photorealistic, 8K, cinematic lighting, 16:9",
  },
  about: {
    id: "about",
    src: "/images/about.png",
    alt: "Business professionals discussing digital transformation strategy",
    prompt:
      "Modern digital consulting office, business professionals discussing digital transformation strategies in front of interactive screens, elegant architecture, premium meeting room, workflow diagrams, software planning, innovation, technology consulting, clean white office, sophisticated furniture, realistic lighting, minimal corporate environment, Apple-inspired design language, luxury business atmosphere, ultra realistic, photorealistic, highly detailed, 8K, cinematic lighting, 16:9",
  },
  "sistemas-personalizados": {
    id: "sistemas-personalizados",
    src: "/images/services/sistemas-personalizados.png",
    alt: "Custom business software displayed on premium monitors",
    prompt:
      "Ultra realistic custom business software displayed on multiple premium monitors, ERP system, CRM interface, inventory management, financial dashboards, workflow automation, elegant UI, modern office desk, white workspace, premium technology environment, floating interface elements, clean composition, luxury SaaS presentation, realistic reflections, photorealistic, Apple aesthetic, Stripe inspired, 8K, cinematic lighting, 16:9",
  },
  "aplicativos-personalizados": {
    id: "aplicativos-personalizados",
    src: "/images/services/aplicativos-personalizados.png",
    alt: "Premium mobile application showcased on floating smartphones",
    prompt:
      "Premium mobile application showcased on floating smartphones, modern UI, elegant interface design, fintech style application, productivity app, smooth gradients, luxury mobile software presentation, realistic devices, white premium environment, glass reflections, subtle green and navy accents, Apple presentation style, ultra realistic, photorealistic, clean minimal composition, 8K, cinematic lighting, 16:9",
  },
  "sites-profissionais": {
    id: "sites-profissionais",
    src: "/images/services/sites-profissionais.png",
    alt: "Responsive website displayed across desktop, laptop, tablet and phone",
    prompt:
      "Modern responsive website displayed on desktop monitor, laptop, tablet and smartphone, premium landing page, corporate website, beautiful typography, elegant UI, realistic Apple devices, luxury office environment, white background, subtle shadows, minimal corporate presentation, clean composition, Stripe inspired, Apple keynote style, photorealistic, ultra realistic, 8K, cinematic lighting, 16:9",
  },
  "sistemas-em-excel": {
    id: "sistemas-em-excel",
    src: "/images/services/sistemas-em-excel.png",
    alt: "Professional Excel dashboard with interactive charts and KPIs",
    prompt:
      "Professional Microsoft Excel dashboard with interactive charts, financial reports, KPIs, business analytics, VBA automation, inventory control, cash flow dashboard, premium spreadsheet interface displayed on widescreen monitor, modern office workspace, white background, elegant lighting, clean minimal design, realistic monitor, luxury corporate software presentation, photorealistic, ultra realistic, 8K, cinematic lighting, 16:9",
  },
  portfolio: {
    id: "portfolio",
    src: "/images/portfolio.png",
    alt: "Collection of premium digital projects on floating mockups",
    prompt:
      "Collection of premium digital projects displayed on elegant floating mockups including ERP software, mobile applications, websites, dashboards and automation systems, modern presentation boards, luxury business portfolio showcase, white background, premium corporate branding, sophisticated technology agency, realistic lighting, Apple presentation style, clean composition, ultra realistic, photorealistic, 8K, cinematic lighting, 16:9",
  },
  stats: {
    id: "stats",
    src: "/images/stats.png",
    alt: "Business analytics visualization with floating KPI cards",
    prompt:
      "Business analytics visualization with floating KPI cards, financial graphs, growth indicators, business metrics, percentages, interactive dashboards, premium UI, elegant glassmorphism effects, white background, realistic shadows, luxury SaaS presentation, subtle green and navy accents, sophisticated technology environment, ultra realistic, photorealistic, Apple inspired, 8K, cinematic lighting, 16:9",
  },
  process: {
    id: "process",
    src: "/images/process.png",
    alt: "Workflow illustration of four connected business stages",
    prompt:
      "Modern workflow illustration representing four connected business stages: discovery, planning, development and delivery, elegant digital timeline, floating UI cards connected by glowing lines, premium technology environment, clean white background, realistic lighting, luxury software development concept, Apple keynote style, sophisticated business presentation, ultra realistic, photorealistic, 8K, cinematic lighting, 16:9",
  },
  team: {
    id: "team",
    src: "/images/team.png",
    alt: "Software development team discussing architecture in a modern office",
    prompt:
      "Professional software development team in a premium modern office, CEO and CTO discussing software architecture on large interactive display, elegant business clothing, technology company environment, realistic office furniture, white interior, minimal corporate workspace, luxury consulting company atmosphere, sophisticated lighting, photorealistic, ultra realistic, Apple inspired, 8K, cinematic lighting, 16:9",
  },
  cta: {
    id: "cta",
    src: "/images/cta.png",
    alt: "Futuristic digital transformation concept with glowing network connections",
    prompt:
      "Futuristic digital transformation concept with glowing network connections, floating software interfaces, elegant technology workspace, premium business atmosphere, abstract cloud computing visualization, white environment with subtle emerald green, navy blue and gold accents, luxury SaaS branding illustration, clean composition, realistic lighting, photorealistic, ultra realistic, Apple keynote style, 8K, cinematic lighting, 16:9",
  },
  contact: {
    id: "contact",
    src: "/images/contact.png",
    alt: "Premium workspace with laptop, smartphone and online contact form",
    prompt:
      "Premium corporate workspace featuring laptop, smartphone, notebook and elegant online contact form displayed on monitor, modern office desk, sophisticated business consulting environment, white background, luxury technology company, realistic lighting, clean minimal composition, professional communication concept, Apple-inspired aesthetic, ultra realistic, photorealistic, 8K, cinematic lighting, 16:9",
  },
  footer: {
    id: "footer",
    src: "/images/footer.png",
    alt: "Elegant abstract technology background with subtle geometric lines",
    prompt:
      "Elegant abstract technology background with subtle geometric lines, premium digital network, soft gradients, luxury corporate branding, white background with navy blue and emerald green accents, minimal futuristic composition, realistic lighting, sophisticated SaaS aesthetic, Apple keynote style, Stripe inspired, Vercel inspired, photorealistic quality, ultra realistic, 8K, cinematic lighting, 16:9",
  },
};
