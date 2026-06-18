// ==========================================================================
// MOCK DATA: PRE-POPULATED FINANCIAL BRIEFINGS
// ==========================================================================
const DEFAULT_POSTS = [
  {
    id: 'post-1',
    title: 'The Anatomy of a Short Squeeze: Risk Metrics and Market Dynamics',
    excerpt: 'An in-depth analysis of how retail momentum, high short interest, and broker liquidation thresholds collide to create explosive short squeezes.',
    content: 'In the ecosystem of financial markets, few phenomena are as dramatic or as violent as a short squeeze. For retail traders, it represents the ultimate David-vs-Goliath victory; for institutional hedge funds, it is a catastrophic tail-risk event. But beneath the social media hype and emotional narratives lies a precise set of mechanics driven by liquidity constraints, leverage, and risk management systems.\n\nTo understand a short squeeze, we must first understand short selling. When an investor shorts a stock, they borrow shares and sell them, hoping to buy them back later at a lower price. Because the potential loss on a short position is theoretically infinite (a stock price can rise indefinitely), brokers impose strict margin requirements. If a shorted stock rises, the seller\'s losses mount, and they must either deposit more collateral or buy back the stock to close the position. This forced buying is the fuel for a squeeze.\n\n#### The Key Metrics of Squeeze Identification\n\nIdentifying a potential short squeeze involves tracking three critical metrics:\n\n1. **Short Interest (SI) % of Float**: The percentage of a stock\'s tradeable shares that are currently shorted. An SI above 20% is considered high and makes a stock a potential candidate.\n2. **Short Interest Ratio (Days to Cover)**: Calculated as total shorted shares divided by average daily trading volume. This tells us how many days it would take short sellers to exit their positions under normal volume conditions. A ratio above 5 indicates high exit friction.\n3. **Cost to Borrow (CTB)**: The annualized interest rate charged by brokers to borrow the shares. In highly shorted stocks, CTB can skyrocket from a standard 1% to over 100%. High CTB burns short sellers\' capital daily, forcing them to exit sooner.\n\n#### The Liquidation Chain Reaction\n\nWhen a catalyst—such as an earnings beat, a product announcement, or concentrated retail buying—forces the stock price up, the short sellers with the lowest margin thresholds are margin-called first. To cover their losses, they place market buy orders. This buying pressure drives the price higher, hitting the liquidation limits of the next tier of short sellers.\n\nThis creates a self-reinforcing loop: higher prices trigger more liquidations, which trigger more buy orders, driving the price exponentially higher. In the 2021 GameStop event, this feedback loop pushed the stock from under $20 to over $480 in a matter of weeks, highlighting the immense power of order book dynamics when liquidity evaporates. For traders, recognizing these risk parameters is essential for both capturing upside and avoiding ruin.',
    category: 'analysis',
    author: 'Aria Sterling',
    authorRole: 'Chief Market Analyst',
    date: 'Jun 17, 2026',
    readTime: 8,
    featured: true,
    comments: [
      { name: 'Marcus K.', text: 'Excellent structural breakdown. People often ignore the Cost to Borrow metric, but it is the ultimate indicator of short seller pressure.', date: '1 hour ago' },
      { name: 'Nikhil R.', text: 'What tools do you recommend for finding live CTB data? Most retail brokers do not show this clearly.', date: '12 hours ago' }
    ]
  },
  {
    id: 'post-2',
    title: 'Candlestick Mastery: A Technical Trader\'s Guide to Price Action',
    excerpt: 'Unpacking the psychological signals behind standard candlestick shapes, support levels, and volume confirmations.',
    content: 'Charts are the language of the market, and candlesticks are its alphabet. Developed in the 18th century by Japanese rice merchants to track price momentum, candlesticks provide a visual representation of market psychology over a given timeframe. Unlike simple line charts that show only closing prices, a candlestick captures four essential data points: Open, High, Low, and Close (OHLC).\n\nBy reading the relationship between these four numbers, traders can decode the balance of power between buyers (bulls) and sellers (bears) without needing complex indicators.\n\n#### Decoding the Anatomy: Body vs. Wicks\n\nThe filled portion of the candle is the body, representing the distance between the open and the close. If the close is higher than the open, the candle is green (bullish); if the close is lower, it is red (bearish). The thin lines extending from the top and bottom are the wicks (or shadows), indicating the high and low prices reached during the period.\n\n1. **Long Body, Short Wicks**: Suggests strong, sustained momentum. A long green candle indicates buyers dominated from start to finish.\n2. **Small Body, Long Wicks**: Indicates high volatility but indecision. Both bulls and bears pushed prices significantly, but the market closed near where it opened. This is often called a Doji.\n3. **Hammer and Shooting Star**: Reversal patterns. A Hammer has a small body at the top and a long lower wick, signaling that sellers pushed prices down, but buyers stepped in aggressively to drive it back up before the close. Conversely, a Shooting Star features a long upper wick, showing that buyers ran out of steam, and sellers took control.\n\n#### The Crucial Role of Volume Confirmation\n\nA candlestick pattern is only as strong as the volume supporting it. A Hammer forming at a key support level is a moderate bullish signal; a Hammer accompanied by 3x average volume is a high-probability trading signal. Volume represents commitment. If price action changes on low volume, it is likely a trap. As you build your charting skills, always combine candlestick geometry with volume analysis to confirm market structural shifts.',
    category: 'strategies',
    author: 'Julian Veldt',
    authorRole: 'Lead Technical Strategist',
    date: 'Jun 15, 2026',
    readTime: 5,
    featured: false,
    comments: [
      { name: 'Sarah Miller', text: 'Classic price action rules are still the most reliable. Indicators just lag the candles anyway.', date: '2 days ago' }
    ]
  },
  {
    id: 'post-3',
    title: 'Navigating Rising Inflation: Capital Preservation & Defensive Equities',
    excerpt: 'How macroeconomic shifts impact sector valuations, and where capital flows during periods of persistent rate hikes.',
    content: 'For over a decade, central banks maintained low interest rates and high liquidity, creating a golden era for growth stocks. Tech companies with distant earnings promises soared, as capital was cheap. But when inflation emerged from its long slumber, central banks responded with aggressive rate hikes. This macroeconomic shift reshaped the valuation landscape, forcing investors to pivot from growth to capital preservation.\n\nWhen interest rates rise, the present value of future cash flows decreases. This disproportionately impacts high-multiple growth stocks because their peak earnings are projected far into the future. Cash-flow-generative defensive companies, however, become highly valuable.\n\n#### Defining Defensive Characteristics\n\nInvestors looking to preserve capital in high-rate environments focus on three defensive business characteristics:\n\n1. **Pricing Power**: The ability to raise prices in line with inflation without losing customers. Consumer staples (like food and hygiene products) and utilities hold strong pricing power because their demand is inelastic.\n2. **Strong Balance Sheets**: High-debt companies suffer when debt must be rolled over at higher interest rates. Defensive investing prioritizes low debt-to-equity ratios and high cash reserves.\n3. **Dividend Yields**: Solid, recurring dividends provide a steady return that helps offset inflation, acting as an anchor for stock portfolios when capital gains are flat.\n\n#### The Value Rotation\n\nThe transition from growth to value is not a sign of market death, but rather a healthy rotation. While tech giants may experience multiple compression, financials (which benefit from higher interest margins) and energy sectors often lead. By aligning your portfolio allocation with macroeconomic realities, you turn rate hikes from a portfolio threat into a strategic entry point.',
    category: 'macro',
    author: 'Elena Rostova',
    authorRole: 'Global Macro Strategist',
    date: 'Jun 12, 2026',
    readTime: 6,
    featured: false,
    comments: [
      { name: 'Liam Hughes', text: 'Great sector breakdown. Defensive stocks might be boring, but they let you sleep at night in these markets.', date: '3 days ago' }
    ]
  },
  {
    id: 'post-4',
    title: 'Bitcoin and the Halving Cycle: A Mathematical Supply Shock',
    excerpt: 'Analyzing the block reward halving mechanics and historical pricing patterns surrounding digital asset cycles.',
    content: 'In traditional finance, central banks can print currency at will, diluting purchasing power. Bitcoin was designed as the antithesis to this system, introducing a mathematically programmed, fixed supply of 21 million coins. To distribute this supply gradually, the rate at which new Bitcoins are created is cut in half every 210,000 blocks—roughly every four years. This event, known as "The Halving," is a fundamental supply shock that historically drives digital asset bull runs.\n\nWhen Bitcoin launched in 2009, miners received 50 BTC per block. Today, after multiple halvings, that reward has shrunk to a fraction of a coin, significantly reducing daily selling pressure from miners who must sell coins to cover electricity costs.\n\n#### The Supply Shock Equation\n\nAccording to basic economic principles, if supply decreases while demand remains constant or increases, price must rise. The Halving creates a literal supply shock:\n\n* **Pre-Halving**: Daily emission of coins is high, meaning miners supply a steady stream of liquidity to exchanges.\n* **Post-Halving**: The daily supply flow is cut by 50% overnight. If institutional demand (via ETFs or retail accumulation) remains steady, buy orders exceed available supply, driving prices upward.\n\n#### Historical Precedents and Cautions\n\nHistorically, Bitcoin has followed a predictable four-year cycle post-halving:\n\n1. **Accumulation Phase**: 6-12 months leading up to the halving, characterized by sideways consolidation and quiet accumulation.\n2. **Parabolic Run**: 12-18 months post-halving, where supply limits meet peak market FOMO, leading to new all-time highs.\n3. **Bear Market**: A steep correction phase where over-leveraged traders are flushed out, and the price drops 70-80% from its peak.\n\nWhile this cycle has repeated three times, past performance is never a guarantee. As institutional capital enters the market, Bitcoin behaves increasingly like a traditional risk asset, influenced by macro interest rates and global liquidity index shifts. Understanding the supply mechanics is critical, but trading it requires careful risk sizing.',
    category: 'crypto',
    author: 'Marcus Thorne',
    authorRole: 'Digital Assets Analyst',
    date: 'Jun 09, 2026',
    readTime: 7,
    featured: false,
    comments: []
  }
];

