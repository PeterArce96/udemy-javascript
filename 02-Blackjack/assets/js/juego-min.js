const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["A","J","Q","K"],a=[],l=document.querySelector("#btnPedir"),n=document.querySelector("#btnNuevo"),d=document.querySelector("#btnDetener"),o=document.querySelectorAll(".divCartas"),s=document.querySelectorAll("small"),i=(t=2)=>{e=c(),a=[];for(let r=0;r<t;r++)a.push(0);s.forEach(e=>e.innerText=0),o.forEach(e=>e.innerHTML=""),l.disabled=!1,d.disabled=!1},c=()=>{e=[];for(let a=2;a<=10;a++)for(let l of t)e.push(a+l);for(let n of r)for(let d of t)e.push(n+d);return _.shuffle(e)},u=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},$=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"J"===t?11:"Q"===t?12:"K"===t?13:14:1*t},h=(e,t)=>(a[t]=a[t]+$(e),s[t].innerText=a[t],a[t]),f=(e,t)=>{let r=document.createElement("img");r.src=`assets/cartas/${e}.png`,r.classList.add("carta"),o[t].append(r)},b=()=>{let[e,t]=a;setTimeout(()=>{t===e?alert("Nadie Gana :("):e>21?alert("Computadora Gana!"):t>21?alert("Jugador Gana!"):alert("Computadora gana!")},100)},g=e=>{let t=0;do{let r=u();t=h(r,a.length-1),f(r,a.length-1)}while(t<e&&e<=21);b()};return l.addEventListener("click",()=>{let e=u(),t=h(e,0);f(e,0),t>21?(console.warn("Lo siento mucho, perdiste"),l.disabled=!0,d.disabled=!0,g(t)):21===t&&(console.warn("21, genial!"),l.disabled=!0,d.disabled=!0,g(t))}),d.addEventListener("click",()=>{l.disabled=!0,d.disabled=!0,g(a[0])}),n.addEventListener("click",()=>{i()}),{nuevoJuego:i}})();