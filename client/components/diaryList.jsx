const DiaryList = ({list}) => (
  <div>{list.map((item, key)=> {
    return (
        <DiaryEntry item={item} />
    )})}
  </div>
)

  <div>{list.map((item)=> {
    return <li>
        <DiaryEntry item={item} />
      </li>})}>
  </div>)
