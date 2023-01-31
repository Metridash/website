import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className="containers">
      <div className="flex">
        <div>
          <ul>
            <h2>Metridash</h2>
            <li>Agencies</li>
            <li>Marketers</li>
            <li>Journalist</li>
            <li>Executives</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Product</h2>
            <li>Track Analytics</li>
            <li>Real-Time Monitoring</li>
            <li>Competitor Research</li>
            <li>Social Media Optimization</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Platforms</h2>
            <li>Twitter Analytics</li>
            <li>Instagram Analytics</li>
            <li>Facebook Analytics</li>
            <li>Linkedin Analytics</li>
            <li>Youtube Analytics</li>
            <li>Media Monitoring</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Features</h2>
            <li>Hashtag Tracking</li>
            <li>Social Media Reporting</li>
            <li>Social Media Account Monitiring</li>
            <li>Publishing & Scheduling</li>
            <li>Social Media Analytics API</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Company</h2>
            <li>Features</li>
            <li>Resources</li>
            <li>Pricing</li>
            <li>Enterprise</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="horizontal_rule" />
        <div className="flex">
          <h2 className="below-heading">Metridash</h2>
          <p className="copyright_para">Copyright &copy; Medridash 2020. All rights reserved.</p>
          <div className="logos">
            <i class="icon fa-brands fa-twitter"></i>
            <i class="icon fa-brands fa-linkedin-in"></i>
            <i class="icon fa-brands fa-facebook-f"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer