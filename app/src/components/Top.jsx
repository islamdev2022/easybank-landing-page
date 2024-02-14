const Top = () => {
    return ( 
    <div className="bg-gray-100 h-full p-32 ">
    <div className="flex mt-24 bg-gray-100 h-96 w-96">
        <div>
             <h1 className="text-5xl size-96 h-36">Next Genration digital banking</h1>
        <p className="font-semibold text-gray-400 w-96  ">Take your financial life online. Your Easybank account will be a one-stop-shop 
  for spending, saving, budgeting, investing, and much more.
</p>
<button className="bg-gradient-to-r from-hsl-button to-hsl-button-to text-white font-bold py-2 px-4 rounded-full relative top-12 hover:opacity-85">
          Request Invite
        </button>
        </div>
<Right></Right>
    </div>
    </div> );
}

const Right = () => {
    return ( <div className="bg-[url('./public/images/bg-intro-desktop.svg')] h-full bg-cover bg-center absolute right-0 top-20">
    <img src="./public/images/image-mockups.png" width={700} alt="" className="relative bottom-20 "/>

    </div> );
}
 

 
export default Top;