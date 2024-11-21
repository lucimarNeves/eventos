import { Evento } from '../evento'
import { Id } from '../shared'

const eventos: Evento[] = [
    {
        id: Id.novo(),
        alias: 'evento-fullstack',
        senha: 'senha123',
        nome: 'Evento de Desenvolvimento Fullstack',
        data: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        descricao:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        imagem: 'data:image/jpeg;base64,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',
        imagemBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        publicoEsperado: 200,
        convidados: [
            {
                id: Id.novo(),
                nome: 'Alice Silva',
                email: 'alice@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: Id.novo(),
                nome: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: Id.novo(),
                nome: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
        ],
    },
    {
        id: Id.novo(),
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
                id: Id.novo(),
                nome: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: Id.novo(),
                nome: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
        ],
    },
    {
        id: Id.novo(),
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
                id: Id.novo(),
                nome: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: Id.novo(),
                nome: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
            {
                id: Id.novo(),
                nome: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: Id.novo(),
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
                id: Id.novo(),
                nome: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 1,
            },
            {
                id: Id.novo(),
                nome: 'Carla Mendes',
                email: 'carla@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: Id.novo(),
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
                id: Id.novo(),
                nome: 'Maria Souza',
                email: 'maria@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 2,
            },
            {
                id: Id.novo(),
                nome: 'José Almeida',
                email: 'jose@example.com',
                confirmado: false,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: Id.novo(),
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
                id: Id.novo(),
                nome: 'Cláudia Lima',
                email: 'claudia@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 3,
            },
            {
                id: Id.novo(),
                nome: 'Ricardo Barbosa',
                email: 'ricardo@example.com',
                confirmado: true,
                possuiAcompanhantes: false,
                qtdeAcompanhantes: 0,
            },
        ],
    },
    {
        id: Id.novo(),
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
                id: Id.novo(),
                nome: 'Thiago Oliveira',
                email: 'thiago@example.com',
                confirmado: true,
                possuiAcompanhantes: true,
                qtdeAcompanhantes: 4,
            },
            {
                id: Id.novo(),
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