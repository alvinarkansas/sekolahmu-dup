import React from 'react';
import './App.scss';
import illust from './assets/illust.png';
import CountUp from 'react-countup';
import { FaHome, FaBuilding, FaSchool, FaPlayCircle } from 'react-icons/fa';
import VisibilitySensor from 'react-visibility-sensor';
import Nav from './components/Nav';
import Program from './components/Program';
import programs from './data/program.json';

function App() {
  return (
    <div className="scrollable-page">
      <Nav />
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
          {programs.map(program => <Program key={program.id} program={program}/>)}
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