// ==========================================================================
// DYNAMIC SVG VECTOR GENERATORS (Lightweight CSS alternative to cover images)
// ==========================================================================
function getPostVisualSVG(category) {
  switch (category) {
    case 'analysis':
      return `
        <svg class="market-vector-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.04)" stroke-dasharray="4 4" />
          <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.04)" stroke-dasharray="4 4" />
          <line x1="0" y1="140" x2="400" y2="140" stroke="rgba(255,255,255,0.04)" stroke-dasharray="4 4" />
          <line x1="80" y1="0" x2="80" y2="200" stroke="rgba(255,255,255,0.04)" stroke-dasharray="4 4" />
          <line x1="180" y1="0" x2="180" y2="200" stroke="rgba(255,255,255,0.04)" stroke-dasharray="4 4" />
          <line x1="280" y1="0" x2="280" y2="200" stroke="rgba(255,255,255,0.04)" stroke-dasharray="4 4" />
          
          <line x1="50" y1="80" x2="50" y2="150" stroke="#ef4444" stroke-width="1.5" />
          <rect x="44" y="95" width="12" height="40" fill="#ef4444" rx="2" />
          
          <line x1="120" y1="60" x2="120" y2="130" stroke="#10b981" stroke-width="1.5" />
          <rect x="114" y="70" width="12" height="45" fill="#10b981" rx="2" />
          
          <line x1="200" y1="40" x2="200" y2="110" stroke="#10b981" stroke-width="1.5" />
          <rect x="194" y="50" width="12" height="50" fill="#10b981" rx="2" />
          
          <line x1="270" y1="60" x2="270" y2="140" stroke="#ef4444" stroke-width="1.5" />
          <rect x="264" y="80" width="12" height="35" fill="#ef4444" rx="2" />
          
          <line x1="340" y1="20" x2="340" y2="90" stroke="#10b981" stroke-width="1.5" />
          <rect x="334" y="30" width="12" height="45" fill="#10b981" rx="2" />
          
          <path d="M 50 125 Q 120 85 200 65 T 340 35" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" filter="drop-shadow(0px 0px 4px rgba(16,185,129,0.5))" />
        </svg>
      `;
      
    case 'strategies':
      return `
        <svg class="market-vector-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.03)" />
          <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.03)" />
          
          <path d="M 0 160 C 100 130 150 50 250 80 T 400 30" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round" />
          <path d="M 0 140 C 80 120 180 90 280 85 T 400 50" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" />
          
          <circle cx="230" cy="74" r="5" fill="#10b981" filter="drop-shadow(0px 0px 5px #10b981)" />
          <text x="210" y="60" fill="#10b981" font-size="9" font-family="var(--font-primary)" font-weight="bold">BUY CROSS</text>
          
          <path d="M 0 170 L 60 140 L 120 155 L 180 80 L 240 70 L 300 110 L 360 40 L 400 25" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.3" />
        </svg>
      `;
      
    case 'crypto':
      return `
        <svg class="market-vector-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.2">
            <line x1="60" y1="40" x2="140" y2="70" stroke="#06b6d4" stroke-width="1" />
            <line x1="140" y1="70" x2="100" y2="150" stroke="#06b6d4" stroke-width="1" />
            <line x1="100" y1="150" x2="60" y2="40" stroke="#06b6d4" stroke-width="1" />
            
            <line x1="340" y1="50" x2="280" y2="100" stroke="#06b6d4" stroke-width="1" />
            <line x1="280" y1="100" x2="330" y2="150" stroke="#06b6d4" stroke-width="1" />
            
            <circle cx="60" cy="40" r="3" fill="#06b6d4" />
            <circle cx="140" cy="70" r="3" fill="#06b6d4" />
            <circle cx="100" cy="150" r="3" fill="#06b6d4" />
            <circle cx="340" cy="50" r="3" fill="#06b6d4" />
            <circle cx="280" cy="100" r="3" fill="#06b6d4" />
            <circle cx="330" cy="150" r="3" fill="#06b6d4" />
          </g>
          
          <g filter="drop-shadow(0px 0px 10px rgba(6,182,212,0.4))">
            <polygon points="200,45 245,70 245,120 200,145 155,120 155,70" fill="rgba(6,182,212,0.08)" stroke="#06b6d4" stroke-width="2" />
            <path d="M 193 72 L 206 72 C 211 72 214 75 214 79 C 214 82 211 85 207 85 L 193 85 Z M 193 85 L 208 85 C 213 85 216 88 216 92 C 216 97 212 100 207 100 L 193 100 Z" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <line x1="198" y1="65" x2="198" y2="107" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" />
            <line x1="204" y1="65" x2="204" y2="107" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" />
          </g>
        </svg>
      `;
      
    case 'macro':
      return `
        <svg class="market-vector-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="170" x2="350" y2="60" stroke="rgba(245,158,11,0.15)" stroke-width="1.5" stroke-dasharray="5 5" />
          <line x1="50" y1="130" x2="380" y2="20" stroke="rgba(245,158,11,0.15)" stroke-width="1.5" stroke-dasharray="5 5" />
          
          <rect x="60" y="120" width="10" height="50" fill="rgba(245,158,11,0.25)" rx="1" />
          <rect x="110" y="105" width="10" height="65" fill="rgba(245,158,11,0.25)" rx="1" />
          <rect x="160" y="80" width="10" height="90" fill="rgba(245,158,11,0.25)" rx="1" />
          <rect x="210" y="75" width="10" height="95" fill="rgba(245,158,11,0.3)" rx="1" />
          <rect x="260" y="55" width="10" height="115" fill="rgba(245,158,11,0.4)" rx="1" />
          <rect x="310" y="40" width="10" height="130" fill="#f59e0b" rx="1" />
          
          <path d="M 40 155 L 90 145 L 140 100 L 190 115 L 240 75 L 290 85 L 340 35 L 375 25" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" filter="drop-shadow(0px 0px 6px rgba(245,158,11,0.6))" />
          <path d="M 363 23 L 377 24 L 375 38" fill="none" stroke="#f59e0b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      `;
      
    default:
      return `
        <svg class="market-vector-svg" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 150 L 120 100 L 220 130 L 380 40" fill="none" stroke="var(--accent-color)" stroke-width="2" />
        </svg>
      `;
  }
}

