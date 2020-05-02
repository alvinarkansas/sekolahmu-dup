import React from 'react';
import './App.scss';
import illust from './illust.png';
import CountUp from 'react-countup';
import { FaHome, FaBuilding, FaSchool, FaPlayCircle, FaUserGraduate, FaPeopleCarry } from 'react-icons/fa';
import { GoBook } from 'react-icons/go';
import { AiOutlineShopping, AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import VisibilitySensor from 'react-visibility-sensor';

function App() {
  return (
    <div className="scrollable-page">
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
          <AiOutlineShopping size="1.5rem"/>
          <AiOutlineHeart size="1.5rem"/>
          <AiOutlineSearch size="1.5rem"/>
          <AiOutlineUser size="1.5rem"/>
        </div>
      </nav>
      <main>
        <div className="background"></div>
        <div className="headline">
          <div className="welcome-space">
            <p className="sub">SEKOLAH BLENDED LEARNING PERTAMA DI INDONESIA</p>
            <h1><span>Kolaborasi</span> untuk masa depan pendidikan Indonesia</h1>
            <p className="dimmed">Cukup satu aplikasi dengan berbagai fitur yang mendukung beragam kebutuhan pendidikan. Guru profesional dan berpengalaman yang akan membimbing kamu.</p>
            <div className="btn-space">
              <button className="btn btn-bordered">Pelajari</button>
              <button className="btn">Belajar Sekarang</button>
            </div>
          </div>
          <div className="illustration">
            <img src={illust} alt="illustration" />
          </div>
        </div>

        <div className="content">

        </div>

        <div className="stats">

          <div className="stat">
            <div>
              <FaHome size="3rem" />
              <CountUp end={300} duration={3} delay={0} useEasing={false}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <h1 ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <p>Tempat Belajar</p>
          </div>

          <div className="stat">
            <div>
              <FaPlayCircle size="3rem" />
              <CountUp end={150} duration={3.1} delay={0} useEasing={false}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <h1 ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <p>Program</p>
          </div>

          <div className="stat">
            <div>
              <FaSchool size="3rem" />
              <CountUp end={200} duration={3.2} delay={0} useEasing={false}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <h1 ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <p>Tempat Belajar</p>
          </div>

          <div className="stat">
            <div>
              <FaBuilding size="3rem" />
              <CountUp end={70} duration={3.3} delay={0} useEasing={false}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <h1 ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </div>
            <p>Tempat Belajar</p>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
