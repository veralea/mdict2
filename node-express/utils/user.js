function validateUser(userObj) {
  try {
    if (Object.prototype.toString.call(userObj) !== "[object Object]")
      throw new Error("userObj in not an object");
    let isValid = true;
    for (let i in userObj) {
      if (userObj[i].length < 2) {
        isValid = false;
        break;
      }
    }
    return true;

  } catch (err) {
    console.error(err);
    console.log(userObj);
    return false;
  }
}

function checkPassBruteForceTest(usersObj, userEmail, numberOfAllowedTrials, AllowedMinutesBetweenTrials){
  let isPassBruteForceTest = true;
  try{
    if(Object.prototype.toString.call(usersObj) !== '[object Object]') throw `"userObj" is not an object ${usersObj}`;
    if(userObj.hasOwnProperty(userEmail)) throw `"userObj" does not contain email ${usersObj}`;

    if(usersObj[userEmail].hasOwnProperty(attempts)){
      const minutesFromLastTry = checkMinutesDiffrences(new Date(), usersObj[userEmail].lastAttempt)
      //check if 
      if(usersObj[userEmail].attempts > numberOfAllowedTrials && AllowedMinutesBetweenTrials < minutesFromLastTry) isPassBruteForceTest = false;
    }
    usersObj[userEmail] = {
      attmepts: usersObj[userEmail].attempts+1 ||1,
      lastAttempt: new Date()
    }
    return isPassBruteForceTest;

  }catch(err){
    console.log(err)
    return false;
  }

}

function checkMinutesDiffrences(data1, date2){
  try{
    if(Object.prototype.toString.call(data1) === '[object Date]') throw `"date1" is not a date`;
    if(Object.prototype.toString.call(data2) === '[object Date]') throw `"date2" is not a date`;
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    return Math.ceil(diffTime / 60000); 

  } catch(err){
    console.error(err)
    return false;
  }
}

module.exports={
    validateUser,
    checkPassBruteForceTest
}
