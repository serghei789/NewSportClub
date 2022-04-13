export default function FormatedDate({time}) {
  return(
    <p className='rightSideBar__top--date'>{time.slice(0, 10)}</p>
  )
}