function getAuthorAvatarHTML(authorName) {
  const initials = authorName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  return `<div class="text-avatar">${initials}</div>`;
}

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
let posts = [];
let currentFilter = 'all';
let currentSearchQuery = '';

// ==========================================================================
// DOM ELEMENT SELECTIONS
// ==========================================================================
const postsGrid = document.getElementById('posts-grid');
const heroSection = document.getElementById('hero-section');
const filterChips = document.querySelectorAll('.filter-chip');
const postsTitle = document.getElementById('posts-title');
const postsCount = document.getElementById('posts-count');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
const mobileSearchInput = document.getElementById('mobile-search-input');
const btnClearSearch = document.getElementById('btn-clear-search');
const logoLink = document.getElementById('logo-link');

// Theme Elements
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const htmlElement = document.documentElement;

// Mobile Menu Elements
const mobileToggle = document.getElementById('mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');

// Modals
const readerModal = document.getElementById('reader-modal');

// Close Buttons
const btnCloseReader = document.getElementById('btn-close-reader');

// Forms & Inputs
const createPostForm = document.getElementById('create-post-form');

// Footer Category links
const footerCategoryLinks = document.querySelectorAll('.footer-category-link');

// ==========================================================================
// APP INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initPosts();
  
  // Parse category query parameter if on index.html
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get('cat');
  if (catParam && ['analysis', 'strategies', 'crypto', 'macro'].includes(catParam)) {
    currentFilter = catParam;
    if (filterChips && filterChips.length > 0) {
      filterChips.forEach(c => {
        if (c.getAttribute('data-category') === catParam) c.classList.add('active');
        else c.classList.remove('active');
      });
    }
  }

  setupEventListeners();
  renderApp();
});

