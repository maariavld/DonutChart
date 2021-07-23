import React, {useEffect, useRef, useState} from 'react';
import DonutChartCard from './Donut';
import '../stylesheets/button.css';
import '../stylesheets/dropdown.css';
import Dropdown from './Dropdown';
import LongMenu from './Menu';


const CloneBtn = () => {
  const inputEl = useRef();
  const cloneCard = () =>{
    return (
      <div>
        <DonutChartCard />
      </div>
    );
  }
  // Wait for DOM to load
  useEffect(() => {
                    inputEl.current.addEventListener( 'click',
                                                       cloneCard(),
                                                       { once: true }
                                                    )
                  });
  // const [selected, setSelected] = useState("&#xFE19");
  return (
          <div >
            <button ref={inputEl} className='button' >
              &#xFE19;
            </button>
            {/* <div class="dropdown">
              <ul>
                <li>Clone</li>
              </ul>
            </div> */}
            {/* <Dropdown selected={selected} setSelected={setSelected} /> */}
            <LongMenu/>
          </div>
        );
}
export default CloneBtn;
