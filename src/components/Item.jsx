
export default function Item(props) {
    
return (
   <div className="item">
       <a href={props.url}>{props.title}</a>
       <div onClick={() =>{editLink(props.id, props.url, props.title )}}>E</div>
      <div onClick={() => { deleteLink(props.id)}}>X</div>
   </div>

)
}



