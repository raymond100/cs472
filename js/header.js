(() => {
    const pathname = window.location.pathname;
    const host = window.location.host;
    let relLocation;
    if (host === "127.0.0.1:5500") {
        if (pathname === "/index.html") {
            relLocation = './pages';
        } else {
            relLocation = '../pages';
        }
    } else {
        if (pathname === "/index.html") {
            relLocation = 'cs472/pages';
        } else {
            relLocation = 'cs472/..';
        }
    }
    document.querySelector('header').innerHTML = `
    <div class="cover"></div>
    <img src="${relLocation}/../images/profile.png" alt="profile image" id="profile">
    <nav>
        <ul>
            <li><a href="${relLocation}/../index.html">Home</a></li>
            <li><a href="${relLocation}/about.html">About</a></li>
            <div class="dropdown">
                <a class="dropbtn">Homework
                    <i class="fa fa-angle-down"></i>
                </a>
                <div class="dropdown-content">
                    <li><a href="${relLocation}/pie.html">Recipe</a></li>
                    <li><a href="${relLocation}/tmnt.html">Movie</a></li>
                    <li><a href="${relLocation}/grade.html">Grade</a></li>
                    <li><a href="${relLocation}/signup.html">Sign up</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a href="${relLocation}/tip.html">Tip Calculator</a></li>
                    <li><a href="${relLocation}/buggy/buggyjs.html">Buggy Js</a></li>
                    <li><a href="${relLocation}/decoratemytext.html">Decorate Text</a></li>
                </div>
            </div>
        </ul>
    </nav>
    `
})();


