import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/** Sidebar */}
      <Sidebar />

      {/** Feed */}
      <Feed />

      {/** Widgets */}
      <Widgets />
    </div>
  );
}

export default Home;
