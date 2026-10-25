import p_img1 from './p_img1.webp'
import p_img2 from './p_img2.webp'
import p_img3 from './p_img3.webp'
import p_img4 from './p_img4.avif' // ফোল্ডারে .avif থাকায় এটি এভাবে দিতে হবে (অথবা ফাইলটি .webp করে নিতে পারো)
import p_img5 from './p_img5.webp'
import p_img6 from './p_img6.webp'
import p_img7 from './p_img7.webp'
import p_img8 from './p_img8.webp'
import p_img9 from './p_img9.webp'
import p_img10 from './p_img10.webp'

import logo from './logo.svg'
import heroimg from './hero-img.svg'

export const assets = {
    logo,
    heroimg
}

export const products = [
  {
    _id: "aa",
    name: "Women Neck Cotton Top",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 100,
    image: [p_img1], // ঠিক করা হয়েছে
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 12345,
    bestseller: true
  },
  {
    _id: "a1",
    name: "Men Neck Cotton T_Shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 100,
    image: [p_img2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 12345,
    bestseller: true
  },
  {
    _id: "a2",
    name: "Girls Cotton Top",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 90,
    image: [p_img3],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 12345,
    bestseller: true
  },
  {
    _id: "a3",
    name: "Men Neck Cotton T_Shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 110,
    image: [p_img4],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "XXL"],
    date: 12345,
    bestseller: true
  },
  {
    _id: "a4",
    name: "Women Neck Cotton Top",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 120,
    image: [p_img5],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 12345,
    bestseller: true
  },
  {
    _id: "a5",
    name: "Girls Cotton Top",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 100,
    image: [p_img6],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["S", "L", "XL"],
    date: 12345,
    bestseller: true
  },
  {
    _id: "a6",
    name: "Men Flat-Front Trouser",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 115,
    image: [p_img7],
    category: "Men",
    subCategory: "Bottompwear",
    sizes: ["S", "L", "XL"],
    date: 12345,
    bestseller: false
  },
  {
    _id: "a7",
    name: "Men Neck Cotton T-Shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 100,
    image: [p_img8],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 12345,
    bestseller: false
  },
  {
    _id: "a8",
    name: "Girls Cotton Top",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 100,
    image: [p_img9],
    category: "Kids",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 12345,
    bestseller: false
  },
  {
    _id: "a9",
    name: "Men Flat-Front Trouser",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
    price: 100,
    image: [p_img10],
    category: "Men",
    subCategory: "Bottompwear",
    sizes: ["S", "L", "XL"],
    date: 12345,
    bestseller: false
  }
]