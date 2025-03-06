const certificates = [
    {
        image: 'static/img/certificates/software.png',
        title: 'IBM Applied Software Engineering Fundamentals Specialization',
        description: 'شهادة أساسيات هندسة البرمجيات من آي بي إم بإستخدام بايثون وجافا وجافا سكريبت وإستخدام قيتهاب ولينكس - Feb 2025'
    },
    {
        image: 'static/img/certificates/metadb.png',
        title: 'Meta Database Engineer Proffesional Certificate',
        description: 'شهادة مهندس قواعد البيانات من ميتا بإستخدام لغة اس كيو ال وماي اس كيو ال ولغة بايثون والعديد من التقنيات - Feb 2025'
    },
    {
        image: 'static/img/certificates/pythonai.png',
        title: 'Python for Data Science, AI & Development',
        description: 'شهادة برمجة بايثون لعلم البيانات والذكاء الإصطناعي وتطوير البرمجيات - Feb 2025'
    },
    {
        image: 'static/img/certificates/gdata.png',
        title: 'Google Data Analytics Professional Certificate',
        description: 'شهادة محلل البيانات من جوجل لتحليل البيانات بإستخدام اس كيو إل ومايكروسوفت إكسل وتابلو ولغة آر - Jan 2025'
    },
    {
        image: 'static/img/certificates/redhat.png',
        title: 'Fundamantals of Red Hat Enterprise Linux',
        description: 'شهادة أساسيات نظام تشغيل ريد هات لينكس وإدارة الأنظمة - Nov 2024'
    },
    {
        image: 'static/img/certificates/linuxsql.png',
        title: 'Tools of The trade : Linux and SQL',
        description: 'شهادة من جوجل عن تكامل اس كيو ال مع أنظمة لينكس في قواعد البيانات والأمن السيبراني - Nov 2024'
    },
    {
        image: 'static/img/certificates/db.png',
        title: 'Databases and SQL for Data Science with Python',
        description: 'شهادة من آي بي إم عن قواعد البيانات والإس كيو إل في علم البيانات بإستخدام بايثون - Oct 2024'
    },
    {
        image: 'static/img/certificates/sqlds.jpeg',
        title: 'SQL for Data Science',
        description: 'شهادة من جامعة كاليفورنيا عن قواعد البيانات والإس كيو إل في علم البيانات - Sep 2024'
    },
    {
        image: 'static/img/certificates/intro.jpeg',
        title: 'مقدمة في ريادة الأعمال',
        description: 'مقدمة في ريادة الأعمال والتجارة والإبداع من منصة هدف-دروب May 2023'
    },
    {
        image: 'static/img/certificates/minecraft.jpeg',
        title: 'Minecraft Hour of Code 2020',
        description: 'أساسيات البرمجة بسكراتش ثم بلغات البرمجة عالية المستوى جافا وبايثون وجافا سكريبت في ماين كرافت النسخة التعليمية بالتعاون بين مايكروسوفت وموقع كود.أورج - Mar 2021'
    },
    {
        image: 'static/img/certificates/hcode.jpeg',
        title: 'Hour of Code',
        description: 'ساعة في البرمجة هي دورة شاملة من موقع code.org تعلمت فيها أساسيات البرمجة بلغة سكراتش والتعرف على البرمجة بشكل عام - Dec 2019'
    }
];

const worksGrid = document.querySelector('.works-grid');

certificates.forEach((certificate, index) => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const img = document.createElement('img');
    img.src = certificate.image;
    img.alt = certificate.title;

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const title = document.createElement('h3');
    title.textContent = certificate.title;
    title.style.marginBottom = '0.5rem';
    title.style.fontWeight = 'bold';

    const description = document.createElement('p');
    description.textContent = certificate.description;

    overlay.appendChild(title);
    overlay.appendChild(description);

    gridItem.appendChild(img);
    gridItem.appendChild(overlay);
    worksGrid.appendChild(gridItem);

    gridItem.addEventListener('click', () => {
        console.log(`تم النقر على ${certificate.title}`);
    });
});

let link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = "static/img/favicon.png";
document.head.appendChild(link);
