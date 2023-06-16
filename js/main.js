const PHOTO_COUNT = 25;
const likes = {
  MIN: 15,
  MAX: 200
};
//Массив описаний
const description = ['На даче', 'У моря', 'На работе', 'В кино','На прогулке'];


//Генератор случайных чисел
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


//Функция для генерации объектов
const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: description[getRandomInteger(0, description.length - 1)],
  likes: getRandomInteger(likes.MIN, likes.MAX),
  comments: []
});

//Заполняем массив с помощью метода .from и назначаем аргументом в createPhoto индекс создаваемого массива (счётчик)
const createPhotos = Array.from({length: PHOTO_COUNT}, (_, index) => createPhoto(index));

