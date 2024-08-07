import React, { useState } from "react";
import StyledModal from "../StyledModal/StyledModal";
import Persona from "persona";
import PropTypes from "prop-types";

const PersonaModal = (props) => {
  const { open, onClose = () => {} } = props;

  const [loading, setLoading] = useState(true);

  const onVerify = async (val) => {
    const { inquiryId, status, fields } = val;
    const payload = {
      persona_information: {
        inquiry_id: inquiryId,
        status,
        fields,
      },
    };
  };
  const onLoad = () => {
    setLoading(true);
  };
  const onReady = () => {
    setLoading(false);
  };
  return (
    <StyledModal width={1200} open={open} onClose={onClose}>
      <div className="w-full h-[90svh]">
        {loading && <div className="absolute inset-0 z-50 center">Loading</div>}
        <Persona.Inquiry
          templateId="itmpl_U5EiAniKUzvefeUdFU7upMFv"
          environment="sandbox"
          onLoad={onLoad}
          onReady={onReady}
          onComplete={(val) => {
            onVerify(val);
          }}
        />
      </div>
    </StyledModal>
  );
};

PersonaModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default React.memo(PersonaModal);
