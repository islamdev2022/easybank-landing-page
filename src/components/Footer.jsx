const Footer = () => {
    return (
        <div className="bg-darkblue h-auto md:h-48 px-4 md:px-0 ">
            <div className="table mr-auto ml-auto">

           
            <div className="flex flex-col md:flex-row lg:gap-80 ">
                <div className="flex flex-col items-center md:items-start">
                    <img src="./public/images/Screenshot_2024-02-14_141349-removebg-preview.png" alt="" className="lg:w-80 md:w-auto mt-4 md:mt-0 md:ml-16" />
                    <div className="flex gap-3 mt-4 mb-8 lg:ml-20 md:mt-8 cursor-pointer">
                        <img src="./public/images/icon-facebook.svg" alt="" />
                        <img src="./public/images/icon-instagram.svg" alt="" />
                        <img src="./public/images/icon-pinterest.svg" alt="" />
                        <img src="./public/images/icon-twitter.svg" alt="" />
                        <img src="./public/images/icon-youtube.svg" alt="" />
                    </div>
                </div>

                <div className="md:flex flex-col md:flex-row sm:gap-0 md:gap-20 lg:gap-28 w-fit pt-8 md:mt-0 md:justify-center md:items-center sm:p-0 table mr-auto ml-auto">
                    <ul className="text-center md:text-left">
                        <li className=" text-gray-400 font-semibold hover:text-hsl-button pb-2 cursor-pointer">About Us</li>
                        <li className=" text-gray-400 font-semibold hover:text-hsl-button pb-2 cursor-pointer">Contact</li>
                        <li className=" text-gray-400 font-semibold hover:text-hsl-button pb-2 cursor-pointer">Blog</li>
                    </ul>
                    <ul className="text-center md:text-left">
                        <li className="text-gray-400 font-semibold hover:text-hsl-button pb-2 cursor-pointer">Careers</li>
                        <li className="text-gray-400 font-semibold hover:text-hsl-button pb-2 cursor-pointer">Support</li>
                        <li className="text-gray-400 font-semibold hover:text-hsl-button pb-2 cursor-pointer">Privacy</li>
                    </ul>
                </div>
                <div className="table ml-auto mr-auto">
                <div className=" md:mt-0 md:justify-end text-center pt-10 w-fit ">
                    <button className="bg-gradient-to-r from-hsl-button to-hsl-button-to text-white font-bold py-2 px-4 rounded-full hover:opacity-85">
                        Request Invite
                    </button>
                    <p className="text-gray-400 font-semibold mt-6   ">C EASYBANK. All Right Reserved .</p>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
