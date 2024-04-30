function ComponenteCompetencia(props) {
  return (
    <div
      style={{
        background: "red",
        color: "white",
        while: "40%",
        margin: "auto",
        padding: "2%",
        border: "2px solid yellow",
      }}
    >
      <div>
        <div>{props.nome}</div>
        <div>{props.descricao}</div>
      </div>
    </div>
  );
}
export { ComponenteCompetencia };
