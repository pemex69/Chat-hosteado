import PropTypes from 'prop-types';
import axios from 'axios';

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const host = 'localhost';
        const port = 3000;
        const { value } = e.target[0];
        axios
            .post(`http://${host}:${port}/authenticate`, { username: value })
            .then((r => props.onAuth({ ...r.data, secret: value })))
            .catch((error) => {
                console.log(error);
            });
        props.onAuth({ username: value, secret: value });
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">chat de alma</div>

                <div className="form-subtitle">Ingresa un nombre de usuario para empezar:</div>

                <div className="auth">
                    <div className="auth-label">Nombre de usuario</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Ingresar 😬😬😬
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