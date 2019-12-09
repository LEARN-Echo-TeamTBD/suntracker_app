import React from "react"


class Resources extends React.Component {

  render () {
    return (
        <React.Fragment>
            <div className="resources">
                <h1>Resources</h1>   
            </div>



          <div className="allCards">
            <div className="cardOne">
              <div className="card border-primary mb-3">
                 <div className="card-header">Resource</div>
                  <div className="card-body">
                  <h4 className="card-title"><a href="https://www.skincancer.org/early-detection/self-exams/" target="_blank">Self Exams:</a></h4>
                  <p className="card-text">Self exams are a good way of keeping track of any changes in moles or any new spot that may have come up.
                    This is a simple and effective way to stay on top of your skin.</p>
                </div>
             </div>
            </div>
            
            <div className="cardTwo">
             <div className="card border-primary mb-3">
                 <div className="card-header">Resource</div>
                  <div className="card-body">
                  <h4 className="card-title"><a href="https://www.medicalnewstoday.com/articles/320639.php#how-to-protect-each-skin-type" target="_blank">Fitzpatrick Scale:</a></h4>
                  <p className="card-text">The Fitzpatrick scale is a great resource to know what your skin type better when it comes to sun exposure.</p>
                </div>
             </div>
            </div>
          
            <div className="cardThree">
             <div className="card border-primary mb-3">
                 <div className="card-header">Resource</div>
                  <div className="card-body">
                  <h4 className="card-title"><a href="https://www.preventcancer.org/programs/save-your-skin/" target="_blank">ABCD of a Mole</a></h4>
                  <p className="card-text">Asymmetry, Border, Color, Diameter of a mole.</p>
                </div>
             </div>
            </div>

            <div className="cardFour">
             <div className="card border-primary mb-3">
                 <div className="card-header">Resource</div>
                  <div className="card-body">
                  <h4 className="card-title"><a href="https://www.aad.org/diseases/skin-cancer/what-is-mohs-surgery" target="_blank">Mohs Surgery</a></h4>
                  <p className="card-text">A very effective provedure to cure skin cancer. Mohs Surgery.</p>
                </div>
             </div>
            </div>
          </div>


        </React.Fragment>
    );
  }
}

export default Resources
