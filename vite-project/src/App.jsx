import "./App.css";
import { FunFact } from "./components/Content/funfact/Funfact";
import { LayoutBase } from "./Layoutbase/Layoutbase";
import { ProjectCard } from "./components/Content/Projectcard/Projectcard";

function App() {
  return (
    <LayoutBase>
      <section className="funfact">
        <FunFact
          title="Fun facts about React"
          facts={[
            "Was first released in 2013",
            "Was originally created by Jordan Walke",
            "Has well over 100K stars on GitHub",
            "Is maintained by Facebook",
            "Powers thousands of enterprise apps, including mobile apps",
          ]}
        />
      </section>
      <section className="cards">
        <ProjectCard
          imgUrl="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJlYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="React Components:"
          description="React allows you to build user interfaces by breaking them into reusable components. Components are like building blocks for your app, making it easier to manage and maintain your code. Each component can have its own logic and rendering, simplifying complex UI structures."
        />
        <ProjectCard
          imgUrl="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJlYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          title="React Virtual DOM"
          description="React's Virtual DOM is an optimization technique. It creates a lightweight copy of the actual DOM and updates it efficiently. When changes occur, React compares the Virtual DOM with the real DOM, minimizing costly direct manipulations. This results in faster rendering and a smoother user experience."
        />
        <ProjectCard
          imgUrl="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmVhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          title="React State Management"
          description="React provides a built-in way to manage and update the state of your application. By using state, you can control how your components behave and interact with user inputs. State management in React simplifies data handling and ensures your app stays in sync with user actions."
        />
      </section>
    </LayoutBase>
  );
}

export default App;
