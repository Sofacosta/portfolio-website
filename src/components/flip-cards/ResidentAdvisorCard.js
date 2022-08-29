import FlipCardBase from './FlipCardBase';

function ResidentAdvisorFrontContent() {
  return (
    <div>
      <img
        className="object-cover"
        src="/assets/images/Resident-Advisor.png"
        alt="Resident advisor"
      />
    </div>
  );
}
function ResidentAdvisorBackContent() {
  return (
    <div>
      <p>
      {' '}
        <a href="https://ra.co/exchange/556" target="_blank" rel="noreferrer"> The Critics Roundtable </a> gives writers and artists a chance to go in-depth
        on their highlights in electronic music from the year thus far. This
        month, Martha Pazienti-Caidan talks with artist and producer Vivian
        Oparah and Nyshka Chandran, a Resident Advisor staff writer. Each
        contributor shares a standout album released in March and April, such as
        VRBA's Willow Scythe and Smerz's debut for XL Recordings, and an artist
        who's exciting them at the moment, including acts like Coast2c, Voldy
        Moyo and Ceebeaats. The guests also share an initiative from the broader
        electronic music landscape that's impressed them recently, such as Ho
        Chi Minh City club The Observatory's new journalism platform, Ifeoluwa's
        growing archive of dance music history (you can contribute at
        dancemusicarchives@gmail.com), and the Don't Call It A Comeback
        campaign.{' '}
      </p>
    </div>
  );
}

export function ResidentAdvisorCardFront() {
  return <FlipCardBase content={<ResidentAdvisorFrontContent />} isFront={true} />;
}
export function ResidentAdvisorCardBack() {
  return <FlipCardBase content={<ResidentAdvisorBackContent />} isFront={false} />;
}
