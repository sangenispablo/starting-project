import PropTypes from "prop-types";

export default function Tabs({ children, buttons, buttonsContainer="menu" }) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

Tabs.propTypes = {
  children: PropTypes.node,
  buttons: PropTypes.node,
  buttonsContainer: PropTypes.elementType,
};