// ==========================================================================
// THEME IMPLEMENTATION (DARK / LIGHT)
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('marketpulse_theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('marketpulse_theme', newTheme);
}

// ==========================================================================
// DATABASE / POSTS LOGIC
// ==========================================================================
function initPosts() {
  const storedPosts = localStorage.getItem('marketpulse_posts');
  if (storedPosts) {
    try {
      posts = JSON.parse(storedPosts);
    } catch (e) {
      console.error("Failed to parse stored posts. Reverting to default.", e);
      posts = [...DEFAULT_POSTS];
      savePostsToStorage();
    }
  } else {
    posts = [...DEFAULT_POSTS];
    savePostsToStorage();
  }
}

// Ensure database updates
function savePostsToStorage() {
  localStorage.setItem('marketpulse_posts', JSON.stringify(posts));
}

// ==========================================================================
// RENDERING ENGINES
// ==========================================================================
function renderApp() {
  const homePreviewGrid = document.getElementById('home-preview-grid');
  
  // 1. Homepage Logic
  if (homePreviewGrid) {
    const featuredPost = DEFAULT_POSTS.find(p => p.featured) || DEFAULT_POSTS[0];
    if (heroSection) {
      if (featuredPost) {
        heroSection.innerHTML = createHeroHTML(featuredPost);
        heroSection.classList.remove('hidden');
      } else {
        heroSection.classList.add('hidden');
      }
    }
    
    // Preview the latest 3 posts (excluding the featured one) from DEFAULT_POSTS
    const featuredId = featuredPost ? featuredPost.id : null;
    const previewPosts = DEFAULT_POSTS.filter(p => p.id !== featuredId).slice(0, 3);
    
    homePreviewGrid.innerHTML = previewPosts.map(post => createCardHTML(post)).join('');
    return;
  }

  // 2. Blog page logic
  if (postsGrid) {
    const filteredPosts = posts.filter(post => {
      const matchesCategory = currentFilter === 'all' || post.category === currentFilter;
      
      const query = currentSearchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);
        
      return matchesCategory && matchesSearch;
    });

    if (filteredPosts.length === 0) {
      postsGrid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (postsCount) postsCount.textContent = `Showing 0 articles`;
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      postsGrid.innerHTML = filteredPosts.map(post => createCardHTML(post)).join('');
      if (postsCount) postsCount.textContent = `Showing ${filteredPosts.length} article${filteredPosts.length === 1 ? '' : 's'}`;
    }
    
    // Update section title based on filter
    if (postsTitle) {
      if (currentSearchQuery) {
        postsTitle.textContent = `Search Results for "${currentSearchQuery}"`;
      } else if (currentFilter !== 'all') {
        postsTitle.textContent = `${capitalize(currentFilter)} Coverage`;
      } else {
        postsTitle.textContent = `Latest Intelligence`;
      }
    }
  }
}

