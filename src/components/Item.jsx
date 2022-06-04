
export default function Item(props) {
    
return (
   <div className="item">
       <a href={props.url}>{props.title}</a>
       <div onClick={() =>{ props.editLink(props.id, props.url, props.title )}}>E</div>
      <div onClick={() => { props.deleteLink(props.id)}}>X</div>
   </div>

)
}



