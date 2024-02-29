//react-js\myreactdev\src\App.js
import { useState } from 'react';
import axios from 'axios';
import './App.css';
 
function App() {
  const [name,setName] = useState('');
  const [team_name,setTeamName] = useState('');
  const [mobile,setMobile] = useState('');
  const [team_mobile,setTeamMobile] = useState('');
  const [email,setEmail] = useState('');
  const [team_email,setTeamEmail] = useState('');
  const [edu,setEdu] = useState('');
  const [team_edu,setTeamEdu] = useState('');
  const [user,setUser] = useState('');
  const [team_user,setTeamUser] = useState('');
  const [password,setPassword] = useState('');
  const [team_password,setTeamPassword] = useState('');

  const [showForm1, setShowForm1] = useState(true);
  const [showForm2, setShowForm2] = useState(false);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    if (value === 'form1') {
      setShowForm1(true);
      setShowForm2(false);
    } else if (value === 'form2') {
      setShowForm1(false);
      setShowForm2(true);
    }
  };
 
  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has left Blank!");
    }
    else if(mobile.length === 0){
      alert("Mobile has left Blank!");
    }
    else if(email.length === 0){
      alert("Email has left Blank!");
    }
    else if(edu.length === 0){
      alert("Educational Institution has left Blank!");
    }
    else if(user.length === 0){
      alert("Username has left Blank!");
    }
    else if(user.password === 0){
      alert("Password has left Blank!");
    }
    else{
      const url = 'http://localhost/test/example.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('mobile', mobile);
      fData.append('email', email);
      fData.append('edu', edu);
      fData.append('user', user);
      fData.append('password', password);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }

  const handleSubmit1 = () => {
    if(team_name.length === 0){
      alert("Name has left Blank!");
    }
    else if(team_mobile.length === 0){
      alert("Mobile has left Blank!");
    }
    else if(team_email.length === 0){
      alert("Email has left Blank!");
    }
    else if(team_edu.length === 0){
      alert("Educational Institution has left Blank!");
    }
    else if(team_user.length === 0){
      alert("Username has left Blank!");
    }
    else if(team_user.password === 0){
      alert("Password has left Blank!");
    }
    else{
      const url = 'http://localhost/test/team.php';
      let fData = new FormData();
      fData.append('team_name', team_name);
      fData.append('team_mobile', team_mobile);
      fData.append('team_email', team_email);
      fData.append('team_edu', team_edu);
      fData.append('team_user', team_user);
      fData.append('team_password', team_password);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }
 
  return (
    <div className="gradient-custom">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h3 className="text-center mb-5">Welcome to the Mathema Contest</h3>
                  <div className='formating'>
                    <label className="radio-label">
                      <input type="radio" name="formSelector" value="form1" checked={showForm1} onChange={handleRadioChange} />
                      <lebel className="inner-lebel">Individual Entry</lebel>
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="formSelector" value="form2" checked={showForm2} onChange={handleRadioChange} />
                      <lebel className="inner-lebel">Team Entry</lebel>
                    </label>
                      {showForm1 && (
                        <form>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="name">Your Name</label>
                            <input type="text" className="form-control form-control-lg" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="email">Your Email</label>
                            <input type="email" className="form-control form-control-lg" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="mobile">Your Mobile</label>
                            <input type="text" className="form-control form-control-lg" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="edu">Educational Institution</label>
                            <input type="text" className="form-control form-control-lg" name="edu" id="edu" value={edu} onChange={(e) => setEdu(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="user">Username</label>
                            <input type="text" className="form-control form-control-lg" name="user" id="user" value={user} onChange={(e) => setUser(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" className="form-control form-control-lg" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" htmlFor="form2Example3g">
                              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center">
                            <input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4" style={{color: "white"}} name="submit1" id="submit1" value="Individual Register" onClick={handleSubmit} />
                          </div>
        
                          <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>
        
                        </form>
                      )}
                      {showForm2 && (
                        <form>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="team_name">Team Name</label>
                            <input type="text" className="form-control form-control-lg" name="team_name" id="team_name" value={team_name} onChange={(e) => setTeamName(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="team_email">Team Leader Email</label>
                            <input type="email" className="form-control form-control-lg" name="team_email" id="team_email" value={team_email} onChange={(e) => setTeamEmail(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="team_mobile">Team Leader Mobile</label>
                            <input type="text" className="form-control form-control-lg" name="team_mobile" id="team_mobile" value={team_mobile} onChange={(e) => setTeamMobile(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="team_edu">Educational Institution</label>
                            <input type="text" className="form-control form-control-lg" name="team_edu" id="team_edu" value={team_edu} onChange={(e) => setTeamEdu(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="team_user">Team Username</label>
                            <input type="text" className="form-control form-control-lg" name="team_user" id="team_user" value={team_user} onChange={(e) => setTeamUser(e.target.value)} />
                          </div>
                          <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="team_password">Team Password</label>
                            <input type="password" className="form-control form-control-lg" name="team_password" id="team_password" value={team_password} onChange={(e) => setTeamPassword(e.target.value)} />
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" htmlFor="form2Example3g">
                              I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center">
                            <input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4" style={{color: "white"}} name="submit" id="submit" value="Team Register" onClick={handleSubmit1} />
                          </div>

                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!" className="fw-bold text-body"><u>Login here</u></a></p>

                        </form>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default App;