const Card = ({ title, img, link }) => {
  return (
    <div className="h-[360px] flex flex-col bg-white z-10 m-4">
      <div className="text-m xl:text-xl font-semibold ml-4">{title}</div>
      <div className=" m-4 h-[240px] w-[240px] ">
        <img src={img} alt="" className="h-[100%] w-[100%] object-cover"></img>
      </div>
      <div className="text-xm xl:text-sm text-blue-600 ml-4">{link}</div>
    </div>
  );
};

export default Card;
