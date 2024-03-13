export const  SampleNextArrow = (props)=> {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", margin:"0px 4rem",   }}
        onClick={onClick}
      />
    );
  }
  
  export const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", margin:"0px 4rem", zIndex: 10,  }}
        onClick={onClick}
      />
    );
  }