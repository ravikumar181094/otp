
const getRandomPin = (chars, len)=>[...Array(len)].map(
    (i)=>chars[Math.floor(Math.random()*chars.length)]
    ).join('');
    
function generateOtp(digit=4){
    return getRandomPin('0123456789',digit);
}

export default generateOtp;