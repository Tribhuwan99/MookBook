
    function postBlog() {
      const heading = document.getElementById("heading").value;
      const author = document.getElementById("author").value;
      const date = document.getElementById("date").value;
      const content = document.getElementById("content").value;

      if (!heading || !author || !date || !content) {
        alert("Please fill out all fields.");
        return;
      }

      const blogSection = document.getElementById("blogDisplay");

      const blogPost = document.createElement("div");
      blogPost.className = "blog-post";
      blogPost.innerHTML = `
        <h2>${heading}</h2>
        <div class="meta">By ${author} · ${date}</div>
        <p>${content.replace(/\n/g, '<br>')}</p>
      `;

      blogSection.prepend(blogPost);

      // Clear form
      document.getElementById("heading").value = '';
      document.getElementById("author").value = '';
      document.getElementById("date").value = '';
      document.getElementById("content").value = '';
    }