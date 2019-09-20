import React from "react";
import PropTypes from "prop-types";

import CreateModal from "../CreateModal";
import LoginForm from "../LoginForm";

const UserLogin = ({ dispatchLogin, session }) => {
  if (session.ok) {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    );
  }

  return (
    <div className="login">
      <h2>Awesome App</h2>
      <CreateModal
        close={session.ok}
        render={({ closePortal }) => {
          return (
            <>
              {!session.ok && session.error && (
                <div className="error">{session.error}</div>
              )}
              <LoginForm
                isWaiting={!session.ok && !session.error}
                onSubmit={(values, { setSubmitting }) => {
                  dispatchLogin(values);
                }}
              />
            </>
          );
        }}
      />
    </div>
  );
};

UserLogin.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
  session: PropTypes.shape({
    ok: PropTypes.bool.isRequired
  }).isRequired
};

export default UserLogin;
