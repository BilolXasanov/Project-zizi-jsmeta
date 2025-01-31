



const menuBtn = document.querySelector('.menu-btn'),
      navigation = document.querySelector(".nav-menu");
      body = document.body;

      menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navigation.classList.toggle('active');

        if (navigation.classList.contains('active')) {
          body.style.overflow = 'hidden';      
        } else {
          body.style.overflow = 'auto'
        }
        
      });