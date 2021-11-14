const onRadioChange = (e, setter) => {
    setter(e.target.value)
    console.log(e.target.value);
 
  };

  

  module.exports = {
    onRadioChange
}