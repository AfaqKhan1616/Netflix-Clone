import React, { useEffect, useState } from "react";
import "./nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=614&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces&dpr=2"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC6CAMAAABoQ1NAAAAAzFBMVEX///+wHiPmHiX//P2sAACuAAmuExmuHiPDZGeqHiLmFx/lAADFaGu7SUzqSU6vFx3sHyahHCCdHB+SGRyBFRiMGBufHB97FBblABDrWFzlCBTwj5LZHSPtbnHlEhv1tbbkPkPMe324OT3IAAD73+CtCBGmAAbCGyH50tPvf4L3xMXSHCL98fH0qqv85ubym53oMTeoExi5ZGWbEBStYmSobW6NDBCgJCinaWu2GR7oOD3FGyD0rq/rX2LTHCLtdHfxlJbZoaPgtLbw29yVdvBDAAADlElEQVR4nO2aW1faQBSFQ1TCBCuZJBMQUfCCoiKIFyqlrb38///UCVDInGBfupY+7P09enjAb52dyWz1PEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYSQf9A7cDgszk4/OZztfNSXfD/OQ4f6RWFW6zeK7ALo2Iv8Iu2jwqxWrRRB0HHZcXSEfmEGqGPvytHh1webGaIOJdJyvZkh6tBuWvz2ZoaoQ83c9ajfrGeIOiqxq+PkeD3D1HErHqbr3xpSh2qItHT/ziB1BEakZf2iDqmjksxFWoarGaYOLV49WnerGaYOZdztCA9WM0wdQSkto+UMU0clzkRaxssZqA6dirTcL2egOpS5Eq8eyxIIVEcQJ1tLIFAdNi2iBAoXM1QdyszE2bIogWB1JPJFfVECoeoIsvS7ux6tfFabgOrQRl5r8xLoAVSHTUu6pQR6mASgOuJ0SwmEq0Mbea3t5joUpo5Al9JyuNARYOqwaSmXQE+PSkHqqKjMyGvtHbAOm5amux1hz+rQxbRg6UjltXYIrEPFRvz9qT1+nmbFtADpsA+Pclqep3FxPaB02LSIv9aGn00Cq8OmRZRA0TxNYlAdQZ4W8b8NfjOxaYHUsS0tkXbSAqYjNqIE8m1aMlAd9qhNmqIEilITa1QdNi2iBIomeVogdSzSIq61/m0xLVg68rTIEigyJobVoRNZAkWNNNGwOuLpy727Hp3m5uGBpSN/MZ0+H7XfTAucDv34clF312OWouqwaXl88vywlBZMHXY9rA6ZlsRkClNHkOsQaYmu1mnB0zF58rwvblrstRZUR0VNHjxv3HLXIzOroxZOR5DrGImzZW7TAqzDOxBpSRNQHZWFjq8iLcosj1pAHfv2R0ORlts0A9VRzXV4307c9Vg9PFB1dMWrxySB1rEj0vI91cg6vFeRFhMHyDpuRFoai7TA6vDc7fA7KbaOa3mtzaB1DERaZkmArKNUAhkFreOHSEumoXWUSqAYWkepBDLYOu7ktVZB65DX2nkMraNUAiXYOmQJ1AigdZRKIA2to1QCgeuQ19oZtg7PfXj4nUs4Hf1aYfTaCounS4SxHY1qv7+3m9MPzk4Lo0Gvd39Sz2m12idheA6gY7d6tn/689fg92i4/QPD0cVNd3x93Atb7/vNPoQ3JPznRwkhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBAQ/gDRJU9WjPwvaAAAAABJRU5ErkJggg=="
        alt="Netflix"
      />
    </div>
  );
}

export default Nav;
