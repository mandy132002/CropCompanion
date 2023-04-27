const topNav = [
    { id: 1, label: "Home", href: "/seller" },
    { id: 2 , label: "Add Products", href: "/seller/addP" },
    { id: 3, label: "Predict", href: "/seller/predict" },
    { id: 4, label: "Sold Products", href: "/seller/soldP" },
    { id: 5, label: "Logout", href: "/seller/signout" },
    
  ];
  
  export const getTopNav = () => {
    return topNav;
  };