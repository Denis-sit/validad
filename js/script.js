
function OpeningTheRegistrationWindow(){
    const btnsForm = document.querySelectorAll('.container-form__btns'),
          registrationField = document.querySelectorAll('.wrapper'),
          shapeSelectionWindow = document.querySelector('.container-form__wrapper'),
          closeModal = document.querySelectorAll('.buttom-close');


    
    btnsForm.forEach((item, i) => {
      item.addEventListener('click', (e) =>{
          e.preventDefault;
          shapeSelectionWindow.classList.add('hiden');
          registrationField[i].classList.remove('container-shape__hidden');
          registrationField[i].classList.add('container-shape__show');
      });
    });
    
    closeModal.forEach((btnClose, i) => {
      btnClose.addEventListener('click', (e) =>{
          e.preventDefault;
          registrationField[i].classList.remove('container-shape__show');
          registrationField[i].classList.add('container-shape__hidden');
          shapeSelectionWindow.classList.remove('hiden');
      });
    });

};
OpeningTheRegistrationWindow()

function formValidation(){
    const inputTextName = document.querySelector('.container-shape__one .text'),
          inputMailNumber = document.querySelector('.container-shape__one .mail-number');

    const name = document.querySelector('.container-shape__two .name'),
          surName = document.querySelector('.container-shape__two .surname'),
          phone = document.querySelector('.container-shape__two .phone'),
          email = document.querySelector('.container-shape__two .email'),
          companyName = document.querySelector('.container-shape__two .company-name'),
          region = document.querySelector('.container-shape__two .region');
    const button = document.querySelector('.container-shape__btns_one'),
          buttonTwo = document.querySelector('.container-shape__btns_two');
    const cyrillicPattern = new RegExp(/^[ЁёА-я]+$/);
    const emailPattern = new RegExp(/^(.+)@(.+)$/);
    const phonePattern = new RegExp(/^([+]?[0-9\s-\(\)]{3,25})*$/i);
    
   
    button.addEventListener('click', (e) =>{
        e.preventDefault();
        
        if(!validad(phonePattern, inputMailNumber.value) && !validad(emailPattern, inputMailNumber.value)){
            console.log('Введите данные в верном формате');
            inputMailNumber.value = '';
        }
        else{
            console.log(inputMailNumber.value);
            inputMailNumber.value = '';
        }
        if(!validad(cyrillicPattern, inputTextName.value)){
            console.log('Введите данные в верном формате');
            inputTextName.value = '';
        }
        else{
            console.log(inputTextName.value);
            inputTextName.value = '';
        }
        
    });

    buttonTwo.addEventListener('click', (e) =>{
        e.preventDefault();
        
            if( !validad(cyrillicPattern, name.value)){
                console.log('Введите данные в верном формате');
                name.value = '';
            }
            else{
                console.log(name.value);
                name.value = '';
            }

            if( !validad(cyrillicPattern, surName.value)){
                console.log('Введите данные в верном формате');
                surName.value = '';
            }
            else{
                console.log(surName.value);
                surName.value = '';
            }

            if(!validad(phonePattern, phone.value)){
                console.log('Введите данные в верном формате');
                phone.value = '';
            }
            else{
                console.log(phone.value);
                phone.value = '';
            }

            if(!validad(emailPattern, email.value)){
                console.log('Введите данные в верном формате');
                email.value = '';
            }
            else{
                console.log(email.value);
                email.value = '';
            }

            if( !validad(cyrillicPattern,  companyName.value)){
                console.log('Введите данные в верном формате');
                companyName.value = '';
            }
            else{
                console.log( companyName.value);
                companyName.value = '';
            }

            if( !validad(cyrillicPattern, region.value)){
                console.log('Введите данные в верном формате');
                region.value = '';
            }
            else{
                console.log(region.value);
                region.value = '';
            }
        });

    


    function validad(patern, input){
        return patern.test(input);
       
    }
}
formValidation();