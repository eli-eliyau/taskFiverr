import { ISuperhero } from "../components/interfaces";



export const sortSuperheroesUp = (array: ISuperhero[], property: keyof ISuperhero) => {
  const arrCopy = [...array];
  const filteredArray = arrCopy.filter(item => item[property] !== 0);

  return filteredArray.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
};

export const sortSuperheroes = (array: ISuperhero[], property: keyof ISuperhero) => {
  const arrCopy = [...array];
  const filteredArray = arrCopy.filter(item => item[property] !== 0);

  const sortedArray = filteredArray.sort((a, b) => {
    if (a[property] < b[property]) {
      return 1; 
    }
    if (a[property] > b[property]) {
      return -1; 
    }
    return 0;
  });

  return sortedArray;
};





