import "./App.scss"
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import useMode from "./ustils/zustand";

export default function App() {
  const { darkMode, toggleDarkMode } = useMode();

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} `}>
        <div className="dark:bg-[#121212] dark:text-white duration-300 text-black">
          <Navbar />
          <Footer />
        </div>
      </div>
    </>
  );
}
