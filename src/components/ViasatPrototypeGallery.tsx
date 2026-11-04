import plan from "../assets/viasat/ Plan.png";
import subscription from "../assets/viasat/ Subscription.png";
import history from "../assets/viasat/ History.png";
import payment from "../assets/viasat/ Payment.png";
import account from "../assets/viasat/ Account.png";

const screens = [
  { title: "Plan", src: plan },
  { title: "Subscription", src: subscription },
  { title: "History", src: history },
  { title: "Payment", src: payment },
  { title: "Account", src: account },
];

export function ViasatPrototypeGallery() {
  return <>
    <h3>Inside the mobile prototype</h3>
    <p>These prototypes were created using Claude Design. Scroll horizontally to explore the static previews, and scroll inside each phone to see the full image. Buttons and fields are not interactive.</p>
    <div className="viasat-phone-gallery" role="region" aria-label="Prototype phones, scroll horizontally to explore" tabIndex={0}>
      {screens.map(screen => <figure className="viasat-prototype" key={screen.title}>
        <figcaption>{screen.title}</figcaption>
        <div className="viasat-phone-frame">
          <div className="viasat-phone-speaker" aria-hidden="true" />
          <div className="viasat-phone-screen" tabIndex={0} role="region" aria-label={`${screen.title} prototype, scroll to explore`}>
            <img src={screen.src} alt={`Viasat ${screen.title.toLowerCase()} mobile prototype screen`} data-no-enlarge loading="lazy" width={390} />
          </div>
          <div className="viasat-phone-home" aria-hidden="true" />
        </div>
      </figure>)}
    </div>
  </>;
}
