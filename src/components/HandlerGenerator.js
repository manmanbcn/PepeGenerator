const createHandlerNext = (data, currentIndex, setCurrentIndex, onClick, label) => (e) => {
  e.preventDefault();
  let newIndex = (currentIndex + 1) % data.length;
  setCurrentIndex(newIndex);
  onClick(data[newIndex].url);
};

const createHandlerPrev = (data, currentIndex, setCurrentIndex, onClick, label) => (e) => {
  e.preventDefault();
  let newIndex = (currentIndex - 1 + data.length) % data.length;
  setCurrentIndex(newIndex);
  onClick(data[newIndex].url);
};

export {createHandlerNext, createHandlerPrev};
