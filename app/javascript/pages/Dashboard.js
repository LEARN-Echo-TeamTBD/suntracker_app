import React from "react"
let coordinates = null

class Dashboard extends React.Component {
    constructor(props){
       super(props)
       this.state = {
         uvData: null,
         error: null,
         searchUrl: 'https://api.openuv.io/api/v1/uv?lat=32.76&lng=-117.12'
       }
   }

   async componentDidMount() {
       let getPosition = function (options) {
           return new Promise(function (resolve, reject) {
               navigator.geolocation.getCurrentPosition(resolve, reject, options);
           })
       }
      //Handle when user denies
       getPosition()
           .then(({ coords }) => {
               coordinates = coords
               const { latitude, longitude } = coords
               const url = `https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`
               this.getUVData(url)
           })
           .catch((err) => {
               console.error(err.message)
           })
   }

   getUVData = (searchUrl) => {
        fetch(searchUrl, {
               method: 'GET',
               headers: {
                   'x-access-token': 'de93a608c1807aff817033670c4c3b28',
                   'Content-Type': 'application/json'
               }
           }).then((resp)=>{
               if(resp.status !== 200){ throw({message: "Could not perform search. Please try again"})}
             return resp.json()
           })
           .then((data)=>{
             this.setState({ uvData: data })
           })
           .catch((error)=>{
             this.setState({ error: `Sorry, there was a problem.  ${error.message}`})
           })
       }


  render () {
      const { uvData } = this.state
        if (uvData === null || typeof uvData.result === 'undefined'){
            return (
                <React.Fragment>
                    <div>
                        <h1>Loading...</h1>
                    </div>
                </React.Fragment>
            )
        }

        const currentUserMaxSun = Object.values(uvData.result.safe_exposure_time)[this.props.user_skintone-1]


        const { sunset, sunrise } = uvData.result.sun_info.sun_times



        const sunTime = new Date(sunrise)
        let getDayHours = sunTime.getHours()
        console.log(getDayHours)

        const getSunHours = () =>{
            const up = new Date(sunrise).getHours()
            const down = new Date(sunset).getHours()
                return (`Sun rise in ${up} hours, Sunset in ${down} hours`)
            }
            console.log(getSunHours())



    return (
        <React.Fragment>
            <div>
                <h3>
                    Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
                </h3>
                <h3>
                    Strongest UV Index of day: {uvData.result.uv_max}</h3>
                <h3>
                    Uv-max-time: (time of day when strongest) {uvData.result.uv_max_time}
                </h3>
                <h3>
                    Current Uv Index: {uvData.result.uv}
                </h3>
                <h3>
                    safe_exposure_time: {currentUserMaxSun}
                </h3>
                <h3>
                    {getSunHours()}
                </h3>
            </div>
        </React.Fragment>
    );
  }
}
export default Dashboard
