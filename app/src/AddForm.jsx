import {useFormik, Field, Form, Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import './main.css'


export default function AddForm ({setTasks, tasks}){

	const validation = Yup.object({
        text: Yup.string().min(5, "Must be longer than 5 chars").required("Required")
    });

	const handleSubmit = values =>{
		const newTask = {
			id: Date.now(),
			value: values.text,
			isChecked: false
		}

		setTasks([...tasks, newTask])
	}

	return <Formik 
		initialValues={{text: ''}}
		onSubmit={handleSubmit} 
		validationSchema={validation} 
		render={
		errors => 
	<Form className="form js--form">
		{/* {errors.text ? <div>{errors.text}</div> : null}  */}
        <Field type="text" name="text"  className="form__input js--form__input" />
		<ErrorMessage name='text' component="div" />
        <button type="submit" className="form__btn">Додати</button>
    	</Form>}>
	</Formik>
}