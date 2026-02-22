
const totalInterview=document.getElementById('total-interview');
const totalRejected=document.getElementById('total-rejected');


function total(){
    const total=document.getElementById("total");
    const available=document.getElementById('available')
    total.innerText=cardContainer.children.length;
    available.innerText=cardContainer.children.length;

}
total();

//interview card

const interviewCard=document.getElementById('interview-card');

//rejected card

const rejectedCard=document.getElementById('rejected-card')

//delete card
const deleteCard=document.getElementById('delete-card')

function interviewCount(){
    const interviewCardLength=interviewCard.children.length;
    console.log(interviewCardLength);
    totalInterview.innerText=interviewCardLength-1;

    if(interviewCardLength>1){
    noJobs.classList.add('hidden');
    //interviewCard.classList.add('grid','md:grid-cols-2')

        
    }
    else{
        noJobs.classList.remove('hidden')
       //interviewCard.classList.remove('grid','md:grid-cols-2')
    }
}
function rejectedCount(){
    const rejectedCardLength=rejectedCard.children.length;
    totalRejected.innerText=rejectedCardLength-1;

    if(rejectedCardLength>1){
        
       rejectJobs.classList.add('hidden');
    }
    else{
       rejectJobs.classList.remove('hidden');
    }
}


const noJobs=document.getElementById('no-jobs-interview');
const rejectJobs=document.getElementById('reject-no-jobs')

