import{s as p,i as u}from"./assets/vendor-8ce50246.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();class f{constructor(){this.BASE_URL="https://pixabay.com",this.END_POINT="/api/",this.API_KEY="22926721-5d20aa08498ffd1ff2f906542",this.IMAGE_TYPE="photo",this.ORIENTATION="horizontal",this.SAFESEARCH="true"}getImages(s){const i=`${this.BASE_URL}${this.END_POINT}?key=${this.API_KEY}&image_type=${this.IMAGE_TYPE}&orientation=${this.ORIENTATION}&safesearch=${this.SAFESEARCH}&q=${s}`;return console.log(i),fetch(i).then(r=>r.json())}}function m(n,s){s.innerHTML="",n.forEach(r=>{const e=document.createElement("div");e.classList.add("card");const t=document.createElement("a");t.href=r.largeImageURL,e.appendChild(t);const o=document.createElement("img");o.src=r.webformatURL,o.alt=r.tags,t.appendChild(o);const a=document.createElement("div");a.classList.add("info"),a.innerHTML=`
            <p><span class="bold-word">Likes</span><br/>${r.likes}</p>
            <p><span class="bold-word">Views</span><br/>${r.views}</p>
            <p><span class="bold-word">Comments</span><br/>${r.comments}</p>
            <p><span class="bold-word">Downloads</span><br/>${r.downloads}</p>
        `,s.appendChild(e),e.appendChild(a)}),new p("a",{captionSelector:"img",captionType:"text",captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const h=new f,y=document.querySelector(".form"),c=document.querySelector(".input"),g=document.querySelector(".gallery"),l=document.querySelector(".loader");let d;c.addEventListener("input",function(){d=c.value});y.addEventListener("submit",n=>{n.preventDefault(),l.style.display="block",h.getImages(d).then(s=>{l.style.display="none",s.hits.length==0?u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):m(s.hits,g)}),n.target.reset()});
//# sourceMappingURL=commonHelpers.js.map