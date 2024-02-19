function showOnScrollOnce(entries) {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}

function showOnScrollRepeated(entries) {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
}

document.querySelectorAll('a').forEach(function (elem) {
    if (elem.getAttribute("href") != "mailto:azizul.hazim.00@gmail.com") {
        elem.setAttribute('target', '_blank');
        elem.setAttribute('rel', 'noopener');
    }
})

const observer = new IntersectionObserver(showOnScrollRepeated);
const hiddenElements = document.querySelectorAll('*');
hiddenElements.forEach((el) => observer.observe(el))