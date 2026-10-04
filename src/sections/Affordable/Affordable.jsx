import './Affordable.scss'
import Section from "@/components/Section";
import AffordableServices from "@/components/AffordableServices";

const Affordable = () => {
    return (
        <Section
            title='Affordable Services for Everyone'
            className='affordable'
            titleId='affordable-title'
            subtitle='our pricing'
            description='At VRNas, we believe that everyone should have access to the benefits of VR. That is why we offer a range of pricing options to meet the needs of any budget.'
            isContainer
        >
            <AffordableServices />
        </Section>
    )
}
export default Affordable