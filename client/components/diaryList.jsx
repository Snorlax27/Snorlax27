const DiaryList = ({list}) => (
  <div>{list.map((item)=> {
    return <li>
        <DiaryEntry item={item} />
      </li>})}>
  </div>
)