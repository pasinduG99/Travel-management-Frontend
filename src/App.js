
import CreatePackage from './components/Travel_Packages/AddTravelPackage';
import AllPackages from './components/Travel_Packages/TravelPackages';
import PackageBooking from './components/Travel_Packages/PackageBooking';
import PayForTP from './components/Payment/PayForTP';
import PaymentConfirm from './components/Payment/PaymentComplete';
import PaymentView from './components/Payment/PayView';
import PaymentDetails from  './components/Payment/PaymentDetails';


import {BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <Router>
    <div >

   
     <Route path="/travelpackage/admin/add" exact component ={CreatePackage}></Route>
     <Route path="/travelpackages" exact component = {AllPackages}></Route>
     <Route path="/bookingpackage/:id" exact component = {PackageBooking}></Route>
     <Route path="/payment/add-package/:id" exact component={PayForTP}/>
     <Route path="/confirm/payment/" exact component={PaymentConfirm}/>
     <Route path="/payment/view/" exact component={PaymentView}/>
     <Route path="/payment/details/:id" exact component={PaymentDetails}/>
    


</div>

</Router>
  );
}

export default App;
