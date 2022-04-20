
import CreatePackage from './components/Travel_Packages/AddTravelPackage';
import AllPackages from './components/Travel_Packages/TravelPackages';
import PackageBooking from './components/Travel_Packages/PackageBooking';
import PayForTP from './components/Payment/PayForTP';
import PaymentConfirm from './components/Payment/PaymentComplete';
import PaymentView from './components/Payment/PayView';
import PaymentDetails from  './components/Payment/PaymentDetails';
import EditPayment from './components/Payment/EditPayment';

import Add_Inquiry from "./components/Inquiry/Add_Inquiry";
import viewInquiry from "./components/Inquiry/View_Inquiry";
import editInquiry from "./components/Inquiry/Edit_Inquiry";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
    <div >
      <Header/>
      
      

   
     <Route path="/travelpackage/admin/add" exact component ={CreatePackage}></Route>
     <Route path="/travelpackages" exact component = {AllPackages}></Route>
     <Route path="/bookingpackage/:id" exact component = {PackageBooking}></Route>
     <Route path="/payment/add-package/:id" exact component={PayForTP}/>
     <Route path="/confirm/payment/" exact component={PaymentConfirm}/>
     <Route path="/payment/view/" exact component={PaymentView}/>
     <Route path="/payment/details/:id" exact component={PaymentDetails}/>
     <Route path="/payment/edit/:id" exact component={EditPayment}/>
     <Route path="/addInquiry" exact component={Add_Inquiry}/>
<Route path="/viewInquiry" exact component={viewInquiry}/>
<Route path="/editInquiry" exact component={editInquiry}/>  


</div>

</Router>
  );
}

export default App;
