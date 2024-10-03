// const isVerified = true;
// if(isVerified === true){
//     console.log('us  is verified');

// }else{
//     console.log('us is not verified');
// }



function getTimeString(time){
    //get Hour and seconds 
    const hour=parseInt(time/ 3600);
    let remainingSecond=time % 3600;
    const minute =remainingSecond / 60 ;
     remainingSecond =remainingSecond %60;
    return `${hour} hour ${minute} minute${remainingSecond} ago  `;
    
}
console.log(getTimeString(7000));