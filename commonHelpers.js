import{a as u,S as w,i as m}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const S="44069289-55a8aa963762c475e8ab93eb8",v="https://pixabay.com/api/",g=15;u.defaults.baseURL=v;const f=async(o="",e=1)=>(await u.get("",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:g}})).data,h=o=>o.map(({webformatURL:e,largeImageURL:r,tags:l,likes:t,views:s,comments:i,downloads:L})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${l}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${t}</span></li>
              <li class="item-info">Views <span>${s}</span></li>
              <li class="item-info">Comments <span>${i}</span></li>
              <li class="item-info">Downloads <span>${L}</span></li>
            </ul>
          </a>
        </li>
    `).join(""),c=document.querySelector(".gallery-list"),y=document.querySelector(".loader"),M=document.querySelector(".form"),a=document.querySelector(".js-load-more-btn");a.style.display="none";let n=1,d=0,p="";const b=new w(".gallery-link",{captionsData:"alt",captionDelay:250});M.addEventListener("submit",async o=>{if(o.preventDefault(),y.style.display="inline-block",n=1,p=o.target.elements.search.value.trim(),p===""){c.innerHTML="",o.target.reset(),m.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"}),y.style.display="none",a.style.display="none";return}c.innerHTML="";try{const e=await f(p,n);e.total?(c.innerHTML=h(e.hits),b.refresh(),d=Math.ceil(e.totalHits/g),n<d?a.style.display="block":a.style.display="none"):(m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.style.display="none")}catch(e){console.log(e),a.style.display="none"}finally{y.style.display="none",o.target.reset()}});const P=async(o,e)=>{try{y.style.display="inline-block",n++;const{hits:r,totalHits:l}=await f(e,n);c.insertAdjacentHTML("beforeend",h(r)),b.refresh(),d=Math.ceil(l/g),n===d?(m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.style.display="none"):a.style.display="block"}catch(r){console.error("Error loading more photos:",r),a.style.display="none"}finally{y.style.display="none",q()}};a.addEventListener("click",()=>P(event,p));const q=()=>{const e=c.querySelector(".gallery-item").getBoundingClientRect().height,r=e*2;console.log(r),window.scrollBy({top:e,left:0,behavior:"smooth"})};
//# sourceMappingURL=commonHelpers.js.map
