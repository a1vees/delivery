document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    alert('Login realizado com sucesso!');
    window.location.href = 'main.html'; // Redireciona para a Tela Principal
});

document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica de registro
    alert('Registro realizado com sucesso!');
    window.location.href = 'index.html'; // Redireciona para a Tela de Login
});

document.getElementById('logout')?.addEventListener('click', function() {
    alert('Você saiu!');
    window.location.href = 'index.html'; // Redireciona para a Tela de Login
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
   
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
   
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
   
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
 
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].classList.add("fadeIn");
 
    setTimeout(() => {
      slides[slideIndex-1].classList.remove("fadeIn");
    }, 1500);  // Duração da animação
 
    dots[slideIndex-1].className += " active";
  }
