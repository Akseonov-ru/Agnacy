'use strict';

function toName() {
   const avatarMini = document.querySelector('.avatar-mini'),
      namePeople = document.querySelector('.avatar-mini .ofther-people__name');

   avatarMini.addEventListener('click', () => {
      namePeople.style.display = 'flex';
   });

}

toName();