// Renders the selected blog post saved in sessionStorage

document.addEventListener("DOMContentLoaded", () => {
  // ensure user session from home.js
  if (typeof checkUserSession === "function") {
    checkUserSession();
  }

  const blog = (() => {
    try {
      return JSON.parse(sessionStorage.getItem("selectedBlog"));
    } catch (e) {
      return null;
    }
  })();

  const container = document.getElementById("blogContent");
  if (!container) return;

  if (!blog || !blog.title) {
    container.innerHTML =
      '<p style="padding:20px;text-align:center;color:var(--muted);">No blog selected.</p>';
    return;
  }

  container.innerHTML = `
    <article class="blog-detail">
      <h1>${blog.title}</h1>
      <span class="meta">By ${blog.user} • ${blog.date}</span>
      <img src="${blog.img}" alt="${blog.title}">
      <p>${blog.desc}</p>
      <div style="margin-top:30px;">
        <a href="blog.html" class="btn ghost">&larr; Back to blogs</a>
      </div>
    </article>
  `;
});
