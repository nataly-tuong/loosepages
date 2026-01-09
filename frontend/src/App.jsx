import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
        radial-gradient(120% 80% at 0% 100%, rgba(120,120,239,0.10), transparent 60%),
        radial-gradient(120% 80% at 100% 100%, rgba(120,120,239,0.10), transparent 60%),
        #0f0f0f
    `,
        }}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
