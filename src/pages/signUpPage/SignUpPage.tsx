import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

import { InputFiled } from "../../components/common/inputField";
import { ImpButton } from "../../components/common/impButton/impButton";
import {useHttp} from "../../hooks/http.hook";
import {RootState} from "../../store/store";
import {connect} from "react-redux";
import {login} from "../../features/userSlice";


function mapStateToProps(state:RootState) {
  const {user} = state
  return {user}
}



export const SignUpPage =connect(mapStateToProps,{setUser: login})(({setUser, user}: any) => {
  const {loading, request, error, clearError} =useHttp()
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = await request('/api/auth/register', 'POST',
        {
          password :e.target.password.value,
          email: e.target.email.value,
          username: e.target.username.value
        });
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
        <h2>Virtual Table</h2>
        <section>
          <div className={styles.left}>
            <form onSubmit={handleSubmit}>
              <InputFiled name="username" type="text" title="username" />
              <InputFiled name="email" type="email" title="email" />
              <InputFiled name="password" type="password" title="password" />
              <ImpButton text="Начать приключение" />
              <div className={styles.linkBlock}>
                <p>
                  <span>Already have an account? </span>
                  <Link to="/login">Sign In</Link>
                </p>
                <p>
                  <span>Cant sign in? </span>
                  <Link to="/home">Forgot Password</Link>
                </p>
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <p>Добро пожаловать на MVP страницу виртуального игрового стола</p>
          </div>
        </section>
      </main>
    </div>
  );
});
