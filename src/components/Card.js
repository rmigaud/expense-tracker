const Card = (props) => {
  const styleProp = "Card " + props.className;
  return <div className={styleProp}>{props.children}</div>;
};
export default Card;
