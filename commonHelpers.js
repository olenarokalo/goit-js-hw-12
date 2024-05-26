import{a as f,S as w,i as u}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="44069289-55a8aa963762c475e8ab93eb8",M="https://pixabay.com/api/",m=15;f.defaults.baseURL=M;const g=async(s="",t=1)=>(await f.get("",{params:{key:P,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:m}})).data,h=s=>s.map(({webformatURL:t,largeImageURL:o,tags:c,likes:e,views:r,comments:i,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${c}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${e}</span></li>
              <li class="item-info">Views <span>${r}</span></li>
              <li class="item-info">Comments <span>${i}</span></li>
              <li class="item-info">Downloads <span>${v}</span></li>
            </ul>
          </a>
        </li>
    `).join(""),y=document.querySelector(".gallery-list"),l=document.querySelector(".loader"),S=document.querySelector(".form"),n=document.querySelector(".js-load-more-btn");n.style.display="none";let a=1,d=0,p="";const b=new w(".gallery-link",{captionsData:"alt",captionDelay:250});S.addEventListener("submit",async s=>{if(s.preventDefault(),l.style.display="inline-block",a=1,p=s.target.elements.search.value.trim(),p===""){y.innerHTML="",s.target.reset(),u.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"}),l.style.display="none";return}y.innerHTML="";try{const t=await g(p,a);t.total?(y.innerHTML=h(t.hits),b.refresh(),d=Math.ceil(t.totalHits/m),a<d?n.style.display="block":n.style.display="none"):u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(t){console.log(t)}finally{l.style.display="none",s.target.reset()}});const L=async(s,t)=>{try{l.style.display="inline-block",a++;const{hits:o}=await g(t,a);if(y.insertAdjacentHTML("beforeend",h(o)),b.refresh(),d=Math.ceil(imagesData.totalHits/m),a<d)n.style.display="none";else{n.removeEventListener("click",L),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch(o){console.error("Error loading more photos:",o)}finally{l.style.display="none"}};n.addEventListener("click",()=>L(event,p));
//# sourceMappingURL=commonHelpers.js.map
