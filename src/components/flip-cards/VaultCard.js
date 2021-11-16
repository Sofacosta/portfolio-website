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
      <p>
        Vault starts with an hypnotic acid drone piece with “Bones”, a one-take
        live recording of several different synths, followed by “Time is Not
        Linear”, an exploration of loops created by the evocative sound of
        modular synthesizers. “Cornelius” plays with textures, samples and
        noise. The EP ends with the title track “Vault”, which layers live acid
        sounds on top of drum machines. Produced by Sofia Acosta Mixing and
        Mastering by Mateo González Bufi Additional Mixing by Sofia Acosta
        Released on Gestef Records, January 2021
      </p>
      <a href="https://kontaktor.lv">Kontaktor</a>
    </div>
  );
}

export function VaultCardFront() {
  return <FlipCardBase content={<VaultFrontContent />} />;
}
export function VaultCardBack() {
  return <FlipCardBase content={<VaultBackContent />} />;
}
