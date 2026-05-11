import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://microbit-apps.github.io",
  base: "/",
  integrations: [
    starlight({
      title: "micro:bit apps",
      description: "A collection of engaging applications and tutorials for the BBC micro:bit",
      logo: {
        light: "./src/assets/lu-logo-light.png",
        dark: "./src/assets/lu-logo-dark.png",
      },
      social: [
        {
          label: "GitHub",
          href: "https://github.com/microbit-apps",
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
            { label: "What is the BBC micro:bit?", link: "/getting-started/intro/" },
            { label: "Display shields", link: "/getting-started/display-shields/" },
          ],
        },
        {
          label: "MicroCode",
          items: [
            { label: "MicroCode start", link: "/microcode/start/" },
            { label: "The emotion badge program", link: "/microcode/emotion-badge/" },
            { label: "Create a new program", link: "/microcode/create/" },
            { label: "When an event occurs...", link: "/microcode/when/" },
            { label: "Do an action...", link: "/microcode/do/" }
          ],
        },
        {
          label: "MicroData",
          items: [
            { label: "MicroData start", link: "/microdata/start/" },
            { label: "MicroData guide", link: "/microdata/guide/" },

            {
              label: "Experiments",
              items: [
                { label: "Magnetometer location", link: "/microdata/magnetometer_location/" },
                { label: "Magnetic field strength and distance", link: "/microdata/magnetism_and_distance/" },
                { label: "Light and filtering", link: "/microdata/light/" },
                { label: "Micro:bit drop", link: "/microdata/microbit-drop" },
              ]
            }
          ],
        },
        {
          label: "Extensions",
          items: [
            { label: "Display shield extension", link: "/extensions/display-shield-ext/" },
          ],
        },
        {
          label: "Making a micro:bit app",
          items: [
            { label: "Overview", link: "/example/example/" },
            { label: "Setup", link: "/example/setup/" },
            { label: "Example app", link: "/example/example-app/" },
            { label: "Using MicroGUI", link: "/example/microgui" },
            { label: "Using C++", link: "/example/using-cpp" },
          ],
        },

        {
          label: "Resources",
          items: [
            { label: "Display shield UI", link: "/resources/display-shield-ui" },
            { label: "Troubleshooting", link: "/resources/troubleshooting/" },
            { label: "FAQ", link: "/resources/faq/" },
          ],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
  redirects: {
    '/microcode': '/microcode/start',
    '/microdata': '/microdata/start',
  },
});
