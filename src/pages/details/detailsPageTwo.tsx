import {Box, Button, Input} from "@chakra-ui/react";
import FormikInputField from "components/formik/inputField";
import MainLayout from "components/mainLayout";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { todoValidationScheme } from "validation/todo_validation_scheme";

const initTodoValues = {
    test:"test"
}

const DetailsPageTwo = () =>{
    const {t} = useTranslation()
    return <MainLayout pageTitle={t("pageTitles.newTodoPage")}>
        <Formik 
        initialValues={initTodoValues} 
        validationSchema={todoValidationScheme}
        onSubmit={(values,formikParams)=>{
            console.log(values);
            console.log(formikParams);
            
        }}>
            <Form>
                <FormikInputField name='test'/>
                <Button type='submit'>Submit</Button>
            </Form>
        </Formik>
    </MainLayout>;
}

export default DetailsPageTwo;