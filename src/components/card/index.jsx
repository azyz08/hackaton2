import { useTranslation } from "react-i18next";
import "./style.scss"
import { Link } from "react-router-dom";
export default function CardData({ src, title, yb, foiz, desc, more }) {
    const { t } = useTranslation();
    return (
        <>
            <div className="wrapper">
                <div className="card">
                    <div className="poster">
                        <img src={src} alt="" />
                    </div>
                    <div className="details">
                        <h1>{title}</h1>
                        <h2>Filiallar {yb}</h2>
                        <div className="rating flex items-center">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <span>{foiz}</span>
                        </div>
                        <p className="desc">
                            {desc}
                        </p>
                        <Link className="readMore" to={"/"}>{t('more')}</Link>
                    </div>
                </div>
            </div >
        </>
    )
}