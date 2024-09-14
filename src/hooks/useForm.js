import { useState } from 'react'

const useForm = ( initialForm = {} ) => {

  const [formState, setFormState] = useState( initialForm );

  const onInputChange = ( event ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
    console.log(name, value);
  }

  const onResetForm = () => {
    setFormState( initialForm );
  }

  const handleSubmit = (callback) => {
    return (event) => {
      event.preventDefault()
      callback();
      console.log(formState);
    };
  };

  return { 
    ...formState,
    formState,
    onInputChange,
    handleSubmit,
    onResetForm,
  }
}

export default useForm;