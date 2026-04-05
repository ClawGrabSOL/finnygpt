const NAV_ITEMS = [
  { label: 'Home',        href: 'news-home.html' },
  { label: 'Local',       href: 'local.html' },
  { label: 'Agriculture', href: 'agriculture.html' },
  { label: 'Schools',     href: 'schools.html' },
  { label: 'Sports',      href: 'sports.html' },
  { label: 'Opinion',     href: 'opinion.html' },
  { label: 'Weather',     href: 'weather.html' },
  { label: 'Obituaries',  href: 'obituaries.html' },
  { label: 'Classifieds', href: 'classifieds.html' },
];

const DATE_STR  = 'Sunday, April 6, 2025';
const VOL_STR   = 'Vol. XXXVIII, No. 14';
const PRICE_STR = 'Print Edition · 75¢';

function buildSite(activeHref) {
  // TOP BAR
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="top-bar">
      <a href="news-home.html">Subscribe</a><span>|</span>
      <a href="news-home.html">e-Edition</a><span>|</span>
      <a href="obituaries.html">Obituaries</a><span>|</span>
      <a href="classifieds.html">Classifieds</a><span>|</span>
      ${DATE_STR}
    </div>
    <div class="masthead">
      <div class="masthead-kicker">Est. 1987 · Serving Harlan County Since the Beginning</div>
      <div class="masthead-name"><a href="news-home.html" style="text-decoration:none;color:inherit">The Harlan County Courier</a></div>
      <div class="masthead-sub">LOCAL NEWS · AGRICULTURE · COMMUNITY · SPORTS</div>
      <div class="masthead-meta">
        <span>${VOL_STR}</span>
        <span>${DATE_STR}</span>
        <span>${PRICE_STR}</span>
      </div>
    </div>
    <div class="nav">
      <div class="nav-inner">
        ${NAV_ITEMS.map(n => `<a href="${n.href}" class="nav-item${n.href === activeHref ? ' active' : ''}">${n.label}</a>`).join('')}
      </div>
    </div>
  `);

  // FOOTER
  document.body.insertAdjacentHTML('beforeend', `
    <div class="site-footer">
      <strong>The Harlan County Courier</strong><br/>
      114 Main Street, Harlan, KY 40831 &nbsp;·&nbsp; (606) 555-0142 &nbsp;·&nbsp; <a href="#">news@harlancouriernews.com</a><br/>
      © 2025 Harlan County Courier. All rights reserved. Reproduction without permission is prohibited.
    </div>
  `);
}
