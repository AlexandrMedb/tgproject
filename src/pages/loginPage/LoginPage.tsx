import React from "react";

import { Link, useNavigate } from "react-router-dom";
// import { signIn } from "../../services/firebase";

import styles from "./index.module.scss";

import { InputFiled } from "../../components/inputField";
import { ImpButton } from "../../components/impButton";
import {useHttp} from "../../hooks/http.hook";
import {connect} from "react-redux";
import {RootState} from "store/store";
import {login} from "features/userSlice";


function mapStateToProps(state:RootState) {
  const {user} = state
  return {user}
}


export const LoginPage =  connect(mapStateToProps,{setUser: login})(({setUser, user}: any) => {

  const {loading, request, error, clearError} =useHttp()
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await request('/api/auth/login', 'POST', {password :e.target.password.value, email: e.target.email.value});
    if(data){
      setUser(data);
      navigate('/map')
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="./Owlbear_logo.png" alt="" />
        <h1>OwlBear</h1>
      </div>
      <main className={styles.signup}>
        <h2>Welcome Back</h2>
        <section>
          <div className={styles.left}>
            <form onSubmit={handleSubmit}>
              <InputFiled name="email" type="email" title="email" />
              <InputFiled name="password" type="password" title="password" />
              <ImpButton text="Вернуться к приключению" />
              <div className={styles.linkBlock}>
                <p>
                  <span>Need an account? </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
                <p>
                  <span>Cant sign in? </span>
                  <Link to="/home">Forgot Password</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
})


