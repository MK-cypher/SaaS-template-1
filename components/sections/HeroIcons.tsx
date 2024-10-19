import Youtube from "../icons/Youtube";
import Tiktok from "../icons/Tiktok";
import Instagram from "../icons/Instagram";

export default function HeroIcons() {
  return (
    <>
      <div className="absolute top-0 -left-10 social-icon">
        <div className=" -rotate-45">
          <Youtube width={60} height={60} />
        </div>
      </div>
      <div className="absolute -top-14 right-5 social-icon">
        <div className=" rotate-[35deg]">
          <Tiktok width={60} height={60} />
        </div>
      </div>
      <div className="absolute -bottom-20 left-44 social-icon">
        <div className=" rotate-[25deg]">
          <Instagram width={60} height={60} />
        </div>
      </div>
    </>
  );
}
