const baseURL = "https://sambingham0.github.io/wdd230/";
const linksURL = "https://sambingham0.github.io/wdd230/data/links.json";

const links = document.querySelector('#lesson-links');
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let lessonSection = document.createElement('section');
        let lessonTitle = document.createElement('h4');
        lessonTitle.textContent = `Lesson ${week.lesson}`;
        lessonSection.appendChild(lessonTitle);

        week.links.forEach((link) => {
            let title = document.createElement('p');
            let url = document.createElement('a');
  
            title.textContent = link.title;
            url.href = baseURL + link.url;
            url.textContent = link.url;
            
            lessonSection.appendChild(title);
            lessonSection.appendChild(url);
        });

        links.appendChild(lessonSection);
    });
}

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

getLinks();
