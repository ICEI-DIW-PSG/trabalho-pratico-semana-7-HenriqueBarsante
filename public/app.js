const metalGenres = [
  {
    id: 1,
    nome: "Nu Metal",
    descricaoCurta: "Fusão inovadora de metal com rap, funk e eletrônica",
    descricaoCompleta: "O Nu Metal surgiu em meados da década de 1990 como uma fusão inovadora entre o heavy metal tradicional e elementos de outros gêneros musicais como rap, funk, grunge e música eletrônica. Este subgênero revolucionou a cena do metal ao incorporar técnicas vocais diversificadas, incluindo rap, vocais limpos melódicos e gritos agressivos. Bandas pioneiras como Korn, Limp Bizkit, Linkin Park e System of a Down definiram as características distintivas do Nu Metal: riffs de guitarra pesados com afinações baixas, uso criativo de samples e elementos eletrônicos, e uma abordagem mais acessível ao público mainstream. O gênero frequentemente aborda temas como alienação social, problemas pessoais e críticas ao sistema. O Nu Metal atingiu seu auge comercial no final dos anos 1990 e início dos anos 2000, influenciando uma nova geração de músicos e expandindo significativamente o alcance do metal para audiências mais diversas.",
    características: [
      "Fusão de metal com rap e funk",
      "Afinações baixas nas guitarras",
      "Uso de samples e elementos eletrônicos",
      "Vocais diversificados (rap, limpos, gritos)",
      "Temas de alienação e crítica social"
    ],
    bandasPrincipais: ["Korn", "Limp Bizkit", "Linkin Park", "System of a Down", "Deftones"],
    origem: "Estados Unidos",
    auge: "Anos 1990-2000",
    imagem: "images/Numetal.jpg"
  },
  {
    id: 2,
    nome: "Heavy Metal",
    descricaoCurta: "O gênero fundamental que originou todo o metal",
    descricaoCompleta: "O Heavy Metal, também conhecido como metal tradicional, nasceu no final da década de 1960 e início dos anos 1970, sendo considerado o gênero fundamental que deu origem a todos os subgêneros do metal. Emergindo de bandas como Black Sabbath, Led Zeppelin e Deep Purple, o heavy metal estabeleceu as bases sonoras que definiram todo um movimento musical. Caracterizado por guitarras altamente distorcidas, riffs poderosos, solos virtuosos, baixo proeminente e bateria potente, o heavy metal tradicional criou uma sonoridade única e reconhecível. As letras frequentemente exploram temas como mitologia, fantasia, poder, rebelião e aspectos sombrios da existência humana. Bandas icônicas como Iron Maiden, Judas Priest, Ozzy Osbourne e Dio consolidaram o gênero e estabeleceram padrões que influenciam músicos até hoje. O heavy metal tradicional permanece como uma força vital na música contemporânea, mantendo sua relevância através de décadas de evolução musical.",
    características: [
      "Guitarras altamente distorcidas",
      "Riffs poderosos e memoráveis",
      "Solos virtuosos e técnicos",
      "Baixo proeminente e bateria potente",
      "Temas de mitologia, fantasia e poder"
    ],
    bandasPrincipais: ["Black Sabbath", "Iron Maiden", "Judas Priest", "Ozzy Osbourne", "Dio"],
    origem: "Reino Unido",
    auge: "Anos 1970-1980",
    imagem: "images/heavymetal.jpg"
  },
  {
    id: 3,
    nome: "Thrash Metal",
    descricaoCurta: "Velocidade extrema e agressividade intensa",
    descricaoCompleta: "Desenvolvido no início dos anos 1980, o Thrash Metal representa uma evolução mais agressiva e rápida do heavy metal tradicional. Este subgênero nasceu principalmente nos Estados Unidos, com focos em São Francisco (Bay Area) e Los Angeles, como uma resposta à necessidade de maior velocidade e intensidade na música metal. O 'Big Four' do thrash metal - Metallica, Megadeth, Slayer e Anthrax - estabeleceu os parâmetros definidores do gênero: riffs extremamente rápidos e precisos, bateria acelerada com uso intensivo de blast beats, vocais agressivos e letras que frequentemente abordam temas sociais, políticos e apocalípticos. A técnica de 'downpicking' e os solos de guitarra complexos tornaram-se marcas registradas. O thrash metal influenciou profundamente o desenvolvimento de gêneros posteriores como death metal e black metal, mantendo sua relevância através de bandas contemporâneas que continuam a evolução sonora iniciada nos anos 80.",
    características: [
      "Riffs extremamente rápidos e precisos",
      "Bateria acelerada com blast beats",
      "Técnica de downpicking característica",
      "Vocais agressivos e intensos",
      "Letras sobre temas sociais e políticos"
    ],
    bandasPrincipais: ["Metallica", "Megadeth", "Slayer", "Anthrax", "Testament"],
    origem: "Estados Unidos",
    auge: "Anos 1980-1990",
    imagem: "images/thrash metal.jpg"
  },
  {
    id: 4,
    nome: "Black Metal",
    descricaoCurta: "Atmosfera sombria e crua da Escandinávia",
    descricaoCompleta: "O Black Metal é um subgênero extremo do heavy metal que emergiu no início dos anos 1980, atingindo sua forma mais característica na Noruega durante os anos 1990. Este estilo musical é conhecido por sua abordagem crua, atmosférica e frequentemente controversa, tanto musicalmente quanto em termos de filosofia e estética. Musicalmente, o black metal se caracteriza por guitarras com alta distorção e reverb, criando uma sonoridade 'fria' e atmosférica, blast beats intensos na bateria, baixo muitas vezes inaudível na mixagem, e vocais em shriek (gritos agudos). A produção deliberadamente crua e lo-fi é uma característica distintiva, contrastando com a busca por clareza sonora de outros gêneros. Bandas seminais como Mayhem, Burzum, Darkthrone e Emperor definiram o som e a estética do gênero. Temas líricos frequentemente incluem paganismo, natureza, mitologia nórdica, anti-cristianismo e filosofias niilistas, acompanhados por uma estética visual marcante com corpse paint e simbolismo sombrio.",
    características: [
      "Guitarras com reverb e sonoridade fria",
      "Blast beats intensos e atmosféricos",
      "Vocais em shriek (gritos agudos)",
      "Produção crua e lo-fi intencional",
      "Temas de paganismo e mitologia nórdica"
    ],
    bandasPrincipais: ["Mayhem", "Burzum", "Darkthrone", "Emperor", "Immortal"],
    origem: "Noruega e Escandinávia",
    auge: "Anos 1990-presente",
    imagem: "images/black metal.jpg"
  },
  {
    id: 5,
    nome: "Power Metal",
    descricaoCurta: "Épico, melódico e majestoso",
    descricaoCompleta: "O Power Metal é um subgênero melódico do heavy metal que emergiu em meados dos anos 1980, combinando a potência e energia do metal tradicional com elementos de música clássica, criando composições épicas e majestosas. Este estilo se desenvolveu principalmente na Europa, com destaque para Alemanha e Itália. Caracteriza-se por vocais operísticos e melódicos em registros agudos, guitarras harmoniosas com solos virtuosos inspirados na música clássica, teclados sinfônicos, e estruturas composicionais complexas que frequentemente incluem mudanças de andamento e arranjos orquestrais. A bateria mantém padrões rápidos mas precisos, criando uma base sólida para as elaboradas construções melódicas. Bandas como Helloween, Blind Guardian, Stratovarius e Rhapsody estabeleceram os padrões do gênero. As letras do power metal frequentemente exploram temas de fantasia, mitologia, heroísmo, batalhas épicas e narrativas de aventura, criando verdadeiras sinfonias metálicas que transportam o ouvinte para mundos imaginários.",
    características: [
      "Vocais operísticos em registros agudos",
      "Solos virtuosos inspirados na música clássica",
      "Uso de teclados sinfônicos",
      "Estruturas composicionais complexas",
      "Temas épicos de fantasia e heroísmo"
    ],
    bandasPrincipais: ["Helloween", "Blind Guardian", "Stratovarius", "Rhapsody", "Gamma Ray"],
    origem: "Alemanha e Europa",
    auge: "Anos 1980-presente",
    imagem: "images/power-metal.jpg"
  },
  {
    id: 6,
    nome: "Folk Metal",
    descricaoCurta: "Fusão de metal com música folclórica tradicional",
    descricaoCompleta: "O Folk Metal é um subgênero fascinante que funde o heavy metal com elementos da música folclórica tradicional de diversas culturas ao redor do mundo. Surgindo nos anos 1990, este estilo representa uma das fusões mais criativas e culturalmente ricas dentro do universo do metal. A característica mais distintiva do folk metal é a incorporação de instrumentos tradicionais como flautas, violinos, gaitas de fole, harpas, acordeões, instrumentos de percussão étnicos e uma variedade de instrumentos específicos de diferentes culturas. Estes elementos são harmoniosamente combinados com a instrumentação tradicional do metal, criando paisagens sonoras únicas e envolventes. Bandas como Finntroll (Finlândia), Eluveitie (Suíça), Korpiklaani (Finlândia), Ensiferum (Finlândia) e Alestorm (Escócia) demonstram a diversidade regional do gênero. As letras frequentemente abordam mitologia, história antiga, natureza, paganismo e tradições culturais específicas, cantadas tanto em idiomas modernos quanto em línguas antigas, criando uma ponte entre o passado ancestral e o presente moderno.",
    características: [
      "Instrumentos tradicionais (flautas, violinos, gaitas)",
      "Fusão de elementos folclóricos com metal",
      "Diversidade cultural e regional",
      "Temas de mitologia e história antiga",
      "Letras em idiomas antigos e modernos"
    ],
    bandasPrincipais: ["Finntroll", "Eluveitie", "Korpiklaani", "Ensiferum", "Alestorm"],
    origem: "Europa (Finlândia, Suíça)",
    auge: "Anos 1990-presente",
    imagem: "images/folkmetal.jpg"
  },
  {
    id: 7,
    nome: "Progressive Metal",
    descricaoCurta: "Complexidade técnica e experimentação musical",
    descricaoCompleta: "O Progressive Metal combina a intensidade e o peso do heavy metal com a complexidade estrutural e experimental do rock progressivo. Surgindo no final dos anos 1980, este subgênero representa uma das expressões mais sofisticadas e tecnicamente desafiadoras dentro do universo do metal. Caracterizado por composições longas e intrincadas, mudanças constantes de compasso e andamento, estruturas não-convencionais, instrumentação virtuosa e arranjos elaborados que frequentemente incorporam elementos de jazz, música clássica e world music. As músicas podem durar entre 10 a 20 minutos, desenvolvendo temas musicais complexos através de múltiplas seções interconectadas. Bandas pioneiras como Dream Theater, Queensrÿche, Fates Warning e mais recentemente Tool, Mastodon e Opeth expandiram os limites do que o metal pode ser. As letras do progressive metal frequentemente exploram temas filosóficos profundos, conceitos abstratos, narrativas complexas e questões existenciais, exigindo atenção ativa do ouvinte e recompensando múltiplas audições com novas descobertas sonoras.",
    características: [
      "Composições longas e intrincadas",
      "Mudanças constantes de compasso",
      "Instrumentação virtuosa e técnica",
      "Incorporação de jazz e música clássica",
      "Temas filosóficos e existenciais"
    ],
    bandasPrincipais: ["Dream Theater", "Queensrÿche", "Tool", "Opeth", "Mastodon"],
    origem: "Estados Unidos e Europa",
    auge: "Anos 1990-presente",
    imagem: "images/prog metal.jpg"
  },
  {
    id: 8,
    nome: "Metalcore",
    descricaoCurta: "Fusão de metal extremo com hardcore punk",
    descricaoCompleta: "O Metalcore é um gênero de fusão que combina elementos do metal extremo com hardcore punk, emergindo no final dos anos 1980 e ganhando popularidade massiva nos anos 2000. Este estilo representa uma das evoluções mais dinâmicas e comercialmente bem-sucedidas do metal contemporâneo. Musicalmente, o metalcore se caracteriza pela alternância dramática entre vocais melódicos limpos e screaming/growling agressivos, breakdowns pesados e sincopados, riffs de guitarra que combinam melodia com brutalidade, e uma seção rítmica que enfatiza tanto groove quanto intensidade. Esta dualidade vocal tornou-se uma das marcas mais reconhecíveis do gênero. Bandas como Killswitch Engage, As I Lay Dying, All That Remains, Trivium e Architects definiram e refinaram o som do metalcore moderno. O gênero frequentemente aborda temas de luta pessoal, superação, relacionamentos, crítica social e introspecção emocional, conectando-se profundamente com audiências jovens e criando uma das comunidades de fãs mais dedicadas e apaixonadas no mundo do metal.",
    características: [
      "Alternância entre vocais limpos e agressivos",
      "Breakdowns pesados e sincopados",
      "Riffs que combinam melodia e brutalidade",
      "Fusão de metal extremo com hardcore",
      "Temas de luta pessoal e superação"
    ],
    bandasPrincipais: ["Killswitch Engage", "As I Lay Dying", "Trivium", "Architects", "All That Remains"],
    origem: "Estados Unidos",
    auge: "Anos 2000-presente",
    imagem: "images/metalcore.jpg"
  }
];

function carregarCards() {
  const cardsContainer = document.getElementById('cards-container');
  
  if (!cardsContainer) return;

  cardsContainer.innerHTML = '';

  metalGenres.forEach(genre => {
    const card = `
      <div class="col">
        <div class="secao h-100">
          <img src="${genre.imagem}" alt="${genre.nome}" class="card-img-top">
          <div class="p-4">
            <h3>${genre.nome}</h3>
            <p>${genre.descricaoCurta}</p>
            <a href="detalhes.html?id=${genre.id}" class="btn btn-subscribe">Ver Detalhes</a>
          </div>
        </div>
      </div>
    `;
    cardsContainer.innerHTML += card;
  });
}

document.addEventListener('DOMContentLoaded', carregarCards);