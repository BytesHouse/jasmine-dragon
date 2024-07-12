import { Facebook, X, Instagram, Telegram, Vk } from "../icons/Socials";

const SocialButtons = ({ children }) => {
  return (
    <div className="flex flex-col gap-[15px]">
      {children && <p className="text-[18px] font-[600]">{children}</p>}
      <div className="flex gap-[25px]">
        <a href="https://facebook.com">
          <Facebook />
        </a>
        <a href="https://x.com">
          <X />
        </a>
        <a href="https://instagram.com">
          <Instagram />
        </a>
        <a href="https://t.me">
          <Telegram />
        </a>
        <a href="https://vk.com">
          <Vk />
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
