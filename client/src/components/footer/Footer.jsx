import React from "react";
import FooterText from "./FooterText";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-28">
        <FooterText textHead="Company" texts={["Contact"]} />
        <FooterText textHead="Legal" texts={["Terms of Service", "Privacy Policy"]} />
        <FooterText textHead="Resources" texts={["YouTube", "Facebook", "Instagram", "Tiktok"]} />
      </div>
      <FooterCopyright />
    </div>
  );
};

export default Footer;
