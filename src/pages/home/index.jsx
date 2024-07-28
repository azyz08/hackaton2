import { useTranslation } from "react-i18next";
import Carousel from "../../components/carousel";
import ScrollSlider from "../../components/slider";
import "./style.scss"

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <ScrollSlider />
            <div className="opwiyBox">
                <div className="showCase">
                    <div className="text">
                        <h1>{t("prob")}</h1>
                        <p>{t("desc1")}</p>
                        <p>{t("desc2")}</p>
                        <p>{t("desc3")}</p>
                        <p>{t("desc4")}</p>
                    </div>
                    <div className="caros flex flex-col items-start gap-3">
                        <h1 className="text-[30px]">{t("yutuq")}</h1>
                        <Carousel />
                    </div>
                </div>

            </div>
        </>
    )
}