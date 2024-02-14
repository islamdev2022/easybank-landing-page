const Header = () => {
    return (
        <div class="fixed top-0 left-0 w-full z-10 bg-white">
        <div class="flex justify-between items-center px-10 py-0">
            <div class="flex gap-64">
                <img src="./public/images/Screenshot 2024-02-14 141349.png" alt="" width="250" height="300"/>
                <ul class="flex text-gray-400 cursor-pointer font-semibold gap-12 items-center ">
                    <li class="menu-item">Home</li>
                    <li class="menu-item">About</li>
                    <li class="menu-item">Contact</li>
                    <li class="menu-item">Blog</li>
                    <li class="menu-item">Careers</li>
                </ul>
            </div>
            <button class="bg-gradient-to-r from-hsl-button to-hsl-button-to text-white font-bold py-2 px-4 rounded-full hover:opacity-85">
                Request Invite
            </button>
        </div>
    </div>
     );
}

export default Header;

