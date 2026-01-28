import { Routes, Route } from "react-router-dom";
import { PublicRoutes } from "./PublicRoutes";

export default function AppRoutes() {
  return (
    <Routes>
      {PublicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}