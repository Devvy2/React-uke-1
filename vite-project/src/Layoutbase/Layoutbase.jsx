import { NavBar } from "../components/Navbar/Navbar";

/**
 *
 * @param {children: React.ReactNode} properties
 *
 */

export function LayoutBase(properties) {
  const { children } = properties;
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>{children}</main>

      <footer>
        <small>© 2023 Joakim development.</small>
      </footer>
    </div>
  );
}
