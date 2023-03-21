const toggleClassNameHeader = () => {
  const header = document.getElementById("header-page");
  window.addEventListener("scroll", addClass);

  function addClass() {
    if (window.scrollY === 0) return header.classList.remove("resize");

    header.classList.add("resize");
  }
};

export default toggleClassNameHeader;
