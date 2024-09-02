import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<h1>Tareas</h1>} />
          <Route path="/add-task" element={<h1>Nueva Tarea</h1>} />
          <Route path="/tasks:id" element={<h1>Actualizar Tarea</h1>} />
          <Route path="/profile" element={<h1>Perfil</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
