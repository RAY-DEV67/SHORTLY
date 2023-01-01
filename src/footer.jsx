import logo from "./images/logo.svg"
import twitter from "./images/icon-twitter.svg"
import instagram from "./images/icon-instagram.svg"
import pinterest from "./images/icon-pinterest.svg"
import facebook from "./images/icon-facebook.svg"

export function Footer() {
    return ( 
        <div className="footer flex flex-col md:flex-row md:justify-around">
            <div className="py-8 flex flex-col items-center">
            <img src={logo} alt="logo" className="bg-white p-2" />
            </div>
            <div>
                <h2 className="md:mt-8">Features</h2>
                <p className="mt-4 cursor-pointer">Link Shortening</p>
                <p className="mt-2 cursor-pointer">Branded Links</p>
                <p className="mt-2 cursor-pointer">Analytics</p>
            </div>
            <div>
                <h2 className="mt-8">Resources</h2>
                <p className="mt-4 cursor-pointer">Blog</p>
                <p className="mt-2 cursor-pointer">Developers</p>
                <p className="mt-2 cursor-pointer">Support</p>
            </div>
            <div>
                <h2 className="mt-8">Company</h2>
                <p className="mt-4 cursor-pointer">About</p>
                <p className="mt-2 cursor-pointer">Our Team</p>
                <p className="mt-2 cursor-pointer">Careers</p>
                <p className="mt-2 cursor-pointer">Contact</p>
            </div>
           <div className="flex flex-col items-center">
           <div className="flex mt-8">
                <img src={facebook} alt="facebook" className="cursor-pointer" />
                <img src={twitter} alt="twitter" className="mx-4 cursor-pointer"/>
                <img src={pinterest} alt="pinterest" className="mr-4 cursor-pointer" />
                <img src={instagram} alt="instagram" className="cursor-pointer" />
            </div>
           </div>
        </div>
     );
}
