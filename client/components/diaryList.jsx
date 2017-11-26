const DiaryList = ({list}) => (
  <div>{list.map((item)=> {
    return (<DiaryEntry item={item} />)
    })}
  </div>
)
