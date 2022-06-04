import Item from "./Item"

export default function List(props) {
  //takes formstate, passes it down 
  //takes items array to create items
  // {
  //     title: "",
  //         url: ""
  // }
  //map over the array
  return <div className="list">
    {props.links.map((entry) => (
      <Item
        formState={props.formState}
        setFormState={props.setFormState}
        deleteLink={props.deleteLink}
        editLink={props.editLink}
        url={entry.url}
        title={entry.title}
      />
    ))}
  </div>



}