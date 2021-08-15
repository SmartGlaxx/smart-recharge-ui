import React from 'react'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
// import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import PhoneAndroidTwoToneIcon from '@material-ui/icons/PhoneAndroidTwoTone';
import NetworkWifiTwoToneIcon from '@material-ui/icons/NetworkWifiTwoTone';
import WbIncandescentTwoToneIcon from '@material-ui/icons/WbIncandescentTwoTone';
import TvTwoToneIcon from '@material-ui/icons/TvTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import LiveHelpTwoToneIcon from '@material-ui/icons/LiveHelpTwoTone';
import ContactPhoneTwoToneIcon from '@material-ui/icons/ContactPhoneTwoTone';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import {RechargeOptions} from '../components'

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FlashOnTwoToneIcon from '@material-ui/icons/FlashOnTwoTone';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import PhoneAndroidOutlinedIcon from '@material-ui/icons/PhoneAndroidOutlined';
import AccountBalanceWalletTwoToneIcon from '@material-ui/icons/AccountBalanceWalletTwoTone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const NavConstants = [
    {
        id : 0,
        name : 'Home',
        link : "/",
        icon : <HomeTwoToneIcon />,
        options : [],
        background: "rgba(100,100,100, 0.4)"
    },  
    {
        id : 1,
        name : 'Buy Airtime',
        link : "/airtime",
        icon : <PhoneAndroidTwoToneIcon />,
        options : ['MTN', 'Airtel', 'Glo', '9Mobile'],
        background: "rgba(23, 29, 212, 0.4)"
    },
    {
        id : 2,
        name : 'Buy Data',
        link : "/data",
        icon : <NetworkWifiTwoToneIcon />,
        options : ['MTN', 'Airtel', 'Glo', '9Mobile'],
        background: "rgba(92, 51, 85, 0.4)"
    },  
    {
        id : 3,
        name : 'Pay for Electricity',
        link : "/electricity",
        icon : <FlashOnTwoToneIcon />,
        options : [],
        background: "rgba(148, 6, 6, 0.4)"
    },
    {
        id : 4,
        name : 'Cable Tv Subscription',
        link : "/cableTv",
        icon : <TvTwoToneIcon />,
        options : [],
        background: "rgba(124, 14, 235, 0.4)"
    },
    {
        id : 5,
        name : 'My Wallet',
        link : "/wallet",
        icon : <AccountBalanceWalletTwoToneIcon />,
        options:[],
        background: "rgba(4, 88, 92, 0.4)"
    },  
    {
        id : 6,
        name : 'FAQ',
        link : "/faq",
        icon : <LiveHelpTwoToneIcon />,
        options : [],
        background: "rgba(152, 245, 235, 0.4)"
    },
    {
        id : 7,
        name : 'Contact',
        link : "/contact",
        icon : <ContactPhoneTwoToneIcon />,
        options : [],
        background: "rgba(101, 117, 116, 0.4)"
    },
    {
        id : 8,
        name : 'Logout',
        link : "/logout",
        icon : <ExitToAppTwoToneIcon />,
        options : [],
        background: "rgba(15, 20, 20, 0.4)"
    },
]
 

export const BottomNavConstants = [
    {
      id : 1,
      name : "Home",
      icon : <HomeOutlinedIcon/>,
      link : "/"
    },
    {
      id : 2,
      name : "Profile",
      icon : <PersonOutlineTwoToneIcon/>,
      link : "/profile"
    },
    {
      id : 3,
      name : "Wallet",
      icon : <AccountBalanceWalletTwoToneIcon/>,
      link : "/wallet"
    }
  ]