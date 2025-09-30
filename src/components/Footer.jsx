import React from 'react'

function Footer() {
  return (
    <div>
     <div className="footer">
        <div className="footer-con1">
            <div className="footer-logo"><h1>Restaurant</h1>
            <div className="icon">

            </div>
            </div>

            <div className="footer-ul">
                <h4 id='title'>About</h4>
                <ul>
                    <li>Courses</li>
                    <li>News & Blogs</li>
                    <li>Become a Teacher</li>
                    <li>About Us</li>
                    <li>Events</li>
                    <li>Contact</li>
                </ul>
                
                
            </div>
  
            <div className="footer-ul">
                <h4 id='title'>Quick Link</h4>
                <ul>
                    <li>  Live Workshop</li>
                    <li>Free Courses</li>
                    <li>Addmition</li>
                    <li>Request A Demo</li>
                    <li>Media Relations</li>
                    <li>Students</li>
                </ul>
              </div>
            
            <div className="footer-ul">
                <h4 id='title'>Contact Info</h4>
                <ul>
                    <li>+(964)-2856-3364</li>
                    {/* <li>Info@validtheme.com</li> */}
                </ul>
                
                
            </div>
           

          
        </div>
         <div className="mini-footer">
                <h4>© Copyright 2025. All Rights Reserved by Ryuteck</h4>
            </div>
     </div>
    </div>
  )
}

export default Footer
