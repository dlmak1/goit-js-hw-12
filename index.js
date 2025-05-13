import{a as c,S as f,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();c.defaults.baseURL="https://pixabay.com/api/";async function p(i){try{return(await c("",{params:{q:i,key:"50246788-a6edd7baee942991099f119f0",image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){return t}}const u=document.querySelector(".js-gallery"),o=document.querySelector(".js-loader"),m=new f(".js-gallery a",{captionsData:"alt",captionDelay:150});function d({largeImageURL:i,webformatURL:t,tags:s,likes:n,views:e,comments:r,downloads:a}){return`
    <li class="image-item">
      <div>
        <a href="${i}" class="image-link">
          <img src="${t}" alt="${s}" class="gallery-image" loading="lazy">
        </a>
      </div>
      <div>
        <ul class="info-box">
          <li class="info-item">
            <p class="info-title">Likes</p>
            <p class="info-label">${n}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Views</p>
            <p class="info-label">${e}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Comments</p>
            <p class="info-label">${r}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Downloads</p>
            <p class="info-label">${a}</p>
          </li>
        </ul>
      </div>
    </li>
  `}function y(i){const t=i.map(d).join("");u.innerHTML=t,m.refresh()}function g(){u.innerHTML=""}function h(){o==null||o.classList.remove("hidden")}function L(){o==null||o.classList.add("hidden")}const b=document.querySelector(".js-form"),v=document.querySelector('input[name="search-text"]');b.addEventListener("submit",async function(i){i.preventDefault();const t=v.value.trim();if(!t){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}h(),g();try{const s=await p(t);s.hits.length?y(s.hits):l.error({title:"No images",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch{l.error({position:"topCenter",title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{L()}});
//# sourceMappingURL=index.js.map
