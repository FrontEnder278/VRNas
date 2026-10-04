import './Partners.scss'
import Section from "@/components/Section";
import Rings from "@/components/Rings";
import {Image} from "minista";
import menuItems from "@/sections/Partners/partnerscard";
import PartnerCard from "@/components/PartnerCard";

const Partners = () => {

   return (
        <Section
            titleId="partners-title"
            title="Discover the Companies We Work With"
            subtitle='Our Trusted Partners'
            className='partners'
            isContainer
        >
            <div className="partners__wrapper">
                <Rings className='partners__rings' mode='alt' />
                <div className="partners__image">
                    <Image src='/src/assets/images/partners.png'/>
                </div>
                {menuItems.map((menuItem, index) => (
                    <PartnerCard
                        className="partners__item"
                        key={index}
                        {...menuItem}
                    />
                ))}
            </div>
        </Section>
   )
}
export default Partners
