const IndexCollection = ({collection}) => {
    return (
        <>
            <h1>collection</h1>
            <p>{collection.id}</p> 
            <p>{collection.name}</p>
        </>
        
        
    )
}
export async function getServerSideProps(context) {
    const param = context.params.id
    const response = await fetch(`http://localhost:3000/api/collections/${param}`)
    const body = await response.json()
    return {
      props: {
        collection : body
      }, // will be passed to the page component as props
    }
  }
export default IndexCollection