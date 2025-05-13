import{a as f,S as b,i as s}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();f.defaults.baseURL="https://pixabay.com/api/";async function m(i,t=1){try{return(await f("",{params:{q:i,key:"50246788-a6edd7baee942991099f119f0",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}catch(r){return r}}const L=document.querySelector(".js-gallery"),a=document.querySelector(".js-loader"),n=document.querySelector(".load-more-btn"),v=new b(".js-gallery a",{captionsData:"alt",captionDelay:150});function q({largeImageURL:i,webformatURL:t,tags:r,likes:u,views:e,comments:o,downloads:c}){return`
    <li class="image-item">
      <div>
        <a href="${i}" class="image-link">
          <img src="${t}" alt="${r}" class="gallery-image" loading="lazy">
        </a>
      </div>
      <div>
        <ul class="info-box">
          <li class="info-item">
            <p class="info-title">Likes</p>
            <p class="info-label">${u}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Views</p>
            <p class="info-label">${e}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Comments</p>
            <p class="info-label">${o}</p>
          </li>
          <li class="info-item">
            <p class="info-title">Downloads</p>
            <p class="info-label">${c}</p>
          </li>
        </ul>
      </div>
    </li>
  `}function p(i){const t=i.map(q).join("");L.insertAdjacentHTML("beforeend",t),v.refresh()}function g(){a==null||a.classList.remove("hidden")}function h(){a==null||a.classList.add("hidden")}function w(){n==null||n.classList.remove("hidden")}function y(){n==null||n.classList.add("hidden")}const S=document.querySelector(".js-form"),C=document.querySelector('input[name="search-text"]'),P=document.querySelector(".load-more-btn");let l=1,d="";S.addEventListener("submit",async function(i){i.preventDefault();const t=C.value.trim();if(!t){s.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}t!==d&&(d=t,l=1,document.querySelector(".js-gallery").innerHTML=""),g(),y();try{const r=await m(t,l);r.hits.length?(p(r.hits),r.totalHits>l*15?w():s.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})):s.error({title:"No images",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch{s.error({position:"topCenter",title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{h()}});P.addEventListener("click",async function(){l+=1,g();try{const r=await m(d,l);r.hits.length?(p(r.hits),r.totalHits<=l*15&&(y(),s.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}))):s.error({title:"No more images",message:"Sorry, no more images available.",position:"topRight"})}catch{s.error({position:"topCenter",title:"Error",message:"An error occurred while fetching images. Please try again later."})}finally{h()}const t=document.querySelectorAll(".image-item")[0].getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
