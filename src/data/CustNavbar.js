const topNav = [
    { id: 1, label: "Home", href: "/customer" },
    { id: 2, label: "Order History", href: "/customer/orders" },
    { id: 3, label: "Logout", href: "/customer/signout"},  
  ];
  
  export const getTopNav = () => {
    return topNav;
  };