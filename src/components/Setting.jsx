import { useEffect, useState } from "react";
import { checkApiKey } from "../utils/checkKeys";

import PropTypes from "prop-types";

const Setting = () => {
  return <div></div>;
};

export default Setting;

Setting.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
