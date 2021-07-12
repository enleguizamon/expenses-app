import "./Card.css";

function Card(props) {
  //me aseguro que cualquier valor que recibo como classname de afuera es agregado al string.
  const classes = "card " + props.className;
  //props.children me sirve para crear wrapper components
  //el valor de children props es el contenido que encierra
  //<Card></Card> en el componente que se usa como wrapper.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
