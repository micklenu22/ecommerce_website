const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
        <a href="index.html">
            <img src="img/logo.png" class="brand-logo" alt="">
            </a>
            <div class="nav-items">                
                
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="women.html" class="link">Women</a></li>
            <li class="link-item"><a href="men.html" class="link">Men</a></li>            
            <li class="link-item"><a href="blog.html" class="link">Blog</a></li>
        </ul>
    `;
}

createNav();