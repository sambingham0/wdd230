const baseURL = "https://sambingham0.github.io/wdd230/";
const linksURL = "https://sambingham0.github.io/wdd230/data/links.json";

const links = document.querySelector('#lesson-links');
const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let lessonSection = document.createElement('section');
        let lessonTitle = document.createElement('p');
        lessonTitle.textContent = `Lesson ${week.lesson}`;
        lessonSection.appendChild(lessonTitle);

        week.links.forEach((link) => {
            let url = document.createElement('a');
  
            // .textContent = link.title;
            url.href = baseURL + link.url;
            url.textContent = `| ${link.title} |`;
            
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
