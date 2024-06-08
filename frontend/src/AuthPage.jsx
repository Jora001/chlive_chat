import axios from 'axios';
import PropTypes from 'prop-types';

const AuthPage = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post('http://localhost:3001/authenticate',
        {username:value}
    )
    .then(r=> props.onAuth({...r.data,secret:value}))
    .catch(e => console.log('error', e))
    const userData = { username: value, secret: value };

    try {
      // Example axios POST request (adjust URL and payload as needed)
      const response = await axios.post('/api/authenticate', userData);
      console.log('Server response:', response.data);
      props.onAuth(userData);
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
