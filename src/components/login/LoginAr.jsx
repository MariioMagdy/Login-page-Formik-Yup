import React, { useState } from "react";
import { useFormik } from "formik";
import Input from "../input/Input";
import * as Yup from "yup";

function LoginAr({ login, changLang, lang }) {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            checkbox: false,
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
            alert(JSON.stringify(values));
        },
        validationSchema: Yup.object({
            email: Yup.string().required("الحساب مطلوب").email("الحساب غير صحيح"),
            password: Yup.string()
                .required("كلمه المرور مطلوبه")
                .min(5, "كلمه المرور يجب ان تكون أكثر من خمسة ارقام")
                .max(10, "كلمه المرور يجب ان تكون أقل من خمسة ارقام"),
        }),
    });

    return (
        <>
            <section className="login" id="content" dir="rtl">
                <div className="login-details">
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/1000/svg"
                        fill="#fff"
                        className="svg-left"
                    >
                        <circle cx="-20" cy="-35" r="50" />
                    </svg>
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/1000/svg"
                        fill="#fff"
                        className="svg-right"
                    >
                        <circle cx="100" cy="1" r="30" />
                    </svg>
                    <div className="login-header">
                        <h2>تسجيل الدخول</h2>
                        <span>
                            Adobe XD <span>مصمم باستخدام</span>
                        </span>
                    </div>
                    <div className="login-body">
                        <div className="row justify-content-center">
                            <div className="login-leftSide col-lg-6 col-sm-12">
                                <h3 className="text-end">شعار</h3>
                                <picture>
                                    <img className="img-fluid" src={login} alt="" />
                                </picture>
                            </div>
                            <div className="login-rightSide d-flex flex-column justify-content-center text-start col-lg-6 col-sm-12">
                                <div className="p-4 watch-responsive">
                                    <div>
                                        <div className="d-flex justify-content-between watch-responsive">
                                            <h4 className="d-flex align-items-end">
                                                مرحبًا بعودتك!
                                            </h4>
                                            <span
                                                className="fw-bold lang"
                                                onClick={changLang}
                                            >
                                                {lang ? "AR" : "EN"}
                                            </span>
                                        </div>
                                        <h6 className="text-end">سجل الدخول للمتابعة</h6>
                                    </div>
                                    <form onSubmit={formik.handleSubmit} method="POST">
                                        <div className="login-inputs d-flex flex-column gap-2 mb-3 ">
                                            <div className="input-field d-flex justify-content-center align-items-center">
                                                <span className="icon-user"></span>
                                                <Input
                                                    placeholder="اكتب البريد الإلكتروني الخاص بك"
                                                    name="email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>
                                            <span className="errorMsg">
                                                {formik.errors.email &&
                                                    formik.touched.email &&
                                                    formik.errors.email}
                                            </span>
                                            <div className="pass-field d-flex justify-content-center align-items-center">
                                                <span className="icon-lock"></span>
                                                <Input
                                                    placeholder="كلمه المرور"
                                                    name="password"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                />
                                            </div>
                                            <span className="errorMsg">
                                                {formik.errors.password &&
                                                    formik.touched.password &&
                                                    formik.errors.password}
                                            </span>
                                        </div>
                                        <div className="d-flex text-center justify-content-between pb-4 watch-responsive">
                                            <div className="d-flex align-items-center gap-1">
                                                <div>
                                                    <Input
                                                        type="checkbox"
                                                        id="check-box"
                                                        name="checkbox"
                                                        value={formik.values.checkbox}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </div>
                                                <label
                                                    htmlFor="check-box"
                                                    className="login-linkColor"
                                                >
                                                    تذكرني
                                                </label>
                                            </div>
                                            <div className="login-linkColor">
                                                <a href="#">هل نسيت كلمة السر؟</a>
                                            </div>
                                        </div>
                                        <div className="text-center py-2">
                                            <button
                                                type="submit"
                                                className="btn text-center"
                                                disabled={!formik.isValid}
                                            >
                                                تسجيل الدخول
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="login-newUser text-center">
                                    <a href="#">أنشاء حساب جديد</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer d-flex justify-content-around pb-3">
                        <span>Copyright Reserved&copy;2021</span>
                        <span>Terms and Conditions | Privacy Policy</span>
                    </div>
                </div>
                <div className="circle">
                    <div></div>
                </div>
            </section>
        </>
    );
}

export default LoginAr;
