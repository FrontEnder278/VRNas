import './Section.scss';
import classNames from "classnames";

const Section = (props) => {
    const {
        className,
        children,
        titleId,
        title,
        subtitle,
        description,
        actions,
        TitleLevel = 'h2',
        image,
        media,
        isContainer
    } = props;

    const HeadingTitle = TitleLevel;

    return (
        <section
            className={classNames(className, 'section', {
                'container': isContainer,
            })}
            aria-labelledby={titleId}
        >
            <header className="section__header">

                <div className="section__wrapper">
                    {subtitle && (
                        <span className="section__subtitle">
                            {subtitle}
                        </span>
                    )}

                    {title && (
                        <HeadingTitle
                            className="section__title"
                            id={titleId}
                        >
                            {title}
                        </HeadingTitle>
                    )}
                </div>

                    {description && (
                        <div className="section__description">
                            <p>{description}</p>
                        </div>
                    )}

                    {actions && (
                        <div className="section__actions">
                            {actions}
                        </div>
                    )}

                    {media && (
                        <div >
                            {media}
                        </div>
                    )}

            </header>

            {image && (
                <div className="section__image">
                    {image}
                </div>
            )}

            <div className="section__body">
                {children}
            </div>
        </section>
    );
};

export default Section;