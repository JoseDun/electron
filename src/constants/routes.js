import { Home, Download, Upload } from "../views";

export const ROUTES = {
  HOME: {
    title: "Inicio",
    icon: "🏠",
    path: "/",
    Component: Home,
  },
  Descarga: {
    title: "Descargar",
    icon: "🏠",
    path: "/Descarga",
    Component: Download,
  },
  Upload: {
    title: "Upload",
    icon: "🏠",
    path: "/Upload",
    Component: Upload,
  },
};

export const NAVIGATION_ROUTES = Object.entries(ROUTES).map(([key, value]) => ({
  name: key,
  key,
  ...value,
}));
