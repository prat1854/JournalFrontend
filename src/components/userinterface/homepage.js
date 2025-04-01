import React from "react";
import "./styles.css";
import  { useState } from 'react';
import { Link } from "react-router-dom";

// Original Navbar component is kept but not used in the main App export
// This allows the HeaderDemo to still work while avoiding duplicate navigation
const OriginalNavbar = () =>  {
  const [journalDropdown, setJournalDropdown] = useState(false);
  const [authorsDropdown, setAuthorsDropdown] = useState(false);

  return(
    <nav style={{ backgroundColor: '#1E3A8A', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', gap: '15px', fontSize: '15px', fontWeight: 'bold' }}>
        
        {/* JOURNAL OVERVIEW DROPDOWN */}
        <div style={{ position: 'relative' }} onMouseEnter={() => setJournalDropdown(true)} onMouseLeave={() => setJournalDropdown(false)}>
          <button style={{ color: 'white', fontWeight: 'bold', padding: '8px 7px', background: 'none', border: 'none', cursor: 'pointer' }}>
            JOURNAL OVERVIEW ▾
          </button>
          {journalDropdown && (
            <div style={{ position: 'absolute', backgroundColor: 'white', color: 'black', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '6px', padding: '8px', width: '180px' }}>
              <a href="/" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: '#333', cursor: 'pointer' }} 
                onMouseOver={e => e.target.style.backgroundColor = '#E5E7EB'} 
                onMouseOut={e => e.target.style.backgroundColor = 'white'}>About the Journal</a>
               <Link to="/contact" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: '#333' }}>
              Contact
            </Link>
              <Link to="/header-demo" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: '#333' }}
                onMouseOver={e => e.target.style.backgroundColor = '#E5E7EB'} 
                onMouseOut={e => e.target.style.backgroundColor = 'white'}>
                Header Designs
              </Link>
            </div>
          )}
        </div>

        <a href="#" style={{ padding: 5, color: 'white', textDecoration: 'none' }}>ISSUES</a>
        <a href="#" style={{ padding: 5, color: 'white', textDecoration: 'none' }}>EDITORIAL TEAM</a>

        {/* FOR AUTHORS DROPDOWN */}
        <div style={{ position: 'relative' }} onMouseEnter={() => setAuthorsDropdown(true)} onMouseLeave={() => setAuthorsDropdown(false)}>
          <button style={{ color: 'white', fontWeight: 'bold', padding: '8px 16px', background: 'none', border: 'none', cursor: 'pointer' }}>
            FOR AUTHORS ▾
          </button>
          {authorsDropdown && (
            <div style={{ position: 'absolute', backgroundColor: 'white', color: 'black', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '6px', padding: '8px', width: '220px' }}>
              <a href="#" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: '#333', cursor: 'pointer' }} 
                onMouseOver={e => e.target.style.backgroundColor = '#E5E7EB'} 
                onMouseOut={e => e.target.style.backgroundColor = 'white'}>Announcements</a>
              <a href="#" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: '#333', cursor: 'pointer' }} 
                onMouseOver={e => e.target.style.backgroundColor = '#E5E7EB'} 
                onMouseOut={e => e.target.style.backgroundColor = 'white'}>Author Guidelines</a>
              <a href="#" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: '#333', cursor: 'pointer' }} 
                onMouseOver={e => e.target.style.backgroundColor = '#E5E7EB'} 
                onMouseOut={e => e.target.style.backgroundColor = 'white'}>Submission Guidelines</a>
              <a href="#" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: '#333', cursor: 'pointer' }} 
                onMouseOver={e => e.target.style.backgroundColor = '#E5E7EB'} 
                onMouseOut={e => e.target.style.backgroundColor = 'white'}>Research Ethics Guidelines</a>
              <a href="#" style={{ display: 'block', padding: '8px', textDecoration: 'none', color: '#333', cursor: 'pointer' }} 
                onMouseOver={e => e.target.style.backgroundColor = '#E5E7EB'} 
                onMouseOut={e => e.target.style.backgroundColor = 'white'}>Submissions</a>
            </div>
          )}
        </div>

        <a href="#" style={{ padding: 5, color: 'white', textDecoration: 'none', paddingRight: 11 }}>INDEXING & METRICS</a>
        <a href="/login" style={{ padding: 5, color: 'white', textDecoration: 'none', paddingRight: 11 }}>LOGIN</a>
      </div>

      {/* SEARCH BOX */}
      <div style={{ position: 'relative' }}>
        <input type="text" placeholder="Search..." style={{ border: '1px solid #ccc', padding: '8px', borderRadius: '6px', width: '160px' }} />
        <i className="fas fa-search" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }}></i>
      </div>
    </nav>
  );
}

