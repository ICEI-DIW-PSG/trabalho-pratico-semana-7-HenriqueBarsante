const metalGenres = [
  {
    id: 1,
    nome: "Nu Metal",
    descricaoCurta: "Fusão inovadora de metal com rap, funk e eletrônica",
    descricaoCompleta: "O Nu Metal surgiu em meados da década de 1990 como uma fusão inovadora entre o heavy metal tradicional e elementos de outros gêneros musicais como rap, funk, grunge e música eletrônica. Este subgênero revolucionou a cena do metal ao incorporar técnicas vocais diversificadas, incluindo rap, vocais limpos melódicos e gritos agressivos. Bandas pioneiras como Korn, Limp Bizkit, Linkin Park e System of a Down definiram as características distintivas do Nu Metal.",
    origem: "Estados Unidos",
    auge: "Anos 1990-2000",
    bandas: "Korn, Limp Bizkit, Linkin Park, System of a Down, Deftones",
    imagem: "images/Numetal.jpg"
  },
  {
    id: 2,
    nome: "Heavy Metal",
    descricaoCurta: "O gênero fundamental que originou todo o metal",
    descricaoCompleta: "O Heavy Metal, também conhecido como metal tradicional, nasceu no final da década de 1960 e início dos anos 1970, sendo considerado o gênero fundamental que deu origem a todos os subgêneros do metal. Emergindo de bandas como Black Sabbath, Led Zeppelin e Deep Purple, o heavy metal estabeleceu as bases sonoras que definiram todo um movimento musical. Caracterizado por guitarras altamente distorcidas, riffs poderosos, solos virtuosos, baixo proeminente e bateria potente.",
    origem: "Reino Unido",
    auge: "Anos 1970-1980",
    bandas: "Black Sabbath, Iron Maiden, Judas Priest, Ozzy Osbourne, Dio",
    imagem: "images/heavymetal.jpg"
  },
  {
    id: 3,
    nome: "Thrash Metal",
    descricaoCurta: "Velocidade extrema e agressividade intensa",
    descricaoCompleta: "Desenvolvido no início dos anos 1980, o Thrash Metal representa uma evolução mais agressiva e rápida do heavy metal tradicional. Este subgênero nasceu principalmente nos Estados Unidos, com focos em São Francisco (Bay Area) e Los Angeles, como uma resposta à necessidade de maior velocidade e intensidade na música metal. O 'Big Four' do thrash metal - Metallica, Megadeth, Slayer e Anthrax - estabeleceu os parâmetros definidores do gênero.",
    origem: "Estados Unidos",
    auge: "Anos 1980-1990",
    bandas: "Metallica, Megadeth, Slayer, Anthrax, Testament",
    imagem: "images/thrash metal.jpg"
  },
  {
    id: 4,
    nome: "Black Metal",
    descricaoCurta: "Atmosfera sombria e crua da Escandinávia",
    descricaoCompleta: "O Black Metal é um subgênero extremo do heavy metal que emergiu no início dos anos 1980, atingindo sua forma mais característica na Noruega durante os anos 1990. Este estilo musical é conhecido por sua abordagem crua, atmosférica e frequentemente controversa, tanto musicalmente quanto em termos de filosofia e estética. Musicalmente, o black metal se caracteriza por guitarras com alta distorção e reverb, criando uma sonoridade 'fria' e atmosférica.",
    origem: "Noruega e Escandinávia",
    auge: "Anos 1990-presente",
    bandas: "Mayhem, Burzum, Darkthrone, Emperor, Immortal",
    imagem: "images/black metal.jpg"
  },
  {
    id: 5,
    nome: "Power Metal",
    descricaoCurta: "Épico, melódico e majestoso",
    descricaoCompleta: "O Power Metal é um subgênero melódico do heavy metal que emergiu em meados dos anos 1980, combinando a potência e energia do metal tradicional com elementos de música clássica, criando composições épicas e majestosas. Este estilo se desenvolveu principalmente na Europa, com destaque para Alemanha e Itália. Caracteriza-se por vocais operísticos e melódicos em registros agudos, guitarras harmoniosas com solos virtuosos inspirados na música clássica.",
    origem: "Alemanha e Europa",
    auge: "Anos 1980-presente",
    bandas: "Helloween, Blind Guardian, Stratovarius, Rhapsody, Gamma Ray",
    imagem: "images/power-metal.jpg"
  },
  {
    id: 6,
    nome: "Folk Metal",
    descricaoCurta: "Fusão de metal com música folclórica tradicional",
    descricaoCompleta: "O Folk Metal é um subgênero fascinante que funde o heavy metal com elementos da música folclórica tradicional de diversas culturas ao redor do mundo. Surgindo nos anos 1990, este estilo representa uma das fusões mais criativas e culturalmente ricas dentro do universo do metal. A característica mais distintiva do folk metal é a incorporação de instrumentos tradicionais como flautas, violinos, gaitas de fole, harpas e acordeões.",
    origem: "Europa (Finlândia, Suíça)",
    auge: "Anos 1990-presente",
    bandas: "Finntroll, Eluveitie, Korpiklaani, Ensiferum, Alestorm",
    imagem: "images/folkmetal.jpg"
  },
  {
    id: 7,
    nome: "Progressive Metal",
    descricaoCurta: "Complexidade técnica e experimentação musical",
    descricaoCompleta: "O Progressive Metal combina a intensidade e o peso do heavy metal com a complexidade estrutural e experimental do rock progressivo. Surgindo no final dos anos 1980, este subgênero representa uma das expressões mais sofisticadas e tecnicamente desafiadoras dentro do universo do metal. Caracterizado por composições longas e intrincadas, mudanças constantes de compasso e andamento, estruturas não-convencionais e instrumentação virtuosa.",
    origem: "Estados Unidos e Europa",
    auge: "Anos 1990-presente",
    bandas: "Dream Theater, Queensrÿche, Tool, Opeth, Mastodon",
    imagem: "images/prog metal.jpg"
  },
  {
    id: 8,
    nome: "Metalcore",
    descricaoCurta: "Fusão de metal extremo com hardcore punk",
    descricaoCompleta: "O Metalcore é um gênero de fusão que combina elementos do metal extremo com hardcore punk, emergindo no final dos anos 1980 e ganhando popularidade massiva nos anos 2000. Este estilo representa uma das evoluções mais dinâmicas e comercialmente bem-sucedidas do metal contemporâneo. Musicalmente, o metalcore se caracteriza pela alternância dramática entre vocais melódicos limpos e screaming/growling agressivos, breakdowns pesados e sincopados.",
    origem: "Estados Unidos",
    auge: "Anos 2000-presente",
    bandas: "Killswitch Engage, As I Lay Dying, Trivium, Architects, All That Remains",
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

function carregarDetalhes() {
  const detalheContainer = document.getElementById('detalhe');
  
  if (!detalheContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const genreId = parseInt(urlParams.get('id'));

  const genre = metalGenres.find(g => g.id === genreId);

  if (!genre) {
    detalheContainer.innerHTML = `
      <div class="alert alert-danger">
        <h4>Gênero não encontrado!</h4>
        <p>O gênero solicitado não existe.</p>
        <a href="index.html" class="btn btn-subscribe">Voltar para Home</a>
      </div>
    `;
    return;
  }

  document.title = `${genre.nome} - Detalhes`;

  detalheContainer.innerHTML = `
    <div class="secao p-4">
      <img src="${genre.imagem}" alt="${genre.nome}" class="mb-4">
      
      <h1 class="mb-4">${genre.nome}</h1>
      
      <div class="row mb-4">
        <div class="col-md-6">
          <h4>📍 Origem</h4>
          <p>${genre.origem}</p>
        </div>
        <div class="col-md-6">
          <h4>🎸 Auge</h4>
          <p>${genre.auge}</p>
        </div>
      </div>

      <h3 class="mt-4 mb-3">Sobre o Gênero</h3>
      <p>${genre.descricaoCompleta}</p>

      <h3 class="mt-4 mb-3">Bandas Principais</h3>
      <p><strong>${genre.bandas}</strong></p>

      <div class="mt-5">
        <a href="index.html" class="btn btn-subscribe">← Voltar para Home</a>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cards-container')) {
    carregarCards();
  }
  
  if (document.getElementById('detalhe')) {
    carregarDetalhes();
  }
});