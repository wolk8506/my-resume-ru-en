import { refs } from './refs';
import { langPage } from './lokalization';

refs.langSwitch.addEventListener('change', langСhange);
let lang = langPage[0];

function langСhange() {
  lang = langPage[this.value];
  render();
}

export default function render() {
  const skils3 = lang.arbeitsplatz_3.slils
    .map(s => `<li class="my-work-experience-duty">${s}</li>`)
    .join('');

  const skils2 = lang.arbeitsplatz_2.slils
    .map(s => `<li class="my-work-experience-duty">${s}</li>`)
    .join('');

  const skils1 = lang.arbeitsplatz_1.slils
    .map(s => `<li class="my-work-experience-duty">${s}</li>`)
    .join('');

  refs.mainSection.innerHTML = `
       
       <!-- About me section -->
    <div class="about-me-section">
      <p class="about-me-profession">Front-End Developer</p>
      <h1 class="about-me-name">${lang.name}</h1>
      <p class="about-me-description">${lang.about}</p>
    </div>
    <!-- My projects section -->
    <div class="my-projects-section">
      <h2 class="main-content-title">${lang.projects}</h2>
      <ol class="my-projects-list">
        <li class="projects-item">
          <span class="my-projects-text">
            <a
              href="https://wolk8506.github.io/my-resume-ru-en/"
              class="my-projects-link"
              rel="noopener noreferrer"
              target="_blank"
              >Resume</a
            ><span class="my-projects-bracket-line"></span>
            <span class="my-projects-bracket">[</span>
            <span class="my-projects-technology"> HTML5, CSS3, JavaScript</span>
            <span class="my-projects-bracket">]</span>
          </span>
        </li>
        <li class="projects-item">
          <span class="my-projects-text">
            <a
              href="https://wolk8506.github.io/webstudio/"
              class="my-projects-link"
              rel="noopener noreferrer"
              target="_blank"
              >WebStudio</a
            ><span class="my-projects-bracket-line"></span>
            <span class="my-projects-bracket">[</span>
            <span class="my-projects-technology"> HTML5, CSS3</span>
            <span class="my-projects-bracket">]</span>
          </span>
        </li>
        <li class="projects-item">
          <span class="my-projects-text">
            <a
              href="https://wolk8506.github.io/barbershop/"
              class="my-projects-link"
              rel="noopener noreferrer"
              target="_blank"
              >Barbershop</a
            ><span class="my-projects-bracket-line"></span>
            <span class="my-projects-bracket">[</span>
            <span class="my-projects-technology"> HTML5, CSS3</span>
            <span class="my-projects-bracket">]</span>
          </span>
        </li>
        <li class="projects-item">
          <span class="my-projects-text">
            <a
              href="https://wolk8506.github.io/icecream/"
              class="my-projects-link"
              rel="noopener noreferrer"
              target="_blank"
              >Icecream</a
            ><span class="my-projects-bracket-line"></span>
            <span class="my-projects-bracket">[</span>
            <span class="my-projects-technology"> HTML5, CSS3, JavaScript</span>
            <span class="my-projects-bracket">]</span>
          </span>
        </li>
        <li class="projects-item">
          <span class="my-projects-text">
            <a
              href="https://wolk8506.github.io/space-tourism/"
              class="my-projects-link"
              rel="noopener noreferrer"
              target="_blank"
              >Space Tourism</a
            ><span class="my-projects-bracket-line"></span>
            <span class="my-projects-bracket">[</span>
            <span class="my-projects-technology"> HTML5, CSS3, JavaScript</span>
            <span class="my-projects-bracket">]</span>
          </span>
        </li>
        <li class="projects-item">
          <span class="my-projects-text">
            <a
              href="https://wolk8506.github.io/filmoteka/"
              class="my-projects-link"
              rel="noopener noreferrer"
              target="_blank"
              >Filmoteka</a
            ><span class="my-projects-bracket-line"></span>
            <span class="my-projects-bracket">[</span>
            <span class="my-projects-technology"> HTML5, CSS3, JavaScript</span>
            <span class="my-projects-bracket">]</span>
          </span>
        </li>
        <li class="projects-item">
          <span class="my-projects-text">
            <a
              href="https://wolk8506.github.io/goit-react-hw-08-phonebook/"
              class="my-projects-link"
              rel="noopener noreferrer"
              target="_blank"
              >Phone book</a
            ><span class="my-projects-bracket-line"></span>
            <span class="my-projects-bracket">[</span>
            <span class="my-projects-technology"> HTML5, CSS3, React</span>
            <span class="my-projects-bracket">]</span>
          </span>
        </li>
      </ol>
    </div>
    <!-- My work experience section -->
    <div class="my-work-experience-section">
      <h2 class="main-content-title">${lang.workExperience}</h2>
      <!-- Company 3 -->
      <div class="my-work-experience-block">
        <h3 class="my-work-experience-position">
          ${lang.arbeitsplatz_3.lebensstellung} <span class="my-work-experience-company">${lang.arbeitsplatz_3.arbeitsplatz}</span>
        </h3>
        <!-- count time -->
        <p class="my-work-experience-period">
          ${lang.arbeitsplatz_3.time} <span class="my-work-experience-divider">|</span>
          <span id="time">${lang.arbeitsplatz_3.time2}</span>
        </p>
        <ul class="my-work-experience-duties">
        
        ${skils3}
          
        </ul>
      </div>
      <!-- Company 2 -->
     <div class="my-work-experience-block">
        <h3 class="my-work-experience-position">
          ${lang.arbeitsplatz_2.lebensstellung} <span class="my-work-experience-company">${lang.arbeitsplatz_2.arbeitsplatz}</span>
        </h3>
        <!-- count time -->
        <p class="my-work-experience-period">
          ${lang.arbeitsplatz_2.time} <span class="my-work-experience-divider">|</span>
          <span id="time">${lang.arbeitsplatz_2.time2}</span>
        </p>
        <ul class="my-work-experience-duties">
        
        ${skils2}
          
        </ul>
      </div>
      <!-- Company 1 -->
      <div class="my-work-experience-block">
        <h3 class="my-work-experience-position">
          ${lang.arbeitsplatz_1.lebensstellung} <span class="my-work-experience-company"> ${lang.arbeitsplatz_1.arbeitsplatz}</span>
        </h3>
        <!-- count time -->
        <p class="my-work-experience-period">
          ${lang.arbeitsplatz_1.time} <span class="my-work-experience-divider">|</span>
          <span id="time">${lang.arbeitsplatz_1.time2}</span>
        </p>
        <ul class="my-work-experience-duties">
        
        ${skils1}
          
        </ul>
      </div>
    </div>
    <!-- Education section -->
    <div class="my-education-section">
      <h2 class="main-content-title">${lang.еducation}</h2>
      <h3 class="my-education-university">
        ${lang.university_1}
      </h3>
      <h4 class="my-education-specialization">
        ${lang.specialization_1}
      </h4>
      <p class="my-work-experience-period">
        ${lang.еducationTime_1} <span class="my-work-experience-divider">|</span> ${lang.еducationPeriod_1}
      </p>
      <h3 class="my-education-university">${lang.university_2}</h3>
      <h4 class="my-education-specialization">${lang.specialization_2}</h4>
      <p class="my-work-experience-period">
        ${lang.еducationTime_2} <span class="my-work-experience-divider">|</span> ${lang.еducationPeriod_2}
      </p>
    </div>`;
}

render();
