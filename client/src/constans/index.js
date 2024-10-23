import { bannerOne, bannerThree, bannerTwo } from "../assets"

export const nav = [
      { title: "HOME", path: "/" },
      { title: "SHOP", path: "/shop" },
      { title: "ABOUT", path: "/about" },
      { title: "CONTACT", path: "/contact" },
      { title: "ORDERS", path: "/orders" },
      // { title: "SIGNIN", path: "/signin" },
]

export const bannerData = [
      {
            button: "Flush Sale",
            title: "TOP SELLING SMART PHONE AND ACCESSORIES",
            discount: "DISCOUNT OF UP TO 40%",
            price: "From $599.99",
            image: bannerOne
      },
      {
            button: "Big Sale",
            title: "THE BEST DEALS ON MACBOOKS",
            discount: "ABOUT $250 OF",
            price: "From $2349.99",
            image: bannerThree
      },
      {
            button: "Weekend Deal",
            title: "DISCOUNTS 50% ON ALL HEADPHONES",
            discount: "FREE SHIPPING OVER $110",
            price: "From $599.99",
            image: bannerTwo
      }
]