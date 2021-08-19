document.addEventListener('DOMContentLoaded', function(){  
    function OpeningTheRegistrationWindow(){
        const btnsForm = document.querySelectorAll('.container-form__btns'),
              registrationField = document.querySelectorAll('.container-shape'),
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
        
        const inputTextName = document.querySelector('#city'),
              inputMailNumber = document.querySelector('#mail-phone'),
              allForms = document.querySelectorAll('.block-input-forms_one .input-form'),
              allFormsTwo = document.querySelectorAll('.block-input-forms_two .input-form');
              
        const errorMessage = document.querySelectorAll('.block-input-forms_one .error-message'),
              errorMessagetwo = document.querySelectorAll('.block-input-forms_two .error-message');
        const name = document.querySelector('#name'),
              surName = document.querySelector('#surname'),
              phone = document.querySelector('#phone'),
              email = document.querySelector('#email'),
              companyName = document.querySelector('#company-name'),
              region = document.querySelector('#region');
        const button = document.querySelector('.container-shape__btns_one'),
              buttonTwo = document.querySelector('.container-shape__btns_two');
        const cyrillicPattern = new RegExp(/^[ЁёА-я]+$/);
        const emailPattern = new RegExp(/^(.+)@(.+)$/);
        const phonePattern = new RegExp(/^(?:\+?7|8)\d{10}$/);
        const obj = {};
              
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            validationFunction();
            if(Object.keys(obj).length == allForms.length){
                console.log(obj);
                const registrationField = document.querySelector('#one-registr');
                returnToRegistrationSelection(registrationField);
            };
        });

        buttonTwo.addEventListener('click', (e) =>{
            e.preventDefault();
            validationFunctionTwo();
            if(Object.keys(obj).length == allFormsTwo.length){
                console.log(obj);
                const registrationField = document.querySelector('#two-registr');
                returnToRegistrationSelection(registrationField);   
            };
        });

        function returnToRegistrationSelection(block){
            const shapeSelectionWindow = document.querySelector('.container-form__wrapper');
            block.remove('container-shape__show');
            block.classList.add('container-shape__hidden');
            shapeSelectionWindow.classList.remove('hiden');
        }


        function validationFunction(){
            if(!validad(phonePattern, inputMailNumber.value) && !validad(emailPattern, inputMailNumber.value)){
                trueInstructions(inputMailNumber,errorMessageOutput, errorMessage);
            }
            else{
                folsInstructions(inputMailNumber, deleteErrorMessage, errorMessage);
            }
            if(!validad(cyrillicPattern, inputTextName.value)){
                trueInstructions(inputTextName,errorMessageOutput, errorMessage);
            }
            else{
                folsInstructions(inputTextName, deleteErrorMessage, errorMessage);
            }
        };
       
        function validationFunctionTwo(){
            if( !validad(cyrillicPattern, name.value)){
                trueInstructions(name,errorMessageOutput,errorMessagetwo);
            }
            else{
                folsInstructions(name, deleteErrorMessage,errorMessagetwo);
            }

            if( !validad(cyrillicPattern, surName.value)){
                trueInstructions(surName,errorMessageOutput, errorMessagetwo);
            }
            else{
                folsInstructions(surName, deleteErrorMessage, errorMessagetwo);
            }

            if(!validad(phonePattern, phone.value)){
                trueInstructions(phone,errorMessageOutput, errorMessagetwo);
            }
            else{
                folsInstructions(phone, deleteErrorMessage, errorMessagetwo);
            }

            if(!validad(emailPattern, email.value)){
                trueInstructions(email,errorMessageOutput, errorMessagetwo);
            }
            else{
                folsInstructions(email, deleteErrorMessage, errorMessagetwo);
            }

            if( !validad(cyrillicPattern,  companyName.value)){
                trueInstructions(companyName,errorMessageOutput, errorMessagetwo);
            }
            else{
                folsInstructions(companyName, deleteErrorMessage, errorMessagetwo);
            }
            if( !validad(cyrillicPattern, region.value)){
                trueInstructions(region, errorMessageOutput, errorMessagetwo);
            }
            else{
                folsInstructions(region, deleteErrorMessage, errorMessagetwo);
            }   
        };
           
        function trueInstructions(form, itemfn, message){
            form.classList.add('not-valid');
            itemfn(form,  message);
            let a = form.dataset.inpu;
            delete obj[a];
            form.value = '';
        };

        function folsInstructions(form, itemfn,  message){
            form.classList.remove('not-valid');
            itemfn(form,  message);
            let a = form.dataset.inpu;
            obj[a]=form.value;
        };

        function validad(patern, input){
            return patern.test(input);
           
        };

        function errorMessageOutput(item, message){
            message.forEach((elem) =>{
                if(item.dataset.inpu == elem.dataset.in){
                    elem.classList.add('error-hide');
                }
            });
            
        };
        
        function deleteErrorMessage(itemDel, messageDel){
            messageDel.forEach((elemDel) =>{
                if(itemDel.dataset.inpu == elemDel.dataset.in){
                    elemDel.classList.remove('error-hide');
                }
            });
        };

    };
    formValidation();
});

