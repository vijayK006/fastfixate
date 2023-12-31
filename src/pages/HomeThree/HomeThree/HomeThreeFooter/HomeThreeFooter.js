import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineAttachEmail } from 'react-icons/md';


const HomeThreeFooter = () => {
   return (
      <>
         <footer className="theme-dark-bg2">
            <div className="tp-footer-area-two pt-120 pb-40">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp" data-wow-delay=".3s">
                           <div className="tp-footer-info tp-footer-info-three">
                              <div className="tp-footer-info-logo mb-35">
                                 <Link to="/"><img src="assets/img/logo/footerlogo.png" className="img-fluid" alt="img not found"/></Link>
                              </div>
                              <p className="text-white mb-35">Have a malfunctioning appliance? Need professional repair services for your Refrigerator, Washing machine, Dish Washer, Air Condition ? <br/> We’re here to help! Contact us today for prompt and reliable repairs.</p>
                              
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp" data-wow-delay=".6s">
                           <h4 className="tp-footer-widget-title mb-35">Our Services</h4>
                           <ul>
                              <li><a href="/WashingmachineRepair">Washing Machine Repair</a></li>
                              <li><a href="/RefrigeratorRepairServices">Refrigerator Service</a></li>
                              <li><a href="/AirConditionService">Air Conditioning Service</a></li>
                              <li><a href="/DishwasherRepair">Dishwasher Repair</a></li>
                           </ul>
                        </div>
                     </div>
                    
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp" data-wow-delay=".6s">
                           <h4 className="tp-footer-widget-title mb-35">Legal</h4>
                           <ul>
                              <li><a href="/Privacy">Privacy policy</a></li>
                              <li><a href="/Term">Terms and conditions</a></li>
                 
                           </ul>
                        </div>
                     </div>

                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget footer-col-4 mb-30 wow fadeInUp" data-wow-delay="1.2s">
                           <h4 className="tp-footer-widget-title mb-40">Social Links</h4>
                           <div className="tp-footer-info-social tp-footer-info-social-three">
                              <a href="/"><i><FaFacebookF className='icon' /> </i></a>
                                 <a href="/"><i><BsTwitter className='icon' /> </i></a>
                                 <a href="/"><i><BsInstagram className='icon' /> </i></a>
                                 <a href="/"><i><AiOutlineGoogle className='icon' /> </i></a>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-copyright-area-two theme-dark-bg3 z-index pt-30 pb-30">
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-copyright tp-copyright-two text-center">
                           <p className="m-0">Copyright ©2023 <span><a href='https://webuniversals.com' target='_blank' rel='noreferrer'>Webuniversals</a></span>. All Rights Reserved Copyright</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='cta-btn'>
            <div className='multi-cta'>

<a href='tel:+971 561 706 233' className="social-icon red">
<div className="center-item">
<FiPhoneCall  className='color-white-social'/>
</div>
</a>

<a href='https://web.whatsapp.com/send?phone=+971561706233' target='_blank' rel='noreferrer' className="social-icon green">
<div className="center-item">
<FaWhatsapp  className='color-white-social'/>
</div>
</a>

<a href='mailto:info@fastfixate.com' className="social-icon orange">
<div className="center-item">
<MdOutlineAttachEmail  className='color-white-social'/>
</div>
</a>

 
            </div>
            

            </div>
         </footer>
      </>
   );
};

export default HomeThreeFooter;