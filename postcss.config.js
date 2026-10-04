import postcssPxToRem from 'postcss-pxtorem'

export default ({ env }) => {
    const isProd = env === 'production'
    const plugins = []

    if (isProd) {
        plugins.push(
            postcssPxToRem({
                propList: ['*'], // говорим что обрабатывать нужно все
                mediaQuery: true // в том числе и медиавыражения
            })
        )
    }
    return {
        plugins,
    }
}