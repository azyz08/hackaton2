import { useTranslation } from "react-i18next";
import "./style.scss"
import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

export default function Footer() {

    const { t } = useTranslation();

    return (
        <>
            <div className="fotter duration-200 dark:bg-[#1d1d1d] bg-[#f1f1f1]">
                <div className="left">
                    <Link to={"/"}><img src="./logo.png" alt="" /></Link>
                    <span>
                        <p className="text-[grey]">{t("sahifa")}</p>
                        <div className="icon">
                            <a href=""><i class="transition-all hover:scale-125 hover:text-[#E1306C] fa-brands fa-instagram"></i></a>
                            <a href=""><i class="transition-all hover:scale-125 hover:text-[#1877F2] fa-brands fa-facebook-f"></i></a>
                            <a href=""><i class="transition-all hover:scale-125 hover:text-[#1DA1F2] fa-brands fa-twitter"></i></a>
                            <a href=""><i class="transition-all hover:scale-125 hover:text-[#FF0000] fa-brands fa-youtube"></i></a>
                            <a href=""><i class="transition-all hover:scale-125 fa-brands fa-github"></i></a>
                        </div>
                    </span>
                </div>

                <ul>
                    <p><Link to={"/"}>{t('home')}</Link></p>
                    <p><Link to={"universitet"}>{t('universities')}</Link></p>
                    <p><Link to={"oquv-markaz"}>{t('studyCenters')}</Link></p>
                </ul>

                <div className="ratingBar">
                    <h1 className="text-center h1">{t("b1")} <br /> {t("b2")}</h1>
                    <h1 className="text-center h2">{t("yoqd")}</h1>
                    <div className="rating">
                        <p className="text-[grey]">{t("rating")}</p>
                        <Rating unratedColor="amber" ratedColor="amber" />
                    </div>
                </div>
            </div>
        </>
    )
}