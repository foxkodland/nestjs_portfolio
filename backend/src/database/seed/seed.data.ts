
const profile = {
    name: "Pavel",
    description: `Добрый день! Меня зовут Павел. Последние 5 лет я преподавал в онлайн-школе web и python и последние 3 года писал проекты на заказ.
    Умею создавать fullstack-приложения. Хорошо знаю react и нативную верстку. Также много писал на python (aiogram, fastapi, sqlalchemy, backend на rest и тд).
    NestJs и его окружение знаю похуже, чем fastapi, но хорошо понимаю клиент-серверное взаимодействие, поэтому слабые зоны смогу подтянуть.
    Также работал с github action, docker, nginx и тд.

    В этом проекте использовал postgres как базу данных, миграции, а также docker для удобного развёртывания. 

    Под ваши требования, кажется, подхожу, единственно я не работал CockroachDB и s3-storage. Но если будет нужно, я быстро разберусь с этим.

    Портфолио с моими коммерческими проектами: https://github.com/foxkodland  
    Все репо приватные, если нужно, по видеосвязи любой смогу показать.
    `
}

const skills = [
  "SQL", "Python", "Node.js", "Java", "Go", "C#", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST API",
  "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "AWS", "Linux", "Nginx", "Ansible",
  "JavaScript", "TypeScript", "React", "Vue.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Redux",
  "Flutter", "React Native", "Swift", "Kotlin",
  "Machine Learning", "Data Analysis", "Pandas", "NumPy", "TensorFlow", "PyTorch", "Prompt Engineering",
  "QA Automation", "Jest", "Playwright", "Selenium", "Cypress",
  "Git", "Agile", "Scrum", "Jira", "System Design", "Microservices Architecture"
];

const mySkills = [
    "SQL", "Python", "Node.js", "PostgreSQL", "Redis", "GraphQL", "REST API",
    "Docker","CI/CD", "GitHub Actions", "Linux", "Nginx",
    "JavaScript", "TypeScript", "React","HTML5", "CSS3", "Redux",
    "Pandas", "Selenium", "Git" 
]

const experiences = [
    {
        company: "Kodland",
        description: "С 2021 по настоящее время я преподавал в онлайн школе для подростков web, python и 3d.",
        position: "Преподаватель"
    },
    {
        company: "Фриланс",
        description: "Последние 3 года выполнял много разных проектов на заказ от тг-ботов и gsheet до серьезных fullstack web-приложений",
        position: "Соло-разработчик"
    }
]

const projects = [
    {
        name: "Сайт для турниров по Fifa",
        description: "Проект, которым очень горжусь, потому что и фронт, и бэк были полностью за мной. Это платформа, на которой любители fifa могли участвовать в турнирах, видеть красивую турнирную сетку и зарабатывать рейтинг Эло. Насколько я знаю, владельцы свернули этот проект и переключились на стримы, но может еще займутся им =)",
    },
    {
        name: "Web-app в telegram для изучения китайского языка",
        description: "В этом приложении я был только на фронте (React), swagger мне дали готовый. Фронт был с 50+ экранами, большим кол-вом модальных окон и разными анимациями. И была возможность писать иероглифы по трафарету) Получилось красивое и классное приложение для изучения китайского",
    },
    {
        name: "Личный кабинет WB и OZON",
        description: "Приведу пример из другой области - google sheet. Скрипт python на сервере, он по расписанию забирает данные от маркетплейсов и нужные данные выгружает в таблицы. Это был личный кабинет для менеджера, который ведет сразу десяток магазинов.",
    }
]

export const seedData = {
    profile, skills, mySkills, experiences, projects
}