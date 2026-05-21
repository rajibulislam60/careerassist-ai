import Navbar from "./landingpage/Navbar";

export default function ClientLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
