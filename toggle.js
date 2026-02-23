const cardContainer=document.getElementById('card-container');

cardContainer.addEventListener('click',function(item){
    if(item.target.matches('button')){
        if(item.target.id === "interview"){
            

            //find the hidden buttton parents
            const cardList=item.target.closest(".card-list")
            //find the hidden button
            const hiddenButton=cardList.querySelector(".hidden-btn")
            const rejectButton=cardList.querySelector(".rejected-btn")
            const currentButton=cardList.querySelector(".current-btn")
            //interview button show
            if(hiddenButton){
              hiddenButton.classList.remove('hidden');
              rejectButton.classList.add('hidden');
              
            }

             item.target.style.backgroundColor='yellow'
             const interviewParent= item.target.parentElement.parentElement.parentElement;
             //get the parrent id
             console.log(interviewParent)
             const cardId=interviewParent.id;
             console.log(cardId)
             //check if the id exist
            //  const cardExist=interviewCard.querySelector("#"+cardId);
             if(!interviewCard.querySelector("#"+cardId)){
                const cloneInterviewParent=interviewParent.cloneNode(true); 
                interviewCard.appendChild(cloneInterviewParent);
                interviewCount();
             }



             //delete the existed same file from reject section
             const rejectParent= item.target.parentElement.parentElement.parentElement;
             //get the parrent id
             const cardId2=rejectParent.id;
             //already available
             const alrdyAvailable=rejectedCard.querySelector("#"+cardId2);
             //check id exist or not
             if(alrdyAvailable){
              const deleteParent= document.getElementById('delete-card');
                deleteParent.appendChild(alrdyAvailable);
                rejectedCount();
             }
             
        }
        else if(item.target.id === "rejected"){
             item.target.style.backgroundColor='green'  
             //find the hidden buttton parents
            const cardList=item.target.closest(".card-list")
            //find the hidden button
            const hiddenButton=cardList.querySelector(".hidden-btn")
            const rejectButton=cardList.querySelector(".rejected-btn")
            const currentButton=cardList.querySelector(".current-btn")

             //rejected button show & hide
             if(rejectButton){
              hiddenButton.classList.add('hidden');
              rejectButton.classList.remove('hidden')
              currentButton.classList.add('hidden')
            }
            //rejected div append
            const rejectParent= item.target.parentElement.parentElement.parentElement;
             //get the parrent id
             const cardId=rejectParent.id;

             //check id exist or not
            //  const cardExist=interviewCard.querySelector("#"+cardId);
             if(!rejectedCard.querySelector("#"+cardId)){
                const cloneRejectParent=rejectParent.cloneNode(true); 
                rejectedCard.appendChild(cloneRejectParent);
                rejectedCount();
             }


             //delete the existed same file from reject section
             const interviewParent= item.target.parentElement.parentElement.parentElement;
             //get the parrent id
             const cardId2=interviewParent.id;
             //already available
             const alrdyAvailable=interviewCard.querySelector("#"+cardId2);
             //check id exist or not
             if(alrdyAvailable){
              const deleteParent= document.getElementById('delete-card');
                deleteParent.appendChild(alrdyAvailable);
                interviewCount();

                //button show
                const hiddenButton=cardList.querySelector(".hidden-btn")
            const rejectButton=cardList.querySelector(".rejected-btn")

             //rejected button show & hide
             if(rejectButton){
              hiddenButton.classList.add('hidden');
              rejectButton.classList.remove('hidden')
            }
             }


        }
        else if(item.target.id === "delete"){
           item.target.style.backgroundColor='blue'
           //rejected div append
            const deleteParent= item.target.parentElement.parentElement.parentElement;
             //get the parrent id
             deleteCard.appendChild(deleteParent);
             total();
           
        }
    }
})


//interview  section toggle
const interviewCardToggle=document.getElementById('interview-card')
interviewCardToggle.addEventListener('click',function(item){
    if(item.target.matches('button')){
        if(item.target.id === "rejected"){
       const interviewParent= item.target.parentElement.parentElement.parentElement;
       rejectedCard.appendChild(interviewParent);

       interviewCount();
       rejectedCount();
        item.target.style.backgroundColor='red'


        //button enable
          const cardList=item.target.closest(".card-list")
        const hiddenButton=cardList.querySelector(".hidden-btn")
            const rejectButton=cardList.querySelector(".rejected-btn")
            
              hiddenButton.classList.add('hidden');
              rejectButton.classList.remove('hidden');
              }
        
        
        
       
}
 })

 //reject section toggle

const rejectedCardToggle=document.getElementById('rejected-card')
rejectedCardToggle.addEventListener('click',function(item){
    if(item.target.matches('button')){
        if(item.target.id === "interview"){

       const interviewParent= item.target.parentElement.parentElement.parentElement;
       interviewCard.appendChild(interviewParent);

       interviewCount();
       rejectedCount();
       

        //button enable
          const cardList=item.target.closest(".card-list")
        const hiddenButton=cardList.querySelector(".hidden-btn")
            const rejectButton=cardList.querySelector(".rejected-btn")
            
              hiddenButton.classList.remove('hidden');
              rejectButton.classList.add('hidden');
              
    
    
    }
        
       
}
 })