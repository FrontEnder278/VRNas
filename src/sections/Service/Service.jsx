import './Service.scss'
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";


const Service = () => {

    return (
        <Section
            className='service'
            subtitle='our service'
            title="Service"
            description='We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.'
            titleId='service-title'
            TitleLevel='h2'
            isContainer
        >
            <ServiceCard/>

        </Section>
    )
}
export default Service;