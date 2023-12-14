import { useEffect, useRef, useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [activeId, setActiveId] = useState(0);
  const arr = [1, 2, 3, 4, 5, 6];
  function toLeft() {
    if (activeId == 0) {
      setActiveId(arr.length - 1);
    } else {
      setActiveId(activeId - 1);
    }
  }
  function toRight() {
    if (activeId == arr.length - 1) {
      setActiveId(0);
    } else {
      setActiveId(activeId + 1);
    }
  }

  const container2Ref = useRef(null);

  useEffect(() => {
    if (container2Ref.current) {
      const activeElement = container2Ref.current.querySelector('.active');
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }, [activeId]);

  return (
    <>
      <section className="sliderbox">
        <button className="leftBtn " onClick={toLeft}>
          {' '}
          left
        </button>
        <button className="rightBtn " onClick={toRight}>
          {' '}
          right{' '}
        </button>
        <div className="container">
          {arr.map((slide, i) =>
            activeId == i ? (
              <div key={i} id={i} className="slide">
                {slide}
              </div>
            ) : (
              ''
            )
          )}
        </div>
      </section>

      <section className="sliderbox" ref={container2Ref}>
        <div className="container2">
          {arr.map((slide, i) => (
            <div
              key={i}
              id={i}
              className={`slide2 ${activeId == i ? 'active' : ''}`}
              onClick={(e) => setActiveId(parseInt(e.target.id))}
            >
              {slide}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
