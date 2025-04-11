import React, {useEffect} from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content">
      <div className="footer-info">
        <h3>Global Journal of Construction Management and Engineering</h3>
        <p>A premier scholarly platform for advancing knowledge in construction management and engineering, fostering rigorous research and critical discourse in these vital fields.</p>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p><a href="mailto:info@lordtechdatus.com">Email: info@lordtechdatus.com</a></p>
        <p style={{fontSize:18 , fontWeight:500}} >Phone: +91 99817 56433</p>
        <p>Address: G1, Akansha Apartment, Patel Nagar, City Centre, Gwalior, Near Raj Rajeshwari Apartment , 474002</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Global Journal of Construction Management and Engineering. All rights reserved.</p>
    </div>
  </footer>
);

const AuthorGuidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="container">
        <div className="content-wrapper">
          <section className="main-content">
            <h1>✍️ Author Guidelines</h1>
            <p className="description">
              The Global Journal of Construction Management and Engineering invites original, high-quality research papers, review articles, and technical notes in the field of Civil Engineering. Submissions must be unpublished and not under consideration elsewhere.
            </p>
            
            <h2>📑 Manuscript Categories</h2>
            <ul>
              <li>Original Research Articles (3000–5000 words)</li>
              <li>Review Articles (4000–6000 words)</li>
              <li>Technical Notes / Case Studies (1500–4000 words)</li>
              <li>Short Communications (up to 2500 words)</li>
            </ul>

            <h2>🛠️ Manuscript Preparation</h2>
            <p className="description">
              All manuscripts must strictly follow the article template available on the journal's official website. Submissions that do not adhere to the template will be returned for revision before being considered for peer review.
            </p>

            <h2>🧾 Plagiarism Policy</h2>
            <p className="description">
              Manuscripts must have a plagiarism level below 15%, excluding references. Submissions will be screened using [Turnitin/iThenticate/other software].
            </p>

            <h2>🔄 Peer Review Process</h2>
            <p className="description">
              All submissions undergo double-blind peer review by at least two independent experts. The average turnaround time is 4–6 weeks.
            </p>

            <h2>💡 Submission Process</h2>
            <p className="description">
              Submit manuscripts via our online portal: [submission link]<br />
              For any queries, assistance, or technical support during the submission process, please contact the editorial office:<br />
              Dr. Prateek Bajpayee<br />
              Editorial Coordinator<br />
              Email: 
            </p>

            <h2>📢 Publishing Ethics</h2>
            <p className="description">
              The journal adheres to the guidelines of COPE (Committee on Publication Ethics). Authors must declare any conflicts of interest and obtain ethical approval where necessary.
            </p>

            <h2>📝 Article Processing Charges (APC)</h2>
            <p className="description">
              We follow a full open access policy with no submission or publication fees, ensuring free and unrestricted access to all published content.
            </p>
          </section>
          
          <aside className="sidebar">
            <div className="journal-detail">
              <h2>Journal Information</h2>
              <div className="yellow-line"></div>
              <div className="cover-image">
                <img src="cover.jpg" alt="Journal Cover" />
              </div>
              <div className="journal-info">
                <p><strong>ISSN:</strong>0975-9972</p>
                <p><strong>Editor-in-Chief:</strong> Dr. Rajeev Kansal</p>
              </div>
            </div>
            
            <div className="downloads">
              <h2>Author Resources</h2>
              <div className="yellow-line"></div>
              <ul>
                <li><Link to="/author-guidelines">Author Guidelines</Link></li>
                <li><Link to="/submission-template">Submission Template</Link></li>
                <li><a href="/copyright.pdf" target="_blank">Copyright Form</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AuthorGuidelines; 