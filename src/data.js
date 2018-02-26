import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Form Page', icon: <Web/>, link: '/form' },
    { text: 'Table Page', icon: <GridOn/>, link: '/table' },
    { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Chrome', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Firefox', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Safari', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  },
  formPage: {
    clients: [
      {id: 1, image: 'mun1.jpg', phone: '0123456789', status: 0, text: ''},
      {id: 2, image: 'mun1.jpg', phone: '0123456789', status: 1, text: ''},
      {id: 3, image: 'mun1.jpg', phone: '0123456789', status: 2, text: ''},
      {id: 4, image: 'mun1.jpg', phone: '0123456789', status: 0, text: ''},
      {id: 5, image: 'mun1.jpg', phone: '0123456789', status: 1, text: ''},
      {id: 6, image: 'mun1.jpg', phone: '0123456789', status: 2, text: ''},
      {id: 7, image: 'mun1.jpg', phone: '0123456789', status: 0, text: ''},
      {id: 8, image: 'mun1.jpg', phone: '0123456789', status: 1, text: ''},
      {id: 9, image: 'mun1.jpg', phone: '0123456789', status: 2, text: ''},
      {id: 10, image: 'mun1.jpg', phone: '0123456789', status: 1, text: ''},
      {id: 11, image: 'mun1.jpg', phone: '0123456789', status: 2, text: ''},
    ],
    chatText:[
      {chat_id:1, user_id:1, client_id:1, text:'hello', created_at:'2018-26-02 15:19:51'},
      {chat_id:1, user_id:1, text:'how are you', created_at:'2018-26-02 15:19:52'},
      {chat_id:1, user_id:1, client_id:1, text:'im fine', created_at:'2018-26-02 15:19:50'},
      {chat_id:1, user_id:1, text:'thank you', created_at:'2018-26-02 15:19:52'},
      {chat_id:2, user_id:2, text:'hello', created_at:'2018-26-02 15:19:52'},
      {chat_id:2, client_id:2, text:'hi', created_at:'2018-26-02 15:19:53'},
      {chat_id:3, user_id:3, text:'hello', created_at:'2018-26-02 15:19:54'},
      {chat_id:3, client_id:3, text:'hi', created_at:'2018-26-02 15:19:55'},
      {chat_id:4, user_id:4, text:'hello', created_at:'2018-26-02 15:19:56'},
      {chat_id:4, client_id:3, text:'hi', created_at:'2018-26-02 15:19:57'},
      {chat_id:5, user_id:5, text:'hello', created_at:'2018-26-02 15:19:58'},
      {chat_id:5, client_id:3, text:'hi', created_at:'2018-26-02 15:19:50'},
      {chat_id:5, user_id:5, text:'hello', created_at:'2018-26-02 15:19:51'},
    ],
    options: [
      {id: 1, name: 'Option 1'},
      {id: 2, name: 'Option 2'},
      {id: 3, name: 'Option 3'},
      {id: 4, name: 'Option 4'},
      {id: 5, name: 'Option 5'},
      {id: 6, name: 'Option 6'},
      {id: 7, name: 'Option 7'},
      {id: 8, name: 'Option 8'},
      {id: 9, name: 'Option 9'},      
    ]
  },
};

export default data;
