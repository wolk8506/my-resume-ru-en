const now = new Date(); //Текущя дата
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
const BIRTHDAY = new Date(1985, 2, 4); //Дата рождения
const dobnow = new Date(
  today.getFullYear(),
  BIRTHDAY.getMonth(),
  BIRTHDAY.getDate()
); //ДР в текущем году
const WORK_TIME = new Date(2019, 9); //Дата последнего места работы (2019, 9)
const time = document.getElementById('time');
let age; //Возраст
let workYear; //
let workMonth;
//Возраст = текущий год - год рождения
age = today.getFullYear() - BIRTHDAY.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
if (today < dobnow) {
  age = age - 1;
}
//document.write(`Возраст: ${age}`);
// расчет времени работы год и месяц
workYear = today.getFullYear() - WORK_TIME.getFullYear();
workMonth = today.getMonth() + 1 - WORK_TIME.getMonth();

const periodEn = fTime(workYear, 'year') + fTime(workMonth, 'month');
const periodRu = fTimeYear(workYear, 'год') + fTimeMonth(workMonth, 'месяц');

function fTimeYear(period, title) {
  if (period < 1) {
    return '';
  } else if (period === 1) {
    return `${period} ${title} `;
  } else if (period > 1 && period < 5) {
    return `${period} ${title}а `;
  } else return `${period} лет `;
}

function fTimeMonth(period, title) {
  if (period < 1) {
    return '';
  } else if (period === 1) {
    return `${period} ${title} `;
  } else if (period > 1 && period < 5) {
    return `${period} ${title}а`;
  } else return `${period} ${title}ев`;
}

function fTime(period, title) {
  if (period < 1) {
    return '';
  } else if (period === 1) {
    return `${period} ${title} `;
  }
  return `${period} ${title}s `;
}

