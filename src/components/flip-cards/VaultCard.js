import FlipCardBase from './FlipCardBase';

function VaultFrontContent() {
  return (
    <div>
      <img
        className="object-cover"
        src="/assets/images/Vault_cover.png"
        alt="Vault EP"
      />
    </div>
  );
}
function VaultBackContent() {
  return (
    <div>
      <p>You can purchase and listen to Vault by {' '}
        <a href="https://coast2c.bandcamp.com/album/vault"target="_blank" rel="noreferrer"> clicking here. </a> 
        Vault starts with an hypnotic acid drone piece with “Bones”, a one-take
        live recording of several different synths, followed by “Time is Not
        Linear”, an exploration of loops created by the evocative sound of
        modular synthesizers. “Cornelius” plays with textures, samples and
        noise. The EP ends with the title track “Vault”, which layers live acid
        sounds on top of drum machines. Produced by Sofia Acosta Mixing and
        Mastering by Mateo González Bufi. Released on Gestef Records, January 2021
      </p>
      <p> Vault has received great feedback from outlets such as: 
        <a href="https://ra.co/exchange/556" target="_blank" rel="noreferrer"> Resident advisor </a>, 
        <a href="https://filtermexico.com/2021/01/27/coast2c-explora-el-minimalismo-del-drone-y-el-techno-en-vault/" target="_blank" rel="noreferrer"> Filter Mexico </a>,  
        <a href="https://www.youtube.com/watch?v=REBfhwf9UHk" target="_blank" rel="noreferrer"> Hate Lab </a>, amongst others.
      </p>
    </div>
  );
}

export function VaultCardFront() {
  return <FlipCardBase content={<VaultFrontContent />} isFront={true} />;
}
export function VaultCardBack() {
  return <FlipCardBase content={<VaultBackContent />} isFront={false} />;
}
