import { Ideal } from "./Ideal";
import { Offer } from "./Offer";

export function SpanishList() {
    return (
        <section className="spanish-list">
            <div className="spanish-list-offer">
                <Offer/>
            </div>
            <div className="spanish-list-ideal">
                <Ideal/>
            </div>
        </section>
    )
}