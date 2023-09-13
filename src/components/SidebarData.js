import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData= [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:"nav-text",
    },
    {
        title: 'About Us',
        path:'/about-pelikas-healthcare/',
        icon:<IoIcons.IoIosPaperPlane />,
        cName:"nav-text",
        submenu:[
            {
                subTitle:"Infrastructure",
                subPath:"/about-pelikas-healthcare/infrastructure/"
            },
            {
                subTitle:"Mission and Value",
                subPath:"/about-pelikas-healthcare/mission-and-value/"
            },
            {
                subTitle:"Overview",
                subPath:"/about-pelikas-healthcare/overview-pelikas-healthcare/"
            },
            {
                subTitle:"Why choose use",
                subPath:"/about-pelikas-healthcare/why-choose-us/"
            },
            {
                subTitle:"Infrastructure",
                subPath:"/about-pelikas-healthcare/social-responsibility/"
            },
        ]
    },
    
    {
        title: 'Products',
        path:'/product',
        icon:<FaIcons.FaCartPlus />,
        cName:"nav-text",
    }, 
    {
        title: 'Services',
        path:'/services',
        icon:<IoIcons.IoIosPaper />,
        cName:"nav-text",
    },
       {
        title: 'Career',
        path:'/careers,',
        icon:<IoIcons.IoMdPeople />,
        cName:"nav-text",
    },
    {
        title: 'Messages',
        path:'/messages',
        icon:<FaIcons.FaEnvelopeOpenText />,
        cName:"nav-text",
    },
    {
        title: 'Support',
        path:'/support',
        icon:<IoIcons.IoMdHelpCircle />,
        cName:"nav-text",
    },
    
]