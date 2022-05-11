const PageTitle = ({ title }) => {
  return (
    <div className="view-content relative">
      <div
        style={{
          backgroundImage: `url(${"https://www.heidelberg.edu/sites/default/files/styles/crop_banner_image/public/images/basic-pages/Library%20%2820%29_0.jpg?h=3f2d8485&itok=4EGKxlHN"})`,
        }}
        className="w-100 pagetitle-bg"
      >
        <div className="bg-overlay"></div>
        <h1 className="absolute bottom-0 left-0 page-title">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
