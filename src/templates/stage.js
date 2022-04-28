export default (innerHtml = '') => {
  const element = document.createElement("div");
  element.innerHTML = innerHtml;
  return element;
};

