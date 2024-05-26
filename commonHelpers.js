import{a as u,S as w,i as m}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const S="44069289-55a8aa963762c475e8ab93eb8",M="https://pixabay.com/api/",g=15;u.defaults.baseURL=M;const f=async(s="",e=1)=>(await u.get("",{params:{key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:g}})).data,h=s=>s.map(({webformatURL:e,largeImageURL:r,tags:n,likes:t,views:o,comments:l,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${n}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${t}</span></li>
              <li class="item-info">Views <span>${o}</span></li>
              <li class="item-info">Comments <span>${l}</span></li>
              <li class="item-info">Downloads <span>${v}</span></li>
            </ul>
          </a>
        </li>
    `).join(""),c=document.querySelector(".gallery-list"),y=document.querySelector(".loader"),P=document.querySelector(".form"),i=document.querySelector(".js-load-more-btn");i.style.display="none";let a=1,d=0,p="";const b=new w(".gallery-link",{captionsData:"alt",captionDelay:250});P.addEventListener("submit",async s=>{if(s.preventDefault(),y.style.display="inline-block",a=1,p=s.target.elements.search.value.trim(),p===""){c.innerHTML="",s.target.reset(),m.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"}),y.style.display="none";return}c.innerHTML="";try{const e=await f(p,a);e.total?(c.innerHTML=h(e.hits),b.refresh(),d=Math.ceil(e.totalHits/g),a<d?i.style.display="block":i.style.display="none"):m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(e){console.log(e)}finally{y.style.display="none",s.target.reset()}});const L=async(s,e)=>{try{y.style.display="inline-block",a++;const{hits:r,totalHits:n}=await f(e,a);c.insertAdjacentHTML("beforeend",h(r)),b.refresh(),d=Math.ceil(n/g),console.log(a),a===d&&(i.style.display="none",i.removeEventListener("click",L),m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(r){console.error("Error loading more photos:",r)}finally{y.style.display="none",q()}};i.addEventListener("click",()=>L(event,p));const q=()=>{const e=c.querySelector(".gallery-item").getBoundingClientRect().height,r=e*2;console.log(r),window.scrollBy({top:e,left:0,behavior:"smooth"})};
//# sourceMappingURL=commonHelpers.js.map
