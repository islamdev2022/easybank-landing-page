const Footer = () => {
    return (
        <div className="bg-darkblue h-auto md:h-44 mt-10 px-4 md:px-0 ">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:items-start">
                    <img src="./public/images/Screenshot_2024-02-14_141349-removebg-preview.png" alt="" className="w-56 md:w-auto mt-4 md:mt-0 md:ml-16" />
                    <div className="flex gap-3 mt-4 mb-8 lg:ml-20 md:mt-8">
                        <img src="./public/images/icon-facebook.svg" alt="" />
                        <img src="./public/images/icon-instagram.svg" alt="" />
                        <img src="./public/images/icon-pinterest.svg" alt="" />
                        <img src="./public/images/icon-twitter.svg" alt="" />
                        <img src="./public/images/icon-youtube.svg" alt="" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row sm:gap-0 lg:gap-28 w-full pt-8 md:mt-0 md:justify-center  ">
                    <ul className="text-center md:text-left">
                        <li className="text-white hover:text-hsl-button pb-2 cursor-pointer">About Us</li>
                        <li className="text-white hover:text-hsl-button pb-2 cursor-pointer">Contact</li>
                        <li className="text-white hover:text-hsl-button pb-2 cursor-pointer">Blog</li>
                    </ul>
                    <ul className="text-center md:text-left">
                        <li className="text-white hover:text-hsl-button pb-2 cursor-pointer">Careers</li>
                        <li className="text-white hover:text-hsl-button pb-2 cursor-pointer">Support</li>
                        <li className="text-white hover:text-hsl-button pb-2 cursor-pointer">Privacy</li>
                    </ul>
                </div>
                <div className="w-full md:mt-0 md:justify-end text-center pt-10 ">
                    <button className="bg-gradient-to-r from-hsl-button to-hsl-button-to text-white font-bold py-2 px-4 rounded-full hover:opacity-85">
                        Request Invite
                    </button>
                    <p className="text-white mt-6  ">C EASYBANK. All Right Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
