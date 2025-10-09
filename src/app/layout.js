import "./globals.css";
import NavBar from "../components/NavBar/NavBar.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
