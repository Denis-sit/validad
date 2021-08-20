document.addEventListener('DOMContentLoaded', function(){  
    const shapeSelectionWindow = document.querySelector('.container-form__wrapper');
    // function OpeningTheRegistrationWindow(){
        const btnsForm = document.querySelectorAll('.container-form__btns'),
              registrationField = document.querySelectorAll('.container-shape'),
              closeModal = document.querySelectorAll('.buttom-close');
        const closeSuccessfulRegistration = document.querySelectorAll('.close'),
              blockSuccessfulRegistration = document.querySelector('.block__successful-registration');    
        const allInput = document.querySelectorAll(' .input-form');
        const allMessage = document.querySelectorAll('.error-message'); 
        let timer;


        btnsForm.forEach((item, i) => {
            item.addEventListener('click', (e) =>{
              e.preventDefault;
              shapeSelectionWindow.classList.add('hiden');
              registrationField[i].classList.remove('hiden');
              registrationField[i].classList.add('container-shape__show');
          });
        });
        
        closeModal.forEach((btnClose, i) => {
           
            btnClose.addEventListener('click', (e) =>{
                 e.preventDefault;
                 registrationField[i].classList.remove('container-shape__show');
                 registrationField[i].classList.add('hiden');
                 shapeSelectionWindow.classList.remove('hiden');
                 hidingErrorЬessages(allInput);
                 
            });
        });
        
        function hidingErrorЬessages(item){
            for(i=0; i<item.length;i++){
                item[i].value='';
                if(item[i].classList.contains('not-valid') ){
                    item[i].classList.remove('not-valid');
                    allMessage[i].classList.remove('error-hide');
                }
               
            }
        }

        closeSuccessfulRegistration.forEach(item =>{
            item.addEventListener('click', (e) =>{
                e.preventDefault();
                blockSuccessfulRegistration.classList.add('hiden');
                blockSuccessfulRegistration.classList.remove('block__successful-registration_show');
                shapeSelectionWindow.classList.remove('hiden');
                clearTimeout(timer);
            })    
        })
       

    // };
    // OpeningTheRegistrationWindow()
   
    // function formValidation(){
        
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
        const successfulRegistration = document.querySelector('.block__successful-registration');
        const cyrillicPattern = new RegExp(/^[ЁёА-я]+$/);
        const emailPattern = new RegExp(/^(.+)@(.+)$/);
        const phonePattern = new RegExp(/^(?:\+?7|8)\d{10}$/);
        const obj = {};
        const objTwo ={};
        
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            validationFunction();
            if(Object.keys(obj).length == allForms.length){
                console.log(obj);
                const registrationField = document.querySelector('#one-registr');
                blocksuccessfulRegistration(successfulRegistration, registrationField);
                allForms.forEach(item =>{
                    item.value='';
                });
                timer = setTimeout(automaticWindowClosing, 3000);
                
            };
        });
        
        buttonTwo.addEventListener('click', (e) =>{
            e.preventDefault();
            validationFunctionTwo();
            if(Object.keys(objTwo).length == allFormsTwo.length){
                console.log(objTwo);
                const registrationField = document.querySelector('#two-registr');
                blocksuccessfulRegistration(successfulRegistration, registrationField);
                allFormsTwo.forEach(item =>{
                    item.value='';
                });
                timer = setTimeout(automaticWindowClosing, 3000);
            };
        });

        

        function blocksuccessfulRegistration(block, blockreg){
            block.classList.add('block__successful-registration_show');
            block.classList.remove('hiden');
            blockreg.classList.add('hiden');
            blockreg.classList.remove('container-shape__show');
        }

         function automaticWindowClosing(){
            successfulRegistration.classList.remove('block__successful-registration_show');
            successfulRegistration.classList.add('hiden');
            shapeSelectionWindow.classList.remove('hiden');
            registrationField.forEach(item =>{
                item.classList.remove('container-shape__show');
            })
         }




        function validationFunction(){
            if(!validad(phonePattern, inputMailNumber.value) && !validad(emailPattern, inputMailNumber.value)){
                trueInstructions(inputMailNumber,errorMessageOutput, errorMessage, obj);
            }
            else{
                folsInstructions(inputMailNumber, deleteErrorMessage, errorMessage, obj);
            }
            if(!validad(cyrillicPattern, inputTextName.value)){
                trueInstructions(inputTextName,errorMessageOutput, errorMessage, obj);
            }
            else{
                folsInstructions(inputTextName, deleteErrorMessage, errorMessage, obj);
            }
        };
       
        function validationFunctionTwo(){
            if( !validad(cyrillicPattern, name.value)){
                trueInstructions(name,errorMessageOutput,errorMessagetwo, objTwo);
            }
            else{
                folsInstructions(name, deleteErrorMessage,errorMessagetwo, objTwo);
            }

            if( !validad(cyrillicPattern, surName.value)){
                trueInstructions(surName,errorMessageOutput, errorMessagetwo, objTwo);
            }
            else{
                folsInstructions(surName, deleteErrorMessage, errorMessagetwo, objTwo);
            }

            if(!validad(phonePattern, phone.value)){
                trueInstructions(phone,errorMessageOutput, errorMessagetwo, objTwo);
            }
            else{
                folsInstructions(phone, deleteErrorMessage, errorMessagetwo, objTwo);
            }

            if(!validad(emailPattern, email.value)){
                trueInstructions(email,errorMessageOutput, errorMessagetwo, objTwo);
            }
            else{
                folsInstructions(email, deleteErrorMessage, errorMessagetwo, objTwo);
            }

            if( !validad(cyrillicPattern,  companyName.value)){
                trueInstructions(companyName,errorMessageOutput, errorMessagetwo, objTwo);
            }
            else{
                folsInstructions(companyName, deleteErrorMessage, errorMessagetwo, objTwo);
            }
            if( !validad(cyrillicPattern, region.value)){
                trueInstructions(region, errorMessageOutput, errorMessagetwo, objTwo);
            }
            else{
                folsInstructions(region, deleteErrorMessage, errorMessagetwo, objTwo);
            }   
        };

        function trueInstructions(form, itemfn, message, ob){
            form.classList.add('not-valid');
            itemfn(form,  message);
            let a = form.dataset.inpu;
            delete ob[a];
        };

        function folsInstructions(form, itemfn,  message, ob){
            form.classList.remove('not-valid');
            itemfn(form,  message);
            let a = form.dataset.inpu;
            ob[a]=form.value;
        };

        function validad(patern, input){
            return patern.test(input);
           
        };

        function errorMessageOutput(item, message){
            message.forEach((elem) =>{
               if(item.dataset.inpu == elem.dataset.in && item.value == ''){
                    elem.classList.add('error-hide');
                }
                else if(item.dataset.inpu == elem.dataset.in){
                    elem.classList.add('error-hide');
                    elem.textContent = `Ожидалось ${item.placeholder}`;
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

    // };
    // formValidation();
});

