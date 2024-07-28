import { useTranslation } from "react-i18next";
import "./style.scss"
export default function Footer() {

    const { t } = useTranslation();
    return (
        <>
        <div className="Fotter">
            <div className="bir">
                <img src="./logo.png" alt="" />
            </div>
            <ul>
                <p>{t('home')}</p>
            </ul>
            <ul>
                <p>{t('universities')}</p>
            </ul>
            <ul>
                <p>{t('studyCenters')}</p>
            </ul>
            <div className="ikki">
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            </div>
        </div>
        </>
    )
}