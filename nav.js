function navFunction() {
    var head = document.createElement("header");
    head.setAttribute("id", "pageHeader");
    document.body.appendChild(head);

    var navNav = document.createElement("nav");

    var navUl = document.createElement("ul");
    navUl.setAttribute("class", "menu");
    navNav.appendChild(navUl);

    var navLi1 = document.createElement("li");
    navLi1.setAttribute("class", "user");
    navUl.appendChild(navLi1);

    var navLi2 = document.createElement("li");
    navLi2.setAttribute("class", "listitem");
    navUl.appendChild(navLi2);

    var navLi3 = document.createElement("li");
    navLi3.setAttribute("class", "listitem");
    navUl.appendChild(navLi3);

    var navLi4 = document.createElement("li");
    navLi4.setAttribute("class", "listitem");
    navUl.appendChild(navLi4);

    var navLi5 = document.createElement("li");
    navLi5.setAttribute("class", "listitem button");
    navUl.appendChild(navLi5);

    var navLi6 = document.createElement("li");
    navLi6.setAttribute("class", "listitem button secondary");
    navUl.appendChild(navLi6);

    var navLi7 = document.createElement("li");
    navLi7.setAttribute("class", "drpdwn");
    navUl.appendChild(navLi7);
    var navLi7S = document.createElement("span");
    navLi7S.setAttribute("class", "bars")

    var navALi1 = document.createElement("a");
    var navALi1T = document.createTextNode("ZeroClu");
    navALi1.setAttribute("href", "projects");
    navALi1.appendChild(navALi1T);
    navLi1.appendChild(navALi1);
    navUl.appendChild(navLi1);

    var navALi2 = document.createElement("a");
    var navALi2T = document.createTextNode("Projects");
    navALi2.setAttribute("href", "projects");
    navALi2.appendChild(navALi2T);
    navLi2.appendChild(navALi2);
    navUl.appendChild(navLi2);

    var navALi3 = document.createElement("a");
    var navALi3T = document.createTextNode("In Progress");
    navALi3.setAttribute("href", "inprogress");
    navALi3.appendChild(navALi3T);
    navLi3.appendChild(navALi3);
    navUl.appendChild(navLi3);

    var navALi4 = document.createElement("a");
    var navALi4T = document.createTextNode("About");
    navALi4.setAttribute("href", "about");
    navALi4.appendChild(navALi4T);
    navLi4.appendChild(navALi4);
    navUl.appendChild(navLi4);

    var navALi5 = document.createElement("a");
    var navALi5T = document.createTextNode("Login");
    navALi5.setAttribute("href", "#");
    navALi5.appendChild(navALi5T);
    navLi5.appendChild(navALi5);
    navUl.appendChild(navLi5);

    var navALi6 = document.createElement("a");
    var navALi6T = document.createTextNode("Sign Up");
    navALi6.setAttribute("href", "#");
    navALi6.appendChild(navALi6T);
    navLi6.appendChild(navALi6);
    navUl.appendChild(navLi6);

    var navALi7 = document.createElement("span");
    navALi7.setAttribute("class", "bars");
    navLi7.appendChild(navALi7);
    navUl.appendChild(navLi7);

    document.getElementById("pageHeader").appendChild(navNav);
    
}