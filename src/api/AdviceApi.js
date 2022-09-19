const getAdvice = async () => {
  let url = "https://api.adviceslip.com/advice";
  let response = await fetch(url);
  let data = await response.json();

  let adviceInfo = {
    id: data.slip.id,
    text: data.slip.advice,
  };

  return adviceInfo;
};

export { getAdvice };
