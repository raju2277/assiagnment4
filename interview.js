document.getElementById('interview').addEventListener('click',function(){
    console.log('interview clicked');

    //declare an interview array
    let interviewArray=[];
    

    const mainCard=document.getElementById('cardOne')
    const interViewCard=document.getElementById('interview-card');
    //need to make the clone of mainCard

    const clone=mainCard.cloneNode(true);

    //now push in the array element

    interviewArray.push(clone);
    console.log(interviewArray)

    if(interviewArray.length>0){
        noJobs.classList.add('hidden')
    }
    else{
        nojobs.classList.remove('hidden')
    }
  
    for(const item of interviewArray){
        const cloneArraay=item.cloneNode(true);
        interViewCard.appendChild(cloneArraay)
        const totalInterview=document.getElementById('total-interview');
        let value=totalInterview.innerText;
        
        value=parseInt(value)+1
        totalInterview.innerText=value;
    }
   console.log(interviewArray.length) 
})


