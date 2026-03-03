// ===== USER AUTHENTICATION CHECK =====
function checkUserSession() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // If no user is logged in, redirect to login
  if (!currentUser) {
    alert('Please login to access this page');
    window.location.href = 'login.html';
    return false;
  }
  
  // Display user name in navbar
  const userNameEl = document.getElementById('userName');
  if (userNameEl) {
    userNameEl.textContent = 'Welcome, ' + currentUser.name;
  }
  
  return true;
}

// Handle logout
function setupLogout() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
      }
    });
  }
}

// Check session when page loads
document.addEventListener('DOMContentLoaded', () => {
  checkUserSession();
  setupLogout();
});

// /* DARK MODE */
// const toggle = document.querySelector(".toggle");
// toggle.onclick = () => {
//   document.body.classList.toggle("dark");
//   toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
// };

// /* GSAP ANIMATIONS */
// gsap.from(".nav",{y:-60,opacity:0,duration:0.8});
// gsap.from(".card",{y:40,opacity:0,stagger:0.2,duration:1});
// gsap.from(".sidebar",{x:40,opacity:0,duration:1});
// /* BASE SIDEBAR DATA */


const blogs = [
 {
  user:"Kabir Sharma",
  title:"Learning to Love Again After Heartbreak",
  desc:"Healing takes time, but self-love rebuilds what pain once broke. ",
  likes:"98k",
  comments:"2.1k",
  date:"Feb 18 · 4 min read",
  img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
},
{
  user:"Emily Johnson",
  title:"When Letting Go Becomes Self-Respect",
  desc:"Sometimes closure is choosing yourself over chaos. Read more...",
  likes:"76k",
  comments:"1.9k",
  date:"Mar 2 · 3 min read",
  img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
},
{
  user:"Arjun Mehta",
  title:"The Silent Pain of Almost Relationships",
  desc:"Not every love story gets a proper ending. Read more...",
  likes:"110k",
  comments:"4.2k",
  date:"Jan 11 · 6 min read",
  img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
},
{
  user:"Sophia Martinez",
  title:"Why Moving On Feels So Heavy",
  desc:"Because your heart remembers what your mind is trying to forget. Read more...",
  likes:"89k",
  comments:"2.7k",
  date:"Feb 9 · 5 min read",
  img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400"
},
{
  user:"Rohan Verma",
  title:"From Attachment to Independence",
  desc:"Love taught me depth, heartbreak taught me strength. Read more...",
  likes:"95k",
  comments:"3.1k",
  date:"Mar 14 · 4 min read",
  img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
},
{
  user:"Isabella Brown",
  title:"The Beauty of Emotional Growth",
  desc:"Pain reshapes us into wiser versions of ourselves. Read more...",
  likes:"72k",
  comments:"1.3k",
  date:"Jan 30 · 4 min read",
  img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"
},
{
  user:"Vivaan Kapoor",
  title:"Late Night Thoughts After Goodbye",
  desc:"It’s quiet, but the memories are loud. Read more...",
  likes:"120k",
  comments:"5.4k",
  date:"Feb 22 · 5 min read",
  img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
},
{
  user:"Olivia Wilson",
  title:"Healing Isn’t a Straight Line",
  desc:"Some days feel strong, others feel fragile — both are valid. Read more...",
  likes:"83k",
  comments:"2.2k",
  date:"Mar 1 · 4 min read",
  img:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400"
},
{
  user:"Aditya Rao",
  title:"Why Closure Comes From Within",
  desc:"Waiting for answers only delays peace. Read more...",
  likes:"67k",
  comments:"1.8k",
  date:"Feb 3 · 3 min read",
  img:"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400"
},
{
  user:"Liam Anderson",
  title:"Lessons My Heart Didn’t Want",
  desc:"Growth often hides inside discomfort. Read more...",
  likes:"74k",
  comments:"2.6k",
  date:"Jan 25 · 5 min read",
  img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400"
},
{
  user:"Ananya Iyer",
  title:"Choosing Myself Was Hard",
  desc:"But staying in pain was harder. Read more...",
  likes:"105k",
  comments:"3.8k",
  date:"Feb 27 · 4 min read",
  img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400"
},
{
  user:"Noah Thomas",
  title:"Love That Taught Me Boundaries",
  desc:"Not every goodbye is a failure. Read more...",
  likes:"59k",
  comments:"1.4k",
  date:"Mar 6 · 4 min read",
  img:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400"
},
{
  user:"Ishaan Malhotra",
  title:"From Broken to Becoming",
  desc:"Every crack let the light in. Read more...",
  likes:"92k",
  comments:"2.9k",
  date:"Feb 12 · 6 min read",
  img:"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400"
},
{
  user:"Mia Davis",
  title:"When Memories Hurt the Most",
  desc:"Because they once meant everything. Read more...",
  likes:"87k",
  comments:"2.5k",
  date:"Jan 17 · 5 min read",
  img:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400"
},
{
  user:"Krishna Nair",
  title:"Why I Stopped Chasing Love",
  desc:"Peace feels better than proving my worth. Read more...",
  likes:"99k",
  comments:"3.3k",
  date:"Mar 9 · 4 min read",
  img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
},
{
  user:"Ava Taylor",
  title:"The Strength in Walking Away",
  desc:"Sometimes distance is the real cure. Read more...",
  likes:"70k",
  comments:"1.7k",
  date:"Feb 6 · 3 min read",
  img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"
},
{
  user:"Siddharth Joshi",
  title:"Understanding My Own Heart",
  desc:"I learned what I truly deserve. Read more...",
  likes:"84k",
  comments:"2.1k",
  date:"Jan 29 · 5 min read",
  img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
},
{
  user:"Lucas Miller",
  title:"Goodbye Was My Turning Point",
  desc:"It hurt, but it helped me grow. Read more...",
  likes:"63k",
  comments:"1.2k",
  date:"Feb 20 · 4 min read",
  img:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400"
},
{
  user:"Meera Kulkarni",
  title:"Healing in Small Steps",
  desc:"Tiny progress is still progress. Read more...",
  likes:"101k",
  comments:"3.5k",
  date:"Mar 3 · 4 min read",
  img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
},
{
  user:"Ethan Walker",
  title:"Why Time Doesn’t Erase Everything",
  desc:"But it does make it lighter. Read more...",
  likes:"58k",
  comments:"1.1k",
  date:"Jan 14 · 4 min read",
  img:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400"
}
,
  {
    user:"Raj",
    title:"Why Broken Hearts Make You Stronger",
    desc:"Sometimes love leaves quietly, and sometimes it shatters you.But every heartbreak teaches boundaries, self-worth, and emotional strength. Healing isn’t linear — it’s powerful.Read more...",
    likes:"120k",
    comments:"3.5k",
    date:"Feb 14 · 5 min read",
    img:"download.jfif"
  },
  {
    user:"Steve",
    title:"Why Developers Love Dark Mode",
    desc:"Dark mode isn’t just aesthetic — it’s functional. frameworks aren’t needed everywhere. They speed development, add structure, Read more...",
    likes:69,
    comments:1,
    date:"Jan 20 · 4 min read",
    img:"earth.png"
  },
  {
    user:"Aarav",
    title:"How I Write Cleaner JavaScript",
    desc:"Readable code beats clever code every time. Read more...",
    likes:102,
    comments:6,
    date:"Feb 1 · 6 min read",
    img:"https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    user:"Neha",
    title:"CSS Tricks That Changed My Life",
    desc:"Small CSS tricks, massive UI improvements. Read more...",
    likes:88,
    comments:3,
    date:"Mar 5 · 5 min read",
    img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    user:"Rahul",
    title:"React vs Vanilla JS in 2026",
    desc:"Do we really need frameworks everywhere? > frameworks aren’t needed everywhere. They speed development, add structure, Read more...",
    likes:150,
    comments:12,
    date:"Apr 12 · 7 min read",
    img:"https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
  },
  {
    user:"Priya",
    title:"How I Stay Consistent With Coding",
    desc:"Motivation fades, systems don’t.Read more...",
    likes:61,
    comments:2,
    date:"May 8 · 4 min read",
    img:"eee.jpg"
  }
];

