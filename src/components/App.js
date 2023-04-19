import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header";
import About from './About';

console.log(blogData);

function App() {
  return (
    <div className="App">
      <ArticleList/>
      <Header/>
      <About/>
    </div>
  );
}

export default App;
