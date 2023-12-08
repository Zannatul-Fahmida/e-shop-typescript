import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {MdFacebook} from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-500 via-violet-700 to-pink-900 text-white text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Shops</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">TVs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              sequi recusandae ex eveniet consequatur esse eligendi quam atque
              fugit, natus nesciunt ipsum, vel dolorem nostrum ullam saepe.
              Facere, modi. Minus.
            </p>
            <p>&copy; {new Date().getFullYear()} E-shop, All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#"><MdFacebook size={24} /></Link>
              <Link href="#"><AiFillTwitterCircle size={24} /></Link>
              <Link href="#"><AiFillInstagram size={24} /></Link>
              <Link href="#"><AiFillYoutube size={24} /></Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
