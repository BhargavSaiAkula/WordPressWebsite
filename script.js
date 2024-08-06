document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            name: 'Sentient Solutions',
            view: 'https://sentientsolutions.io/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project1.PNG'
        },
        {
            name: 'Akrisha Wedding & Event Planners',
            view: 'https://akrishaaevents.com/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project2.PNG'
        },
        {
            name: 'AppSymfony Technologies',
            view: 'https://appsymfony.com/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project3.PNG'
        },
        {
            name: 'Bangalore Essential',
            view: 'https://bangaloreessential.com/',
            code: 'https://github.com/BhargavSaiAkula',
            preview: 'img/Project4.PNG'
        },
       
    ];

    const projectsGrid = document.getElementById('projects-grid');

    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
        <center>
            <img src="${project.preview}" alt="${project.name}">
            <div class="content">
                <h3 class="title">${project.name}</h3>
                  <a href="${project.view}" target="_blank" class="button preview">Preview</a>
            </div>
            </center>
        `;
        projectsGrid.appendChild(projectElement);
    });

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
