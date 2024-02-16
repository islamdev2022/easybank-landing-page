const Cards = ({image,title,text}) => {
    return ( <div className="mt-16 pr-20">
    <div className="flex justify-center lg:justify-start "> <img src={image} alt="" className="" /> </div>
    <h2 className="text-2xl font-semibold text-gray-700 mt-8 p-2 text-center lg:text-left ">{title}</h2>
    <p className="font-semibold text-gray-400 p-3 sm:items-center">{text}</p>
    </div> );
}
 
export default Cards;