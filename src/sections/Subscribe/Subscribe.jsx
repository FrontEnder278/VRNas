import './Subscribe.scss'
import Icon from "@/components/Icon";
import Button from "@/components/Button";

const Subscribe = () => {

    return (
        <section className='subscribe container'>
            <div className="subscribe__inner">
                <h2 className="subscribe__title h3">
                    Subscribe to our newsletter for latest updates
                </h2>
                <form className='subscribe__form'>
                <label
                    className='subscribe__label visually-hidden'
                    htmlFor='user-email'
                >
                    Enter your email address
                </label>
                <Icon className='subscribe__icon' name='message' hasFill/>
                        <input
                            className='subscribe__input'
                            type="email"
                            id='user-email'
                            placeholder='Enter your email address'
                            pattern='^.+@.+\..+$'
                        />
                         <Button
                             className='subscribe__button button--subscribe'
                             iconName='send-message'
                             hasFillIcon
                             type='submit'
                         />
                </form>
            </div>
        </section>
    )
}
export default Subscribe