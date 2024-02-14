const Bottom = () => {
    return (<div className= "bg-slate-100">
        <h1 className="text-4xl h-10 w-2/3 relative left-24 top-7">Latest Articles</h1>
        <div className="flex ">
    <CardsBottom image="./public/images/image-currency.jpg" author="By Claire Robinson" title="Receive money in any currency with no fess" 
    text="The world is getting smaller and we’re becoming more mobile. So why should you be 
    forced to only receive money in a single …"/>
    <CardsBottom image="./public/images/image-restaurant.jpg" author="By Wilson Hutton" title="Treat yourself without worrying about money" 
    text="Our simple budgeting feature allows you to separate out your spending and set 
    realistic limits each month. That means you …"/>
    <CardsBottom image="./public/images/image-plane.jpg" author="By Wilson Hutton" title="Take your Easybank card wherever you go" 
    text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
    while you’re abroad. We’ll even show you …"/>
    <CardsBottom image="./public/images/image-confetti.jpg" author="By Claire Robinson" title="Our invite-only Beta accounts are now live!" 
    text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
    It’s easy to request an invite through the site ..."/>
    </div> </div>)
}
const CardsBottom = (({image,author,title,text}) => {
    return ( <div className="mt-16 ml-20 relative right-8 bg-white rounded-xl hover:scale-105 cursor-pointer">
    <div> <img src={image} alt="" width={300} className=" rounded-t-xl"/> </div>
    <p className="text-gray-400 mt-8 ml-5 font-semibold text-sm w-fit ">{author}</p>
    <h2 className="text-xl font-semibold text-gray-700 p-6 hover:text-green-400 ">{title}</h2>
    <p className="font-semibold text-gray-400 p-4">{text}</p>
    </div> );
} );

 
 
export default Bottom;