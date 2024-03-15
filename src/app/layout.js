import "./globals.css";

export const metadata = {
  title: "Car racing game",
  description: "This is a car racing game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
