import React from 'react';
import './App.scss';
import illust from './assets/illust.png';
import Nav from './components/Nav';
import Program from './components/Program';
import Stats from './components/Stats';
import programs from './data/program.json';
import { useSpring, animated } from 'react-spring';

function App() {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500
  });
  const fadeInDelayed = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 3000
  });
  const flyIn = useSpring({
    marginLeft: 0,
    from: { marginLeft: -500 }
  })
  const AnimatedProgram = animated(Program);

  return (
    <div className="scrollable-page">
      <Nav />
      <main>
        <div className="background"></div>
        <div className="headline">
          <div className="welcome-space">
            <animated.p style={fadeIn} className="sub">SEKOLAH BLENDED LEARNING PERTAMA DI INDONESIA</animated.p>
            <animated.h1 style={fadeIn}><span>Kolaborasi</span> untuk masa depan pendidikan Indonesia</animated.h1>
            <animated.p style={fadeIn} className="dimmed">Cukup satu aplikasi dengan berbagai fitur yang mendukung beragam kebutuhan pendidikan. Guru profesional dan berpengalaman yang akan membimbing kamu.</animated.p>
            <animated.div style={fadeIn} className="btn-space">
              <button className="btn btn-bordered">Pelajari</button>
              <button className="btn">Belajar Sekarang</button>
            </animated.div>
          </div>
          <div className="illustration">
            <animated.img style={fadeIn} src={illust} alt="illustration" />
          </div>
        </div>
        <div className="divider">
          <h2 style={{ textAlign: 'center' }}>PROGRAM UNGGULAN</h2>
        </div>
        <div className="content">
          {programs.map(program => <AnimatedProgram key={program.id} program={program} fadeIn={fadeInDelayed} />)}
        </div>

        <div className="stats">
          <Stats />
        </div>

      </main>
    </div>
  );
}

export default App;
