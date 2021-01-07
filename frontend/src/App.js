import logo from './logo.svg';
// import './App.css';
import ViewRequests from './components/ViewRequests'
import Login from './components/Login.js'

//sick requests
import ViewSickRequests from './components/ViewSickRequests'
//maternity request
import ViewMaternityRequests from './components/ViewMaternityRequests'
//change day off request
import ViewChangeRequests from './components/ViewChangeRequests'
//compensation request
import ViewCompensationRequests from './components/ViewCompensationRequests'
//sent replacement request
import ViewReplacementRequests from './components/ViewReplacementRequests'
//received replacement request
import ViewReceivedReplacementRequests from './components/ViewReceivedReplacementRequests'

//slot linking request
import ViewSlotLinkingRequests from './components/ViewSlotLinkingRequests'

//received requests for hod
import ViewReceivedSickRequests from './components/ViewReceivedSickRequests'
import ViewReceivedMaternityRequests from './components/ViewReceivedMaternityRequests'
import ViewReceivedChangeRequests from './components/ViewReceivedChangeRequests'
import ViewReceivedSlotLinkingRequests from './components/ViewReceivedSlotLinkingRequests'
import ViewReceivedCompensationRequests from './components/ViewReceivedCompensationRequests'

import SubmittedRequests from './components/submittedRequests'

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Router,Route,Switch} from 'react-router-dom'

import history from './history';
import getRequest from './components/getRequest'

function App() {
  return (
    <Router history={history}>
    <div className="App">
    {/* <Route exact path='/maternityTable' component ={MaternityTable}/> */}
        <Route exact path='/submittedRequests' component={SubmittedRequests}/>
        
        <Route exact path='/login' component ={Login}/>
        <Route exact path='/getRequest' component ={getRequest}/>
        <Route exact path='/' component ={ViewRequests}/>

        <Route exact path='/ViewSickRequests' component ={ViewSickRequests}/>

        <Route exact path='/ViewMaternityRequests' component ={ViewMaternityRequests}/>
        
        <Route exact path='/ViewCompensationRequests' component ={ViewCompensationRequests}/>

        <Route exact path='/ViewChangeRequests' component ={ViewChangeRequests}/>

        <Route exact path='/ViewReplacementRequests' component ={ViewReplacementRequests}/>

        <Route exact path='/ViewReceivedReplacementRequests' component ={ViewReceivedReplacementRequests}/>
       

        <Route exact path='/ViewSlotLinkingRequests' component ={ViewSlotLinkingRequests}/>


        <Route exact path='/ViewReceivedSickRequests' component ={ViewReceivedSickRequests}/>
        <Route exact path='/ViewReceivedCompensationRequests' component ={ViewReceivedCompensationRequests}/>
        <Route exact path='/ViewReceivedSlotLinkingRequests' component ={ViewReceivedSlotLinkingRequests}/>
        <Route exact path='/ViewReceivedChangeRequests' component ={ViewReceivedChangeRequests}/>
        <Route exact path='/ViewReceivedMaternityRequests' component ={ViewReceivedMaternityRequests}/>
       
       

        
    </div>
    </Router>
  );
}

export default App;