// جافاسكريبت مخيسة

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-SA', options);
}

function createPostPreview(post) {
    return `
        <article class="post-preview" onclick="window.open('${post.slug}', '_blank')">
            ${post.image ? `
                <div class="post-image-link">
                    <img src="${post.image}" alt="${post.title}" class="post-image">
                </div>
            ` : ''}
            <div class="post-content">
                <time datetime="${post.date}" class="post-date">${formatDate(post.date)}</time>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <span class="read-more">قراءة المزيد <i class="fas fa-arrow-left"></i></span>
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
