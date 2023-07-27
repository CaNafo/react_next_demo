import { Box, Input, Text } from "@chakra-ui/react";
import { Field, useField } from "formik";
import { FC } from "react";


interface FormikInputFieldProps{
    name: string,
}

const FormikInputField:FC<FormikInputFieldProps> = (props) =>{
    const {name} = props;
    const [_,fieldParams]=useField(name);
    
    const onFieldChange = (event:any, fieldProps:any)=>{
        fieldProps.form.setFieldValue(name,event.target.value,false);
    }

    return <Field>
        {
            (fieldProps:any)=>{

                let error = fieldParams.error===undefined;
                console.log(fieldParams);
                
                return <Box>
                            <Input minW='20rem' onChange={(event)=>onFieldChange(event,fieldProps)}/>
                            {<Text minH='1.5rem' visibility={!error?'visible':'hidden'} color='red.300'>{fieldParams.error}</Text>}
                        </Box>
            }
        }
    </Field>

}

export default FormikInputField;