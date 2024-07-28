import "./style.scss"
import Qidiruv from "../../components/qidiruv";
import CardData from "../../components/card";

export default function OquvMarkaz() {
    return (
        <div className="opwiyBox">
            <div className="search">
                <h1>O'quv Markazlar</h1>
                <Qidiruv />
            </div>
            <div className="cards duration-200 bg-[#e8e8e8] dark:bg-[#6c6c6c26]">
                <CardData src={"https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/03/space_training_to_prepare_the_future_workforce/19324097-1-eng-GB/Space_training_to_prepare_the_future_workforce_pillars.jpg    "} title={"CoddyCamp o'quv markazi"} yb={"bor"} foiz={"4.2/5"} desc={"WEb development, Mobile Application Development, Figma"} />
                <CardData src={"https://media.licdn.com/dms/image/C4D22AQFMSdrQHAYeuQ/feedshare-shrink_800/0/1676467039012?e=2147483647&v=beta&t=LVK1h8sDzc5F7Xb0fz7UqalY3xIGdEW7BEsQw61AZDU"} title={"Mars o'quv markazi"} yb={"bor"} foiz={"4.2/5"} desc={"Mobile Application Development, WEb development, Figma"} />
                <CardData src={"https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2023/02/932/524/WTVT-Still-2023-02-17-06h38m37s247.jpg?ve=1&tl=1"} title={"MaveRick o'quv markazi"} yb={"yo'q"} foiz={"4.2/5"} desc={"Ingziz tili, Ona tili, Matematika"} />
                <CardData src={"https://avatars.mds.yandex.net/get-altay/6514890/2a0000018a836c76ff27d83109313db10087/L_height"} title={"MaveRick o'quv markazi"} yb={"yo'q"} foiz={"4.2/5"} desc={"Ingliz tili, Ona tili, Matematika"} />
                <CardData src={"https://avatars.mds.yandex.net/get-altay/10648814/2a0000018a836c73250aab0fa564a5537b7b/L_height"} title={"Gallaktika o'quv markazi"} yb={"Bor"} foiz={"4.2/5"} desc={"Ingliz tili, Ona tili, Matematika, Kimyo, IT, Robotatexnika"} />
                <CardData src={"https://avatars.mds.yandex.net/get-altay/9686455/2a0000018a836e4e5c7d7815771d827aef11/L_height"} title={"CoddyCamp o'quv markazi"} yb={"bor"} foiz={"4.2/5"} desc={"WEb development, Mobile Application Development, Figma"} />
                <CardData src={"https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"} title={"Mars o'quv markazi"} yb={"bor"} foiz={"4.2/5"} desc={"Mobile Application Development, WEb development, Figma"} />
                <CardData src={"https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2079"} title={"MaveRick o'quv markazi"} yb={"yo'q"} foiz={"4.2/5"} desc={"Ingziz tili, Ona tili, Matematika"} />
            </div>
        </div>
    )
}