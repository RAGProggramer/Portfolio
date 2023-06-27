import self from "../img/self.png"
import mock1 from "../img/mock1.jpg"
import mock2 from "../img/mock2.jpg"


export let colors = ["rgba(202,223,216,1) 0%, rgba(63,144,174,1) 50%, rgba(17,53,85,1) 100%"];


export const info = {
    firstName: "RAG",
    lastName: "Dev",
    initials: "Js", 
    position: " Desenvolvedor Full Stack ",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[1],
  
    miniBio: [ 

        {
            emoji: '🌎',
            text: 'Pontes e Lacerda, MT'
        },
        {
            emoji: "💼",
            text: "Estagiario Do IFMT"
        },
        {
            emoji: "📧",
            text: "ragproggrammer@gmail.com"
        }
    ],
    socials: [
    
        {
            link: "https://www.instagram.com/90_gabriel.rocha_90/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/RAGProgrammer",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/gabriel-aguiar-rocha-a2650b1a5/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
      

    ],
    bio: "Olá, é um prazer me apresentar. Me chamo Gabriel Aguiar Rocha e, aos 17 anos, sou um entusiasta da programação. Tenho experiência em linguagens como C++, React, Shell Script e SQL, e atualmente sou aluno do IFMT, cursando o terceiro ano.   Durante minha trajetória acadêmica, tenho me dedicado ao desenvolvimento de habilidades sólidas em programação. Minha proficiência em C++ me permite criar soluções eficientes e escaláveis para problemas complexos. Além disso, sou capaz de desenvolver aplicações web modernas e interativas utilizando React.   Adquiri conhecimentos em Shell Script, o que me permite automatizar tarefas e aumentar a produtividade. Também tenho domínio em SQL, uma linguagem essencial para a manipulação de dados e o trabalho com bancos de dados. Participei de projetos desafiadores ao longo da minha jornada, o que me proporcionou habilidades valiosas em resolução de problemas, trabalho em equipe e pensamento criativo. Estou sempre aberto a novos desafios e oportunidades de aprendizado. Convido você a explorar meu portfólio para conhecer melhor meus projetos e meu estilo de trabalho. Estou disponível para colaborações e ansioso para fazer parte de projetos inovadores.Agradeço sua atenção e espero ter a oportunidade de nos conectarmos em breve.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'shellScript', 'administração de sistemas linux', 'testador de distros'],
            exposedTo: ['nodejs', 'python', 'Bash',' c++','java Script' ]
        }
    ,
    hobbies: [
        {
            label: 'leitura',
            emoji: '📖'
        },
        {
            label: 'Gamer',
            emoji: '🎮'
        },
        {
            label: 'Filmes',
            emoji: '🎥'
        },
        {
            label: 'Atletismo',
            emoji: '🏃‍♂️'
        }


    ],

    portfolio: [ 
        {
            title: "RAGAPPINSTALL",
            source: "https://github.com/RAGProgrammer/RAGAPPINSTALL", 
            image: mock1
        },
        {
            title: "RAGpkg",
            source: "https://github.com/RAGProgrammer/Ragpkg",
            image: mock2
        },
   
    ]
}