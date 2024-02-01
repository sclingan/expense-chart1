import datajs from '../data.json'

function Section() {

    return (
      <section>
         <h2>Spending - Last 7 days</h2>
         <div id="graph">
      

         </div>
        <footer>
          <div className="div-total">
            <p>Total this month</p>
            <p className="total">$478.33</p>
          </div>
          <div>
            <p className="percent">+2.4%</p>
            <p>from last month</p>
          </div>
        </footer>
      </section>
    )
  }
  
  export default Section
  