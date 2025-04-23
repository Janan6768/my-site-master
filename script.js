//loadnavbar

let navBarContent = `<a href="index.html"><h1 id="logo" class="logo">Janan</h1></a>

    <ul class="lists">
        <li><a href="projects.html">Projects</a></li>
        <li><a href="credits.html">Credits</a></li>
        <li><a href="about.html">About</a></li>
    </ul>

    <div class="menuHolder">
        <span class="lightModeIcon"><i class="fa-solid fa-sun"></i></span>
        <span class="darkModeIcon"><i class="fa-solid fa-moon"></i></span>

        <div id="menu">
            <div class="line one"></div>
            <div class="line two"></div>
            <div class="line three"></div>
        </div>
    </div>`
$("#navbar").html(navBarContent);
  
function enableLightMode() {
    $('head').children('link').last().attr('href', './backgroundColor.css');
    $('.lightModeIcon').css('display', 'none');
    $('.darkModeIcon').css('display', 'block');
}

if (localStorage.getItem('theme') === 'light') {
    enableLightMode();
}

$('#menu').click(function () {
    $('.lists').toggleClass('toggleUl');
    $('.one').toggleClass('toggleOne');
    $('.two').toggleClass('toggleTwo');
    $('.three').toggleClass('toggleThree');
});

$('.darkModeIcon').click(function () {
    $('head').children('link').last().attr('href', './style.css');
    $('.lightModeIcon').css('display', 'block');
    localStorage.setItem('theme', 'dark');
    $('.darkModeIcon').css('display', 'none');
});

$('.lightModeIcon').click(function () {
    $('head').children('link').last().attr('href', './backgroundColor.css');
    $('.lightModeIcon').css('display', 'none');
    localStorage.setItem('theme', 'light');
    $('.darkModeIcon').css('display', 'block');
});

$('.skillsBtn').click(function () {
    $('.skillBox').css('display', 'block');

    $('.skillsBtn').addClass('active');
    $('.frontendSkillBtn').removeClass('active');
    $('.backendSkillBtn').removeClass('active');

    $('.squareBoxOne').removeClass('showSquareBoxOne');
    $('.squareBoxTwo').removeClass('showSquareBoxTwo');
});

$('.frontendSkillBtn').click(function () {
    $('.squareBoxOne').addClass('showSquareBoxOne');
    $('.squareBoxTwo').removeClass('showSquareBoxTwo');

    $('.frontendSkillBtn').addClass('active');
    $('.skillsBtn').removeClass('active');
    $('.backendSkillBtn').removeClass('active');

    $('.skillBox').css('display', 'none');
});

$('.backendSkillBtn').click(function () {
    $('.squareBoxTwo').addClass('showSquareBoxTwo');
    $('.squareBoxOne').removeClass('showSquareBoxOne');

    $('.backendSkillBtn').addClass('active');
    $('.skillsBtn').removeClass('active');
    $('.frontendSkillBtn').removeClass('active');

    $('.skillBox').css('display', 'none');
});

let year = new Date().getFullYear();

$('.copyright').html('Copyright &copy; ' + year + ' Janan');