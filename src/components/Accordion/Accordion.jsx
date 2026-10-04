import './Accordion.scss'


const Accordion = (props) => {

    const {
        title,
        body,
        isOpen,
        ariaDetails,
    } = props

    return (
        <div className="accordion">
        <details className='accordion__details' name='choose' open={isOpen}>
        <summary className="accordion__summary">
        <h3 className="accordion__title h6">
            <span
                role='term'
                aria-details={ariaDetails}>
                {title}
            </span>
        </h3>
        </summary>
        </details>
            <div
                className="accordion__content"
                id={ariaDetails}
                role='definition'>
                <div className="accordion__content-body">
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}
export default Accordion