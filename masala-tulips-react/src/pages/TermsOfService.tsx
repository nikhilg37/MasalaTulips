import React, { useEffect } from 'react';
import '../styles/LegalPages.css';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Terms of Service - Masala Tulips';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of Service for Masala Tulips. Learn about our website usage terms, content policies, and user guidelines.');
    }
  }, []);

  return (
    <div className="legal-page">
      <div className="legal-content">
        <h1>Terms of Service</h1>
        
        <div className="last-updated">
          <strong>Last Updated:</strong> January 1, 2025
        </div>

        <p>Welcome to Masala Tulips. By accessing and using our website at <a href="https://masalatulips.nl">https://masalatulips.nl</a>, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Masala Tulips's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
          <li>Attempt to decompile or reverse engineer any software contained on Masala Tulips's website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <div className="disclaimer">
          <p><strong>Important:</strong> The recipes and cooking information provided on this website are for educational and entertainment purposes only. While we strive to provide accurate and safe cooking instructions, we cannot guarantee the accuracy, completeness, or safety of any recipe or cooking method.</p>
        </div>
        
        <p>The materials on Masala Tulips's website are provided on an 'as is' basis. Masala Tulips makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2>4. Limitations</h2>
        <p>In no event shall Masala Tulips or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Masala Tulips's website, even if Masala Tulips or a Masala Tulips authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

        <h2>5. Accuracy of Materials</h2>
        <p>The materials appearing on Masala Tulips's website could include technical, typographical, or photographic errors. Masala Tulips does not warrant that any of the materials on its website are accurate, complete, or current. Masala Tulips may make changes to the materials contained on its website at any time without notice. However, Masala Tulips does not make any commitment to update the materials.</p>

        <h2>6. Links</h2>
        <p>Masala Tulips has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Masala Tulips of the site. Use of any such linked website is at the user's own risk.</p>

        <h2>7. Modifications</h2>
        <p>Masala Tulips may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>

        <h2>8. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of the Netherlands and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>

        <h2>9. User Conduct</h2>
        <p>You agree not to use the website to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe upon the rights of others</li>
          <li>Transmit harmful, offensive, or inappropriate content</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the proper functioning of the website</li>
        </ul>

        <h2>10. Intellectual Property</h2>
        <p>All content on this website, including but not limited to text, graphics, images, recipes, and software, is the property of Masala Tulips or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.</p>

        <h2>11. Recipe Usage and Safety</h2>
        <p>When using recipes from our website:</p>
        <ul>
          <li>Always follow food safety guidelines</li>
          <li>Check for food allergies and dietary restrictions</li>
          <li>Use proper cooking techniques and equipment</li>
          <li>Ensure ingredients are fresh and properly stored</li>
          <li>Cook food to appropriate temperatures</li>
        </ul>
        <p>We are not responsible for any illness, injury, or adverse reaction that may result from following our recipes.</p>

        <h2>12. Advertising and Third-Party Content</h2>
        <p>Our website may display advertisements from Google AdSense and other third-party advertising networks. These advertisements are provided by third parties and we do not endorse or guarantee the accuracy of any advertising content. By using our website, you acknowledge that:</p>
        <ul>
          <li>Advertisements may use cookies and tracking technologies</li>
          <li>Third-party advertisers may collect information about your browsing habits</li>
          <li>We are not responsible for the content or practices of third-party advertisers</li>
        </ul>

        <h2>13. Privacy</h2>
        <p>Your privacy is important to us. Please review our <a href="/privacy-policy">Privacy Policy</a>, which also governs your use of the website, to understand our practices.</p>

        <h2>14. Termination</h2>
        <p>We may terminate or suspend your access to our website immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2>15. Severability</h2>
        <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>

        <h2>16. Contact Information</h2>
        <div className="contact-info">
          <p>If you have any questions about these Terms of Service, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:masalatulips27@gmail.com">masalatulips27@gmail.com</a></li>
            <li><strong>Website:</strong> <a href="https://masalatulips.nl">https://masalatulips.nl</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 