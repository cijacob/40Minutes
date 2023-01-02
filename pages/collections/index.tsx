const IndexCollection = ({collections}) => {
    console.log(collections)
    return (
        <>
            <h1>collection</h1>
            <ul>
            {collections.map(collection =>{
                return (
                    <li key={collection.id}>
                   <p>{collection.id}</p> 
                   <p>{collection.name}</p> 
                   </ li>
                )
            } )
            
            }
            </ul>
        </>
        
        
    )
}
export async function getServerSideProps(context) {
    const response = await fetch("http://localhost:3000/api/collections")
    const body = await response.json()
    console.log(body)
    return {
      props: {
        collections : body
      }, // will be passed to the page component as props
    }
  }
export default IndexCollection