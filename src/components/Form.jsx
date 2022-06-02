import { useState } from "react";

const Form = ({createLink}) => {

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
    createLink(form);
    setForm({
      title: "",
      url: "",
    })
  }


  return (
    <div>


    </div>
  )
}
export default Form