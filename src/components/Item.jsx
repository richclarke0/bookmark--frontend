
export default function Item(props) {




return (
   <div className="item">
       <a href={props.url}>{props.title}</a>
       <button className="btn" onClick={() =>{ props.editLink(props.id, props.url, props.title )}}>E</button>
      <button className="btn" onClick={() => { props.deleteLink(props.id)}}>X</button>
   </div>

)
}



