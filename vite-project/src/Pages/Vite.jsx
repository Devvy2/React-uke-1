import { FunFact } from "../components/Content/funfact/Funfact";
import { LayoutBase } from "../Layoutbase/Layoutbase";
import { ProjectCard } from "../components/Content/Projectcard/Projectcard";

export function Vite() {
  return (
    <LayoutBase>
      <section className="funfact">
        <FunFact
          title="Fun facts about Vite"
          facts={[
            "Vite lives up to its name by offering incredibly fast development and build times.",
            "Vite has a powerful plugin system for easy customization.",
            "Vite, created by the Vue.js creator, is versatile and can be used with React and Svelte.",
            "Vite offers Hot Module Replacement (HMR) for instant code updates.",
            "Vite's popularity is steadily growing, and it's embraced by various JavaScript libraries and frameworks.",
          ]}
        />
      </section>
      <section className="cards">
        <ProjectCard
          imgUrl="./images/img1.jpg"
          title="Fast Development with Vite"
          description="Vite lives up to its name by offering incredibly fast development speeds. It leverages ES modules and a lightning-fast dev server to provide near-instantaneous reloads and build times. Say goodbye to long waiting periods and hello to a more efficient development workflow."
        />
        <ProjectCard
          imgUrl="./images/img2.jpg"
          title="Optimized for Modern JavaScript"
          description="Vite is designed with modern JavaScript in mind. It supports ES modules natively, which means you can use import statements to manage your dependencies without bundling. This results in smaller, more efficient code bundles and faster load times for your web applications."
        />
        <ProjectCard
          imgUrl="./images/img3.jpg"
          title="Plugin-Powered Customization"
          description="Vite is highly extensible through its plugin system. You can customize your development environment and build process by adding plugins for tasks like CSS preprocessing, TypeScript support, and more. This flexibility allows you to tailor Vite to your project's specific needs easily."
        />
      </section>
    </LayoutBase>
  );
}
