import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import "../../css/style/Form.css";
import FormikControl from "../../components/Formik/FormikControl";
import { Link } from "react-router-dom";
import showPassword from "../../css/images/show-password.png";
import hidePassword from "../../css/images/hide-password.png";
const Login = () => {
  const initialValues = {
    phone: "",
    password: "",
    remember: false,
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("وارد کردن شماره موبایل الزامی است")
      .matches(/^(09\d{9})$/, "شماره موبایل خود را به درستی وارد کنید"),
    password: Yup.string()
      .required("وارد کردن گذرواژه الزامی است")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*]).{8,}$/,
        "فقط از حروف و اعداد استفاده شود"
      ),
    remember: Yup.boolean(),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <div>
            <h1 className="title">&lt;/A&gt; ورود به </h1>
            <Form>
              <div className="form">
                <FormikControl
                  formik={formik}
                  control="input"
                  // type="number"
                  type="text"
                  placeholder="شماره موبایل"
                  label="برای ورود شماره موبایل خود را وارد کنید"
                  name="phone"
                />
                <FormikControl
                  formik={formik}
                  control="input"
                  type="password"
                  placeholder="گذرواژه"
                  label="رمزعبور خود را وارد کنید"
                  name="password"
                />
                <div className="icon_password">
                  <img src={hidePassword} alt="hidePassword" />
                  <img src={showPassword} alt="showPassword" />
                </div>
                <div className="btnform">
                  <button className="btn Add" type="submit">
                    ورود
                  </button>
                </div>
              </div>
            </Form>
            <div>
              <div className="login-info">
                <Link to={"/register"}>ثبت نام کنید</Link>
                <p className="p-info">قبلا ثبت نام نکرده اید؟</p>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
