console.log('Rodando aplicação');
//Defina aqui os sites que você considera procrastinar
const SitesDeProcrastinacao = [
'https://www.facebook.com/','https:/www.youtube.com/','https:/www.linkedin.com/'
];
var parsedUrl = new URL(window.location.href);
//Url atual
const UrlAtual = parsedUrl.href;
//verifica array de sites proibidos :V
SitesDeProcrastinacao.forEach(function (sites) {
  if(sites === UrlAtual){
    alert('Você não pode acessar essa pagina, você nunca alcançara a maestria assim.. bora estudar :D');
    history.back();
  }
});