import classes from './MerchItemForm.module.css';
import Input from './Input'

const MerchItemForm = props => {
    return (
        <form className={classes.form}>

            <Input label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>

        </form>
    );
};

export default MerchItemForm;