
window.onload = function() {
    var toc = document.querySelector('#table-of-contents');
    toc.insertAdjacentHTML('beforebegin', '<div class="wrap"><button class="btn">Содержание</button></div>');
    var btn = document.querySelector('.btn');
    btn.addEventListener('click', function(){
        if(toc.classList.contains('show')){
        toc.classList.remove('show');
        btn.innerHTML='Содержание';
        }else{
        toc.classList.add('show');
        btn.innerHTML='Закрыть';
        }

    });
    toc.insertAdjacentHTML('beforebegin', '<a href="index.html" class="btn-up">На главную</a>');
    toc.insertAdjacentHTML('beforebegin', '<a href="index.html" class="btn-up btn-up__down">На главную</a>');
}
