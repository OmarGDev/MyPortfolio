import OmarPerfil2 from "../../assets/Logos/Perfil2.png";
import ProfileCard from "../reactbits/ProfileCard/ProfileCard";

export default function Perfil() {
  return (
    <ProfileCard
      name="Omar G. Panebra"
      title="Backend Developer"
      handle="omargup"
      status="Online"
      contactText="Contactame"
      avatarUrl={OmarPerfil2}
      showUserInfo={false}
      enableTilt={true}
      enableMobileTilt
      onContactClick={() => console.log("Contact clicked")}
      iconUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"
      behindGlowColor="rgba(19, 21, 22, 0.67)"
      behindGlowEnabled
      innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
    />
  );
}