const MainContent = () => (
  <section className="main-content">
    <h1>Aims and Scope</h1>
    <p className="description">
    The Global Journal of Construction Management and Engineering (GJCME) serves as a scholarly platform for advancing knowledge in the fields of construction management and engineering. 
    The GJCME mission is to foster rigorous research and critical discourse in these domains. 
    GJCME invites high-quality original research papers, case studies, 
    and reviews that contribute to both disciplines and their sub-disciplines.
    </p>
    <h2>Coverage includes but is not limited to:</h2>
    <h3>Management Studies</h3>
    <ul>
      <li>Organizational behavior, strategic management, and leadership</li>
      <li>Human resource management, marketing, and operations</li>
      <li>Entrepreneurship, innovation, and business ethics</li>
      <li> management, supply chain, and technology management </li>
    </ul>


    <h3 style={{}} >Legal Studies</h3>

<ul>
  <li>Legal theory, jurisprudence, and comparative law</li>
  <li>Corporate law, contract law, and intellectual property law</li>
  <li>  Human rights, environmental law, and international law</li>
  <li>  Legal ethics, access to justice, and legal reforms</li>
</ul>


<h3>Interdisciplinary Research</h3>
<ul>
   <li> Interdisciplinary perspectives that bridge law and management.</li>
   <li>  Articles exploring the interplay between legal and managerial aspects.</li>
   <li>   Case studies, empirical research, and theoretical contributions.</li>
</ul>


  <h3 className="text-xl font-semibold mt-6">Publication Frequency</h3>
          <p className="text-gray-700">Two volumes per year</p>
        
        <h3 className="text-xl font-semibold mt-6">Language</h3>
        <p className="text-gray-700">English</p>
        
        <h3 className="text-xl font-semibold mt-6">Open Access & Article Processing Charge (APC)</h3>
        <p className="text-gray-700">Global Journal of Construction Management and Engineering provides an open access (OA) publishing option.
           Authors are responsible for paying the associated article processing charge (APC) as outlined below:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>For Indian Author(s):</strong> ₹1000</li>
          <li><strong>For Foreign Author(s):</strong> $15</li>
        </ul>

  </section>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="journal-detail">
      <h2>JOURNAL DETAIL</h2>
      <div className="yellow-line"></div>
      <div className="cover-image" style={{width:"10", height:"10"}} >
        <img src="cover.jpg" alt="Journal Cover" />
      </div>
      <div className="journal-info">
        <p><strong>ISSN:</strong> Applied</p>
        <p><strong>Editor-in-Chief:</strong> Dr Rajeev Kansal</p>
      </div>
    </div>
    <div className="downloads">
      <h2>DOWNLOADS</h2>
      <div className="yellow-line"></div>
      <ul>
        <li><a href="#">Self Declaration Form</a></li>
        <li><a href="#">Conflict of Interest Form</a></li>
        <li><a href="#">Copyright Form</a></li>
      </ul>
    </div>
  </aside>
);

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <div className="footer-info">
        <h3>Global Journal of Construction Management and Engineering</h3>
        <p>A scholarly platform for advancing knowledge at the intersection of management and law.</p>
      </div>
      <div className="footer-contact">
        <h3>Contact</h3>
        <p><a href="mailto:info@lordtechdatus.com" className="text-blue-600">Email: info@lordtechdatus.com</a></p>

        <p>Phone: +91 99817 56433  </p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Global Journal of Construction Management and Engineering. All rights reserved.</p>
    </div>
  </footer>
);

// Modified App component that doesn't include the navbar
// This ensures we don't have duplicate navigation with Header component 
const App = () => (
  <div>
    <main className="container">
      <div className="content-wrapper">
        <MainContent />
        <Sidebar />
      </div>
    </main>
    <Footer />
  </div>
);

export default App;