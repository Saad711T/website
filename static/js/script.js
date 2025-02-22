const projects = [
    {
        image: 'static/img/SaadOS Website.png',
        title: 'SaadOS',
        description: 'كود سي بلس بلس تم تطويره ليصبح توزيعة لينكس مبنية على أوبنتو'
    },
    {
        image: 'static/img/LibraryDB.png',
        title: 'LibraryDB',
        description: 'نظام إدارة مكتبة مع قاعدة بيانات متقدمة'
    },
    {
        image: 'static/img/MotorDB.png',
        title: 'MotorDB',
        description: 'موقع إلكتروني مع فريق ملئ الفراغات بالتراكم , يعتمد على تقييم السيارات والمعلومات حولها'
    },
    {
        image: 'static/img/DatabaseConnector.png',
        title: 'Database Connector',
        description: 'برنامج خاص بإظهار قواعد البيانات الموجودة في جهاز المستخدم'
    },
    {
        image: 'static/img/VolxLibrary.png',
        title: 'Volx Library',
        description: 'تطبيق تواصل إجتماعي تحول لتطبيق تدوين ومشاريع لفريق بلوكل السابق'
    },
    {
        image: 'static/img/e3d.png',
        title: 'El3ments of D3ath Comic',
        description: 'قصة مصورة من رسمي وكتابتي وتأليفي'
    },
    {
        image: 'static/img/HospitalDB.png',
        title: 'HospitalDB',
        description: 'نظام إدارة مستشفى مع قاعدة بيانات متقدمة'
    },
    {
        image: 'static/img/Arabebook.png',
        title: 'مقتطفات من خرائط شبه الجزيرة العربية',
        description: 'كتاب إلكتروني صغير يحتوي على رسوماتي الخاصة بشبه الجزيرة العربية'
    },
    {
        image: 'static/img/Psychobot.png',
        title: 'Psycho Bot',
        description: 'بوت ديسكورد عربي لإنشاء الأوامر والمهام , تم تطويره ليصبح لاحقا ميزة في مكتبة فولكس'
    }
];

const worksGrid = document.querySelector('.works-grid');

projects.forEach((project, index) => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const img = document.createElement('img');
    img.src = project.image;
    img.alt = project.title;

    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const title = document.createElement('h3');
    title.textContent = project.title;
    title.style.marginBottom = '0.5rem';
    title.style.fontWeight = 'bold';

    const description = document.createElement('p');
    description.textContent = project.description;

    overlay.appendChild(title);
    overlay.appendChild(description);

    gridItem.appendChild(img);
    gridItem.appendChild(overlay);
    worksGrid.appendChild(gridItem);

    gridItem.addEventListener('click', () => {
        console.log(`تم النقر على ${project.title}`);
    });
});

let link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = "static/img/favicon.png";
document.head.appendChild(link);
