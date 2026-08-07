function showPage(id){
    document.querySelectorAll('section.page').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('nav a').forEach(a=>{
      a.classList.toggle('active', a.dataset.page === id);
    });
    window.scrollTo(0,0);
  }
  document.querySelectorAll('nav a').forEach(a=>{
    a.addEventListener('click', ()=> showPage(a.dataset.page));
  });
