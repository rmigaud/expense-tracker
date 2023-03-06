const Card = (props) => {
  const styleProp = props.className;
  return <div className={styleProp}>{props.children}</div>;
};
export default Card;
