import Footer from '../components/layouts/Footer';
import HeaderInner from '../components/layouts/HeaderInner';
export default function NerkoTemplate() {
  return (
    
        <>		
        <HeaderInner/>
		<div className="uni-sign-in uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">

                <header className="uni-page-header">
                    <div className="uk-container">
                        <h1 className="heading uk-h3 uk-h1@m uk-text-uppercase uk-text-center">Sign in</h1>
                    </div>
                </header>
                <div className="uk-margin-top uk-margin-large-top@m">
                    <div className="uk-container">
                        <div className="uk-flex-column uk-flex-center uk-width-medium@m uk-margin-auto">
                            <form className="uk-form-stacked uk-panel uk-width-1-1" action="?" method="post" data-uk-margin="margin: uk-margin">
                                <div className="uk-first-column">
                                    <label for="email-login-page" className="uk-form-label">Your email: <span className="uk-text-danger">*</span></label>
                                    <input id="email-login-page" type="email" name="email" className="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div className="uk-margin uk-first-column">
                                    <label for="password-login-page" className="uk-form-label">Your password: <span className="uk-text-danger">*</span></label>
                                    <input id="password-login-page" type="password" name="password" className="uk-input uk-form-medium uk-radius-large" required/>
                                </div>
                                <div className="uk-grid uk-flex-between uk-flex-middle uk-margin uk-first-column" data-uk-grid="">
                                    <div className="uk-flex uk-flex-middle uk-first-column">
                                        <input id="remember-login-page" type="checkbox" name="remember" className="uk-checkbox" />
                                        <label for="remember-login-page" className="uk-form-label uk-margin-xsmall-left">Remember me?</label>
                                    </div>
                                    <div>
                                        <a href="reset-password.html" className="uk-link-line uk-text-small uk-text-bold">
                                            <span>Forgot password</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="uk-margin-medium uk-margin uk-first-column">
                                    <button type="submit" className="uk-button uk-button-medium@m uk-button-gradient uk-width-expand">Log in</button>
                                </div>
                                <div className="uk-grid uk-grid-xsmall uk-flex-center uk-text-xlarge uk-margin-medium-top@m uk-margin uk-first-column" data-uk-grid="">
                                    <a aria-label="facebook" href="#facebook" className="uk-first-column"><i className="brand-facebook-alt"></i></a>
                                    <a aria-label="google" href="#google"><i className="brand-google"></i></a>
                                    <a aria-label="twitter" href="#twitter"><i className="brand-twitter"></i></a>
                                </div>
                            </form>
                            <p className="uk-text-small uk-text-bold uk-text-center uk-margin-large-top@m">
                                Don't have an account? <a href="sign-up" className="uk-link-line uk-text-primary"><span>Sign up</span></a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
        
  	);
}
