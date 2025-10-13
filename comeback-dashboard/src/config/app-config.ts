import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "The Comeback Dashboard",
  version: packageJson.version,
  copyright: `© ${currentYear}, The Comeback Dashboard.`,
  meta: {
    title: "The Comeback Dashboard - A Modern Next.js Dashboard Template",
    description:
      "The Comeback Dashboard is a modern, open-source dashboard template built with Next.js 15, Tailwind CSS v4, and shadcn/ui. Perfect for SaaS apps, admin panels, and internal tools—fully customizable and production-ready.",
  },
};