export const langPage = [
  //   !!!!!!!!!!!!!!!! EN EN EN EN EN EN EN EN
  {
    id: 'en-EN',
    name: 'Krasyukov Yurij',
    about:
      'I am a beginner frontend developer. I am a student of the Frontend Full Stack developer course at GoIT. I have the following technical skills: HTML5, CSS3, SASS, JavaScript, Git. I am looking for an interesting job in a good team, where I could improve my skills and use them for interesting tasks. I have experience in developing both group and individual academic projects. In a group project, I was a team lead.',
    projects: 'Projects',
    workExperience: 'Work Experience',
    arbeitsplatz_3: {
      lebensstellung: 'Department head',
      arbeitsplatz: 'LLC “Libra TK”',
      time: 'September 2019 - up to now',
      time2: periodEn,
      slils: [
        'Organization of the work of the branch',
        'Analytical vision of work processes in the department',
        'Document flow in 1C',
        'Operational management of employees, analysis of request and their distribution according to their importance',
        'Implementation of the selection of personnel and their training',
        'Logistics of the department, accounting and timely replenishment of spare parts',
        'Conducting briefings on labor protection, fire safety and industrial sanitation',
        'Statistical accounting of maintenance and repairs',
        'Commissioning of new equipment',
        'Monitoring the technical condition of vehicles',
        'Implementation of registration, fiscalization, operation and repair of electronic cash register systems of gas stations',
        'Development of plans and programs for production and economic activities',
      ],
    },
    arbeitsplatz_2: {
      lebensstellung: 'Electronic engineer',
      arbeitsplatz: 'LLC “Market Service”/LLC “Libra TK”',
      time: 'September 2014 – September 2019',
      time2: '5 years',
      slils: [
        'Technical service of POS terminals and fuel dispensing column',
        'Preparation of computing equipment for work, technical inspection of devices and assemblies, control of parameters and reliability of electronic elements of equipment',
        'Carrying out preventive and current repair of electronic equipment',
        'Ensuring the correct technical operation, uninterrupted high-performance operation of the electronic equipment of the gas station',
      ],
    },
    arbeitsplatz_1: {
      lebensstellung:
        'Fixer of technological equipment CNC machines, rank VIII',
      arbeitsplatz: 'KMP “FED”',
      time: 'August 2008 - August 2014 ',
      time2: '6 years',
      slils: [
        'Adjustment and regulation of special technological equipment',
        'Periodic inspection of the serviced equipment with identification and elimination of malfunctions in units, boards, modules and mechanisms',
        'Performance of works related to the repair and subsequent adjustment of the mechanical and electrical parts of the equipment',
      ],
    },
    еducation: 'Education',
    university_1:
      'Kharkiv National University of Radio and Electronics (KHNURE)',
    specialization_1: 'Biomedical electronics (Electronics Engineer), master',
    еducationTime_1: 'September 2003 - June 2008',
    еducationPeriod_1: '5 years',
    university_2: 'GoIT',
    specialization_2: 'Frontend Full Stack Online',
    еducationTime_2: 'September 2021 - July 2022',
    еducationPeriod_2: '1 year 1 month',
    // ******* S I D E B A R
    contacts: 'Contacts',
    techSkillsTitle: 'Tech Skills',
    techSkills: [
      'HTML5',
      'CSS3',
      'GIT',
      'JavaScript',
      'React',
      'Node.js',
      'Figma',
      'Jira',
    ],
    softSkillsTitle: 'Soft Skills',
    softSkills: [
      'Scrum',
      'GTD',
      'Teamwork',
      'Ability to make decisions',
      'Flexible thinking',
      'Desire to improve your professional level',
      'Analytical mind',
      'Critical thinking',
    ],
    languagesTitle: 'Languages',
    languages: ['English – Basic', 'Russian - Native', 'Ukrainian - Native'],
  },
  //   !!!!!!!!!!!!!!!! RU RU RU RU RU RU RU RU
  {
    id: 'ru-RU',
    name: 'Красюков Юрий',
    about:
      'Я начинающий фронтенд-разработчик. Я учусь на курсе разработчиков Frontend Full Stack в GoIT. У меня есть следующие технические навыки: HTML5, CSS3, SASS, JavaScript, React, NodeJS, Git, Jira. Ищу интересную работу в хорошем коллективе, где я мог бы совершенствовать свои навыки и использовать их для интересных задач. Имею опыт разработки как групповых, так и индивидуальных академических проектов. В групповых проектах я был тимлидом.',
    projects: 'Проекты',
    workExperience: 'Опыт работы',
    arbeitsplatz_3: {
      lebensstellung: 'Начальник отдела',
      arbeitsplatz: 'ООО “Либра ТК”',
      time: 'Сентябрь 2019 - по настоящее время',
      time2: periodRu,
      slils: [
        'Организация работы филиала',
        'Аналитическое ведение рабочих процессов в отделе',
        'Документооборот в 1С',
        'Оперативное управление сотрудниками, анализ заявок и их распределение по степени важности',
        'Осуществление подбора персонала и его обучение',
        'Логистика отдела, учет и своевременное пополнение запасных частей',
        'Проведение инструктажей по охране труда, пожарной безопасности и производственной санитарии',
        'Статистический учет технического обслуживания и ремонтов',
        'Ввод в эксплуатацию нового оборудования',
        'Контроль технического состояния автомобилей',
        'Осуществление регистрации, фискализации, эксплуатации и ремонта электронно-кассовых систем АЗС',
        'Разработка планов и программ производственно-хозяйственной деятельности',
      ],
    },
    arbeitsplatz_2: {
      lebensstellung: 'Инженер-электроник',
      arbeitsplatz: 'ООО “Маркет сервис”/ООО “Либра ТК”',
      time: 'Сентябрь 2014 – Сентябрь 2019',
      time2: '5 лет',
      slils: [
        'Техническое обслуживание POS-терминалов и ТРК',
        'Подготовка вычислительной техники к работе, технический осмотр приборов и агрегатов, контроль параметров и надежности электронных элементов техники',
        'Проведение профилактического и текущего ремонта электронной техники',
        'Обеспечение правильной технической эксплуатации, бесперебойной высокопроизводительной работы электронного оборудования АЗС',
      ],
    },
    arbeitsplatz_1: {
      lebensstellung:
        'Наладчик технологического оборудования станков с ЧПУ, разряд VIII',
      arbeitsplatz: 'ХМЗ&nbsp;“ФЭД”',
      time: 'Август 2008 - Август 2014',
      time2: '6 лет',
      slils: [
        'Наладка и регулирование специального технологического оборудования',
        'Периодический осмотр обслуживаемого оборудования с выявлением и устранением неисправностей в узлах, щитах, модулях и механизмах',
        'Выполнение работ по ремонту и последующей наладке механической и электрической части оборудования',
      ],
    },
    еducation: 'Образование',
    university_1:
      'Харьковский национальный университет радиоэлектроники (ХНУРЭ)',
    specialization_1:
      'Биомедицинская электроника (инженер-электронщик), магистр',
    еducationTime_1: 'Сентябрь 2003 - Июнь 2008',
    еducationPeriod_1: '5 лет',
    university_2: 'GoIT',
    specialization_2: 'Frontend Full Stack Online',
    еducationTime_2: 'Сентябрь 2021 - Сентябрь 2022',
    еducationPeriod_2: '1 год 1 месяц',
    // ******* S I D E B A R
    contacts: 'Контакты',
    techSkillsTitle: 'Технические навыки',
    techSkills: [
      'HTML5',
      'CSS3',
      'GIT',
      'JavaScript',
      'React',
      'Node.js',
      'Figma',
      'Jira',
    ],
    softSkillsTitle: 'Гибкие навыки',
    softSkills: [
      'Scrum',
      'Agile',
      'GTD',
      'Командная работа',
      'Способность принимать решения',
      'Гибкое мышление',
      'Желание повышать свой профессиональный уровень',
      'Аналитический склад ума',
      'Критическое мышление',
    ],
    languagesTitle: 'Языки',
    languages: ['Английский – базовый', 'Русский - родной'],
  },
];
