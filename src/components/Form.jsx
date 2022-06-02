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
    <div className="form-group">
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="title"
          value={form.title}
          placeholder="title"
          onChange={handleChange}
          required 
        />
        <input 
          type="text"
          name="url"
          value={form.url}
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