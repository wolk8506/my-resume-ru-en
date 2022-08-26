import { refs } from './refs';
import { langPage } from './lokalization';

refs.langSwitch.addEventListener('change', langСhange);
let lang = langPage[0];

function langСhange() {
  lang = langPage[this.value];
  render();
}

export default function render() {
  const techSkills = lang.techSkills
    .map(
      i => `<li class="tech-skills-item">
          <span class="tech-skills-item-text">${i}</span>
        </li>`
    )
    .join('');

  const softSkills = lang.softSkills
    .map(
      i => `<li class="soft-skills-item">
          <span class="soft-skills-item-text">${i}</span>
        </li>`
    )
    .join('');

  const languages = lang.languages
    .map(
      i => `<li class="tech-skills-item">
          <span class="tech-skills-item-text">${i}</span>
        </li>`
    )
    .join('');
  refs.sidebarTitle.innerHTML = lang.contacts;

  refs.sidebarSection.innerHTML = `
     <div class="tech-skills-section">
      <h2 class="sidebar-title">${lang.techSkillsTitle}</h2>
      <ul class="tech-skills-list">
        ${techSkills}
      </ul>
    </div>
    <!-- Soft skills section -->
    <div class="soft-skills-section">
      <h2 class="sidebar-title">${lang.softSkillsTitle}</h2>
      <ul class="soft-skills-list">
        ${softSkills}
      </ul>
    </div>
    <!-- Languages -->
    <div class="tech-skills-section">
      <h2 class="sidebar-title">${lang.languagesTitle}</h2>
      <ul class="tech-skills-list">
        ${languages}
      </ul>
    </div>`;
}

render();
