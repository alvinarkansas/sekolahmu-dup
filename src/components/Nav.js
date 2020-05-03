import React from 'react'
import { GoBook } from 'react-icons/go';
import { AiOutlineShopping, AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { FaUserGraduate, FaPeopleCarry, FaHome, FaSchool } from 'react-icons/fa';

export default function Nav() {
    return (
        <nav>
            <div className="logo">
                <p>logo</p>
            </div>
            <div className="menu">
                <div className="menu-btn">
                    <div className="circle gold">
                        <FaHome />
                    </div>
                    <p>Beranda</p>
                </div>
                <div className="menu-btn">
                    <div className="circle orange">
                        <FaSchool />
                    </div>
                    <p>Tentang</p>
                </div>
                <div className="menu-btn">
                    <div className="circle reddish">
                        <FaPeopleCarry />
                    </div>
                    <p>Prakerja</p>
                </div>
                <div className="menu-btn">
                    <div className="circle teal">
                        <FaUserGraduate />
                    </div>
                    <p>Ikut Program</p>
                </div>
                <div className="menu-btn">
                    <div className="circle blue">
                        <GoBook />
                    </div>
                    <p>Belajar Live!</p>
                </div>
            </div>
            <div className="nav-btns">
                <AiOutlineShopping size="1.5rem" />
                <AiOutlineHeart size="1.5rem" />
                <AiOutlineSearch size="1.5rem" />
                <AiOutlineUser size="1.5rem" />
            </div>
        </nav>
    )
}
