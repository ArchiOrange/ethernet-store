import React from 'react';
import './Footer.css';
function Footer() {
  return(
    <footer className="text-muted">
  <div className="container">
    <p className="float-right">
      <button >Back to top</button>
    </p>
    <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
    <p>New to Bootstrap? <button href="https://getbootstrap.com">Visit the homepage</button> or read our <button href="/docs/4.5/getting-started/introduction/">getting started guide</button>.</p>
  </div>
</footer>
  )
}
export default Footer;
