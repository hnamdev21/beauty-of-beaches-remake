const addActivePagination = (element, wrapperPagination) => {
  const aElements = [...wrapperPagination.querySelectorAll("a")];
  aElements.forEach((aElement) =>
    aElement.parentElement.classList.remove("active")
  );

  element.parentElement.classList.add("active");
};

export default addActivePagination;
