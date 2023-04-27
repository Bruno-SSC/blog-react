import React, { useEffect, useState } from "react";
import { createFilter } from "javascript-search-input";

import style from "@assets/styles/App.module.css";

import TopTitles from "@headerCP/TopTitles";
import SearchBar from "@headerCP/SearchBar";
import PostsList from "@mainCP/PostsList";

let postCollection = {
  posts: [
    {
      title: "Como começar a praticar yoga",
      resumo:
        "Descubra as principais dicas para começar a praticar yoga, desde como escolher um professor até como escolher o tipo certo de yoga para você.",
      date: "2022-01-01",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam dapibus, gravida est ut, ornare tellus. Nulla id bibendum nibh, eu convallis odio. Sed ac mi eget elit iaculis feugiat. Suspendisse vel feugiat elit, sit amet facilisis velit. Fusce bibendum venenatis nunc, quis rhoncus quam tempor in. Nam suscipit odio nec arcu dictum, vel ullamcorper eros ultricies. Fusce ac nulla id augue luctus aliquet. Sed pharetra iaculis velit, vel fermentum lectus dapibus vitae. Vestibulum auctor mauris non sem elementum, nec sollicitudin mauris consequat.",
      favorite: false,
      id: 0,
    },
    {
      title: "Receita de bolo de cenoura saudável",
      resumo:
        "Aprenda a fazer um bolo de cenoura delicioso e saudável, com ingredientes naturais e sem açúcar refinado.",
      date: "2022-01-05",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam dapibus, gravida est ut, ornare tellus. Nulla id bibendum nibh, eu convallis odio. Sed ac mi eget elit iaculis feugiat. Suspendisse vel feugiat elit, sit amet facilisis velit. Fusce bibendum venenatis nunc, quis rhoncus quam tempor in. Nam suscipit odio nec arcu dictum, vel ullamcorper eros ultricies. Fusce ac nulla id augue luctus aliquet. Sed pharetra iaculis velit, vel fermentum lectus dapibus vitae. Vestibulum auctor mauris non sem elementum, nec sollicitudin mauris consequat.",
      favorite: false,
      id: 1,
    },
    {
      title: "10 dicas para cuidar da saúde mental",
      resumo:
        "Confira 10 dicas simples e eficazes para cuidar da sua saúde mental e manter o bem-estar emocional em dia.",
      date: "2022-01-10",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam dapibus, gravida est ut, ornare tellus. Nulla id bibendum nibh, eu convallis odio. Sed ac mi eget elit iaculis feugiat. Suspendisse vel feugiat elit, sit amet facilisis velit. Fusce bibendum venenatis nunc, quis rhoncus quam tempor in. Nam suscipit odio nec arcu dictum, vel ullamcorper eros ultricies. Fusce ac nulla id augue luctus aliquet. Sed pharetra iaculis velit, vel fermentum lectus dapibus vitae. Vestibulum auctor mauris non sem elementum, nec sollicitudin mauris consequat.",
      favorite: false,
      id: 2,
    },
    {
      title: "Dicas para decorar sua casa no estilo boho",
      resumo:
        "Conheça o estilo de decoração boho e descubra como aplicá-lo na sua casa, com dicas de cores, tecidos e objetos decorativos.",
      date: "2022-01-15",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam dapibus, gravida est ut, ornare tellus. Nulla id bibendum nibh, eu convallis odio. Sed ac mi eget elit iaculis feugiat. Suspendisse vel feugiat elit, sit amet facilisis velit. Fusce bibendum venenatis nunc, quis rhoncus quam tempor in. Nam suscipit odio nec arcu dictum, vel ullamcorper eros ultricies. Fusce ac nulla id augue luctus aliquet. Sed pharetra iaculis velit, vel fermentum lectus dapibus vitae. Vestibulum auctor mauris non sem elementum, nec sollicitudin mauris consequat.",
      favorite: false,
      id: 3,
    },
    {
      title: "Como organizar sua rotina de estudos",
      resumo:
        "Saiba como organizar sua rotina de estudos de forma eficiente e produtiva, com técnicas de planejamento e gestão do tempo.",
      date: "2022-01-20",
      article:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut diam dapibus, gravida est ut, ornare tellus. Nulla id bibendum nibh, eu convallis odio. Sed ac mi eget elit iaculis feugiat. Suspendisse vel feugiat elit, sit amet facilisis velit. Fusce bibendum venenatis nunc, quis rhoncus quam tempor in. Nam suscipit odio nec arcu dictum, vel ullamcorper eros ultricies. Fusce ac nulla id augue luctus aliquet. Sed pharetra iaculis velit, vel fermentum lectus dapibus vitae. Vestibulum auctor mauris non sem elementum, nec sollicitudin mauris consequat.",
      favorite: true,
      id: 4,
    },
  ],
};

const useFilter = (inputText) => {
  const keys = ["title"];
  const data = postCollection.posts;

  const myFilter = createFilter(keys);
  const filtered = data.filter(myFilter(inputText));

  return filtered;
};

const createPostSample = (currentList) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  return {
    title: "Esse é seu novo post.",
    resumo: "Pode editar as informações clicando duas vezes.",
    date: `${year + "-" + month + "-" + day}`,
    article:
      "A data é adicionada automáticamente. Quando terminar, basta clicar em 'salvar'.",
    favorite: false,
    id: currentList.length + 1,
  };
};

function App() {
  const [inputText, setInputText] = useState("");
  let filtered = useFilter(inputText);
  const [currentList, setCurrentList] = useState(filtered);

  const newPost = () => {
    setCurrentList(() => [createPostSample(currentList), ...filtered]);
  };


  useEffect(() => {
    setCurrentList(() => [...filtered]);
  },[inputText]);

  const changePostValues = (post) => {};

  return (
    <section className={style.app}>
      <header className={style.header}>
        <TopTitles />
        <SearchBar setInputText={setInputText} />
      </header>

      <main className={style.main}>
        <PostsList
          changePostValues={changePostValues}
          newPost={newPost}
          posts={currentList}
        />
      </main>
    </section>
  );
}

export default App;
