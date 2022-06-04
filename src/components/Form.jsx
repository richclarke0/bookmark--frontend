import { useState } from "react";

const Form = ({createLink, formState, setFormState}) => {

  // const [form, setForm] = useState({
  //   title: "",
  //   url: "",
  // });

  const handleChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createLink(formState);
    setFormState({
      title: "",
      url: "",
    })
  }


  return (
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="title"
          value={formState.title}
          placeholder="title"
          onChange={handleChange}
          required 
        />
        <input 
          type="text"
          name="url"
          value={formState.url}
          placeholder="url"
          onChange={handleChange}
          required 
        />
      <button className="btn btn-block">Submit</button>
      </form>
    </div>
  )
}
export default Form