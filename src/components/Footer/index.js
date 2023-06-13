import React from "react";
import "./index.css";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Footer = () => {
  return ( 
    <footer style={{ position: "relative", backgroundColor: "#58b9ed" }}>
      <div>
        <div className="footer">
          <div className="middle">
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <ul>
                  <li>
                    <h3>Get to Know Us</h3>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Delivery</a>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ul style={{ fontSize: "12px" }}>
                  <li>
                    <h3>Contact Us</h3>
                  </li>
                  <li>
                    <a href="#">
                      Warehouse: 4/426 HA Ganga Nagar, Thuraiyur Road,
                      Namakkal-637002
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Outlet: 3/824-A, Near Ponni gas Godown, Thuraiyur Road,
                      Namakkal-637002
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      91-9043426746 / customer.care@gangasupermarket.com
                    </a>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ul>
                  <li>
                    <h3>Testimonals</h3>
                  </li>
                  <li>
                    <a href="#">
                      Reviews in Google Business ProfileReviews in Google Business
                      Profile
                    </a>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ul>
                  <li>
                    <h3>Newsletter SignUp</h3>
                  </li>
                  <li>
                    <a href="#">
                      Sign up to Our Newsletter & get attractive Offers by
                      subscribing to our newsletters.
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>

            <div>
              <ul className="copy">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Privacy Notice</a>
                </li>
                <li>
                  <a href="#">Return Policy</a>
                </li>
                <li>
                  <a href="#">Shipping & Delivery Policy</a>
                </li>
                <li>
                  <a href="#">Users Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
