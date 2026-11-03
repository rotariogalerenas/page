/* Club Rotario Satélite Galereñas · menú del celular y formulario de contacto */
(function(){
  var btn=document.getElementById('menuBtn'), nav=document.getElementById('mainNav');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});

  var f=document.getElementById('cform'), err=document.getElementById('ferr'), ok=document.getElementById('fok'), sum=document.getElementById('fsum'),
      okTitle=document.getElementById('okTitle'), okText=document.getElementById('okText'), acts=ok.querySelector('.ok-actions'),
      submit=document.getElementById('fsubmit'), mail=document.getElementById('mailBtn');
  var MAIL=(f.getAttribute('data-email')||'').trim(), API=(f.getAttribute('data-endpoint')||'').trim();
  if(!API) submit.textContent='Preparar mensaje';
  function val(id){return document.getElementById(id).value.trim();}
  function show(title,text,withMsg){okTitle.textContent=title;okText.textContent=text;sum.hidden=!withMsg;acts.hidden=!withMsg;ok.hidden=false;ok.scrollIntoView({behavior:'smooth',block:'nearest'});}
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(val('f-honey')) return;
    var n=val('f-name'), m=val('f-email'), p=val('f-phone'), msg=val('f-msg');
    if(!n||!/^\S+@\S+\.\S+$/.test(m)){err.textContent='Escribe tu nombre y un correo válido (ejemplo: nombre@correo.com).';err.hidden=false;return;}
    err.hidden=true;
    var interes=(f.querySelector('input[name=interes]:checked')||{}).value||'';
    var text='Hola, Club Rotario Satélite Galereñas.\nSoy '+n+'.\nMe interesa: '+interes+'.\nCorreo: '+m+(p?'\nTeléfono: '+p:'')+(msg?'\n\n'+msg:'');
    sum.textContent=text;
    mail.href='mailto:'+MAIL+'?subject='+encodeURIComponent('Contacto desde la página web')+'&body='+encodeURIComponent(text);
    if(!API){show('Tu mensaje está listo','Envíalo al club por correo o cópialo.',true);return;}
    submit.disabled=true; submit.textContent='Enviando…';
    fetch(API,{method:'POST',headers:{Accept:'application/json'},body:new URLSearchParams(new FormData(f))})
      .then(function(r){return r.json();})
      .then(function(d){if(!d||String(d.success)!=='true')throw new Error(d&&d.message);f.reset();show('¡Gracias! Recibimos tu mensaje','Te responderemos pronto a tu correo.',false);})
      .catch(function(x){if(window.console)console.warn('Formulario de contacto:',x&&x.message);show('No se pudo enviar el formulario','Revisa tu conexión o envía tu mensaje por correo.',true);})
      .then(function(){submit.disabled=false;submit.textContent='Enviar mensaje';});
  });
  document.getElementById('copyBtn').addEventListener('click',function(){
    var b=this, t=sum.textContent;
    function sel(){var r=document.createRange();r.selectNodeContents(sum);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Texto seleccionado';}
    try{navigator.clipboard.writeText(t).then(function(){b.textContent='Copiado'},sel)}catch(x){sel()}
  });
})();
