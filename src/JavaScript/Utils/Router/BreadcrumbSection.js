const breadcrumbSection = document.createElement("section");
breadcrumbSection.className = "breadcrumb-section";

const setBreadcrumb = () => {
  breadcrumbSection.innerHTML = `<div class="inner">
                                    <ul class="breadcrumb-list flex">
                                        <li class="breadcrumb-link">
                                        <a href="#" class="active">Home</a>
                                        </li>
                                    </ul>
                                </div>`;
  return breadcrumbSection;
};

setBreadcrumb();

export default breadcrumbSection;
