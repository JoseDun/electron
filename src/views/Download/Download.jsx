import React from "react";

import AdviceContainer from "../../components/common/AdviceContainer";
import encryptionAsset from "../../assets/images/encryption-amico.jpg";

import FileDown from "../../components/fileDown/FileDown";

export default function Download() {
  return (
    <section className="app-max-width m-auto h-100 d-flex flex-column justify-content-center">
      <AdviceContainer>
        <figure>
          <img
            src={encryptionAsset}
            alt="Un teléfono con icónos de enriptación"
          />
        </figure>
      </AdviceContainer>

      {<FileDown />}
    </section>
  );
}
