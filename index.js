
const getRandomPin = (chars, len)=>[...Array(len)].map(
    (i)=>chars[Math.floor(Math.random()*chars.length)]
    ).join('');
    
function generateOtp(len=4){
    var chars = "0123456789";
    return [...Array(len)].map((i)=>chars[Math.floor(Math.random()*chars.length)]).join('');
}

export default generateOtp;