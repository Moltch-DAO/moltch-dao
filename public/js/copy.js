function copyText(text){
  if(!text) return;
  if(navigator.clipboard?.writeText){ navigator.clipboard.writeText(text); return; }
  const ta=document.createElement('textarea');
  ta.value=text; ta.setAttribute('readonly','');
  ta.style.position='absolute'; ta.style.left='-9999px';
  document.body.appendChild(ta); ta.select(); document.execCommand('copy');
  document.body.removeChild(ta);
}

document.addEventListener('click',(e)=>{
  const btn=e.target.closest('[data-copy]');
  if(!btn) return;
  const txt=btn.getAttribute('data-copy');
  copyText(txt);
  const original=btn.textContent;
  btn.textContent='Copied';
  setTimeout(()=>btn.textContent=original, 900);
});
