import React from "react";
import "./Isotope.css";

function Isotope(): JSX.Element {
        // init one ref to store the future isotope object
        // const isotope = React.useRef()
        // // store the filter keyword in a state
        // const [filterKey, setFilterKey] = React.useState('*')
      
        // // initialize an Isotope object with configs
        // React.useEffect(() => {
        //   isotope.current = new Isotope('.filter-container', {
        //     itemSelector: '.filter-item',
        //     layoutMode: 'fitRows',
        //   })
        //   // cleanup
        //   return () => isotope.current.destroy()
        // }, [])
      
        // // handling filter key change
        // React.useEffect(() => {
        //   filterKey === '*'
        //     ? isotope.current.arrange({filter: `*`})
        //     : isotope.current.arrange({filter: `.${filterKey}`})
        // }, [filterKey])
      
        // const handleFilterKeyChange = key => () => setFilterKey(key)
      
        return (
            <div className="Isotope">
            {/* <ul>
              <li onClick={handleFilterKeyChange('*')}>Show Both</li>
              <li onClick={handleFilterKeyChange('vege')}>Show Veges</li>
              <li onClick={handleFilterKeyChange('fruit')}>Show Fruits</li>
            </ul>
            <hr />
            <ul className="filter-container">
              <div className="filter-item vege">
                <span>Cucumber</span>
              </div>
              <div className="filter-item fruit">
                <span>Apple</span>
              </div>
              <div className="filter-item fruit">
                <span>Orange</span>
              </div>
              <div className="filter-item fruit vege">
                <span>Tomato</span>
              </div>
            </ul>*/}
            </div> 
        )
      }


export default Isotope;
