import Button from "../../components/Button";
import styles from './Buttons.module.scss';

function Buttons() {
    return (
        <div className={styles.wrapper}>
            <Button>Click me!</Button>
            <Button primary>Primary Button</Button>
            <Button href="https://google.com" target="_blank">
                Go to Google
            </Button>

            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>

            <Button bordered>Bordered</Button>
            <Button rounded>Rounded</Button>
            <Button primary rounded>Primary Rounded</Button>

            <Button onClick={() => alert('Clicked!')}>
                Click Alert
            </Button>

            <Button disabled onClick={() => alert('Should not show')}>
                Disabled Button
            </Button>

            <Button loading onClick={() => console.log('Should not log')}>
                Loading Button
            </Button>

            <Button className="my-custom-class" primary>
                Custom Styled
            </Button>

            <Button primary>
                <span>📧</span> Send Email
            </Button>
        </div>
    )
}

export default Buttons;