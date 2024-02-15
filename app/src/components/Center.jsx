import Cards from "./Cards";
const Center = () => {
    return ( <div className="bg-gray-200 w-full h-full pl-16 ">
<h1 className="text-4xl pt-16 pr-12">Why choose Esaybank?</h1>
<p className="font-semibold text-gray-400 lg:w-6/12 sm:w-1/2 pt-8 pr-20 sm:pl-2">We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
  <div className="block lg:flex w-full">
<Cards image={"./public/images/icon-online.svg"} 
       title="Online Banking" 
       text="Our modern web and mobile applications allow you to keep track of your finances 
       wherever you are in the world.">
</Cards>
<Cards image={"./public/images/icon-budgeting.svg"} 
       title="Simple Budgeting" 
       text="  See exactly where your money goes each month. Receive notifications when you’re 
       close to hitting your limits.">
</Cards>
<Cards image={"./public/images/icon-onboarding.svg"} 
       title="Fast Onboarding" 
       text="We don’t do branches. Open your account in minutes online and start taking control 
       of your finances right away.">
</Cards>
<Cards image={"./public/images/icon-api.svg"} 
       title="Open API" 
       text="Manage your savings, investments, pension, and much more from one account. Tracking 
       your money has never been easier.">
</Cards>
</div>
    </div> );
}
 
export default Center;