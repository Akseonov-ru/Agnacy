function toName() {
   const avatarMini = document.querySelector('.avatar-mini'),
      namePeople = document.querySelector('.avatar-mini .ofther-people__name');

   avatarMini.addEventListener('click', () => {
      namePeople.style.display = 'flex';
   });

}

toName();

const openCardProject = (el) => {
   element = document.querySelector(".project" + el)
   element.classList.add('active-project')
   document.getElementsByTagName("body")[0].style = "overflow: hidden"
   console.log(element.classList)
}

const closeCardProject = (el) => {
   element = document.querySelector(".project" + el)
   element.classList.remove('active-project')
   document.getElementsByTagName("body")[0].style = "overflow-y: scroll"
   console.log(element.classList)
}


