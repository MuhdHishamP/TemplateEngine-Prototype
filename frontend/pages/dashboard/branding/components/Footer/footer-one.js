import React, { useState, useEffect, } from 'react';
import { FiTwitter, FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FooterOne = ({ footerOneData }) => {

  const [storeName, StoreName] = useState([]);
  useEffect(() => {
    let store = localStorage.getItem('StoreName');
    StoreName(store)
  }, []);

  const [pagesData, PagesData] = useState([
    {
      "id": 337,
      "created_at": "2023-10-25T13:20:58.180727+05:30",
      "updated_at": "2023-11-01T22:34:37.406754+05:30",
      "is_deleted": false,
      "is_active": true,
      "name": "Privacy policy",
      "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/data/chapter/264020320025/blob",
      "page_url": "privacypolicy",
      "meta_title": "",
      "meta_keywords": "",
      "meta_description": "",
      "content": "<p>This cookie notice has been prepared with the intention of providing our website visitors with information about the technologies used on our website, and how our visitors can make informed choices about how to manage cookies.&nbsp;</p><p><strong>What is a cookie?&nbsp;</strong><br>Whenever you visit our website, we place cookies onto your device for different reasons. A cookie is a small text-based file that is downloaded and stored on your computer, mobile or similar device and contains information about your navigation on the website. They can for example, be used to keep track of which pages you visit on the website, to save the information you entered, or your preferences remembered, such as language settings.</p><p><strong>Why do we use them?</strong><br>We use cookies to give you the full functionality of the website, to customize your user experience, perform analytics and improve our services. Cookies are also used to deliver personalized advertising on our websites, apps, and newsletters across internet and via social media platforms, to get insights regarding for example how many people click on a Social Media ad from us to visit a page on our website. The information is used to measure and optimize advertising in social media.&nbsp;</p><p><strong>Who is responsible for placing cookies on our website?</strong><br>All cookies have a publisher which tells you who the cookie belongs to. Some cookies are placed on the websites by us, such cookies are called “first party cookies”, others are placed on the website by another organization, with our permission. Such cookies are called “third party cookies”.&nbsp;</p><p><i>H &amp; M Hennes &amp; Mauritz GBC AB, Mäster Samuelsgatan 46, 106 38 Stockholm, Sweden</i>, and the named publisher, listed in the cookie subgroup in the cookie list below, are both responsible for setting cookies on your device when you access any of our official websites and for the access and collection of data from the same device.&nbsp;<br>&nbsp;</p><p><strong>For how long are cookies stored?</strong><br>Cookies can be stored for varying lengths of time on your browser or device. Temporary cookies, so-called session cookies, are stored in your device until you close your browser. Permanent cookies have an expiration date and when this date has passed, the cookie is deleted when you return to the website that created it.&nbsp;</p><p><strong>What types of cookies do we use?</strong><br>We use four categories of cookies, <i>strictly necessary</i>, <i>performance</i>, <i>functional</i> and <i>marketing</i>. Only the last three categories listed require user consent. For strictly necessary cookies, user consent is not required as these cookies provide complete and continuous display of the content of the website so that you can access the website and receive an appropriate digital browsing and online experience.&nbsp;</p><p><strong>How to accept or withdraw your cookie consent in “Cookie settings”?</strong><br>You manage your cookie consents in “Cookie Settings” at the bottom of this website. You can accept all three categories of cookies or only one of them if you prefer. By agreeing to a category of cookies, you consent to all cookies in this category (see detailed cookie list below).&nbsp; You can change your preferences and refuse cookies at any time in Cookie Settings. Below you will find more detailed information about our categories of cookies as well as a list of all cookies used in that category.</p><p>If you prefer not to use cookies on your device, you can manage your cookie preferences by ticking it in the list of cookie categories in “Cookie Settings”. Please note that the changes/choices may affect the functionality of the website and may not be available to you personalized offers or advertisements.</p><p>In addition to your consent withdrawal, you can easily stop your browser from accepting cookies by configuring your browser’s cookie settings. All commercial web browsers are featured with cookie management functionality. Please check your web browser to find out more how to delete or disable cookies etc.</p><p>If you choose to \"Accept All Cookies\", you accept all cookie categories, and agree that we share this information with third parties, such as our advertising partners. This may in some cases mean your data will be processed outside the EU/EEA. If you choose “Only required cookies” no other cookies than the ones categorized as “strictly necessary” will be placed on your device. You can at any time disable cookies that are not categorised as strictly necessary for the site to function by withdrawing your consent.&nbsp;&nbsp;</p><p><strong>Questions?</strong><br>If you have questions about the processing of personal data, we invite you to familiarize yourself with our privacy notice where you will also find our contact information.</p><p><strong>Cookie category list</strong></p><h4><strong>Strictly Necessary Cookies</strong></h4><p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information</p>",
      "tenant": 1
    },
    {
      "id": 336,
      "created_at": "2023-10-25T13:20:12.419132+05:30",
      "updated_at": "2023-11-01T22:34:22.089203+05:30",
      "is_deleted": false,
      "is_active": true,
      "name": "Terms and Condition",
      "image": "https://sketchapp-sas.s3-ap-south-1.amazonaws.com/static/data/chapter/457422281591/blob",
      "page_url": "termsandconditions",
      "meta_title": "",
      "meta_keywords": "",
      "meta_description": "",
      "content": "<p>This cookie notice has been prepared with the intention of providing our website visitors with information about the technologies used on our website, and how our visitors can make informed choices about how to manage cookies.&nbsp;</p><p><strong>What is a cookie?&nbsp;</strong><br>Whenever you visit our website, we place cookies onto your device for different reasons. A cookie is a small text-based file that is downloaded and stored on your computer, mobile or similar device and contains information about your navigation on the website. They can for example, be used to keep track of which pages you visit on the website, to save the information you entered, or your preferences remembered, such as language settings.</p><p><strong>Why do we use them?</strong><br>We use cookies to give you the full functionality of the website, to customize your user experience, perform analytics and improve our services. Cookies are also used to deliver personalized advertising on our websites, apps, and newsletters across internet and via social media platforms, to get insights regarding for example how many people click on a Social Media ad from us to visit a page on our website. The information is used to measure and optimize advertising in social media.&nbsp;</p><p><strong>Who is responsible for placing cookies on our website?</strong><br>All cookies have a publisher which tells you who the cookie belongs to. Some cookies are placed on the websites by us, such cookies are called “first party cookies”, others are placed on the website by another organization, with our permission. Such cookies are called “third party cookies”.&nbsp;</p><p><i>H &amp; M Hennes &amp; Mauritz GBC AB, Mäster Samuelsgatan 46, 106 38 Stockholm, Sweden</i>, and the named publisher, listed in the cookie subgroup in the cookie list below, are both responsible for setting cookies on your device when you access any of our official websites and for the access and collection of data from the same device.&nbsp;<br>&nbsp;</p><p><strong>For how long are cookies stored?</strong><br>Cookies can be stored for varying lengths of time on your browser or device. Temporary cookies, so-called session cookies, are stored in your device until you close your browser. Permanent cookies have an expiration date and when this date has passed, the cookie is deleted when you return to the website that created it.&nbsp;</p><p><strong>What types of cookies do we use?</strong><br>We use four categories of cookies, <i>strictly necessary</i>, <i>performance</i>, <i>functional</i> and <i>marketing</i>. Only the last three categories listed require user consent. For strictly necessary cookies, user consent is not required as these cookies provide complete and continuous display of the content of the website so that you can access the website and receive an appropriate digital browsing and online experience.&nbsp;</p><p><strong>How to accept or withdraw your cookie consent in “Cookie settings”?</strong><br>You manage your cookie consents in “Cookie Settings” at the bottom of this website. You can accept all three categories of cookies or only one of them if you prefer. By agreeing to a category of cookies, you consent to all cookies in this category (see detailed cookie list below).&nbsp; You can change your preferences and refuse cookies at any time in Cookie Settings. Below you will find more detailed information about our categories of cookies as well as a list of all cookies used in that category.</p><p>If you prefer not to use cookies on your device, you can manage your cookie preferences by ticking it in the list of cookie categories in “Cookie Settings”. Please note that the changes/choices may affect the functionality of the website and may not be available to you personalized offers or advertisements.</p><p>In addition to your consent withdrawal, you can easily stop your browser from accepting cookies by configuring your browser’s cookie settings. All commercial web browsers are featured with cookie management functionality. Please check your web browser to find out more how to delete or disable cookies etc.</p><p>If you choose to \"Accept All Cookies\", you accept all cookie categories, and agree that we share this information with third parties, such as our advertising partners. This may in some cases mean your data will be processed outside the EU/EEA. If you choose “Only required cookies” no other cookies than the ones categorized as “strictly necessary” will be placed on your device. You can at any time disable cookies that are not categorised as strictly necessary for the site to function by withdrawing your consent.&nbsp;&nbsp;</p><p><strong>Questions?</strong><br>If you have questions about the processing of personal data, we invite you to familiarize yourself with our privacy notice where you will also find our contact information.</p><p><strong>Cookie category list</strong></p><h4><strong>Strictly Necessary Cookies</strong></h4><p>These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information</p>",
      "tenant": 1
    }
  ]);

  const [socialLinks, SocialLinks] = useState([
    {
      "id": 341,
      "created_at": "2023-10-25T13:23:27.689968+05:30",
      "updated_at": "2023-10-25T13:23:27.689985+05:30",
      "is_deleted": false,
      "is_active": true,
      "name": "Twitter",
      "icon": "FiTwitter",
      "url": "https://www.linkedin.com/in/sketchappsolutions/",
      "tenant": 1
    },
    {
      "id": 340,
      "created_at": "2023-10-25T13:22:37.282494+05:30",
      "updated_at": "2023-10-25T13:22:37.282512+05:30",
      "is_deleted": false,
      "is_active": true,
      "name": "Linkedin",
      "icon": "FiLinkedin",
      "url": "https://www.linkedin.com/in/sketchappsolutions/",
      "tenant": 1
    },
    {
      "id": 339,
      "created_at": "2023-10-25T13:22:22.500864+05:30",
      "updated_at": "2023-10-25T13:22:22.500881+05:30",
      "is_deleted": false,
      "is_active": true,
      "name": "Facebook",
      "icon": "FiFacebook",
      "url": "https://www.facebook.com/sketchappsolutions",
      "tenant": 1
    },
    {
      "id": 338,
      "created_at": "2023-10-25T13:22:07.280638+05:30",
      "updated_at": "2023-10-25T13:22:07.280655+05:30",
      "is_deleted": false,
      "is_active": true,
      "name": "Instagram",
      "icon": "FiInstagram",
      "url": "https://www.instagram.com/sketchappsolutions/",
      "tenant": 1
    }
  ]);


  return (
    <>

      <div className="bg-gray-50 p-4">
        <footer className="text-primary py-6"
          style={{
            "backgroundColor": footerOneData ? footerOneData[0]?.backgroundColor : null,
          }} >

          <div className="flex justify-center sm:justify-end text-center w-full mb-6 text-xs">
            {pagesData?.map((data, i) => {
              return (
                <>
                  <div onClick={(e) => HandlePushPage(data, data?.page_url)} key={i}
                    className="cursor-pointer justify-center md:justify-start text-center w-full mb-6 text-sm"
                    style={{
                      "color": footerOneData ? footerOneData[0]?.titleColor : null,
                    }} >
                    {data?.name}
                  </div>
                </>
              )
            })}
          </div>

          <ul className="flex justify-center pb-3 px-6 w-min mx-auto"
            style={{
              "backgroundColor": footerOneData ? footerOneData[0]?.backgroundColor : null,
            }} >
            {socialLinks?.map((item, i) => {
              return (
                <>
                  <li
                    className="mx-3 p-1 -mb-1 z-40 glob-trans hover:scale-150 hover:text-primary rounded-full hover:bg-hover"
                    key={i} >
                    <a target="_blank" href={item?.url} rel="noopener noreferrer"
                      style={{
                        "color": footerOneData ? footerOneData[0]?.iconColor : null,
                      }} >
                      {item?.icon == "FiTwitter" ? (<FiTwitter />) : (null)}
                      {item?.icon == "FiInstagram" ? (<FiInstagram />) : (null)}
                      {item?.icon == "FiFacebook" ? (<FiFacebook />) : (null)}
                      {item?.icon == "FiLinkedin" ? (<FiLinkedin />) : (null)}
                      {item?.icon == "FaWhatsapp" ? (<FaWhatsapp />) : (null)}
                    </a>
                  </li>
                </>
              )
            })}
          </ul>

          <div className=" mx-auto z-40 pt-3 px-5 flex justify-center">
            <p className="text-secondary cursor-pointer text-xs text-center sm:text-left" 
            style={{
              "color": footerOneData ? footerOneData[0]?.secondaryColor : null,
            }} >
              © {new Date().getFullYear()} {storeName}
            </p>
          </div>

        </footer>


      </div>





    </>
  )
}

export default FooterOne;