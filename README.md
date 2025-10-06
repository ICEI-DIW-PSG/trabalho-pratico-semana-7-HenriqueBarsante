[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20649691&assignment_repo_type=AssignmentRepo)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Henrique Sensato Arnal Melo Barsante
- Matricula: 867638
- Proposta de projeto escolhida: Site para apresentar os genêros do metal
- Breve descrição sobre seu projeto: Site com enfoque em explorar os diferentes genêros incluidos no metal, identificando padrões, semelhanças e diferenças entre eles.

## Print da Home-Page

>[alt text](public\Images\Sitehomepage.PNG)

## Print da página de detalhes do item

>[alt text](public\Images\sitedetalhes.PNG)


## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
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
  }
]
```