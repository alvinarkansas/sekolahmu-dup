import React from 'react'
import placeholder from '../assets/comingsoon-square.png'
import { animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

export default function Program({ program, fadeIn }) {
  return (
    <animated.div style={fadeIn} className="program">
      <div className="program-img-wrapper">
        {program.thumbnail ? <img src={program.thumbnail} alt="program-img" /> : <img src={placeholder} alt="program-img" />}
      </div>
      {program.description
        ?
        <div className="program-desc-wrapper">
          <p className="subtitle mb">{program.title}</p>
          <>
            <div className="mb">
              <p className="sm">by <b>{program.author}</b></p>
              {program.free ? <p className="txt-accent">Gratis</p> : null}
            </div>
            <p className="dimmed">{program.description}</p>
          </>
        </div>
        :
        <div className="program-desc-wrapper sp-between">
          <p className="subtitle mb">{program.title}</p>
          <>
            <div>
              <p className="sm">by <b>{program.author}</b></p>
              {program.free ? <p className="txt-accent">Gratis</p> : null}
            </div>
            <p className="dimmed">{program.description}</p>
          </>
        </div>
      }
    </animated.div>
  )
}
