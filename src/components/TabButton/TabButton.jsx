import PropTypes from "prop-types";

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>      
    </li>
  );
}

TabButton.propTypes = {
  isSelected: PropTypes.bool,
  children: PropTypes.node,
};