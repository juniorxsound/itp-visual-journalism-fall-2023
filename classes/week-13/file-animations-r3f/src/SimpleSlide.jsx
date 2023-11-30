function SimpleSlide(props) {
  const { children, viewportPosition } = props;
  return (
    <h2
      style={{
        color: "white",
        position: "absolute",
        minWidth: "45vw",
        paddingLeft: "20px", // To offset slides a tiny bit from the left side of the screen
        top: `${viewportPosition}vh`,
        zIndex: "50",
      }}
    >
      {children}
    </h2>
  );
}

export default SimpleSlide;
