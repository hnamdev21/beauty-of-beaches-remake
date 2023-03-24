const autoCapitalizeFirstLetter = (element) => {
  const addAutoCapitalize = (value) => {
    const words = value.split(" ");
    const wordsUppered = [];
    words.forEach((word) => {
      const firstLetter = word[0];
      const firstLetterUppered = firstLetter.toUpperCase();
      const wordUppered = word.replace(firstLetter, firstLetterUppered);
      wordsUppered.push(wordUppered);
    });
    const valueUppered = wordsUppered.join(" ");
    element.value = valueUppered;
  };

  element.addEventListener("keyup", (e) => addAutoCapitalize(e.target.value));
};

export default autoCapitalizeFirstLetter;
