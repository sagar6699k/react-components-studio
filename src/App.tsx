import "./App.css";
import { ThemeToggle } from "./components/custom/theme/themeToggle";
import AuthLayout from "./components/layout/AuthLayout";

function App() {
  return (
    <div className="relative">
      {/* <div className="fixed top-0 right-0 p-4 bg-amber-200">
        <ThemeToggle />
      </div> */}
      <AuthLayout />
    </div>
  );
}

export default App;
