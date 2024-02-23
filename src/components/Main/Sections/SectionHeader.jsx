

const SectionHeader = ({title}) => {
  return (
    <h2 className="text-3xl uppercase text-center m-3 font-bold text-yellow-400" id={title.toLowerCase()}>
        {title}
    </h2>
  )
}

export default SectionHeader