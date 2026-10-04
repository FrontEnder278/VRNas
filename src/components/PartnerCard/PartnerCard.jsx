import './PartnerCard.scss'
import Icon from "@/components/Icon";
import classNames from "classnames";

const PartnerCard = (props) => {

    const {
        className,
        title,
        iconName,
        mode,
    } = props


    return (
        <div className={classNames(className, 'partner-card')}>
            <div className={classNames(className, 'partner-card__inner', {
                [`partner-card__inner--${mode}`]: mode,
            })}>
                <Icon className='partner-card__icon' name={iconName} />
                <p className='partner-card__title'>
                    {title}
                </p>
            </div>
        </div>
    )

}
export default PartnerCard