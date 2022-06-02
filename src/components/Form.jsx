import { useState } from "react";

const Form = () => {

  const [form, setForm] = useState({
    title: "",
    url: "",
  });

  const handleChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }


  return (
    <div>


    </div>
  )
}
export default Form