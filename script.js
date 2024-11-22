let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log(navbar.classList); // Verifica se a classe 'active' está sendo adicionada
    console.log('Menu clicado!'); // Para verificar no console
};


document.addEventListener("DOMContentLoaded", () => {
    const translateBtn = document.getElementById("translate-btn");
    let currentLanguage = "en"; // Define o idioma padrão como inglês

    translateBtn.addEventListener("click", () => {
        if (currentLanguage === "en") {
            translateBtn.innerHTML = '<img src="images/eua-bandeira.png" alt="Brasil" class="flag-icon"> Traduza';
            currentLanguage = "pt"; // Muda para português
            // Menu
            document.querySelector("a[href='#education']").textContent = "Educação";
            document.querySelector("a[href='#services']").textContent = "Serviços";
            document.querySelector("a[href='#portfolio']").textContent = "Projetos";
            document.querySelector("a[href='#contact']").textContent = "Contato";

            // Seção Home
            document.querySelector(".home-content h1").innerHTML = "Olá, Eu sou <span>Magnus</span>";
            document.querySelector(".home-content h3").innerHTML = "Eu sou um <span></span>";
            document.querySelector(".home-content p").textContent =
                "Sou um entusiasta de tecnologia com dois anos de experiência em administração na Reivax, atualmente trabalhando na Tuna, uma empresa líder em otimização de pagamentos online. Comprometido com o desenvolvimento contínuo, comecei um curso técnico em Desenvolvimento de Sistemas em 2023 e iniciei um Bacharelado em Administração de Empresas em 2024. Possuo fortes habilidades interpessoais, sou organizado, proativo e adaptável a novos desafios. Sempre busco aprender e inovar, contribuindo com ideias criativas em ambientes colaborativos.";

            // Seção Educação
            document.querySelector(".education .heading").textContent = "Educação";
            const timelineItems = document.querySelectorAll(".timeline-content");
            timelineItems[0].querySelector("h3").textContent = "Formatura no Ensino Médio e Primeiro Emprego";
            timelineItems[0].querySelector("p").textContent =
                "Em 2022, concluí o ensino médio com excelentes notas e dedicação aos estudos. Nesse mesmo ano, comecei minha jornada profissional como jovem aprendiz na Reivax, atuando como assistente administrativo. Durante dois anos na empresa, adquiri experiências valiosas e desenvolvi importantes habilidades para minha carreira.";

            timelineItems[1].querySelector("h3").textContent = "Início do Ensino Técnico";
            timelineItems[1].querySelector("p").textContent =
                "Em 2023, comecei o curso técnico em Desenvolvimento de Sistemas, focado na área de tecnologia, pela qual sou apaixonado. Aprendi linguagens como HTML, CSS, JavaScript, TypeScript, MySQL e Java, além de desenvolver projetos full stack.";

            timelineItems[2].querySelector("h3").textContent =
                "Início da Graduação em Administração e Segundo Emprego";
            timelineItems[2].querySelector("p").textContent =
                "No início de 2024, comecei a trabalhar na Tuna Pagamentos, uma empresa especializada em otimização de pagamentos online, e iniciei minha graduação em Administração. No mesmo ano, concluí meu curso técnico em Desenvolvimento de Sistemas.";

            timelineItems[3].querySelector("h3").textContent =
                "Continuação da Graduação e Aprendizado em Programação";
            timelineItems[3].querySelector("p").textContent = "Processando...";

            // Seção Serviços
            document.querySelector(".services .heading").textContent = "Serviços";
            const serviceBoxes = document.querySelectorAll(".service-info");
            serviceBoxes[0].querySelector("h4").textContent = "Desenvolvedor Frontend";
            serviceBoxes[0].querySelector("p").textContent =
                "Tenho experiência com desenvolvimento frontend utilizando React, JavaScript, HTML, CSS, TypeScript e Python. Estou sempre aprimorando minhas habilidades.";

            serviceBoxes[1].querySelector("h4").textContent = "Desenvolvimento Backend";
            serviceBoxes[1].querySelector("p").textContent =
                "Experiência com desenvolvimento backend, principalmente com Java e Spring Boot, utilizado em diversos projetos. Busco aprender outras linguagens para expandir minhas habilidades.";

            serviceBoxes[2].querySelector("h4").textContent = "Estudos em Administração de Empresas";
            serviceBoxes[2].querySelector("p").textContent =
                "Estou cursando Administração, focando em liderança, tomada de decisões estratégicas e conhecimento em finanças, marketing e RH.";

            serviceBoxes[3].querySelector("h4").textContent = "Assistente Administrativo | Analista de Suporte";
            serviceBoxes[3].querySelector("p").textContent =
                "Experiência como Assistente Administrativo na Reivax e Analista de Suporte na Tuna. Desenvolvi habilidades em comunicação, organização e otimização de processos.";

            // Seção Portfolio
            document.querySelector(".portfolio .heading").innerHTML = "Meus <span>Projetos</span>";
            document.querySelectorAll(".portfolio .overlay").forEach((overlay, index) => {
                overlay.textContent = `Projeto ${index + 1}`;
            });

            // Seção Contact
            document.querySelector(".contact h2").innerHTML = "Entre em <span>Contato</span>";
            document.querySelector("input[name='name']").setAttribute("placeholder", "Nome Completo");
            document.querySelector("input[name='email']").setAttribute("placeholder", "Email");
            document.querySelector("input[name='subject']").setAttribute("placeholder", "Assunto");
            document.querySelector("textarea").setAttribute("placeholder", "Sua Mensagem...");
            document.querySelector("input[type='submit']").setAttribute("value", "Enviar Mensagem");

            // Footer
            document.querySelectorAll(".footer .list a").forEach((link, index) => {
                switch (index) {
                    case 0:
                        link.textContent = "FAQ";
                        break;
                    case 1:
                        link.textContent = "Serviços";
                        break;
                    case 2:
                        link.textContent = "Sobre Mim";
                        break;
                    case 3:
                        link.textContent = "Contato";
                        break;
                    case 4:
                        link.textContent = "Projetos";
                        break;
                }
            });
            document.querySelector(".footer .copyright").textContent = "@Magnus.Oss | Todos os Direitos Reservados";
        } else {
            // Traduzir para inglês
            translateBtn.innerHTML = '<img src="images/brasil-bandeira.jpeg" alt="Brasil" class="flag-icon"> Translate';
            currentLanguage = "en"; // Muda para inglês
            // translateBtn.innerHTML = '<img src="images/brasil-bandeira.jpeg" alt="Brasil" class="flag-icon"> Português';
            // currentLanguage = "pt"; // Muda para português            // Menu
            document.querySelector("a[href='#education']").textContent = "Education";
            document.querySelector("a[href='#services']").textContent = "Services";
            document.querySelector("a[href='#portfolio']").textContent = "Portfolio";
            document.querySelector("a[href='#contact']").textContent = "Contact";

            // Seção Home
            document.querySelector(".home-content h1").innerHTML = "Hi, It's <span>Magnus</span>";
            document.querySelector(".home-content h3").innerHTML = "I'm a <span></span>";
            document.querySelector(".home-content p").textContent =
                "I'm a technology enthusiast with two years of experience in administration at Reivax, currently working at Tuna, a leading company in online payment optimization. Committed to continuous development, I started a technical course in Systems Development in 2023 and began a Bachelor's degree in Business Administration in 2024. I possess strong interpersonal skills, am organized, proactive, and adaptable to new challenges. I always strive to learn and innovate, contributing with creative ideas in collaborative environments.";

            // Seção Educação
            document.querySelector(".education .heading").textContent = "Education";
            const timelineItemsEn = document.querySelectorAll(".timeline-content");
            timelineItemsEn[0].querySelector("h3").textContent = "High School Graduation and First Job";
            timelineItemsEn[0].querySelector("p").textContent =
                "In 2022, I successfully completed high school with excellent grades and dedication. That same year, I began my professional journey as a young apprentice at Reivax, working as an administrative assistant. During my two years there, I gained valuable experience and developed important skills for my career.";

            timelineItemsEn[1].querySelector("h3").textContent = "Start of Technical Education";
            timelineItemsEn[1].querySelector("p").textContent =
                "In 2023, I started a technical course in Systems Development, focusing on technology—a field I am passionate about. I balanced work and studies, learning programming languages and tools such as HTML, CSS, JavaScript, TypeScript, MySQL, and Java. I developed full-stack projects, websites, and applications, consolidating practical and theoretical skills.";

            timelineItemsEn[2].querySelector("h3").textContent = "Start of Business Administration Degree and Second Job";
            timelineItemsEn[2].querySelector("p").textContent =
                "At the beginning of 2024, I joined Tuna Pagamentos, a company specializing in online payment optimization. I also started a Business Administration degree, inspired by my previous work experience, which sparked my interest in business development. In the same year, I completed my Technical Course in Systems Development.";

            timelineItemsEn[3].querySelector("h3").textContent = "Continuation of My College Studies and Programming Learning";
            timelineItemsEn[3].querySelector("p").textContent = "Processing...";

            // Seção Serviços
            document.querySelector(".services .heading").textContent = "Services";
            const serviceBoxesEn = document.querySelectorAll(".service-info");
            serviceBoxesEn[0].querySelector("h4").textContent = "Frontend Developer";
            serviceBoxesEn[0].querySelector("p").textContent =
                "I have experience in frontend development using React, JavaScript, HTML, CSS, TypeScript, and Python. I am always looking to improve my skills.";

            serviceBoxesEn[1].querySelector("h4").textContent = "Backend Development";
            serviceBoxesEn[1].querySelector("p").textContent =
                "I have experience in backend development, mainly using Java and Spring Boot, used in several projects. I seek to learn other programming languages to expand my skills.";

            serviceBoxesEn[2].querySelector("h4").textContent = "Business Administration Studies";
            serviceBoxesEn[2].querySelector("p").textContent =
                "I am currently pursuing a degree in Business Administration, focusing on leadership, strategic decision-making, finance, marketing, and HR.";

            serviceBoxesEn[3].querySelector("h4").textContent = "Administrative Assistant | Support Analyst";
            serviceBoxesEn[3].querySelector("p").textContent =
                "I have experience as an Administrative Assistant at Reivax and a Support Analyst at Tuna. I have developed strong skills in communication, organization, and process optimization.";

            // Seção Portfolio
            document.querySelector(".portfolio .heading").innerHTML = "My <span>Projects</span>";
            document.querySelectorAll(".portfolio .overlay").forEach((overlay, index) => {
                overlay.textContent = `Project ${index + 1}`;
            });

            // Seção Contact
            document.querySelector(".contact h2").innerHTML = "Contact <span>Me</span>";
            document.querySelector("input[name='name']").setAttribute("placeholder", "Full Name");
            document.querySelector("input[name='email']").setAttribute("placeholder", "Email");
            document.querySelector("input[name='subject']").setAttribute("placeholder", "Subject");
            document.querySelector("textarea").setAttribute("placeholder", "Your Message...");
            document.querySelector("input[type='submit']").setAttribute("value", "Send Message");

            // Footer
            document.querySelectorAll(".footer .list a").forEach((link, index) => {
                switch (index) {
                    case 0:
                        link.textContent = "FAQ";
                        break;
                    case 1:
                        link.textContent = "Services";
                        break;
                    case 2:
                        link.textContent = "About Me";
                        break;
                    case 3:
                        link.textContent = "Contact";
                        break;
                    case 4:
                        link.textContent = "Projects";
                        break;
                }
            });
            document.querySelector(".footer .copyright").textContent = "@Magnus.Oss | All Rights Reserved";
        }
    });
});
