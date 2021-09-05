(() => {
    const pathname = window.location.pathname;
    let relLocation;
    if (pathname === "/index.html") {
        relLocation = '.';
    } else {
        relLocation = '../';
    }
    document.querySelector('header').innerHTML = `
    <div class="cover"></div>
    <img src="${relLocation}/images/profile.png" alt="profile image" id="profile">
    <nav>
        <ul>
            <li><a href="${relLocation}/index.html">Home</a></li>
            <li><a href="${relLocation}/pages/about.html">About</a></li>
            <div class="dropdown">
                <a class="dropbtn">Homework
                    <i class="fa fa-angle-down"></i>
                </a>
                <div class="dropdown-content">
                    <li><a href="${relLocation}/pages/pie.html">Recipe</a></li>
                    <li><a href="${relLocation}/pages/tmnt.html">Movie</a></li>
                    <li><a href="${relLocation}/pages/grade.html">Grade</a></li>
                    <li><a href="${relLocation}/pages/signup.html">Sign up</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a href="${relLocation}/pages/tip.html">Tip Calculator</a></li>
                    <li><a href="${relLocation}/buggy/buggyjs.html">Buggy Js</a></li>
                    <li><a href="${relLocation}/pages/decoratemytext.html">Decorate Text</a></li>
                </div>
            </div>
        </ul>
    </nav>
    `
})();


