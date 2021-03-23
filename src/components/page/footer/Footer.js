import React from 'react';
import  './footer.css'
import {
    AiFillPhone,
    BsEnvelopeFill,
    FaFacebookSquare, FaGithubSquare,
    FaTwitterSquare,
    HiLocationMarker,
    SiGmail
} from "react-icons/all";
const Footer = () => {
    return (
        <div className="container-fluid footer" >
           <div className="container">
               <div className="row">
                   <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="footer__location">
                          <HiLocationMarker/>
                         <span className="location--title">38/16 Tan Binh street
                             <strong>HCM city</strong> </span>
                      </div>
                       <div className="footer__number-phone">
                           <AiFillPhone/>
                           <a  href="tel:0967263872" className="number-phone">0967263872</a>
                       </div>
                       <div className="footer__support">
                           <BsEnvelopeFill/>
                           <a href="#" className="support">thodo7199@gmail.com</a>
                       </div>
                   </div>

                   <div className="col-lg-6 col-md-6 col-sm-12">

                           <h6 className="footer__info--title">About the company</h6>
                           <p className="footer__info--content">
                               Lorem Ipsum is simply dummy text of the
                               printing and typesetting industry.
                               Lorem Ipsum has been the industry's
                               standard dummy text ever since the 1500s,
                               when an unknown printer
                               took a galley of type and scrambled
                               it to make a type specimen book.</p>
                            <div className="footer__socials">
                                <a href="#" className="footer__icon"><FaFacebookSquare/></a>
                                <a href="#" className="footer__icon"><FaTwitterSquare/></a>
                                <a href="#" className="footer__icon"><SiGmail/></a>
                                <a href="#" className="footer__icon"><FaGithubSquare/></a>

                            </div>
                   </div>

               </div>
           </div>
        </div>
    );
};

export default Footer;