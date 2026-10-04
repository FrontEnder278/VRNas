import './Logo.scss'
import classNames from "classnames";

const Logo = (props) => {

    const {
        className,
        loading = 'lazy',
    } = props

    const title = 'Home'

    return (
        <a
            href='/'
            title={title}
            aria-label={title}
            className={classNames(className, 'logo')}
        >
            <img
                className='logo__image'
                src={`${import.meta.env.BASE_URL}Logo.svg`}
                width='101'
                height='30'
                alt=''
                loading={loading}
            />
        </a>
    )
}
export default Logo
