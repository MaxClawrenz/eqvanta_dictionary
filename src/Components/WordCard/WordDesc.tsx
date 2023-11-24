const he = require("he");

interface IWordDesc {
  desc?: string;
}

function WordDesc({ desc }: IWordDesc) {
  return <div className="WordDesc">{desc ? he.decode(desc) : ""}</div>;
}

export default WordDesc;
