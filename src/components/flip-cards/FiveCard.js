import FlipCardBase from "./FlipCardBase"

function FiveFrontContent() {
  return (
    <img className="object-cover h-full" src="/assets/images/martes-sounds.png" alt="Martes Sounds" />
  );
}
function FiveBackContent() {
  return (
    <div>
      <h3>Coast2c rompiendola en Latvia</h3>
      <img src="http://placekitten.com/300/200" alt="kitties" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita repudiandae doloribus ea dolor eaque soluta sint aliquam facere quam exercitationem quia, modi minima iusto cum consectetur error aspernatur laboriosam sequi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veniam! Cum ut perferendis optio itaque consequuntur ipsa blanditiis, error voluptatem quidem architecto, quo quas illo! At doloribus recusandae consequuntur ratione.</p>
      <a href="https://kontaktor.lv">Kontaktor</a>
    </div>
  );
}

export function FiveCardFront() { return <FlipCardBase content={<FiveFrontContent />} /> };
export function FiveCardBack() { return <FlipCardBase content={<FiveBackContent />} /> };