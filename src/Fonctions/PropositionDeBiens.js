const onRadioChange = (e, setter) => {
  if (e.target.value === "true") {
    setter(true);
  } else {
    setter(false);
  }
};

module.exports = {
  onRadioChange,
};
