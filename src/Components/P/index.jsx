const P = (props) => {
    return ( 
     <p className={props.className}>
          <span className={props.spanClass}>{props.span}</span>
           {props.valor}
     </p>
    )
}

export default P