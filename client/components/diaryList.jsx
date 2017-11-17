const DiaryList = ({list}) => (
  <div>{list.map((item, key)=> {
    return (
        <DiaryEntry item={item} />
    )})}
  </div>
)