// HTML Generator: Featured Hero Card
function createHeroHTML(post) {
  return `
    <div class="hero-card" onclick="openArticleReader('${post.id}')" role="button" tabindex="0">
      <div class="hero-visual-wrapper">
        <div class="hero-visual visual-gradient-${post.category}">
          ${getPostVisualSVG(post.category)}
        </div>
        <div class="hero-card-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="post-meta-row">
          <span class="category-tag">${post.category}</span>
          <span class="date-text"><i class="far fa-calendar-alt"></i> ${post.date}</span>
          <span class="read-time"><i class="far fa-clock"></i> ${post.readTime} min read</span>
        </div>
        <h1 class="hero-title">${post.title}</h1>
        <p class="hero-excerpt">${post.excerpt}</p>
        <div class="author-row">
          ${getAuthorAvatarHTML(post.author)}
          <div>
            <div class="author-name">${post.author}</div>
            <div class="author-role">${post.authorRole || 'Contributor'}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// HTML Generator: Blog Post Card
function createCardHTML(post) {
  return `
    <article class="post-card" onclick="openArticleReader('${post.id}')" role="button" tabindex="0">
      <div class="post-card-visual-wrapper">
        <div class="post-card-visual visual-gradient-${post.category}">
          ${getPostVisualSVG(post.category)}
        </div>
      </div>
      <div class="post-card-content">
        <div class="post-meta-row">
          <span class="category-tag">${post.category}</span>
          <span class="read-time"><i class="far fa-clock"></i> ${post.readTime} min read</span>
        </div>
        <h3 class="post-card-title">${post.title}</h3>
        <p class="post-card-excerpt">${post.excerpt}</p>
        <div class="post-card-footer">
          ${getAuthorAvatarHTML(post.author)}
          <div>
            <div class="author-name" style="font-size:0.85rem;">${post.author}</div>
            <div class="date-text" style="font-size:0.75rem;">${post.date}</div>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ==========================================================================
// MODAL WORKFLOWS
// ==========================================================================

// --- Open Article Reader ---
window.openArticleReader = function(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;

  const modalContent = readerModal.querySelector('.post-reader-content');
  
  const paragraphs = post.content.split('\n\n').map(p => {
    if (p.startsWith('####')) {
      return `<h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--text-primary); margin: 30px 0 15px 0;">${p.replace('####', '').trim()}</h4>`;
    }
    return `<p style="margin-bottom: 20px;">${p.replace(/\n/g, '<br>')}</p>`;
  }).join('');

  modalContent.innerHTML = `
    <article class="post-reader-article">
      <header class="post-reader-header">
        <div class="post-reader-meta">
          <span class="category-tag">${post.category}</span>
          <span class="date-text"><i class="far fa-calendar-alt"></i> ${post.date}</span>
          <span class="read-time"><i class="far fa-clock"></i> ${post.readTime} min read</span>
        </div>
        <h1 class="post-reader-title">${post.title}</h1>
        <div class="author-row" style="margin-top: 24px;">
          ${getAuthorAvatarHTML(post.author)}
          <div>
            <div class="author-name" style="font-size:1.05rem;">${post.author}</div>
            <div class="author-role">${post.authorRole || 'Contributor'}</div>
          </div>
        </div>
      </header>
      
      <div class="post-reader-visual-wrapper">
        <div class="post-reader-visual visual-gradient-${post.category}">
          ${getPostVisualSVG(post.category)}
        </div>
      </div>
      
      <div class="post-reader-body" style="border-bottom: none; padding-bottom: 0; margin-bottom: 0;">
        ${paragraphs}
      </div>
    </article>
  `;

  // Display modal
  readerModal.classList.add('open');
  document.body.style.overflow = 'hidden'; // Lock scrolling
};

function closeReaderModal() {
  if (readerModal) readerModal.classList.remove('open');
  document.body.style.overflow = '';
}

if (createPostForm) {
  createPostForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const category = document.getElementById('post-category').value;
    const readTime = parseInt(document.getElementById('post-read-time').value) || 5;
    const excerpt = document.getElementById('post-excerpt').value.trim();
    const content = document.getElementById('post-content').value.trim();
    
    const authorEl = document.getElementById('post-author');
    const authorRoleEl = document.getElementById('post-author-role');
    const author = authorEl ? authorEl.value.trim() : 'MarketPulse Analyst';
    const authorRole = authorRoleEl ? authorRoleEl.value.trim() : 'Analyst';

    // Create date string
    const now = new Date();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateStr = `${months[now.getMonth()]} ${String(now.getDate()).padStart(2, '0')}, ${now.getFullYear()}`;

    const newPost = {
      id: `post-${Date.now()}`,
      title,
      excerpt,
      content,
      category,
      author: author || 'MarketPulse Analyst',
      authorRole: authorRole || 'Analyst',
      date: dateStr,
      readTime,
      featured: false,
      comments: []
    };

    posts.unshift(newPost);
    savePostsToStorage();

    if (window.location.pathname.includes('publish.html')) {
      window.location.href = 'blog.html';
    } else {
      renderApp();
      createPostForm.reset();
    }
  });
}

