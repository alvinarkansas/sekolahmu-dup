import React from 'react'
import CountUp from 'react-countup';
import { FaHome, FaBuilding, FaSchool, FaPlayCircle } from 'react-icons/fa';
import VisibilitySensor from 'react-visibility-sensor';

export default function Stats() {
  return (
    <>
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
    </>
  )
}
