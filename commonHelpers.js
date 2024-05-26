import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="44069289-55a8aa963762c475e8ab93eb8",p="https://pixabay.com/api/",y=(s="")=>{const o=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})},h=s=>s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${n}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${e}</span></li>
              <li class="item-info">Views <span>${t}</span></li>
              <li class="item-info">Comments <span>${i}</span></li>
              <li class="item-info">Downloads <span>${u}</span></li>
            </ul>
          </a>
        </li>
    `).join("");document.querySelector(".search-btn");document.querySelector(".form-input");const a=document.querySelector(".gallery-list"),c=document.querySelector(".loader"),d=document.querySelector(".form"),g=new m(".gallery-link",{captionsData:"alt",captionDelay:250});d.addEventListener("submit",s=>{s.preventDefault(),c.style.display="inline-block";const o=s.target.elements.search.value.trim();if(o===""){a.innerHTML="",s.target.reset(),l.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"});return}a.innerHTML="",y(o).then(r=>{r.total||l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML=h(r.hits),g.refresh()}).catch(r=>console.log(r)).finally(()=>{c.style.display="none",s.target.reset()})});
//# sourceMappingURL=commonHelpers.js.map
