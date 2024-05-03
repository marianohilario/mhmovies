// console.log(tempData);












const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach((input) => {
   if (input.getAttribute('type') !== 'button') {
     input.onfocus = () => {
       input.previousElementSibling.classList.add('top', 'focus');
       input.parentNode.classList.add('focus');
     };
     input.onblur = () => {
       input.value = input.value.trim();
       if (input.value.trim().length === 0) {
         input.previousElementSibling.classList.remove('top');
       }
       input.previousElementSibling.classList.remove('focus');
       input.parentNode.classList.remove('focus');
     };
   }
});