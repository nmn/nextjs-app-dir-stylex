import {globalTokens} from './globalTokens.stylex'
import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
    container: {
        backgroundColor: globalTokens.bgStartRGB
    }
})

export const Card = () => {
    return (
        <div {...stylex.props(styles.container)}>
            <span>Card Component</span>
        </div>
    )
}