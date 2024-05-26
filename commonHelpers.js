import{a as f,S as w,i as u}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const M="44069289-55a8aa963762c475e8ab93eb8",P="https://pixabay.com/api/",m=15;f.defaults.baseURL=P;const g=async(r="",t=1)=>(await f.get("",{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:m}})).data,h=r=>r.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:s,comments:l,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${i}"
              width = "360"
              height = "200"
            />
            <ul class="image-info">
              <li class="item-info">Likes <span>${e}</span></li>
              <li class="item-info">Views <span>${s}</span></li>
              <li class="item-info">Comments <span>${l}</span></li>
              <li class="item-info">Downloads <span>${v}</span></li>
            </ul>
          </a>
        </li>
    `).join(""),y=document.querySelector(".gallery-list"),c=document.querySelector(".loader"),S=document.querySelector(".form"),a=document.querySelector(".js-load-more-btn");a.style.display="none";let n=1,d=0,p="";const b=new w(".gallery-link",{captionsData:"alt",captionDelay:250});S.addEventListener("submit",async r=>{if(r.preventDefault(),c.style.display="inline-block",n=1,p=r.target.elements.search.value.trim(),p===""){y.innerHTML="",r.target.reset(),u.warning({title:"Warning",message:"Search field cannot be empty!",position:"topRight"}),c.style.display="none";return}y.innerHTML="";try{const t=await g(p,n);t.total?(y.innerHTML=h(t.hits),b.refresh(),d=Math.ceil(t.totalHits/m),n<d?a.style.display="block":a.style.display="none"):u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(t){console.log(t)}finally{c.style.display="none",r.target.reset()}});const L=async(r,t)=>{try{c.style.display="inline-block",n++;const{hits:o,totalHits:i}=await g(t,n);if(y.insertAdjacentHTML("beforeend",h(o)),b.refresh(),d=Math.ceil(i/m),n<d)a.style.display="block";else{a.style.display="none",a.removeEventListener("click",L),u.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch(o){console.error("Error loading more photos:",o)}finally{c.style.display="none"}};a.addEventListener("click",()=>L(event,p));
//# sourceMappingURL=commonHelpers.js.map
