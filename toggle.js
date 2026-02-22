const cardContainer=document.getElementById('card-container');

cardContainer.addEventListener('click',function(item){
    if(item.target.matches('button')){
        if(item.target.id === "interview"){
            

            //find the hidden buttton parents
            const cardList=item.target.closest(".card-list")
            //find the hidden button
            const hiddenButton=cardList.querySelector(".hidden-btn")
            const rejectButton=cardList.querySelector(".rejected-btn")
            //interview button show
            if(hiddenButton){
              hiddenButton.classList.remove('hidden');
              rejectButton.classList.add('hidden')
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
             
        }
        else if(item.target.id === "rejected"){
             item.target.style.backgroundColor='green'  
             //find the hidden buttton parents
            const cardList=item.target.closest(".card-list")
            //find the hidden button
            const hiddenButton=cardList.querySelector(".hidden-btn")
            const rejectButton=cardList.querySelector(".rejected-btn")

             //rejected button show & hide
             if(rejectButton){
              hiddenButton.classList.add('hidden');
              rejectButton.classList.remove('hidden')
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