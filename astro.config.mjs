import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://microbit-apps.github.io",
  integrations: [
    starlight({
      title: "Micro:bit Apps",
      description: "A collection of engaging applications and tutorials for the BBC micro:bit",
      logo: {
        light: "./src/assets/microbit-logo.svg",
        dark: "./src/assets/microbit-logo-dark.svg",
      },
      social: [
        {
          label: "GitHub",
          href: "https://github.com/microbit-apps/microbit-apps",
          icon: "github",
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            name: "og:type",
            content: "website",
          },
        },
      ],
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Getting Started",
          items: [
            { label: "What is Micro:bit?", link: "/getting-started/intro/" },
            { label: "Set Up Your Device", link: "/getting-started/setup/" },
          ],
        },
        {
          label: "Applications",
          items: [
            { label: "MicroCode", link: "/apps/microcode/" },
            { label: "MicroData", link: "/apps/microdata/" },
          ],
        },
        {
          label: "Extensions",
          items: [
            { label: "Display Shield Extension", link: "/extensions/display-shield/" },
          ],
        },
        {
          label: "Resources",
          items: [
            { label: "Documentation", link: "/resources/docs/" },
            { label: "Tutorials", link: "/resources/tutorials/" },
            { label: "API Reference", link: "/resources/api/" },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
