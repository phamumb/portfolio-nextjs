import "@styles/globals.css";
import NavBar from "@components/NavBar";
import DarkModeToggle from "@components/DarkModeToggle";

export const metadata = {
  title: "Luat Pham",
  description: "Luat Pham's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className="dark:bg-dark-gray">
        <main className="app">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
