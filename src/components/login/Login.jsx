import React, { useLayoutEffect, useState } from "react";
import login from "../../assets/images/Login-img.png";
import LoginAr from "./LoginAr";
import LoginEn from "./LoginEn";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const Login = () => {
    const [lang, setLang] = useState(true);
    const [loading, setLoading] = useState(false);

    //This Fun swap between AR , EN
    const changLang = () => {
        setLang(!lang);
    };

    //Loader fire after page render and when state changed in the Lang
    useLayoutEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [lang]);

    return (
        <>
            {loading ? (
                <div
                    className="sweet-loading d-flex align-items-center justify-content-center"
                    open
                >
                    <ClimbingBoxLoader color={"#181b67"} loading={loading} size={15} />
                </div>
            ) : lang ? (
                <LoginEn login={login} changLang={changLang} lang={lang} />
            ) : (
                <LoginAr login={login} changLang={changLang} lang={lang} />
            )}
        </>
    );
};
export default Login;
