
hour=document.querySelector('.hrs');
minute=document.querySelector('.min');
second=document.querySelector('.sec');

setInterval(activate,1000);
function activate(){

    const time=new Date();
    const sec=time.getSeconds()/60;
    const min=((sec+time.getMinutes())/60);
    const hrs=((min+time.getHours())/12);

    hour.style.setProperty('--prime',hrs*360);
    minute.style.setProperty('--prime',min*360);
    second.style.setProperty('--prime',sec*360);
}
activate();