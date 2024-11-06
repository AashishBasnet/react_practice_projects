import SideSection from "./components/SideSection";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import noProjectImg from "./assets/no-projects.png";
function App() {
  return (
    <main className="h-screen flex gap-8">
      <SideSection />
      <NoProjectSelected />
      {/* <NewProject />*/}
      {/* <img src={noProjectImg} alt="no-projects" className="" /> */}
    </main>
  );
}

export default App;
