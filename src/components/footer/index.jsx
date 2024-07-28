import { useTranslation } from "react-i18next";
import "./style.scss"
import { Link } from "react-router-dom";
export default function Footer() {

    const { t } = useTranslation();
    return (
        <>
            <div className="Fotter">
                <div className="bir">
                    <img src="./logo.png" alt="" />
                </div>
                <ul>
                    <p><Link to={"/"}>{t('home')}</Link></p>
                    <p><Link to={"universitet"}>{t('universities')}</Link></p>
                    <p><Link to={"oquv-markaz"}>{t('studyCenters')}</Link></p>
                </ul>
                <div className="ikki">
                    <a href=""><i class="fa-brands fa-github"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div>
        </>
    )
}