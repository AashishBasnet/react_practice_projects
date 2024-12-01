export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
  const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
