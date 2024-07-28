import "./style.scss"
import Qidiruv from "../../components/qidiruv";
import CardData from "../../components/card";
import { useTranslation } from "react-i18next";

export default function Univarsitet() {
    const { t } = useTranslation();
    return (
        <div className="opwiyBox">
            <div className="search">
                <h1>{t('universities')}</h1>
                <Qidiruv />
            </div>
            <div className="cards duration-200 bg-[#e8e8e8] dark:bg-[#6c6c6c26]">
                <CardData src={"https://avatars.mds.yandex.net/get-altay/5235091/2a00000181f1d1a3650a71908d9893138e24/L_height"} title={"CoddyCamp o'quv markazi"} yb={"bor"} foiz={"4.2/5"} desc={"WEb development, Mobile Application Development, Figma"} />
                <CardData src={"https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"} title={"Mars o'quv markazi"} yb={"bor"} foiz={"4.2/5"} desc={"Mobile Application Development, WEb development, Figma"} />
                <CardData src={"https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2079"} title={"MaveRick o'quv markazi"} yb={"yo'q"} foiz={"4.2/5"} desc={"Ingziz tili, Ona tili, Matematika"} />
                <CardData src={"https://media.licdn.com/dms/image/C4E03AQEEZUPHzQoE0A/profile-displayphoto-shrink_400_400/0/1623677348445?e=2147483647&v=beta&t=4yBsLbVOvjpli7F64hdqdgYCNg6KkkCwqV8WIHW-YZA"} title={"MaveRick o'quv markazi"} yb={"yo'q"} foiz={"4.2/5"} desc={"Ingliz tili, Ona tili, Matematika"} />
                <CardData src={"https://media.istockphoto.com/id/1171169127/photo/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=yqAKmCqnpP_T8M8I5VTKxecri1xutkXH7zfybnwVWPQ="} title={"Gallaktika o'quv markazi"} yb={"Bor"} foiz={"4.2/5"} desc={"Ingliz tili, Ona tili, Matematika, Kimyo, IT, Robotatexnika"} />
                <CardData src={"https://avatars.mds.yandex.net/get-altay/5235091/2a00000181f1d1a3650a71908d9893138e24/L_height"} title={"CoddyCamp o'quv markazi"} yb={"bor"} foiz={"4.2/5"} desc={"WEb development, Mobile Application Development, Figma"} />
                <CardData src={"https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"} title={"Mars o'quv markazi"} yb={"bor"} foiz={"4.2/5"} desc={"Mobile Application Development, WEb development, Figma"} />
                <CardData src={"https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2079"} title={"MaveRick o'quv markazi"} yb={"yo'q"} foiz={"4.2/5"} desc={"Ingziz tili, Ona tili, Matematika"} />
            </div>
        </div>
    )
}