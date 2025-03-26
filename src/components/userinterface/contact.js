import React from "react";

const Contact = () => {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", backgroundColor: "#F2F2F2" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>LET'S CONNECT</h2>

      {/* Contact Details Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: "50px", textAlign: "center", marginBottom: "40px" }}>
        <div>
          <i className="fas fa-map-marker-alt" style={{ fontSize: "30px", marginBottom: "10px" }}></i>
          <h3 style={{ fontWeight: "bold" }}>OUR MAIN OFFICE</h3>
          <p>G1, Akansha Apartment, Patel Nagar, City Centre, Gwalior, Near Raj Rajeshwari Apartment-474002</p>
        </div>
        <div>
          <i className="fas fa-phone" style={{ fontSize: "30px", marginBottom: "10px" }}></i>
          <h3 style={{ fontWeight: "bold" }}>PHONE NUMBER</h3>
          <p>+91-9319250172</p>
          <p>+91-8077281918</p>
        </div>
        <div>
          <i className="fas fa-envelope" style={{ fontSize: "30px", marginBottom: "10px" }}></i>
          <h3 style={{ fontWeight: "bold" }}>EMAIL</h3>
          <p><a href="mailto:info@lordtechdatus.com" style={{ textDecoration: "none", color: "#333" }}>info@lordtechdatus.com</a></p>
        </div>
      </div>

      {/* Contact Form & Map Section */}
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-start", maxWidth: "1100px", margin: "auto" }}>
        {/* Contact Form */}
        <div style={{ width: "50%" }}>
          <h3 style={{ fontWeight: "bold" }}>GET A FREE CASE EVALUATION TODAY!</h3>
          <p style={{ color: "#555" }}>AVAILABLE 24 HOURS A DAY!</p>
          <form>
            <input type="text" placeholder="Enter your Name" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
            <input type="email" placeholder="Enter a valid email address" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
            <textarea placeholder="Enter your message" style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px", height: "100px" }}></textarea>
            <button type="submit" style={{ padding: "10px 20px", border: "1px solid #000", borderRadius: "5px", cursor: "pointer", backgroundColor: "white" }}>Submit</button>
          </form>
        </div>

        {/* Location Map */}
        <div style={{ width: "45%" }}>
          <h3 style={{ fontWeight: "bold" }}>WE ARE HERE</h3>
          <p style={{ color: "#555" }}>MON-FRI 8:30AM-5PM / PHONES ARE OPEN 24/7</p>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.4591966697801!2d78.18986054509881!3d26.209845939493405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c41cce3cd799%3A0x184f3cb9095a386c!2zQWthbnNoYSBBcGFydG1lbnQgKOCkhuCkleCkvuCkguCktuCkviDgpIXgpKrgpL7gpLDgpY3gpJ_gpK7gpYfgpILgpJ8p!5e1!3m2!1sen!2sin!4v1741986815510!5m2!1sen!2sin"
            width="100%"
            height="250px"
            style={{ border: "0", borderRadius: "5px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: "center", marginTop: "65px", padding: "28px", backgroundColor: "#333", color: "#fff" }}>
        <p>Copyright © Lordtech Datus Salutions, All Rights Reserved.<a href="/" style={{ color: "#ddd", textDecoration: "none" }}>Global Journal of construction management and engineering </a>.</p>
      </footer>
    </div>
  );
};

export default Contact;