// ==========================================================================
// MOBILE MENU LOGIC
// ==========================================================================
function toggleMobileMenu() {
  if (mobileToggle && mobileNav) {
    mobileToggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  }
}

function closeMobileMenu() {
  if (mobileToggle && mobileNav) {
    mobileToggle.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================================================
// EVENT LISTENERS & ROUTING
// ==========================================================================
function setupEventListeners() {
  // Navigation Category Chips
  if (filterChips && filterChips.length > 0) {
    filterChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        currentFilter = chip.getAttribute('data-category');
        
        currentSearchQuery = '';
        if (searchInput) searchInput.value = '';
        if (mobileSearchInput) mobileSearchInput.value = '';

        renderApp();
      });
    });
  }

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderApp();
    });
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderApp();
    });
  }

  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', () => {
      currentSearchQuery = '';
      if (searchInput) searchInput.value = '';
      if (mobileSearchInput) mobileSearchInput.value = '';
      renderApp();
    });
  }

  // Logo Reset
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      
      // If we are on a subpage, navigate back to index.html
      if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
        window.location.href = 'index.html';
        return;
      }
      
      currentFilter = 'all';
      currentSearchQuery = '';
      if (searchInput) searchInput.value = '';
      if (mobileSearchInput) mobileSearchInput.value = '';
      if (filterChips && filterChips.length > 0) {
        filterChips.forEach(c => {
          if (c.getAttribute('data-category') === 'all') c.classList.add('active');
          else c.classList.remove('active');
        });
      }
      renderApp();
    });
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
  if (mobileToggle) mobileToggle.addEventListener('click', toggleMobileMenu);

  // Close Modals
  if (btnCloseReader) btnCloseReader.addEventListener('click', closeReaderModal);

  window.addEventListener('click', (e) => {
    if (e.target === readerModal) {
      closeReaderModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReaderModal();
      closeMobileMenu();
    }
  });
}

// ==========================================================================
// UTILITY FUNCTIONS
// ==========================================================================
function capitalize(str) {
  if (!str) return '';
  if (str === 'crypto') return 'Cryptocurrency';
  if (str === 'macro') return 'Macro Economy';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
