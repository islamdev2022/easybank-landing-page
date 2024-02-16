const Top = () => {
    return (
        <div className="bg-gray-100 h-full px-4 py-6 lg:p-64">
            <Right />
            <div className="flex flex-col lg:flex-row items-center lg:items-start mt-12 bg-gray-100 w-fit">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl">Next Generation Digital Banking</h1>
                    <p className="font-semibold text-gray-400 mt-4 lg:w-96">Take your financial life online. Your Easybank account will be a one-stop-shop 
for spending, saving, budgeting, investing, and much more.</p>
                    <button className="bg-gradient-to-r from-hsl-button to-hsl-button-to text-white font-bold py-2 px-4 rounded-full mt-4 hover:opacity-85">
                        Request Invite
                    </button>
                </div>
               
            </div>
        </div>
    );
}

const Right = () => {
    return (
        <div className="mt-4 lg:mt-0 lg:absolute lg:right-0 lg:top-20 w-full lg:w-auto">
            
            <img src="./public/images/image-mockups.png" className=" max-w-xs lg:max-w lg lg:max-w-lg xl:max-w-xl mx-auto lg:relative lg:bottom-20" alt="" />
        </div>
    );
}

export default Top;
