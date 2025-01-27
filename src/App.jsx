import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Siderbar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Siderbar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
