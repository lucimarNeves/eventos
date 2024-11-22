import { Evento } from '../evento'
import { Id } from '../shared'

const eventos: Evento[] = [
    {
        id: 'juvkggco8cg-yjpqav3ew6-0vjcebrjb1',
        alias: 'evento-fullstack',
        senha: 'senha123',
        nome: 'Evento de Desenvolvimento Fullstack',
        data: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        descricao:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        imagem:"https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
        imagemBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        publicoEsperado: 200,
        convidados: [
            {
                id: 'ih2rgulmtak-tblzwfprn3r-uyx8868i96',
                nome: 'Alice Silva',
                email: 'alice@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: 'y4uq2hm248-7fajgcebdm3-8zc9txu7pe',
                nome: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: 'nun7drgnnbj-kzmi97e3vm-hx9t2df2xvv',
                nome: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
        ],
    },
    {
        id: 'wj2zsh52wm-chccmpwn1q4-ksp00te574c',
        alias: 'evento-js-avancado',
        senha: 'js2024',
        nome: 'Workshop Avançado de JavaScript',
        data: new Date('2024-11-20T15:00:00Z'),
        local: 'Rio de Janeiro, RJ',
        descricao: 'Um workshop avançado para programadores JavaScript.',
        imagem: 'https://images.prismic.io/turing/652ebc99fbd9a45bcec8182d_Best_Online_Resources_to_Learn_Java_Script_for_Free_29680a8105.webp?auto=format,compress',
        imagemBackground:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        publicoEsperado: 100,
        convidados: [
            {
                id: 'hcpex9rxbjq-n75h21owp9i-okxp83duci',
                nome: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: '4oh16dby8kh-20wupt7abtth-o3v0vqj99fl',
                nome: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
        ],
    },
    {
        id: '1sa3x2nvit2-66xonardpki-maehfyk5698',
        alias: 'evento-dev-frontend',
        senha: 'front123',
        nome: 'Bootcamp de Desenvolvimento Frontend',
        data: new Date('2024-11-15T09:00:00Z'),
        local: 'Belo Horizonte, MG',
        descricao: 'Aprenda a criar interfaces incríveis e responsivas.',
        imagem: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        imagemBackground:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        publicoEsperado: 150,
        convidados: [
            {
                id: 'wxeq0be4of-0qkt5n4lb8e-r1eqwb6xtx',
                nome: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: 'yc0ydpbrgzk-v5kvhhkbob8-elqeqod5hb',
                nome: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: 'd7hoovdxx0i-tsgiia3u1-464hr93mkil',
                nome: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: 'gfzp7d9h34-rjtx8hh5m1i-uz9cov6dczf',
        alias: 'casamento-alberto-marina',
        senha: 'casamento2024',
        nome: 'Casamento do Alberto e Marina',
        data: new Date('2024-11-25T16:00:00Z'),
        local: 'Florianópolis, SC',
        descricao:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        imagem: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        imagemBackground:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        publicoEsperado: 150,
        convidados: [
            {
                id:'dg03m84yj9f-mmgneahbtu7-jg5txrycxe',
                nome: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: 'vtpn0gzj5dp-bfpt7f5ij6q-mqzxkfg3qhs',
                nome: 'Carla Mendes',
                email: 'carla@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: 'sbv3949vi5-u3gl6w2osbd-9gquy7m7ynk',
        alias: 'aniversario-joao',
        senha: 'joao2024',
        nome: 'Aniversário do João - 30 Anos',
        data: new Date('2024-12-05T18:00:00Z'),
        local: 'Curitiba, PR',
        descricao:
            'Comemoração dos 30 anos de João com amigos próximos e familiares.',
        imagem: 'https://auhekids.com.br/wp-content/uploads/2024/03/Celebre-o-Aniversario-de-3-Anos-do-Seu-Filho-Ideias-Divertidas-para-uma-Festa-Inesquecivel.jpg',
        imagemBackground:
            'https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg',
        publicoEsperado: 80,
        convidados: [
            {
                id: 'g0p9dbndofu-xujps8tpm8o-ajxxaf8xy6g',
                nome: 'Maria Souza',
                email: 'maria@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
            {
                id: 'f2zh27c96fg-gicpg1flcrj-yht0ytts9fp',
                nome: 'José Almeida',
                email: 'jose@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: 'zz2mopl1z3-ybewuyq2ixm-b2h2pr9092n',
        alias: 'inauguracao-loja-estrela',
        senha: 'estrela2024',
        nome: 'Inauguração da Loja Estrela',
        data: new Date('2024-12-10T09:00:00Z'),
        local: 'Porto Alegre, RS',
        descricao:
            'Evento de inauguração da nova loja Estrela com brindes e promoções.',
        imagem: 'https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png',
        imagemBackground:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s',
        publicoEsperado: 300,
        convidados: [
            {
                id: 'punc2gtrgc-uk172wk45pc-2ldne4s2eep',
                nome: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 3,
            },
            {
                id: 'crfu5j7wfo-xn7oi2r1tn8-se06l9ys83d',
                nome: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: '60io1f9eglm-4t0zg7i8n1o-lo235bgwufp',
        alias: 'reuniao-familia-oliveira',
        senha: 'familia2024',
        nome: 'Reunião da Família Oliveira',
        data: new Date('2024-12-15T12:00:00Z'),
        local: 'Salvador, BA',
        descricao: 'Reunião de fim de ano da família Oliveira.',
        imagem: 'https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg',
        imagemBackground:
            'https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid',
        publicoEsperado: 50,
        convidados: [
            {
                id: 'rghwtsmdsc-7xosj5v4l3n-omdeau9onue',
                nome: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 4,
            },
            {
                id: '6ellrowkus4-0c40pmdky7be-bg3mvmngfdi',
                nome: 'Letícia Oliveira',
                email: 'leticia@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
]

export default eventos