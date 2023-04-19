import React from 'react';
import blogData from '../data/blog';

export default function Article (){

 function teaEmoji(minutes) {
  let tea = '☕️';
  let bun = '🍱';
  if (minutes < 30) {
    const numTime = Math.floor(minutes / 5);
    return ` - ${tea.repeat(numTime)} ${minutes} min read`
  } else {
   const numTime2 = Math.floor(minutes / 10);
   return ` - ${bun.repeat(numTime2)} ${minutes} min read`
  }
 }

    return (
     <>
      {blogData.posts.map((article) => {
       return(
         <article key={article.id} >
             <h3>{article.title}</h3>
             <small>{article.date || 'January 1, 1970'} <span>{teaEmoji(article.minutes)}</span> </small>
             <p>{article.preview}</p>
         </article>
     )
      })}
     </>
    );
}
