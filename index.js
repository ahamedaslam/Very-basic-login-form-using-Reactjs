import React from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component {

  render(){
        return (

          <div class="row">
           <div class="col-md-8 offset-md-2">

              <form>

                 <div class="form-group">
                    <h1>Login</h1>
                    <label class="skils" for="subject">
                      username
                    </label>
                    <input type="text" id="username" class="form-control" required
                    />
                    </div>
                    <div>
                      <label class="skills" for="body">
                      password
                      </label>
                      <input type="password" id="pwd" required  class="form-control"/>
                      </div>
                      <input type="submit" value="login" id="navigation" 
                      class = "btn btn-primary"
                      
                      />
                      </form>

                    </div>
                  </div>
        );
    }
 }
               
ReactDOM.render(<Login/>, document.getElementById('root'));




























           
























              




















           




















        