// Limit to reasonable number and remove duplication for faster loading
const currentList = blogs.slice(0, 15); // Show only 15 blogs initially
let allBlogs = blogs;
let displayedCount = 15;
const BLOGS_PER_PAGE = 5;

const feed = document.getElementById("blogFeed");
const searchInput = document.getElementById("searchInput");

function renderBlogs(blogsToRender) {
  feed.innerHTML = '';
  if(blogsToRender.length === 0) {
    feed.innerHTML = '<p style="padding: 20px; text-align: center; color: var(--muted);">No blogs found. Try another search!</p>';
    return;
  }
  
  // Use DocumentFragment for efficient DOM manipulation (MUCH FASTER!)
  const fragment = document.createDocumentFragment();
  
  blogsToRender.forEach(blog => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div>
        <span class="meta">${blog.user}</span>
        <h2>${blog.title}</h2>
        <p>${blog.desc}</p>

        <div class="actions">
          <button class="action-btn">❤️ <span>${blog.likes}</span></button>
          <button class="action-btn">💬 <span>${blog.comments}</span></button>
          <button class="action-btn">🔗</button>
        </div>

        <div class="meta">${blog.date}</div>
      </div>

      <img src="${blog.img}" loading="lazy">
    `;
    fragment.appendChild(card);
  });
  
  feed.appendChild(fragment);
}

function searchBlogs() {
  const query = searchInput.value.toLowerCase().trim();

  if (query === '') {
    renderBlogs(currentList.slice(0, displayedCount));
    return;
  }

  const filtered = allBlogs.filter(blog =>
    blog.title.toLowerCase().includes(query) ||
    blog.desc.toLowerCase().includes(query) ||
    blog.user.toLowerCase().includes(query)
  );

  renderBlogs(filtered);
}

// Lazy load more blogs on scroll
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
    if (displayedCount < currentList.length) {
      displayedCount += BLOGS_PER_PAGE;
      renderBlogs(currentList.slice(0, displayedCount));
    }
  }
});

// Allow Enter key to trigger search
searchInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    searchBlogs();
  }
});

// ===== SIDEBAR: TRENDING BLOGS =====
function renderTrendingBlogs() {
  const trendingSection = document.getElementById('trendingSection');
  
  // Convert likes to numbers for sorting
  const blogsWithNumbers = allBlogs.map(blog => ({
    ...blog,
    likesNum: parseInt(blog.likes) || 0
  }));
  
  // Sort by likes (descending) and get top 5
  const trending = blogsWithNumbers
    .sort((a, b) => b.likesNum - a.likesNum)
    .slice(0, 5);
  
  let html = '<h3>🔥 Trending</h3>';
  trending.forEach(blog => {
    html += `
      <div class="pick">
        <h4>${blog.title.substring(0, 40)}...</h4>
        <span>❤️ ${blog.likes} • 💬 ${blog.comments}</span>
        <span style="color: var(--muted); font-size: 12px;">by ${blog.user}</span>
      </div>
    `;
  });
  
  trendingSection.innerHTML = html;
}

// ===== SIDEBAR: RECENT BLOGS =====
function renderRecentBlogs() {
  const recentSection = document.getElementById('recentSection');
  
  // Get last 5 blogs (assuming they're added at the end)
  const recent = allBlogs.slice(-5).reverse();
  
  let html = '<h3>📅 Recent Posts</h3>';
  recent.forEach(blog => {
    html += `
      <div class="pick">
        <h4>${blog.title.substring(0, 40)}...</h4>
        <span>${blog.date}</span>
        <span style="color: var(--muted); font-size: 12px;">by ${blog.user}</span>
      </div>
    `;
  });
  
  recentSection.innerHTML = html;
}

// Initial render (show only 15 blogs first)
renderBlogs(currentList);
renderTrendingBlogs();
renderRecentBlogs();