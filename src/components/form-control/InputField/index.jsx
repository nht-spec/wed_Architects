import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label,disabled }=props;
    const{errors}=form;
    const hasError= errors[name];
    return (
       <Controller
       name={name}
       control={form.control}
       as={TextField}
       variant="outlined"
       margin='normal'
       fullWidth
       error={!!hasError}
       helperText={errors[name]?.message}
       label={label}
       disabled={disabled}
       />
    );
}

export default InputField;