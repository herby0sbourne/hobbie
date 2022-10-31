import HOBBIES from '../data/hobbies';

export const selectBoth = (next) => {
  const options = document.querySelectorAll('.option');

  options.forEach((element) => {
    const id = element.dataset.id;
    const result = HOBBIES.find((hobby) => {
      return hobby.id === id;
    });

    setResult((prevState) => {
      return [...prevState, result];
    });
  });

  next();
};
