var starters, teishoku, jyu, desserts, starters_menu, teishoku_menu, jyu_menu, desserts_menu;

function DeclareVariables() {
    starters = document.getElementById("starters");
    starters_menu = document.getElementById("starters_menu");
    teishoku = document.getElementById("teishoku");
    teishoku_menu = document.getElementById("teishoku_menu");
    jyu = document.getElementById("jyu");
    jyu_menu = document.getElementById("jyu_menu");
    desserts = document.getElementById("desserts");
    desserts_menu = document.getElementById("desserts_menu");
}

function RemoveClass() {
    starters.classList.remove("active", "menu-active");
    teishoku.classList.remove("active", "menu-active");
    jyu.classList.remove("active", "menu-active");
    desserts.classList.remove("active", "menu-active");
}

function Starters() {
    RemoveClass();
    starters.classList.add("active", "menu-active");

    starters_menu.style.display = "flex";
    teishoku_menu.style.display = "none";
    jyu_menu.style.display = "none";
    desserts_menu.style.display = "none";
}

function Teishoku() {
    RemoveClass();
    teishoku.classList.add("active", "menu-active");

    starters_menu.style.display = "none";
    teishoku_menu.style.display = "flex";
    jyu_menu.style.display = "none";
    desserts_menu.style.display = "none";
}

function Jyu() {
    RemoveClass();
    jyu.classList.add("active", "menu-active");

    starters_menu.style.display = "none";
    teishoku_menu.style.display = "none";
    jyu_menu.style.display = "flex";
    desserts_menu.style.display = "none";
}

function Desserts() {
    RemoveClass();
    desserts.classList.add("active", "menu-active");

    starters_menu.style.display = "none";
    teishoku_menu.style.display = "none";
    jyu_menu.style.display = "none";
    desserts_menu.style.display = "flex";
}