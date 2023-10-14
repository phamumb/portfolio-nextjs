import "@styles/globals.css";
import NavBar from "@components/NavBar";

export const metadata = {
  title: "Luat Pham's Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className="dark:dark-gray">
        <main className="app ">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
