const navigation = document.querySelector('.navigation');
document.querySelector('.nav-btn').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}