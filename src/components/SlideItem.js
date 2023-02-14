export const SlideItem = ({ description, index, url }) => (
  <div className={`slide-item slide-item-${index || 0}`}>
    <div
      className="flex content-center justify-center bg-cover h-[300px] sm:h-[400px] lg:h-[500px]"
      style={{ backgroundImage: `url("${url}")` }}
    >
      <p className="text-white absolute right-4 bottom-4 text-xs lg:text-sm z-10">
        {description}
      </p>
    </div>
  </div>
);
