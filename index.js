import{a as n,S as u,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();n.defaults.baseURL="https://pixabay.com/api/";function f(s){return n("",{params:{q:s,key:"50246788-a6edd7baee942991099f119f0",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>r)}const c=document.querySelector(".js-gallery"),d=new u(".js-gallery a",{captionsData:"alt",captionDelay:150});function p(s){const r=s.map(t=>`
      <li class="image-item">
        <div>
          <a href="${t.largeImageURL}" class="image-link">
            <img src="${t.webformatURL}" alt="${t.tags}" class="gallery-image">
          </a>
        </div>
        <div>
          <ul class="info-box">
            <li class="info-item">
              <p class="info-title">Likes</p>
              <p class="info-label" data-likes>${t.likes}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Views</p>
              <p class="info-label" data-views>${t.views}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Comments</p>
              <p class="info-label" data-comments>${t.comments}</p>
            </li>
            <li class="info-item">
              <p class="info-title">Downloads</p>
              <p class="info-label" data-downloads>${t.downloads}</p>
            </li>
          </ul>
        </div>
      </li>`).join("");c.innerHTML=r,d.refresh()}function m(){c.innerHTML=""}function y(){document.querySelector(".js-loader").classList.remove("hidden")}function h(){document.querySelector(".js-loader").classList.add("hidden")}const g=document.querySelector(".js-form"),L=document.querySelector('input[name="search-text"]');g.addEventListener("submit",function(s){s.preventDefault();const r=L.value.trim();if(r===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}y(),m(),f(r).then(t=>{t.hits.length===0?a.error({title:"No images",message:"Sorry, there are no images matching your search query. Please try again!"}):p(t.hits)}).catch(t=>{a.error({position:"topCenter",title:"Error",message:"An error occurred while fetching images. Please try again later."})}).finally(()=>{h()})});
//# sourceMappingURL=index.js.map
