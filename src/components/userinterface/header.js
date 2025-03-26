import { useState } from "react"
import { IoIosSearch } from "react-icons/io"
import "../userinterface/header.css"
import "../userinterface/homepage"



// Custom Image Component
const CustomImage = ({ src, alt, width, height, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-lg shadow-sm ${className}`}
    />
  );
};

// Custom Link Component
const CustomLink = ({ href, children }) => {
  return (
    <a href={href} className="text-blue-600 hover:underline">
      {children}
    </a>
  );
};

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-blue-500 text-white py-4 px-8 flex justify-between items-center">
        {/* Left Side - University Logo and Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="" className="h-16" style={{ width: 60, paddingLeft: 30, marginBottom: 4 }} />
          <div style={{ fontSize: 10, textAlign: "center" }}>
            <h1 className="text-2xl font-bold">Lord Tech Datus</h1>
            <p className="text-sm mt-1">GWALIOR</p>
          </div>
        </div>

        {/* Center - Journal Title */}
        <h2 className="text-3xl font-bold">Global journal of construction management and Engineering</h2>

        {/* Right Side - JMLR Logo */}
        <img src="/jmlr-logo.png" alt="Journal Logo" className="h-16" />
      </div>

      {/* Navigation Bar */}
      <nav
        style={{
          backgroundColor: "#1e40af",
          color: "white",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Menu Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ position: "relative", marginLeft: "10px" }}>
            <button
              style={{ fontWeight: "bold", cursor: "pointer", background: "none", border: "none", color: "white" }}
              onClick={() => toggleDropdown("journalOverview")}
            >
              JOURNAL OVERVIEW ▾
            </button>
            {dropdownOpen === "journalOverview" && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  background: "white",
                  color: "black",
                  width: "200px",
                  borderRadius: "5px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  zIndex: "10",
                }}
              >
                <a href="#" style={{ display: "block", padding: "8px 16px", textDecoration: "none", color: "black" }}>About the Journal</a>
                <a href="#" style={{ display: "block", padding: "8px 16px", textDecoration: "none", color: "black" }}>Contact</a>
              </div>
            )}
          </div>

          <a href="#" style={{ fontWeight: "bold", textDecoration: "none", color: "white", padding: "8px 12px" }}>ISSUES</a>
          <a href="#" style={{ fontWeight: "bold", textDecoration: "none", color: "white", padding: "8px 12px" }}>EDITORIAL TEAM</a>
          <a href="#" style={{ fontWeight: "bold", textDecoration: "none", color: "white", padding: "8px 12px" }}>INDEXING & METRICS</a>
          <a href="#" style={{ fontWeight: "bold", textDecoration: "none", color: "white", padding: "8px 12px" }}>LOGIN</a>
        </div>

        <div style={{ position: "relative", display: "inline-block" }}>
          <input type="text" placeholder="Search..." style={{ padding: "8px 30px 8px 10px", borderRadius: "5px", border: "1px solid #ccc", width: "150px", outline: "none" }} />
          <IoIosSearch style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", color: "#999", cursor: "pointer" }} />
        </div>
      </nav>

      {/* Main Content Below Header */}



    </>
  );         
}
