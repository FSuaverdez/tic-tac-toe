import PropTypes from "prop-types";

const Overlay = ({ children }) => {
  return (
    <div
      className="fixed inset-0 bg-gray-900 z-10 bg-opacity-95 overflow-y-auto h-full w-full flex justify-center items-center"
      id="my-modal"
    >
      {children}
    </div>
  );
};

Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Overlay;
