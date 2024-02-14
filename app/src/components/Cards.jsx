const Cards = ({image,title,text}) => {
    return ( <div className="mt-16 m-5 ml-24 ">
    <div> <img src={image} alt="" /> </div>
    <h2 className="text-2xl font-semibold text-gray-700 mt-8 p-2">{title}</h2>
    <p className="font-semibold text-gray-400 p-3">{text}</p>
    </div> );
}
 
export default Cards;