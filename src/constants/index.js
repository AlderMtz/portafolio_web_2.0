import project1 from "../assets/projects/platzigram.png";
import project2 from "../assets/projects/taskapp.png";
import project3 from "../assets/projects/freedomLogo.png";
import project4 from "../assets/projects/pass.png";
import project5 from "../assets/projects/clone-google.png";
import project6 from "../assets/projects/c-pendulo.png";

export const HERO_CONTENT = `Desarrollador Backend especializado en frameworks de Python, con experiencia en APIs RESTful, proyectos en POS y e-commerce. Destaco en validación de datos en tiempo real y automatización de procesos, optimizando sistemas y mejorando la experiencia del usuario. Experiencia adquirida en entornos laborales y diplomados, con enfoque en soluciones innovadoras para el desarrollo web.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "FEB 2024- OCT 2024",
    role: "Desarrollador Backend ",
    company: "iSypos S.A de C.V.",
    description: `Desarrollador Backend – APIs para Sistema de Punto de Venta con web scraping a páginas e-commerce.`,
    highlights: [
    "Diseñé APIs RESTful utilizando FastAPI y MariaDB, implementando conexiones asíncronas para alto rendimiento.",
    "API de Productos: Implementación de gestión de productos y  actualizacion mediante plataformas e-commerce (Shopify, VTEX) utilizando web scraping multihilo.",
    "API de E-Servicios: Desarrollo de transacciones digitales para recargas, pagos y pines, integrando APIs externas.",
    "Automatización: Validación en tiempo real de licencias, correos electrónicos y códigos postales, mejorando el registro de usuarios y optimizando coberturas logísticas (paqueterías).",
    "Conexión del POS con plataformas e-commerce, facilitando la comparación y actualización de precios y bases de datos."
  ],
    technologies: ["FastAPI", "Python", "Pytest", "MariaDb", "SQLAlchemy", "Beautifulsoup","Selenium", "cURL", "threading"],
  },
  {
    year: "Mar 2022- Dic 2022",
    role: "Programador/Servicio al cliente ",
    company: "Global Engineering & Support del Bajio S.A de C.V.",
    description: `Programador en automatizacion (PLC, HMI, Brazos roboticos).`,
    highlights: [
      "Programación de brazos robóticos Epson SCARA LS6-B. ",
      "Sistemas de trazabilidad (ATS) (TCP/IP).",
      "Mantenimiento preventivo, correctivo y tryouts a sistemas automatizados."
    ],
    technologies: ["KEYENCE", "Epson SCARA", "SIEMENS", "COGNEX", "LADDER"],
  },
  {
    year: "Mar 2020-Jun 2020",
    role: "Programador ",
    company: "Biotecnica del Bajio S.A. DE C.V. S.A de C.V.",
    description: `Programador en automatizacion (PLC, HMI).`,
    highlights: [
      "Adaptación de sensor de humedad a equipos, mediante PLC e interfaces gráficas en HM.",
      "Ejecución de tryouts a sistemas de control."
    ],
    technologies: ["Allen Bradley", "Balluff", "LADDER"],
  }
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Un sitio web de portafolio personal que muestra proyectos, habilidades e información de contacto.",
      link: "#",
      technologies: ["React", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Platzigram",
    image: project1,
    description:
      `La aplicación ofrece funciones clave, como un sistema de registro de usuarios, un
        feed dinámico para explorar y crear publicaciones, una ventana detallada para gestionar perfiles y
        una aplicación de mensajería directa para una comunicación instantánea. Además, destaca por su
        sistema de notificaciones que informa a los usuarios sobre interacciones como comentarios, likes,
        follows y mensajes nuevos, mejorando la interactividad y la experiencia general.`,
      link: 'https://platzigram-deploy.onrender.com/users/login/',
        technologies: ["Django", "Postgres", "HTML", "CSS", "bootstrap"],
  },
  {
    title: "Task app",
    image: project2,
    description:
      `Aplicación enfocada en la administración de tareas. La plataforma
      incluye áreas dedicadas para visualizar las tareas actuales y área de detalles de tarea,
      permitiendo el registro, modificación o eliminación de tareas de manera sencilla. La comunicación fluida
      entre el frontend y el backend se logra mediante operaciones CRUD, garantizando una interacción eficaz y
      una
      gestión completa de las tareas.`,
      link: "https://taskapp-2mjd.onrender.com/tasks",
      technologies: ["Django rest framework", "HTML", "CSS", "React", "Tailwind "],
  },
  {
    title: "Password generator",
    image: project4,
    description:
      `Aplicación especializada en la generación de contraseñas, equipada con funcionalidades
      que permiten personalizar la longitud de las contraseñas mediante una lista desplegable,
      permitiendo adaptar la seguridad según sus necesidades. Además, la aplicación incluye la implementación
      de caracteres especiales, mayúsculas y números, garantizando la creación de contraseñas robustas y
      seguras.`,
      link: "https://aldermtz.pythonanywhere.com/",
      technologies: ["Python", "HTML", "CSS"],
  },
  {
    title: "Clon de google",
    image: project5,
    description:
      `Proyecto de recreación de la interfaz de inicio de Google con objetivo práctico de
      consolidar mis conocimientos en HTML y CSS. Esta iniciativa me permitió aplicar de manera práctica los
      conceptos aprendidos, fortaleciendo mis habilidades en el diseño y estructuración de páginas web.`,
      link: "https://aldermtz.github.io/clone_google/",
      technologies: ["HTML", "CSS"],
  },
  {
    title: "Carro péndulo invertido",
    image: project6,
    description:
      `Proyecto educativo donde se abordó el desarrollo integral del modelo matemático del
      carro péndulo invertido, junto con su correspondiente diseño físico. La implementación del controlador
      PID se realizó en una placa Arduino Uno, mientras que el reconocimiento de imágenes se logró mediante el
      uso de una Raspberry Pi, programada en Python con el apoyo de bibliotecas especializadas en
      reconocimiento de imágenes.`,
      link: "https://www.youtube.com/watch?v=NGgrXbrhXpc",
      technologies: ["Python", "Arduino", "Raspberry Pi", "OpenCV", "SolidWorks", "MATLAB"],
  }
];

export const CONTACT = {
  address: "Santa Lucia del Camino, 71243, Oaxaca.",
  phoneNo: "+52 951 126 5431",
  email: "alder.mtz.ant@gmail.com",
};
