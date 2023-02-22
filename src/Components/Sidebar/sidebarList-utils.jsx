import icon1 from '../../Images/icons-svg/icon1.svg';
import icon2 from '../../Images/icons-svg/icon2.svg';
import icon3 from '../../Images/icons-svg/icon3.svg';
import icon4 from '../../Images/icons-svg/icon4.svg';




export let sidebarList =[
    {
        name:'Overview',
        icon:icon1,
        link: '/overview',
        active:false,
    },
    {
        name:'Tickets',
        icon:icon2,
        link: '/tickets',
        active:false,
    },
    {
        name:'Ideas',
        icon:icon3,
        link: '/ideas',
        active:false,
    },
    {
        name:'Users',
        icon:icon4,
        link: '/users',
        active:true,
    }

]