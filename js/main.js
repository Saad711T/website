function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-SA', options);
}





function createPostPreview(post) {
    return `
        <article class="post-preview">
            ${post.image ? `
                <a href="/blog/${post.slug}.html" class="post-image-link">
                    <img src="${post.image}" alt="${post.title}" class="post-image">
                </a>
            ` : ''}
            <div class="post-content">
                <time datetime="${post.date}" class="post-date">${formatDate(post.date)}</time>
                <h3 class="post-title">
                    <a href="/blog/${post.slug}.html">${post.title}</a>
                </h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="/blog/${post.slug}.html" class="read-more">قراءة المزيد <i class="fas fa-arrow-left"></i></a>
            </div>
        </article>
    `;
}

function populateFeaturedPosts() {
    const featuredPostsGrid = document.getElementById('featured-posts-grid');
    if (featuredPostsGrid) {
        featuredPostsGrid.innerHTML = posts.map(post => createPostPreview(post)).join('');
    }
}









function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateFeaturedPosts();
    updateCopyrightYear();
});