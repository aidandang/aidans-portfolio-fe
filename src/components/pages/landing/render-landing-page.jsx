import React from 'react';

function RenderLandingPage() {
  return <>
    {/* Header */}
    <header id="header">
      <h1>Eventually</h1>
      <p>A simple template for telling the world when you'll launch<br />
      your next big thing. Brought to you by <a href="http://html5up.net">HTML5 UP</a>.</p>
    </header>

    {/* Footer */}
    <footer id="footer">
      <ul class="icons">
        <li><a href="/" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="/" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="/" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
        <li><a href="/" class="icon fa-envelope"><span class="label">Email</span></a></li>
      </ul>
      <ul class="copyright">
        <li>&copy; Untitled.</li><li>Credits: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </footer>
  </>
}

export default RenderLandingPage;
